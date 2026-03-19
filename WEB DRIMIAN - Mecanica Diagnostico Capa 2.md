# WEB DRIMIAN — Mecánica del Diagnóstico: Capa 2 (Indicadores de Prosperidad)

> Cómo las 10 respuestas de mecanismos (Capa 1) se traducen en un diagnóstico de los 7 indicadores de prosperidad (Capa 2).

---

## 1. Matriz de conexión: Mecanismo → Indicador de Prosperidad

Cada pregunta (mecanismo) impacta 2-3 indicadores. La lógica: si el mecanismo no funciona, esos indicadores se degradan.

| # | Mecanismo | Indicador 1 | Indicador 2 | Indicador 3 |
|---|-----------|-------------|-------------|-------------|
| P1 | Ciclos de decisión | Margen | Resiliencia | — |
| P2 | Señal que guía | Margen | Diferenciación defendible | — |
| P3 | Fricción real | Margen | Capacidad de invertir | — |
| P4 | Qué pasa cuando alguien se equivoca | Talento que quiere estar | Resiliencia | — |
| P5 | Por qué los cambios no pegan | Resiliencia | Opcionalidad | — |
| P6 | Compensación y comportamiento | Talento que quiere estar | Margen | Diferenciación defendible |
| P7 | Holgura | Opcionalidad | Resiliencia | Talento que quiere estar |
| P8 | Operación e innovación | Diferenciación defendible | Opcionalidad | Capacidad de invertir |
| P9 | Delegación a tecnología e IA | Capacidad de invertir | Margen | Diferenciación defendible |
| P10 | Aprendizaje del sistema | Clientes que vuelven | Diferenciación defendible | Resiliencia |

### Justificación de cada conexión

**P1 — Ciclos de decisión → Margen + Resiliencia.**
Cada handoff entre personas agrega costo (tiempo, coordinación, errores). Ciclos incompletos destruyen margen directamente. Y cuando la decisión tarda, la respuesta a shocks tarda — eso es resiliencia degradada.

**P2 — Señal que guía → Margen + Diferenciación.**
Si la información llega después de la decisión, la decisión es peor. Peores decisiones = más costo, menos captura de valor. Y la diferenciación se construye leyendo señales que otros no leen — si tu señal solo registra, no construís ventaja.

**P3 — Fricción → Margen + Capacidad de invertir.**
La fricción consume recursos sin producir valor. Cada hora gastada en coordinar, corregir o reaccionar es una hora que no va a producir ni a mejorar. Destruye margen y elimina los recursos que necesitás para invertir.

**P4 — Error → Talento + Resiliencia.**
Cuando equivocarse sale caro, el talento bueno se va (o deja de decidir). Y un sistema donde nadie decide es un sistema que no puede responder a shocks — colapsa ante lo inesperado.

**P5 — Cambios que no pegan → Resiliencia + Opcionalidad.**
Si los cambios se revierten, el sistema no puede adaptarse. Un sistema que no se adapta es frágil (resiliencia) y queda atrapado donde está (opcionalidad).

**P6 — Compensación → Talento + Margen + Diferenciación.**
Si la compensación no conecta con lo que cada persona controla, el talento se frustra y se va. El esfuerzo se dispersa en cosas que no mueven el margen. Y la diferenciación requiere que alguien haga algo difícil con intención — si no ve el impacto de lo que hace, no lo va a hacer.

**P7 — Holgura → Opcionalidad + Resiliencia + Talento.**
Sin espacio para pensar, no hay adaptación posible (opcionalidad muere). Sin reserva de capacidad, cualquier shock consume todo (resiliencia muere). Y el talento que piensa se ahoga en la urgencia permanente.

**P8 — Operación e innovación → Diferenciación + Opcionalidad + Capacidad de invertir.**
Si no podés probar cosas nuevas sin romper lo que funciona, la diferenciación se erosiona (competidores innovan, vos no). Las opciones futuras se cierran (opcionalidad). Y sin innovación efectiva, las inversiones no tienen dónde ir con retorno.

**P9 — Delegación IA → Capacidad de invertir + Margen + Diferenciación.**
Delegar bien a IA libera recursos humanos y financieros (capacidad de invertir). Reduce costos operativos (margen). Y la combinación humano+IA bien diseñada es difícil de copiar (diferenciación).

