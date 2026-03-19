# WEB DRIMIAN — Documento Maestro
## Especificación completa para diseño y desarrollo

*Versión 1.0 — 19 marzo 2026*

---

## CONCEPTO CENTRAL

La web de Drimian NO es un folleto. Es una experiencia que hace que el dueño de empresa se mida a sí mismo, descubra lo que no está viendo, y entienda por qué sus problemas se repiten.

**El flujo:**
1. Entra → ve una invitación a medirse, no un pitch
2. Responde 10 preguntas sobre cómo hace las cosas (mecanismos)
3. Ve cómo eso impacta en su prosperidad (7 indicadores)
4. Descubre las 2-3 palancas de mayor impacto para su empresa
5. Decide hablar por WhatsApp

**El principio:** Las mejores consultoras del mundo no venden en su web — publican pensamiento y crean herramientas que demuestran que ven lo que otros no ven. Drimian tiene la Guía Drimian, un activo intelectual que ninguna consultora en Bolivia ni en la región tiene. La web es la vitrina de ese pensamiento.

---

## ARQUITECTURA DE LA WEB

### Homepage (single page, scroll)

```
1. HERO — Invitación al diagnóstico
2. DIAGNÓSTICO — 10 preguntas interactivas
3. RESULTADO — Perfil + radar + palancas
4. QUÉ ES DRIMIAN — 4 líneas
5. MODELO — Piel en el juego
6. PRINCIPIOS — 1 idea rotativa de la Guía
7. CTA FINAL — WhatsApp
```

### Páginas secundarias (futuro)
- `/principios` — 10-15 artículos cortos de la Guía Drimian
- `/resultados` — Casos anonimizados con métricas (cuando haya)

### Lo que NO tiene
- Blog (salvo compromiso de 1 post/mes)
- Página de servicios con lista y precios
- Testimoniales
- Slider/carrusel
- Stock photos
- Logos de clientes
- Formulario de contacto como primera interacción

---

## SECCIÓN 1: HERO

### Pantalla completa. Fondo oscuro. Una frase.

**Titular:**
> ¿Estás construyendo lo que va a hacer próspera a tu empresa?

**Subtítulo:**
> 10 preguntas. 3 minutos. Descubrí si estás empujando más fuerte — o cambiando lo que importa.

**CTA principal:**
> [Empezar el diagnóstico]

**CTA secundario (scroll):**
> O seguí leyendo ↓

### Notas de diseño
- Full viewport height
- Tipografía grande (38px mobile, 72px+ desktop)
- Solo texto — sin imagen, sin video, sin animación
- El isotipo Drimian (portal/triángulo) como elemento sutil de fondo
- "We Dream With Intelligence" debajo del logo, no como titular

---

## SECCIÓN 2: DIAGNÓSTICO INTERACTIVO

### Experiencia

Una pregunta a la vez. Fondo oscuro. Tipografía grande. Barra de progreso sutil (1/10, 2/10...).

El dueño elige una opción. Aparece una **micro-revelación** (una línea que le cambia cómo ve su empresa). Después de 3-4 segundos, pasa a la siguiente pregunta.

**Las micro-revelaciones son el verdadero producto de la web.** Cada una es un principio de la Guía Drimian traducido a lenguaje de dueño. Son las que hacen que alguien diga "estos ven algo que yo no estaba viendo."

### Las 10 preguntas

---

**PREGUNTA 1 — CICLOS DE DECISIÓN**

Pensá en una decisión que se toma todos los días en tu empresa. ¿Quién la toma de principio a fin?

a) Depende del día y de quién esté. No hay una forma definida
b) Una persona arranca, otra revisa, otra aprueba, otra ejecuta
c) Hay alguien asignado, pero necesita aprobación para actuar
d) Una persona ve la información, decide y actúa. El resultado vuelve a ella

**Micro-revelación:** "Cada vez que una decisión pasa por 4 personas, agrega costo. La prosperidad se construye cuando una persona completa el ciclo entero."

---

**PREGUNTA 2 — SEÑAL QUE GUÍA**

Cuando alguien en tu empresa toma una decisión operativa, ¿la información que necesita ya está ahí, o tiene que ir a buscarla?

a) Generalmente decide con lo que tiene en la cabeza
b) La información existe, pero hay que pedirla, buscarla o esperar un reporte
c) Tiene dashboards o reportes, pero los mira después de decidir
d) La información le llega en el momento de decidir, antes de actuar

