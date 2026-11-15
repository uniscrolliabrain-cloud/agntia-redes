-- RDS-C05 · Esquema inicial con aislamiento por tenant.
-- Todas las tablas de negocio llevan tenant_id y RLS forzada.
-- El tenant efectivo se publica por transacción con set_config('app.tenant_id', ..., true).

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_runtime') THEN
    CREATE ROLE app_runtime NOLOGIN;
  END IF;
END
$$;

CREATE TABLE IF NOT EXISTS schema_migrations (
  version integer PRIMARY KEY,
  applied_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS memberships (
  tenant_id text NOT NULL,
  actor_id text NOT NULL,
  actor_kind text NOT NULL CHECK (actor_kind IN ('human', 'agent', 'service')),
  status text NOT NULL CHECK (status IN ('active', 'suspended', 'revoked')),
  capabilities jsonb NOT NULL DEFAULT '[]'::jsonb,
  roles jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (tenant_id, actor_id)
);

CREATE TABLE IF NOT EXISTS account_bindings (
  tenant_id text NOT NULL,
  account_binding_id text NOT NULL,
  brand_ref text NOT NULL,
  provider text NOT NULL,
  remote_account_id text NOT NULL,
  remote_workspace_id text,
  credential_ref text NOT NULL,
  revision integer NOT NULL CHECK (revision > 0),
  state text NOT NULL CHECK (state IN ('connected', 'degraded', 'revoked')),
  last_verified_at timestamptz NOT NULL,
  PRIMARY KEY (tenant_id, account_binding_id),
  UNIQUE (tenant_id, provider, remote_account_id)
);

CREATE TABLE IF NOT EXISTS asset_rights (
  tenant_id text NOT NULL,
  asset_ref text NOT NULL,
  license_ref text NOT NULL,
  licensor text NOT NULL,
  territories text[] NOT NULL CHECK (cardinality(territories) > 0),
  valid_from timestamptz NOT NULL,
  valid_until timestamptz,
  commercial_use boolean NOT NULL,
  derivative_works boolean NOT NULL,
  music_rights boolean,
  model_release_ref text,
  synthetic_media boolean NOT NULL,
  source_ref text NOT NULL,
  PRIMARY KEY (tenant_id, asset_ref)
);

CREATE TABLE IF NOT EXISTS publication_approvals (
  tenant_id text NOT NULL,
  approval_id text NOT NULL,
  account_binding_id text NOT NULL,
  payload_hash text NOT NULL,
  rights_hash text NOT NULL,
  policy_hash text NOT NULL,
  slot_hash text NOT NULL,
  cost_ceiling_cents bigint NOT NULL CHECK (cost_ceiling_cents >= 0),
  expected_revision integer NOT NULL,
  signer_refs jsonb NOT NULL,
  issued_at timestamptz NOT NULL,
  expires_at timestamptz NOT NULL,
  revocation_version integer NOT NULL,
  PRIMARY KEY (tenant_id, approval_id),
  UNIQUE (tenant_id, payload_hash, account_binding_id)
);

CREATE TABLE IF NOT EXISTS publication_intents (
  tenant_id text NOT NULL,
  intent_id text NOT NULL,
  account_binding_id text NOT NULL,
  variant_ref text NOT NULL,
  operation_key text NOT NULL,
  state text NOT NULL,
  revision integer NOT NULL CHECK (revision > 0),
  not_before timestamptz,
  not_after timestamptz,
  local_time text,
  timezone text NOT NULL,
  tzdata_version text NOT NULL,
  approval_id text,
  budget_reservation_ref text,
  lease_fence integer NOT NULL DEFAULT 0,
  attempt_count integer NOT NULL DEFAULT 0,
  provider_post_id text,
  PRIMARY KEY (tenant_id, intent_id),
  UNIQUE (tenant_id, operation_key),
  FOREIGN KEY (tenant_id, approval_id) REFERENCES publication_approvals (tenant_id, approval_id)
);

CREATE TABLE IF NOT EXISTS provider_attempts (
  attempt_id text NOT NULL,
  tenant_id text NOT NULL,
  intent_id text NOT NULL,
  operation_key text NOT NULL,
  request_fingerprint text NOT NULL,
  remote_upload_id text,
  remote_job_id text,
  remote_post_id text,
  status text NOT NULL,
  attempt_started_at timestamptz NOT NULL,
  response_received_at timestamptz,
  error_category text,
  PRIMARY KEY (tenant_id, attempt_id),
  FOREIGN KEY (tenant_id, intent_id) REFERENCES publication_intents (tenant_id, intent_id)
);

CREATE TABLE IF NOT EXISTS idempotency_records (
  tenant_id text NOT NULL,
  idempotency_key text NOT NULL,
  payload_hash text NOT NULL,
  target_ref text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (tenant_id, idempotency_key)
);

CREATE TABLE IF NOT EXISTS outbox_events (
  tenant_id text NOT NULL,
  event_id text NOT NULL,
  event_type text NOT NULL,
  payload jsonb NOT NULL,
  occurred_at timestamptz NOT NULL,
  idempotency_key text NOT NULL,
  correlation_id text,
  attempts integer NOT NULL DEFAULT 0,
  lease_owner text,
  lease_fence integer NOT NULL DEFAULT 0,
  lease_expires_at timestamptz,
  acked_at timestamptz,
  PRIMARY KEY (tenant_id, event_id),
  UNIQUE (tenant_id, idempotency_key)
);

CREATE TABLE IF NOT EXISTS audit_events (
  tenant_id text NOT NULL,
  event_id text NOT NULL,
  actor_id text NOT NULL,
  actor_kind text NOT NULL,
  action text NOT NULL,
  resource_ref text NOT NULL,
  outcome text NOT NULL,
  occurred_at timestamptz NOT NULL,
  payload_hash text NOT NULL,
  prev_hash text NOT NULL,
  event_hash text NOT NULL,
  PRIMARY KEY (tenant_id, event_id)
);

CREATE TABLE IF NOT EXISTS budget_reservations (
  tenant_id text NOT NULL,
  reservation_id text NOT NULL,
  idempotency_key text NOT NULL,
  amount_cents bigint NOT NULL CHECK (amount_cents >= 0),
  settled_cents bigint,
  state text NOT NULL CHECK (state IN ('reserved', 'settled', 'released', 'uncertain')),
  created_at timestamptz NOT NULL,
  PRIMARY KEY (tenant_id, reservation_id),
  UNIQUE (tenant_id, idempotency_key)
);

CREATE TABLE IF NOT EXISTS inbox_events (
  tenant_id text NOT NULL,
  source_event_id text NOT NULL,
  provider text NOT NULL,
  account_binding_id text NOT NULL,
  received_at timestamptz NOT NULL,
  signature_verified boolean NOT NULL,
  payload jsonb NOT NULL,
  PRIMARY KEY (tenant_id, source_event_id)
);

DO $$
DECLARE
  target text;
BEGIN
  FOREACH target IN ARRAY ARRAY[
    'memberships',
    'account_bindings',
    'asset_rights',
    'publication_approvals',
    'publication_intents',
    'provider_attempts',
    'idempotency_records',
    'outbox_events',
    'audit_events',
    'budget_reservations',
    'inbox_events'
  ]
  LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', target);
    EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY', target);
    EXECUTE format(
      'CREATE POLICY %I ON %I USING (tenant_id = current_setting(''app.tenant_id'', true)) WITH CHECK (tenant_id = current_setting(''app.tenant_id'', true))',
      target || '_tenant_isolation',
      target
    );
    EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON %I TO app_runtime', target);
  END LOOP;
END
$$;

GRANT USAGE ON SCHEMA public TO app_runtime;
GRANT SELECT, INSERT ON schema_migrations TO app_runtime;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO app_runtime;

INSERT INTO schema_migrations (version) VALUES (1) ON CONFLICT (version) DO NOTHING;