**P10 — Aprendizaje del sistema → Clientes que vuelven + Diferenciación + Resiliencia.**
Un sistema que aprende mejora lo que entrega — los clientes lo notan y vuelven. Ese aprendizaje acumulado es difícil de replicar (diferenciación). Y un sistema que incorpora lecciones resiste mejor los shocks (resiliencia).

---

## 2. Algoritmo de scoring

### Paso 1: Score por mecanismo (ya definido)
- a) = 1 punto
- b) = 2 puntos
- c) = 3 puntos
- d) = 4 puntos

Score total mecanismos: 10-40 puntos → determina perfil general (4 rangos).

### Paso 2: Score por indicador de prosperidad

Cada indicador recibe inputs de las preguntas que lo afectan (ver matriz). El score del indicador es el **promedio ponderado** de esas preguntas.

**Pesos:** Cada mecanismo no impacta igual en cada indicador. El indicador listado primero en la matriz pesa más que el segundo, y el segundo más que el tercero.

| Posición en la matriz | Peso |
|-----------------------|------|
| Indicador 1 (impacto primario) | 1.0 |
| Indicador 2 (impacto secundario) | 0.6 |
| Indicador 3 (impacto terciario) | 0.3 |

### Cálculo detallado por indicador

**Diferenciación defendible**
- P2 (señal que guía) × 0.6
- P6 (compensación) × 0.3
- P8 (operación e innovación) × 1.0
- P9 (delegación IA) × 0.3
- P10 (aprendizaje del sistema) × 0.6
- Score = suma ponderada / suma de pesos = (P2×0.6 + P6×0.3 + P8×1.0 + P9×0.3 + P10×0.6) / (0.6+0.3+1.0+0.3+0.6) = promedio ponderado sobre 2.8

**Margen**
- P1 (ciclos de decisión) × 1.0
- P2 (señal que guía) × 1.0
- P3 (fricción) × 1.0
- P6 (compensación) × 0.6
- P9 (delegación IA) × 0.6
- Score = (P1×1.0 + P2×1.0 + P3×1.0 + P6×0.6 + P9×0.6) / (1.0+1.0+1.0+0.6+0.6) = promedio ponderado sobre 4.2

**Clientes que vuelven**
- P10 (aprendizaje del sistema) × 1.0
- Score = P10×1.0 / 1.0

Nota: Clientes que vuelven depende fuertemente de UN mecanismo (aprendizaje del sistema). Esto es correcto — los otros mecanismos son internos. El aprendizaje organizacional es el que se traduce directamente en mejor servicio/producto al cliente. Los otros contribuyen indirectamente vía margen, diferenciación, etc., pero la conexión directa es aprendizaje.

**Talento que quiere estar**
- P4 (error) × 1.0
- P6 (compensación) × 1.0
- P7 (holgura) × 0.3
- Score = (P4×1.0 + P6×1.0 + P7×0.3) / (1.0+1.0+0.3) = promedio ponderado sobre 2.3

**Capacidad de invertir**
- P3 (fricción) × 0.6
- P8 (operación e innovación) × 0.3
- P9 (delegación IA) × 1.0
- Score = (P3×0.6 + P8×0.3 + P9×1.0) / (0.6+0.3+1.0) = promedio ponderado sobre 1.9

**Resiliencia**
- P1 (ciclos de decisión) × 0.6
- P4 (error) × 0.6
- P5 (cambios que no pegan) × 1.0
- P7 (holgura) × 0.6
- P10 (aprendizaje del sistema) × 0.3
- Score = (P1×0.6 + P4×0.6 + P5×1.0 + P7×0.6 + P10×0.3) / (0.6+0.6+1.0+0.6+0.3) = promedio ponderado sobre 3.1

**Opcionalidad**
- P5 (cambios que no pegan) × 0.6
- P7 (holgura) × 1.0
- P8 (operación e innovación) × 0.6
- Score = (P5×0.6 + P7×1.0 + P8×0.6) / (0.6+1.0+0.6) = promedio ponderado sobre 2.2

### Paso 3: Normalización

El promedio ponderado da un resultado en escala 1-4. Para mostrar al usuario, normalizar a escala 0-100:

**Score mostrado = ((promedio ponderado - 1) / 3) × 100**