**Micro-revelación:** "Si la información llega después de que decidiste, no te guió — solo documentó lo que ya pasó."

---

**PREGUNTA 3 — FRICCIÓN**

¿Cuánta energía de tu empresa se gasta en coordinar, corregir o reaccionar vs en producir y decidir?

a) La mayoría. Reuniones, seguimientos, aprobaciones, retrabajo
b) Bastante. Hay procesos pero requieren mucha supervisión
c) Algo. Los procesos críticos corren, pero hay áreas que todavía dependen de coordinación manual
d) Poca. La operación corre con mínima coordinación. La energía va a decidir y mejorar

**Micro-revelación:** "La fricción no se resuelve con más gente ni más horas. Se resuelve eliminando la necesidad de coordinar."

---

**PREGUNTA 4 — MIEDO ESTRUCTURAL**

La última vez que alguien cometió un error importante en tu empresa, ¿qué pasó después?

a) Se buscó al responsable y hubo consecuencias
b) Se resolvió el problema inmediato pero no se habló del tema
c) Se analizó qué pasó, pero las conclusiones no cambiaron nada
d) Se analizó qué falló en el sistema, se cambió algo concreto, y quedó documentado

**Micro-revelación:** "Cuando equivocarse sale caro, nadie decide. Y no decidir es el error más caro de todos."

---

**PREGUNTA 5 — ATRACTORES**

Pensá en el último cambio importante que implementaste. ¿Sigue funcionando hoy?

a) No. Volvimos a como estábamos antes
b) Parcialmente. Algo quedó pero la mayoría se diluyó
c) El cambio pegó, pero costó mucho más de lo esperado mantenerlo
d) Sí. Funciona y se mantiene sin que nadie lo empuje

**Micro-revelación:** "Los cambios no pegan porque los incentivos reales no cambiaron. Eso se llama atractor — y es lo primero que hay que mover."

---

**PREGUNTA 6 — COMPENSACIÓN**

¿Tu gente sabe cómo lo que hace impacta en el resultado del negocio?

a) No. Hacen su trabajo pero no ven la conexión
b) Vagamente. Saben que "si nos va bien, les va bien" pero no hay nada concreto
c) Tienen metas y bonos, pero no pueden trazar la línea entre sus decisiones diarias y esas metas
d) Cada persona sabe qué decisiones son suyas, puede ver el impacto, y su compensación refleja eso

**Micro-revelación:** "Si alguien no puede ver el impacto de lo que hace, no le podés pedir que lo haga mejor. Pagar no es lo mismo que conectar."

---

**PREGUNTA 7 — HOLGURA**

¿Tu empresa tiene espacio para pensar, o todo es urgente?

a) Todo es urgente. No hay tiempo para pensar — solo para reaccionar
b) A veces hay espacio, pero se llena rápido con más tarea
c) Los líderes tienen algo de tiempo para pensar, pero el equipo operativo no
d) Hay tiempo protegido para observar, analizar y explorar. No todo es ejecución

**Micro-revelación:** "Una empresa sin tiempo para pensar solo puede seguir haciendo lo que ya hace. Eso se siente productivo — hasta que el mundo cambia."

---

**PREGUNTA 8 — OPERACIÓN E INNOVACIÓN**

¿Tu empresa puede probar cosas nuevas sin romper lo que ya funciona?

a) No. Probar algo nuevo desestabiliza la operación
b) A veces, pero los experimentos compiten con la operación y casi siempre pierden
c) Podemos probar, pero no hay forma clara de decidir qué sigue y qué se mata
d) Hay espacio explícito para explorar, con reglas claras, sin afectar la operación diaria

**Micro-revelación:** "Si probar algo nuevo desestabiliza todo, la empresa no innova — sobrevive. Y sobrevivir no es prosperar."

---

**PREGUNTA 9 — DELEGACIÓN A IA**

¿Sabés qué decisiones de tu empresa deberían tomarse con IA, cuáles con IA + humano, y cuáles solo un humano?

a) No me lo he planteado así. Usamos lo que hay
b) Hemos probado herramientas, pero no cambiaron cómo decidimos
c) Usamos IA en algunas cosas, pero cada quien por su cuenta sin un criterio común
d) Tenemos claro qué automatizar, qué aumentar con IA, y qué mantener 100% humano

