# Una empresa SaaS de servicios sociales, no solo un módulo

Aclaración expresa del propietario: los empleados generalistas de agente pueden hacer muchas cosas, pero el cliente puede contratar un servicio especializado que aporta profundidad, capacidad, garantía operativa y una relación profesional mediante agentes en visio. Los nueve repos son empresas SaaS potencialmente independientes. La duplicación funcional es aceptable; no diseñar una taxonomía rígida que les impida prestar un servicio completo.

## Dos modos, un mismo core de control

Integrado: un empleado/humano de AgntiaPro presenta una orden de trabajo, bajo tenant/capacidad y contrato del cliente, y recibe propuesta/entregables/eventos. Standalone: autónomo/pyme externa se registra en el portal del servicio, verifica identidad/empresa y contrata sin necesitar `/agente`. En ambos modos se usan el mismo motor de permisos, FSM, evidencia, presupuesto y adaptadores. No hay un segundo core inseguro para ventas externas ni dependencia obligatoria de SSO del padre.

Identidades distintas: providerOrganization es la empresa que opera el servicio; customerOrganization es el cliente contratante; customerWorkspace agrupa sus proyectos/marcas; ServicePrincipal representa a un especialista/operador; CustomerPrincipal a quien solicita/revisa. Un proveedor que opera varias empresas cliente no mezcla sus datos. Varios humanos y agentes del cliente pueden compartir workspace con roles/mandatos distintos. El vínculo al tenant padre es un external binding explícito y versionado, no una igualdad de IDs o de nombres.

## Ciclo comercial y de servicio

Lead/solicitud → diagnóstico → propuesta de alcance/precio/entregables → aceptación contractual → onboarding y permisos → work orders → ejecución/revisión → aceptación del entregable → reporte/facturación contratada → renovación/cierre/export/borrado aplicable. El núcleo no puede declarar firmado un contrato, cobrado un importe o revisado un contenido porque el avatar lo diga. Se enlazan receipts del sistema competente; si ese adaptador no existe, el estado conserva pending/not_verified.

ServiceAgreement define partes/roles, alcance, canales/cuentas, región, periodo, precio/entitlements, límites de gasto/volumen/minutos, SLA y horario reales, reglas de aprobación, responsables humanos, política de datos/retención/DPA, proveedores autorizados y salida del servicio. WorkOrder fija objetivo, proyecto/marca, briefing/fuentes, assets, presupuesto/fecha, entregables y criterio de aceptación. ChangeRequest revisa alcance/precio/fecha y requiere aceptación correspondiente; no ampliar un retainer silenciosamente.

Hay tres aceptaciones diferentes: contratar y autorizar cargo; aprobar contenido/efecto editorial; aceptar el entregable/SLA. Ninguna implica las otras. Un agente del cliente puede solicitar dentro de mandato, pero no inventar firma humana ni aumentar crédito. Un agente especialista puede preparar y ejecutar lo delegado, no aprobar su propio contenido sensible o efectuar cargo no contratado.

## Solapamiento y coordinación

Redes puede redactar, hacer diseño de piezas, branding operativo, análisis, soporte de comunidad y reportes aunque el padre u otro SaaS hagan lo mismo. Cuando colaboran, el WorkOrder designa sistema de registro y autoridad de escritura por recurso. El servicio puede tener CRM/brand policy/ledger propios para clientes externos; sincroniza selectivamente, con conflictos y revisiones, si el cliente conecta sistemas externos. No sobrescribir por coincidencia de email, marca o NIF.

Dos empleados/servicios pueden proponer alternativas, pero solo un intent aprobado gestiona una entrega concreta bajo scheduleAuthority definido. Si el cliente publica por su cuenta fuera del servicio, detectar cambios cuando sea posible y reconciliar; no prometer exclusión global sobre todas sus herramientas. Ninguna exclusividad funcional se deduce de un nombre de repo.

## Equipo y presentación profesional

Coordinador de cuenta, estratega/editor, diseñador de piezas, analista, community manager y QA son roles de trabajo con capacidades y colas, no personalidades que elevan privilegios. Una persona IA puede cubrir varios roles si la política permite y conserva separación de aprobaciones exigida. El responsable humano, soporte y escalado deben existir de verdad y tener horario; no prometer guardia24×7 o transferencia a una persona inexistente.

El avatar Anam es la puerta conversacional natural. Se identifica como IA, explica el estado real del trabajo y entrega propuestas/agenda/reportes. La sensación humana no debe ocultar que es IA ni sustituir controles contractuales. La diferenciación comercial se mide por calidad de entregable, fuentes, cumplimiento del alcance y recuperación fiable, no por una cara realista o una promesa de cero errores.

## Modelo de datos adicional propuesto

ServiceAgreement, CustomerOrganization, CustomerMembership, ProviderRole, ServicePlan/Entitlement, WorkOrder, DeliverableVersion, AcceptanceReceipt, ChangeRequest, ServiceCase, AdvisorSession, UsageReservation y BillingReference. Todos con scope explícito, revisions, auditoría y retención. Las integraciones a pagos/firma/facturación/CRM son puertos nominados con permisos; la especificación no autoriza activarlos o comprar servicios en esta entrega.