| Promedio ponderado | Score mostrado | Interpretación |
|-------------------|----------------|----------------|
| 1.0 | 0% | Indicador ausente |
| 1.75 | 25% | Indicador débil |
| 2.5 | 50% | Indicador parcial |
| 3.25 | 75% | Indicador fuerte |
| 4.0 | 100% | Indicador sólido |

### Paso 4: Rangos por indicador

| Score | Etiqueta (para el radar) | Color |
|-------|--------------------------|-------|
| 0-25% | Ausente | Rojo |
| 26-50% | Parcial | Naranja |
| 51-75% | En construcción | Amarillo |
| 76-100% | Sólido | Verde |

---

## 3. Pantalla de resultado — Diseño de información

### Estructura visual (de arriba hacia abajo)

**Bloque 1: Perfil general**
- Título del rango (ej: "CIMIENTOS PARCIALES")
- Score total (ej: "22/40")
- Texto de 2 líneas del perfil (el que ya existe en el doc original)

**Bloque 2: Radar de 7 indicadores de prosperidad**
- Gráfico de radar (heptágono) con los 7 indicadores
- Cada eje va de 0% (centro) a 100% (borde)
- El área coloreada muestra el perfil de prosperidad del dueño
- Debajo del radar: una línea que dice "Esto no es lo que tenés — es lo que estás construyendo"

**Bloque 3: Detalle por indicador (expandible)**
Para cada indicador, de mayor a menor score:

```
[Barra visual: 0% ——————|———— 100%]
DIFERENCIACIÓN DEFENDIBLE — 62%

Lo que te está frenando:
  → Tu señal llega tarde (P2: 2/4)
  → Tu compensación no conecta con diferenciación (P6: 2/4)

Lo que ya funciona:
  → Tu equipo puede probar cosas nuevas (P8: 3/4)
```

Solo se muestran los mecanismos que sacaron 1-2 puntos (frenos) y los que sacaron 3-4 (lo que funciona). No se muestran los 10 — solo los que impactan en ese indicador.

**Bloque 4: Las 2-3 palancas de mayor impacto**

Algoritmo para identificar palancas:
1. Tomar las preguntas donde el dueño sacó 1-2 puntos
2. Para cada una, sumar los pesos de todos los indicadores que afecta
3. Ordenar de mayor a menor peso total
4. Las top 2-3 son las palancas de mayor impacto

Ejemplo: Si P7 (holgura) sacó 1 punto, su peso total es: 1.0 (opcionalidad) + 0.6 (resiliencia) + 0.3 (talento) = 1.9. Si P3 (fricción) sacó 2 puntos, su peso total es: 1.0 (margen) + 0.6 (capacidad de invertir) = 1.6. P7 se muestra primero.

Formato de presentación:

```
LAS PALANCAS QUE MÁS MOVERÍAN TU EMPRESA

1. HOLGURA → impacta: Opcionalidad, Resiliencia, Talento
   Hoy todo es urgente en tu empresa. Eso mata 3 cosas al mismo tiempo:
   la capacidad de elegir hacia dónde ir, la capacidad de absorber golpes,
   y la voluntad de tu mejor gente de quedarse.

2. FRICCIÓN → impacta: Margen, Capacidad de invertir
   Tu energía se gasta en coordinar y corregir. Cada hora que va a eso
   es una hora que no va a producir ni a mejorar.
```

**Bloque 5: CTA**
- "Estas palancas se pueden construir. Hablemos de cuáles primero."
- [WhatsApp] + opcionalmente capturar email para resultado detallado

---

## 4. Narrativa del resultado

### Estructura narrativa (aplica a los 4 perfiles)

Cada resultado tiene 3 movimientos:
1. **Nombrar lo que reconoce** — su realidad, sin juicio
2. **Mostrar la conexión que no ve** — mecanismo → indicador
3. **Crear urgencia sin presión** — la urgencia viene de entender

### CIMIENTOS AUSENTES (10-17) + indicadores débiles

**Si los indicadores más débiles son Margen + Resiliencia:**

Tu empresa funciona. Pero funciona porque vos la empujás todos los días.