**Micro-revelación:** "La IA amplifica lo que ya tenés. Si lo que tenés es desorden, vas a tener desorden más rápido."

---

**PREGUNTA 10 — APRENDIZAJE DEL SISTEMA**

Cuando algo funciona bien (o mal) en tu empresa, ¿eso cambia cómo se hace la próxima vez?

a) No. Cada vez empezamos de cero, como si fuera la primera
b) Las personas aprenden individualmente, pero si se van, el aprendizaje se va con ellas
c) Hay algunos procesos documentados, pero no se actualizan con lo que aprendemos
d) El sistema captura lo que funciona y lo que no, y la próxima decisión se toma con esa información incorporada

**Micro-revelación:** "Las personas aprenden. Las empresas que prosperan también. Si alguien se va y el aprendizaje se va con esa persona, no era de la empresa — era de ella."

---

## SECCIÓN 3: RESULTADO

### Estructura visual (4 bloques)

**Bloque 1: Perfil general**

| Rango | Puntos | Nombre |
|-------|--------|--------|
| 10-17 | CIMIENTOS AUSENTES | Los mecanismos que producen prosperidad no están construidos |
| 18-25 | CIMIENTOS PARCIALES | Algunos mecanismos existen pero no sostienen |
| 26-33 | CIMIENTOS EN CONSTRUCCIÓN | La base existe pero hay valor escondido |
| 34-40 | CIMIENTOS SÓLIDOS | La empresa prospera por diseño, no por esfuerzo |

**Bloque 2: Radar de 7 indicadores de prosperidad**

Gráfico de radar (heptágono) con:
1. Diferenciación defendible
2. Margen
3. Clientes que vuelven
4. Talento que quiere estar
5. Capacidad de invertir
6. Resiliencia
7. Opcionalidad

Debajo del radar: *"Esto no es lo que tenés — es lo que estás construyendo."*

Cada indicador se calcula como promedio ponderado de los mecanismos que lo producen:

| Indicador | Se calcula con | Pesos (1.0/0.6/0.3) |
|-----------|---------------|---------------------|
| Diferenciación | P2, P6, P8, P9, P10 | 0.6, 0.3, 1.0, 0.3, 0.6 |
| Margen | P1, P2, P3, P6, P9 | 1.0, 1.0, 1.0, 0.6, 0.6 |
| Clientes que vuelven | P10 | 1.0 |
| Talento | P4, P6, P7 | 1.0, 1.0, 0.3 |
| Capacidad de invertir | P3, P8, P9 | 0.6, 0.3, 1.0 |
| Resiliencia | P1, P4, P5, P7, P10 | 0.6, 0.6, 1.0, 0.6, 0.3 |
| Opcionalidad | P5, P7, P8 | 0.6, 1.0, 0.6 |

Normalizar a 0-100%: `((promedio - 1) / 3) × 100`

**Bloque 3: Las 2-3 palancas de mayor impacto**

Algoritmo:
1. Tomar preguntas donde sacó 1-2 puntos
2. Sumar pesos de todos los indicadores que afecta cada una
3. Las top 2-3 = palancas

Formato:

```
LAS PALANCAS QUE MÁS MOVERÍAN TU EMPRESA

1. [NOMBRE] → impacta: [indicadores]
   [Texto de 2 líneas explicando por qué]

2. [NOMBRE] → impacta: [indicadores]
   [Texto de 2 líneas]
```

**Bloque 4: CTA**

> "Estas palancas se pueden construir. Hablemos de cuáles primero."
> [WhatsApp] · [Recibir análisis detallado por email]

### Narrativas por perfil

**CIMIENTOS AUSENTES (10-17)**

Tu empresa funciona. Pero funciona porque vos la empujás todos los días.

Los problemas vuelven porque el sistema los produce. Los cambios no pegan porque los incentivos reales no cambiaron. Tu equipo no decide porque equivocarse sale caro. La información llega después, no antes.

No es falta de esfuerzo. Es que los cimientos no están construidos. Y empujar más fuerte no los construye.

Hay 10 mecanismos que hacen próspera a una empresa. La mayoría no están operando en la tuya. Pero cada uno se puede construir — cuando sabés cuál y en qué orden.

[Quiero saber por dónde empezar → WhatsApp]

---

**CIMIENTOS PARCIALES (18-25)**

Estás en el punto más difícil: ves que hay otra forma pero no lográs que los cambios se sostengan.