Los números que ves — las ventas, el margen, la operación — dependen de que cada decisión pase por vos o por un sistema de aprobaciones que agrega costo en cada paso. Eso es fricción. Y la fricción no solo te cuesta plata hoy: te deja sin espacio para responder cuando algo cambia.

Cuando las decisiones tardan, el margen se erosiona. Cuando el margen se erosiona, no hay con qué invertir. Y cuando no hay con qué invertir, cualquier golpe — un cliente que se va, un costo que sube — no tiene amortiguador.

No es falta de esfuerzo. Es que los cimientos que producen margen y resiliencia no están construidos. Y empujar más fuerte no los construye.

**Si los indicadores más débiles son Talento + Opcionalidad:**

Tu empresa funciona. Pero tu mejor gente está ejecutando sin entender para qué, y vos estás atrapado en la operación sin tiempo para pensar hacia dónde ir.

Cuando equivocarse sale caro, la gente deja de decidir — y el talento que quiere decidir se va. Cuando todo es urgente, no hay espacio para explorar alternativas — y las opciones se cierran sin que nadie lo note.

Lo que conecta las dos cosas: sin holgura, no hay experimentación. Sin experimentación, la empresa solo puede seguir haciendo lo que ya hace. Y el talento que piensa no se queda en un lugar donde no puede pensar.

**Si los indicadores más débiles son Diferenciación + Capacidad de invertir:**

Tu empresa funciona. Pero está compitiendo en una carrera donde cada vez hay menos ventaja y menos recursos para construir una.

Tu sistema no aprende de lo que hace — cada ciclo empieza de cero. Tu innovación compite con la operación y pierde. Y los recursos que liberás se consumen en coordinar, no en mejorar.

La diferenciación no viene de "ser diferente". Viene de acumular aprendizaje que otros no tienen y convertirlo en decisiones que otros no pueden tomar. Si tu sistema no captura lo que aprende, la ventaja se evapora con cada persona que se va.

---

### CIMIENTOS PARCIALES (18-25) + indicadores débiles

**Si el indicador más débil es Resiliencia (con Margen parcial):**

Estás en el punto más difícil: algunos cimientos funcionan, pero los que faltan anulan a los que están.

Tu empresa tiene mecanismos que producen valor. Pero cuando algo cambia — un cliente grande que se va, un costo que sube, una persona clave que renuncia — el sistema no absorbe el golpe. Se detiene.

Lo que ves como "mala suerte" o "problemas inesperados" tiene una causa de diseño: los cambios que implementaste no pegaron porque los atractores no cambiaron, no hay espacio de reserva para absorber shocks, y las decisiones tardan demasiado en llegar a quien puede actuar.

La buena noticia: los cimientos que ya tenés son reales. El trabajo no es empezar de cero — es identificar los 2-3 que faltan y construirlos en el orden correcto.

**Si el indicador más débil es Talento (con Diferenciación parcial):**

Tenés cimientos reales. Tu empresa hace cosas que la diferencian. Pero la gente que construye esa diferenciación no sabe que lo está haciendo — o no tiene razón para quedarse haciéndolo.

La compensación no conecta con lo que cada persona controla. Los errores todavía tienen costo personal. Y no hay espacio para pensar — solo para ejecutar.

El riesgo es invisible: la diferenciación que hoy tenés depende de personas específicas. Si esas personas se van — y un sistema que no conecta compensación con impacto las empuja a irse — la diferenciación se va con ellas.

**Si el indicador más débil es Opcionalidad (con otros parciales):**

Tu empresa funciona y algunos cimientos son sólidos. Pero estás atrapado en lo que ya funciona — sin capacidad real de ir hacia otro lado.

Los cambios se revierten. La innovación compite con la operación y pierde. Todo el espacio libre se llena con más tarea. El resultado: tu empresa puede hacer bien lo que ya hace, pero no puede elegir hacer algo diferente.

Eso no duele hoy. Duele cuando el mercado cambia, cuando un competidor hace algo nuevo, cuando aparece una oportunidad que requiere hacer algo que nunca hiciste. Ahí es cuando la opcionalidad ausente se convierte en trampa.

---

### CIMIENTOS EN CONSTRUCCIÓN (26-33) + indicadores débiles

**Si el indicador más débil es Capacidad de invertir:**

La base existe. Tu empresa tiene cimientos funcionando. La pregunta ya no es "¿funciona?" — es "¿dónde está el valor que estás dejando sobre la mesa?"