Algunos cimientos existen. Pero los que faltan anulan a los que están. Si tu equipo puede decidir pero la información llega tarde, la decisión es mala. Si la compensación no conecta con lo que cada persona controla, el mejor proceso no cambia el comportamiento.

La prosperidad no viene de resolver todo a la vez — viene de identificar cuáles cimientos faltan y en qué orden construirlos.

[Hablemos de los cimientos que faltan → WhatsApp]

---

**CIMIENTOS EN CONSTRUCCIÓN (26-33)**

Tu empresa tiene bases reales. La pregunta ahora es: ¿dónde está el valor que estás dejando sobre la mesa?

Los cimientos principales funcionan. Pero hay mecanismos específicos que no están operando — y cada uno tiene un costo que no estás viendo. Decisiones que podrían delegarse. Información que existe pero no llega al momento de decidir. Capacidad liberada que se consume en más tarea.

[Conversemos sobre dónde está la oportunidad → WhatsApp]

---

**CIMIENTOS SÓLIDOS (34-40)**

Tu empresa prospera por diseño, no por esfuerzo. Eso es raro.

Los mecanismos están operando. Tu gente decide, tu sistema aprende, tu operación corre sin depender de una persona.

Probablemente no nos necesitás. Pero si querés comprimir tiempos con IA, explorar nuevos modelos, o escalar sin agregar complejidad — eso sí es conversación.

[Si querés hablar → WhatsApp]

---

## SECCIÓN 4: QUÉ ES DRIMIAN

> **We Dream With Intelligence**

Consultora de gestión y tecnología. Usamos inteligencia artificial y un sistema de principios propio para diagnosticar, diseñar e implementar los mecanismos que hacen próspera a una empresa.

No damos informes — intervenimos. Lo que construimos queda operando en tu empresa.

Salud. Construcción. Hotelería. Seguros. Si tu industria no está en la lista, hablemos igual — los cimientos de prosperidad son los mismos en cualquier empresa que tome decisiones.

---

## SECCIÓN 5: MODELO

> **Piel en el juego**

Cobramos un bono por tu prosperidad. Al inicio del año acordamos 3-5 objetivos medibles con datos del sistema. Si al cierre no cumplimos el mínimo, nos vamos automáticamente. Sin comités. Sin negociación. El dato decide.

Nos va bien cuando a tu empresa le va bien. Si no, nos vamos.

---

## SECCIÓN 6: PRINCIPIO ROTATIVO

Una idea de la Guía Drimian que rota mensualmente. Cada una con título provocativo + 3-4 líneas de aplicación práctica.

**Ejemplo mes 1:**
> **El sistema produce resultados, no las personas.**
> La misma persona produce 92 en un sistema y 45 en otro. Antes de cambiar a la gente, mirá el sistema en el que operan. Si un problema se repite con personas diferentes, el problema no son las personas.

**Ejemplo mes 2:**
> **Empujar más fuerte no funciona.**
> Después de cualquier cambio, el sistema tiende a volver a donde estaba — a menos que cambies lo que lo mantiene ahí. Se llama atractor. Si los incentivos reales no cambiaron, el cambio no va a pegar.

**Ejemplo mes 3:**
> **La IA amplifica lo que ya tenés.**
> Si lo que tenés es un buen sistema de decisiones, la IA lo hace más rápido y más preciso. Si lo que tenés es desorden, la IA te da desorden a escala. Antes de implementar IA, asegurate de que hay algo bueno que amplificar.

---

## SECCIÓN 7: CTA FINAL

> **Empecemos a conversar.**

> Si algo de lo que leíste te hizo pensar distinto sobre tu empresa, hablemos. Sin compromiso. El primer paso es una conversación.

> [WhatsApp: +591 XXXXXXX]
> contacto@drimian.com
> Santa Cruz, Bolivia · Latinoamérica

---

## ESPECIFICACIONES DE DISEÑO

### Identidad visual

| Elemento | Especificación |
|----------|---------------|
| Color primario | Azul Drimian `#003399` |
| Color secundario | Azul oscuro `#003333` |
| Color acento (CTAs, highlights) | Naranja `#FF6600` |
| Color neutro | Gris `#999999` |
| Fondo principal | Oscuro (negro o `#1A1A2E`) |
| Fondo secciones alternas | `#0D0D1A` o `#F5F5F5` para secciones claras |
| Tipografía logo | Nexa |
| Tipografía eslogan + titulares | Axiforma (o serif con personalidad: Playfair Display) |
| Tipografía cuerpo | Inter o DM Sans |

### Layout

| Elemento | Especificación |
|----------|---------------|
| Arquitectura | Single page, mobile first |
| Ancho máximo texto | 680px |
| Espaciado entre secciones | 80-120px desktop, 48-64px mobile |
| Tamaño texto base | 18px desktop, 16px mobile |
| Tamaño titulares | 38px mobile → 72px+ desktop |
| Peso total de página | < 1MB |
| Imágenes | WebP, comprimidas. Preferir isotipo/ilustración sobre fotos |
| Animaciones | Solo fade-in al scroll. Nada que bloquee carga |
| Botones | Min 44px tocable. Naranja para primario, borde para secundario |

### El diagnóstico

| Elemento | Especificación |
|----------|---------------|
| Una pregunta a la vez | Full screen |
| Transición | Inmediata, sin animación lenta |
| Micro-revelación | Aparece 3-4 seg después de elegir respuesta |
| Barra de progreso | Sutil, arriba (1/10, 2/10...) |
| Resultado | Inmediato. No "te mandamos los resultados" |
| Radar | SVG/Canvas, 7 ejes, coloreado por rango |
| Lead capture | SOLO al final. Opcional. "¿Querés recibir análisis detallado?" |

### Herramientas sugeridas

| Para qué | Herramienta | Costo |
|----------|-------------|-------|
| Assessment MVP | Tally (gratis) | $0 |
| Assessment profesional | ScoreApp o Interact | $49-99/mes |
| Web hosting | Vercel o Netlify | Gratis |
| Framework | HTML/CSS/JS puro o Next.js | — |
| Radar chart | Chart.js o D3.js | Gratis |
| WhatsApp | Link directo wa.me/ | Gratis |

---

## LEAD CAPTURE Y QUÉ RECIBE DRIMIAN

Por cada diagnóstico completado:
- 10 respuestas individuales (sabe exactamente qué cimientos faltan)
- Perfil (ausentes / parciales / en construcción / sólidos)
- Scores de los 7 indicadores de prosperidad
- Las 2-3 palancas de mayor impacto
- Datos de contacto (si los da)

**Esto le da a Drimian contexto completo ANTES de la primera conversación.** No arranca de cero — ya sabe dónde duele.

---

## DOCUMENTOS COMPLEMENTARIOS

| Documento | Qué contiene | Ubicación |
|-----------|-------------|-----------|
| Diagnóstico Interactivo (Capa 1) | Las 10 preguntas detalladas + scoring + narrativas | `marca/WEB DRIMIAN - Diagnostico Interactivo.md` |
| Mecánica Capa 2 | Matriz mecanismo→indicador + algoritmo + narrativas por combinación | `marca/WEB DRIMIAN - Mecanica Diagnostico Capa 2.md` |
| Benchmarking | Análisis de Cognizant, McKinsey, Bain, BCG, Accenture + recomendaciones | `drimian empresa/WEB DRIMIAN - Benchmarking Consultoras.md` |
| Manual de marca | Colores, tipografías, isotipo, reglas | `marca/wetransfer.../DRIMIAN MANUAL DE MARCA.pdf` |

---

## PRIORIDAD DE IMPLEMENTACIÓN

| # | Qué | Por qué | Effort |
|---|-----|---------|--------|
| 1 | Homepage con Hero + Diagnóstico + Resultado | Es el 80% del valor. En Bolivia, tener esto ya diferencia | Alto |
| 2 | WhatsApp como CTA principal | En Bolivia la gente escribe por WhatsApp, no por formulario | Bajo |
| 3 | Secciones Drimian + Modelo + CTA | Completan la narrativa para quien scrollea sin hacer el diagnóstico | Medio |
| 4 | Principio rotativo mensual | Mantiene la web viva. Contenido que ninguna consultora local tiene | Bajo/mes |
| 5 | /principios (futuro) | Thought leadership. 10-15 artículos de la Guía | Medio |
| 6 | /resultados (futuro) | Casos con métricas cuando haya suficientes | Bajo |

---

*Basado en: Guía Drimian N1 v7.5, DRIMIAN - Guía Empresa v1.0, Benchmarking de 6 consultoras*
*15 frases extraídas de la Guía. 10 micro-revelaciones. Algoritmo de scoring de 2 capas.*