Tu fricción operativa consume recursos que podrían ir a mejorar. La delegación a IA no está clara — hay decisiones que podrían automatizarse liberando tiempo y dinero. Cada peso y cada hora que va a coordinar, corregir o reaccionar es un peso y una hora que no va a construir el siguiente nivel.

No te falta esfuerzo ni estrategia. Te falta liberar los recursos que ya tenés pero que están atrapados en fricción.

**Si el indicador más débil es Clientes que vuelven:**

Tu empresa tiene cimientos sólidos internamente. Pero hay un mecanismo que no está operando: el sistema no captura lo que aprende.

Cada interacción con un cliente produce información. Cada problema resuelto produce aprendizaje. Si ese aprendizaje depende de que alguien específico esté, no es del sistema — es de la persona. Y cuando esa persona no está, el cliente nota la diferencia.

Los clientes no vuelven porque "tuvieron buena experiencia". Vuelven porque cada vez que interactúan, el sistema es mejor que la vez anterior. Eso solo pasa cuando el aprendizaje es organizacional, no personal.

**Si el indicador más débil es Diferenciación defendible:**

Tenés cimientos internos sólidos. Pero lo que te diferencia no está protegido — o no se está construyendo activamente.

La diferenciación defendible no es "ser diferente". Es acumular decisiones, aprendizaje y capacidad que otros no pueden replicar fácilmente. Si tu señal no guía (solo registra), si tu innovación no tiene espacio protegido, si tu IA no potencia lo que te hace único — la ventaja se erosiona cada día que pasa.

---

### CIMIENTOS SÓLIDOS (34-40)

Tu empresa prospera por diseño, no por esfuerzo. Eso es raro.

Los mecanismos que producen prosperidad están operando. Tu gente decide, tu sistema aprende, tu operación corre con mínima fricción.

[Si hay algún indicador por debajo de 75%:]

Hay un punto de atención: tu [indicador más bajo] está por debajo del resto. Eso no es un problema hoy — pero es donde aparecería la grieta si las condiciones cambian.

En tu caso, [mecanismo débil específico] es lo que lo explica. No es urgente — pero es donde está la oportunidad de pasar de sólido a excepcional.

---

## 5. Micro-revelaciones post-pregunta

Después de cada respuesta, una línea corta que cambia cómo el dueño ve su empresa. Aparece durante 3-4 segundos antes de pasar a la siguiente pregunta.

**Las 3 que ya existen (del archivo original):**

**P1 — Ciclos de decisión:**
"Cada vez que una decisión pasa por 4 personas, agrega fricción. La prosperidad se construye cuando una persona completa el ciclo entero."

**P4 — Qué pasa cuando alguien se equivoca:**
"Cuando equivocarse sale caro, nadie decide. Y no decidir es el error más caro de todos."

**P5 — Por qué los cambios no pegan:**
"Los cambios no pegan porque los incentivos reales no cambiaron. Eso se llama atractor — y es lo primero que hay que mover."

**Las 7 nuevas:**

**P2 — Señal que guía:**
"Si la información llega después de que decidiste, no te guió — solo documentó lo que ya pasó."

**P3 — Fricción real:**
"La fricción no se resuelve con más gente ni más horas. Se resuelve eliminando la necesidad de coordinar."

**P6 — Compensación y comportamiento:**
"Si alguien no puede ver el impacto de lo que hace, no le podés pedir que lo haga mejor. Pagar no es lo mismo que conectar."

**P7 — Holgura:**
"Una empresa sin tiempo para pensar solo puede seguir haciendo lo que ya hace. Eso se siente productivo — hasta que el mundo cambia."

**P8 — Operación e innovación:**
"Si probar algo nuevo desestabiliza todo, la empresa no innova — sobrevive. Y sobrevivir no es prosperar."

**P9 — Delegación a tecnología e IA:**
"La IA amplifica lo que ya tenés. Si lo que tenés es desorden, vas a tener desorden más rápido."

**P10 — Aprendizaje del sistema:**
"Las personas aprenden. Las empresas que prosperan también. Si alguien se va y el aprendizaje se va con esa persona, no era de la empresa — era de ella."

---

## Ejemplo completo de cálculo

Un dueño responde: P1=b(2), P2=a(1), P3=b(2), P4=a(1), P5=b(2), P6=a(1), P7=a(1), P8=b(2), P9=a(1), P10=b(2)

**Score total: 15/40 → CIMIENTOS AUSENTES**

**Scores por indicador:**

| Indicador | Cálculo | Promedio | Score % |
|-----------|---------|----------|---------|
| Diferenciación | (1×0.6 + 1×0.3 + 2×1.0 + 1×0.3 + 2×0.6) / 2.8 | 1.64 | 21% |
| Margen | (2×1.0 + 1×1.0 + 2×1.0 + 1×0.6 + 1×0.6) / 4.2 | 1.57 | 19% |
| Clientes que vuelven | (2×1.0) / 1.0 | 2.0 | 33% |
| Talento | (1×1.0 + 1×1.0 + 1×0.3) / 2.3 | 1.0 (floor) | 0% |
| Capacidad de invertir | (2×0.6 + 2×0.3 + 1×1.0) / 1.9 | 1.47 | 16% |
| Resiliencia | (2×0.6 + 1×0.6 + 2×1.0 + 1×0.6 + 2×0.3) / 3.1 | 1.55 | 18% |
| Opcionalidad | (2×0.6 + 1×1.0 + 2×0.6) / 2.2 | 1.45 | 15% |

**Indicadores más débiles:** Talento (0%), Opcionalidad (15%), Capacidad de invertir (16%)

**Palancas de mayor impacto (preguntas con 1 punto + mayor peso total):**
- P7 Holgura (1 pt) — peso total: 1.0+0.6+0.3 = 1.9
- P4 Error (1 pt) — peso total: 1.0+0.6 = 1.6
- P6 Compensación (1 pt) — peso total: 1.0+0.6+0.3 = 1.9
- P9 Delegación IA (1 pt) — peso total: 1.0+0.6+0.3 = 1.9
- P2 Señal (1 pt) — peso total: 1.0+0.6 = 1.6

Top 3 palancas: P7 (Holgura), P6 (Compensación), P9 (Delegación IA) — empatadas a 1.9, todas con score 1.

**Narrativa seleccionada:** Cimientos Ausentes + Talento + Opcionalidad débiles.

**Resultado que ve el dueño:**
1. Perfil: "CIMIENTOS AUSENTES — 15/40"
2. Radar: heptágono casi colapsado al centro, con Clientes que vuelven como el único eje que sobresale levemente
3. Detalle: los 7 indicadores con sus barras y los mecanismos que los afectan
4. Palancas: Holgura, Compensación, Delegación IA — con texto explicativo
5. CTA: WhatsApp

---

## Notas de implementación

**Sobre "Clientes que vuelven" con un solo input (P10):**
Es intencional. Los otros 9 mecanismos son internos — afectan cómo opera la empresa. El aprendizaje organizacional (P10) es el único que se traduce directamente en calidad de servicio al cliente. Agregar más inputs diluiría la señal. Si P10 sale bajo, ese indicador sale bajo — y eso es correcto.

**Sobre los pesos:**
Los pesos (1.0 / 0.6 / 0.3) reflejan causalidad directa vs indirecta. No son arbitrarios — siguen la lógica de la Guía Drimian: el impacto primario es el mecanismo que causa el indicador; el secundario es el que lo condiciona; el terciario es el que lo modula. Si en la práctica algún peso se siente desbalanceado, ajustar en incrementos de 0.1.

**Sobre la selección de narrativa:**
El sistema elige la narrativa basándose en: (1) rango del perfil, (2) los 2 indicadores con score más bajo. Si hay empate, priorizar según la jerarquía de la Guía: resiliencia > margen > lo demás.

**Sobre las micro-revelaciones:**
Son el verdadero producto de la web. No son resúmenes de la pregunta — son principios de la Guía Drimian traducidos a lenguaje de dueño. Cada una debe producir un "ah, nunca lo había visto así". Deben caber en 2 líneas de celular.

---

*Versión 1.0 — 19 marzo 2026*
*Complementa: WEB DRIMIAN - Diagnostico Interactivo.md (Capa 1)*
*Basado en: Guía Drimian N1 v7.5 (FUNDAMENTOS — indicadores de prosperidad)*
