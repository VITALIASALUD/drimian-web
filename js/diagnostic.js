// DRIMIAN — Diagnóstico de Prosperidad
// 2 capas: mecanismos (10 preguntas) → indicadores de prosperidad (7)

const QUESTIONS = [
  {
    id: 1,
    mechanism: "Ciclos de decisión",
    text: "Pensá en una decisión que se toma todos los días en tu empresa. ¿Quién la toma de principio a fin?",
    options: [
      "Depende del día y de quién esté. No hay una forma definida",
      "Una persona arranca, otra revisa, otra aprueba, otra ejecuta",
      "Hay alguien asignado, pero necesita aprobación para actuar",
      "Una persona ve la información, decide y actúa. El resultado vuelve a ella"
    ],
    revelation: "Cada handoff en una decisión agrega latencia, variabilidad y coordinación. La prosperidad se construye cuando una persona completa el ciclo entero."
  },
  {
    id: 2,
    mechanism: "Señal que guía",
    text: "Cuando alguien en tu empresa toma una decisión operativa, ¿la información que necesita ya está ahí?",
    options: [
      "Generalmente decide con lo que tiene en la cabeza",
      "La información existe, pero hay que pedirla, buscarla o esperar un reporte",
      "Tiene dashboards o reportes, pero los mira después de decidir",
      "La información le llega en el momento de decidir, antes de actuar"
    ],
    revelation: "Si la información llega después de que decidiste, no te guió — solo documentó lo que ya pasó."
  },
  {
    id: 3,
    mechanism: "Fricción",
    text: "¿Cuánta energía de tu empresa se gasta en coordinar, corregir o reaccionar vs en producir y decidir?",
    options: [
      "La mayoría. Reuniones, seguimientos, aprobaciones, retrabajo",
      "Bastante. Hay procesos pero requieren mucha supervisión",
      "Algo. Los procesos críticos corren, pero hay áreas con mucha coordinación manual",
      "Poca. La operación corre con mínima coordinación. La energía va a decidir y mejorar"
    ],
    revelation: "La fricción no se resuelve con más gente ni más horas. Se resuelve eliminando la necesidad de coordinar."
  },
  {
    id: 4,
    mechanism: "Miedo estructural",
    text: "La última vez que alguien cometió un error importante en tu empresa, ¿qué pasó después?",
    options: [
      "Se buscó al responsable y hubo consecuencias",
      "Se resolvió el problema inmediato pero no se habló del tema",
      "Se analizó qué pasó, pero las conclusiones no cambiaron nada",
      "Se analizó qué falló en el sistema, se cambió algo concreto, y quedó documentado"
    ],
    revelation: "Cuando equivocarse sale caro, nadie decide. Y no decidir es el error más caro de todos."
  },
  {
    id: 5,
    mechanism: "Atractores",
    text: "Pensá en el último cambio importante que implementaste. ¿Sigue funcionando hoy?",
    options: [
      "No. Volvimos a como estábamos antes",
      "Parcialmente. Algo quedó pero la mayoría se diluyó",
      "El cambio pegó, pero costó mucho más de lo esperado mantenerlo",
      "Sí. Funciona y se mantiene sin que nadie lo empuje"
    ],
    revelation: "Los cambios no pegan porque los incentivos reales no cambiaron. Eso se llama atractor — y es lo primero que hay que mover."
  },
  {
    id: 6,
    mechanism: "Compensación",
    text: "¿Tu gente sabe cómo lo que hace impacta en el resultado del negocio?",
    options: [
      "No. Hacen su trabajo pero no ven la conexión",
      "Vagamente. Saben que \"si nos va bien, les va bien\" pero no hay nada concreto",
      "Tienen metas y bonos, pero no pueden trazar la línea entre sus decisiones diarias y esas metas",
      "Cada persona sabe qué decisiones son suyas, puede ver el impacto, y su compensación refleja eso"
    ],
    revelation: "Si alguien no puede ver el impacto de lo que hace, no le podés pedir que lo haga mejor. Pagar no es lo mismo que conectar."
  },
  {
    id: 7,
    mechanism: "Holgura",
    text: "¿Tu empresa tiene espacio para pensar, o todo es urgente?",
    options: [
      "Todo es urgente. No hay tiempo para pensar — solo para reaccionar",
      "A veces hay espacio, pero se llena rápido con más tarea",
      "Los líderes tienen algo de tiempo para pensar, pero el equipo operativo no",
      "Hay tiempo protegido para observar, analizar y explorar. No todo es ejecución"
    ],
    revelation: "Una empresa sin tiempo para pensar solo puede seguir haciendo lo que ya hace. Eso se siente productivo — hasta que el mundo cambia."
  },
  {
    id: 8,
    mechanism: "Operación e innovación",
    text: "¿Tu empresa puede probar cosas nuevas sin romper lo que ya funciona?",
    options: [
      "No. Probar algo nuevo desestabiliza la operación",
      "A veces, pero los experimentos compiten con la operación y casi siempre pierden",
      "Podemos probar, pero no hay forma clara de decidir qué sigue y qué se mata",
      "Hay espacio explícito para explorar, con reglas claras, sin afectar la operación diaria"
    ],
    revelation: "Si probar algo nuevo desestabiliza todo, la empresa no innova — sobrevive. Y sobrevivir no es prosperar."
  },
  {
    id: 9,
    mechanism: "Delegación a IA",
    text: "¿Sabés qué decisiones de tu empresa deberían tomarse con IA, cuáles con IA + humano, y cuáles solo un humano?",
    options: [
      "No me lo he planteado así. Usamos lo que hay",
      "Hemos probado herramientas, pero no cambiaron cómo decidimos",
      "Usamos IA en algunas cosas, pero cada quien por su cuenta sin un criterio común",
      "Tenemos claro qué automatizar, qué aumentar con IA, y qué mantener 100% humano"
    ],
    revelation: "La IA amplifica lo que ya tenés. Si lo que tenés es desorden, vas a tener desorden más rápido."
  },
  {
    id: 10,
    mechanism: "Aprendizaje del sistema",
    text: "Cuando algo funciona bien (o mal) en tu empresa, ¿eso cambia cómo se hace la próxima vez?",
    options: [
      "No. Cada vez empezamos de cero, como si fuera la primera",
      "Las personas aprenden, pero si se van, el aprendizaje se va con ellas",
      "Hay procesos documentados, pero no se actualizan con lo que aprendemos",
      "El sistema captura lo que funciona y lo que no, y la próxima decisión incorpora esa información"
    ],
    revelation: "Las personas aprenden. Las empresas que prosperan también. Si alguien se va y el aprendizaje se va con esa persona, no era de la empresa — era de ella."
  }
];

// Indicator weights matrix: [question_index] => { indicator: weight }
const INDICATOR_WEIGHTS = {
  "Diferenciación defendible": [
    { q: 1, w: 0.6 }, { q: 5, w: 0.3 }, { q: 7, w: 1.0 }, { q: 8, w: 0.3 }, { q: 9, w: 0.6 }
  ],
  "Margen": [
    { q: 0, w: 1.0 }, { q: 1, w: 1.0 }, { q: 2, w: 1.0 }, { q: 5, w: 0.6 }, { q: 8, w: 0.6 }
  ],
  "Clientes que vuelven": [
    { q: 9, w: 1.0 }
  ],
  "Talento que quiere estar": [
    { q: 3, w: 1.0 }, { q: 5, w: 1.0 }, { q: 6, w: 0.3 }
  ],
  "Capacidad de invertir": [
    { q: 2, w: 0.6 }, { q: 7, w: 0.3 }, { q: 8, w: 1.0 }
  ],
  "Resiliencia": [
    { q: 0, w: 0.6 }, { q: 3, w: 0.6 }, { q: 4, w: 1.0 }, { q: 6, w: 0.6 }, { q: 9, w: 0.3 }
  ],
  "Opcionalidad": [
    { q: 4, w: 0.6 }, { q: 6, w: 1.0 }, { q: 7, w: 0.6 }
  ]
};

const INDICATOR_LABELS = [
  "Diferenciación defendible",
  "Margen",
  "Clientes que vuelven",
  "Talento que quiere estar",
  "Capacidad de invertir",
  "Resiliencia",
  "Opcionalidad"
];

const PALANCA_DESCRIPTIONS = {
  0: { name: "Ciclos de decisión", text: "Tus decisiones pasan por demasiadas manos. Cada handoff agrega costo, demora y error." },
  1: { name: "Señal que guía", text: "Tu información llega tarde. Las decisiones se toman sin datos — o con datos viejos." },
  2: { name: "Fricción", text: "Tu energía se gasta coordinando y corrigiendo. Cada hora que va a eso no va a producir ni a mejorar." },
  3: { name: "Miedo estructural", text: "En tu empresa equivocarse sale caro. Entonces nadie decide — y eso cuesta más que cualquier error." },
  4: { name: "Atractores", text: "Los cambios no pegan porque los incentivos reales no cambiaron. El sistema vuelve a donde estaba." },
  5: { name: "Compensación", text: "Tu gente no ve cómo su trabajo impacta. Sin esa conexión, el esfuerzo se dispersa." },
  6: { name: "Holgura", text: "Todo es urgente. Sin espacio para pensar, no hay adaptación — solo reacción." },
  7: { name: "Operación e innovación", text: "Probar algo nuevo rompe lo que funciona. La innovación compite con la operación y siempre pierde." },
  8: { name: "Delegación a IA", text: "No hay criterio de qué automatizar y qué no. La tecnología no está cambiando cómo se decide." },
  9: { name: "Aprendizaje del sistema", text: "El aprendizaje depende de personas, no del sistema. Cuando alguien se va, se va lo que sabe." }
};

// Map question index to which indicators it affects (for palanca impact calc)
const Q_TO_INDICATORS = {};
for (const [ind, weights] of Object.entries(INDICATOR_WEIGHTS)) {
  for (const { q, w } of weights) {
    if (!Q_TO_INDICATORS[q]) Q_TO_INDICATORS[q] = [];
    Q_TO_INDICATORS[q].push({ indicator: ind, weight: w });
  }
}

// State
let currentQuestion = 0;
let answers = new Array(10).fill(null);

// DOM
function initDiagnostic() {
  renderQuestion(0);
}

function renderQuestion(index) {
  const container = document.getElementById("questions-area");
  const q = QUESTIONS[index];

  container.innerHTML = `
    <div class="question-container active" id="q-${index}">
      <div class="question-text">${q.text}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <div class="option" data-value="${i + 1}" onclick="selectOption(${index}, ${i + 1}, this)">
            ${opt}
          </div>
        `).join("")}
      </div>
      <div class="revelation" id="rev-${index}">${q.revelation}</div>
    </div>
  `;

  // Update progress
  document.getElementById("progress-fill").style.width = `${((index) / 10) * 100}%`;
  document.getElementById("progress-label").textContent = `${index + 1} de 10`;
}

function selectOption(qIndex, value, element) {
  // Don't allow re-selection
  if (answers[qIndex] !== null) return;

  answers[qIndex] = value;

  // Visual feedback
  document.querySelectorAll(`#q-${qIndex} .option`).forEach(o => o.style.pointerEvents = "none");
  element.classList.add("selected");

  // Show revelation
  const rev = document.getElementById(`rev-${qIndex}`);
  rev.classList.add("visible");

  // Auto-advance after delay
  setTimeout(() => {
    if (qIndex < 9) {
      currentQuestion = qIndex + 1;
      renderQuestion(currentQuestion);
      // Smooth scroll to question area
      document.getElementById("diagnostic").scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // All done — show results
      showResults();
    }
  }, 3500);
}

function calculateIndicatorScores() {
  const scores = {};
  for (const indicator of INDICATOR_LABELS) {
    const weights = INDICATOR_WEIGHTS[indicator];
    let sumWeighted = 0;
    let sumWeights = 0;
    for (const { q, w } of weights) {
      sumWeighted += (answers[q] || 1) * w;
      sumWeights += w;
    }
    const avg = sumWeighted / sumWeights;
    scores[indicator] = Math.round(((avg - 1) / 3) * 100);
  }
  return scores;
}

function getProfile(total) {
  if (total <= 17) return { name: "CIMIENTOS AUSENTES", class: "absent" };
  if (total <= 25) return { name: "CIMIENTOS PARCIALES", class: "partial" };
  if (total <= 33) return { name: "CIMIENTOS EN CONSTRUCCIÓN", class: "building" };
  return { name: "CIMIENTOS SÓLIDOS", class: "solid" };
}

function getNarrative(profileClass, indicatorScores, answers) {
  // Find weakest and strongest indicators
  const sorted = INDICATOR_LABELS.map(l => ({ label: l, score: indicatorScores[l] }))
    .sort((a, b) => a.score - b.score);
  const weakest = sorted[0];
  const secondWeakest = sorted[1];
  const strongest = sorted[sorted.length - 1];

  // Find weakest mechanisms (questions with lowest scores)
  const mechWeak = answers
    .map((score, i) => ({ index: i, score, name: PALANCA_DESCRIPTIONS[i].name }))
    .sort((a, b) => a.score - b.score);
  const weakMech1 = mechWeak[0];
  const weakMech2 = mechWeak[1];

  // Weakness-specific sentences
  const weaknessPhrases = {
    "Diferenciación defendible": "Lo que te diferencia no está protegido. Si mañana un competidor copia lo que hacés, ¿qué te queda?",
    "Margen": "Tu margen se está comprimiendo — y la causa probablemente no está donde creés. La estructura importa más que el esfuerzo.",
    "Clientes que vuelven": "Lo que tu empresa ofrece no importa lo suficiente como para que vuelvan. Si un cliente se va, preguntate: ¿se fue por precio o porque lo que hacés no le cambió nada?",
    "Talento que quiere estar": "Tu mejor gente no tiene las condiciones para dar lo mejor de sí — significado, autonomía, desafío o conexión faltan. Eso no se resuelve con bonos.",
    "Capacidad de invertir": "La energía de tu empresa se gasta en mantener, no en mejorar. Sin capacidad de invertir, no hay evolución posible.",
    "Resiliencia": "Tu empresa es frágil. Un shock — un cliente que se va, una persona clave que renuncia, un cambio regulatorio — y todo se desestabiliza.",
    "Opcionalidad": "Estás atrapado en lo que ya hacés. Sin holgura ni experimentación, no podés elegir hacia dónde ir."
  };

  // Strength acknowledgment
  const strengthPhrases = {
    "Diferenciación defendible": "tenés algo que otros no pueden copiar fácil",
    "Margen": "tu estructura de captura funciona",
    "Clientes que vuelven": "tus clientes vuelven — eso es señal real",
    "Talento que quiere estar": "tu gente quiere estar — eso es la base",
    "Capacidad de invertir": "generás capacidad para mejorar",
    "Resiliencia": "podés absorber golpes sin colapsar",
    "Opcionalidad": "tenés espacio para elegir"
  };

  // Mechanism-specific observations
  const mechPhrases = {
    0: "Las decisiones pasan por demasiadas manos antes de ejecutarse.",
    1: "La información existe pero no llega al momento de decidir.",
    2: "Demasiada energía se gasta coordinando y corrigiendo.",
    3: "Equivocarse sale caro — entonces nadie decide.",
    4: "Los cambios no se sostienen porque los incentivos no cambiaron.",
    5: "Tu gente no ve el impacto de lo que hace en el resultado.",
    6: "No hay espacio para pensar — todo es urgente.",
    7: "La innovación compite con la operación y siempre pierde.",
    8: "La tecnología no está cambiando cómo se decide.",
    9: "El aprendizaje se va con las personas — no queda en el sistema."
  };

  // Build dynamic narrative — unique per person's specific weak/strong combination
  const paragraphs = [];
  const total = answers.reduce((a, b) => a + b, 0);

  // --- PARAGRAPH 1: Opening (profile + strongest indicator) ---
  if (profileClass === "absent") {
    paragraphs.push("Tu empresa funciona. Pero funciona porque vos la empujás todos los días.");
  } else if (profileClass === "partial") {
    const openings = {
      "Diferenciación defendible": "Tu empresa tiene algo propio — algo que otros no copian fácil. Pero eso solo no alcanza.",
      "Margen": "Tu estructura captura valor. No es poco. Pero los cimientos que lo sostienen son frágiles.",
      "Clientes que vuelven": "Tus clientes vuelven — y eso es la señal más difícil de fabricar. Pero hay mecanismos que la están debilitando.",
      "Talento que quiere estar": "Tu gente quiere estar. Eso es raro y valioso. Pero hay cosas que anulan esa ventaja.",
      "Capacidad de invertir": "Generás espacio para mejorar. Eso te pone adelante. Pero ese espacio se desperdicia si los mecanismos base no funcionan.",
      "Resiliencia": "Tu empresa aguanta golpes. Eso es una base real. Pero resistir no es lo mismo que prosperar.",
      "Opcionalidad": "Tenés espacio para elegir — y eso vale más de lo que parece. Pero las opciones no sirven si los cimientos no las sostienen."
    };
    paragraphs.push(openings[strongest.label]);
  } else if (profileClass === "building") {
    paragraphs.push(`Tu empresa tiene bases reales — ${strengthPhrases[strongest.label]}. La pregunta ya no es si funciona, sino dónde está el valor que dejás sobre la mesa.`);
  } else {
    paragraphs.push("Tu empresa prospera por diseño, no por esfuerzo. Eso es raro — y no es casualidad.");
  }

  // --- PARAGRAPH 2: Specific weakness diagnosis (indicator + mechanisms) ---
  if (profileClass === "absent") {
    paragraphs.push(`${mechPhrases[weakMech1.index]} ${mechPhrases[weakMech2.index]} No es falta de esfuerzo — es que los cimientos no están construidos.`);
  } else if (profileClass === "partial") {
    paragraphs.push(`${weaknessPhrases[weakest.label]} Y a nivel operativo: ${mechPhrases[weakMech1.index].toLowerCase()}`);
  } else if (profileClass === "building") {
    paragraphs.push(`${weaknessPhrases[weakest.label]}`);
    if (secondWeakest.score < 50) {
      paragraphs.push(`${weaknessPhrases[secondWeakest.label]}`);
    }
  } else {
    const weakAreas = sorted.filter(s => s.score < 67);
    if (weakAreas.length > 0) {
      paragraphs.push(`Donde queda espacio: ${weaknessPhrases[weakAreas[0].label].toLowerCase()}`);
    } else {
      paragraphs.push(`Los mecanismos principales están operando. ${strongest.score === 100 ? "Y en " + strongest.label.toLowerCase() + " estás al máximo." : "El sistema genera prosperidad de forma sostenida."}`);
    }
  }

  // --- PARAGRAPH 3: Mechanism-specific bridge (what connects weakness to action) ---
  if (profileClass === "absent") {
    paragraphs.push("No es un tema de actitud — es estructural. Los sistemas tienen estados por defecto, y el tuyo vuelve al mismo lugar después de cada intento de cambio. Eso se puede cambiar, pero no empujando más fuerte — se cambia moviendo lo que sostiene el estado actual.");
  } else if (profileClass === "partial") {
    // Pick a mechanism that ISN'T the weakest (to add variety from P2)
    const thirdMech = mechWeak[2] || mechWeak[1];
    if (thirdMech.score <= 2) {
      paragraphs.push(`Hay otro mecanismo que pesa: ${mechPhrases[thirdMech.index].toLowerCase()} Cuando se acumulan, cada uno frena al otro.`);
    }
  } else if (profileClass === "building") {
    paragraphs.push(`El mecanismo más débil: ${mechPhrases[weakMech1.index].toLowerCase()} Resolver eso tiene efecto cascada sobre ${weakest.label.toLowerCase()} y ${secondWeakest.label.toLowerCase()}.`);
  }
  // solid: no P3 needed

  // --- PARAGRAPH 4: Closing (profile-specific call to reflection) ---
  if (profileClass === "absent") {
    paragraphs.push("Hay 10 mecanismos que hacen próspera a una empresa. La mayoría no están operando en la tuya. Pero cada uno se puede construir — cuando sabés cuál y en qué orden.");
  } else if (profileClass === "partial") {
    paragraphs.push("La prosperidad no viene de resolver todo a la vez — viene de identificar cuáles cimientos faltan y en qué orden construirlos. Los tuyos están claros.");
  } else if (profileClass === "building") {
    paragraphs.push("La diferencia entre una empresa buena y una que prospera no es más esfuerzo — es saber qué mover y qué dejar de hacer.");
  } else {
    paragraphs.push("Si querés comprimir tiempos con IA, explorar nuevos modelos, o escalar sin agregar complejidad — eso sí es conversación.");
  }

  return paragraphs;
}

function getTopPalancas(answers) {
  const palancas = [];
  for (let i = 0; i < 10; i++) {
    if (answers[i] <= 2) {
      let totalWeight = 0;
      const indicators = [];
      if (Q_TO_INDICATORS[i]) {
        for (const { indicator, weight } of Q_TO_INDICATORS[i]) {
          totalWeight += weight;
          indicators.push(indicator);
        }
      }
      palancas.push({
        qIndex: i,
        score: answers[i],
        totalWeight,
        indicators: [...new Set(indicators)],
        ...PALANCA_DESCRIPTIONS[i]
      });
    }
  }
  palancas.sort((a, b) => b.totalWeight - a.totalWeight);
  return palancas.slice(0, 3);
}

function getBarColor(pct) {
  if (pct <= 25) return "var(--danger)";
  if (pct <= 50) return "var(--warning)";
  if (pct <= 75) return "#3b82f6";
  return "var(--success)";
}

function showResults() {
  const total = answers.reduce((a, b) => a + b, 0);
  const profile = getProfile(total);
  const indicatorScores = calculateIndicatorScores();
  const narrative = getNarrative(profile.class, indicatorScores, answers);
  const palancas = getTopPalancas(answers);

  // Hide diagnostic, show results
  document.getElementById("diagnostic").style.display = "none";
  const results = document.getElementById("results");
  results.classList.add("visible");

  // Profile
  document.getElementById("result-badge").textContent = profile.name;
  document.getElementById("result-badge").className = `score-badge ${profile.class}`;
  document.getElementById("result-score").innerHTML = `${total}<span>/40</span>`;

  // Narrative
  document.getElementById("result-narrative").innerHTML = narrative.map(p => `<p>${p}</p>`).join("");

  // Radar chart
  drawRadar(indicatorScores);

  // Indicator bars
  const barsContainer = document.getElementById("indicator-bars");
  barsContainer.innerHTML = INDICATOR_LABELS.map(label => {
    const pct = indicatorScores[label];
    return `
      <div class="indicator-row">
        <div class="indicator-header">
          <span class="indicator-name">${label}</span>
          <span class="indicator-pct" style="color: ${getBarColor(pct)}">${pct}%</span>
        </div>
        <div class="indicator-bar">
          <div class="indicator-bar-fill" style="width: 0%; background: ${getBarColor(pct)}"></div>
        </div>
      </div>
    `;
  }).join("");

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll(".indicator-bar-fill").forEach((bar, i) => {
      bar.style.width = `${indicatorScores[INDICATOR_LABELS[i]]}%`;
    });
  }, 100);

  // Palancas
  const palancasContainer = document.getElementById("palancas-list");
  if (palancas.length > 0) {
    palancasContainer.innerHTML = palancas.map((p, i) => `
      <div class="palanca-card">
        <div class="palanca-name">${i + 1}. ${p.name}</div>
        <div class="palanca-impacts">Impacta: ${p.indicators.join(" · ")}</div>
        <div class="palanca-text">${p.text}</div>
      </div>
    `).join("");
  } else {
    document.querySelector(".palancas").style.display = "none";
  }

  // Scroll to results
  results.scrollIntoView({ behavior: "smooth" });

  // Update progress bar
  document.getElementById("progress-fill").style.width = "100%";
}

function drawRadar(scores) {
  const canvas = document.getElementById("radar-chart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = Math.min(canvas.parentElement.offsetWidth, 400);
  canvas.width = size;
  canvas.height = size;

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.35;
  const labels = INDICATOR_LABELS;
  const n = labels.length;

  // Clear
  ctx.clearRect(0, 0, size, size);

  // Draw grid circles
  for (let level = 1; level <= 4; level++) {
    const r = (radius * level) / 4;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axes
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw data
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
    const value = scores[labels[idx]] / 100;
    const r = radius * Math.max(value, 0.05);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.fillStyle = "rgba(255, 102, 0, 0.15)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 102, 0, 0.8)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw points
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const value = scores[labels[i]] / 100;
    const r = radius * Math.max(value, 0.05);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#FF6600";
    ctx.fill();
  }

  // Draw labels
  ctx.font = `${size < 350 ? 10 : 12}px Inter, sans-serif`;
  ctx.fillStyle = "#9999aa";
  ctx.textAlign = "center";
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const labelR = radius + (size < 350 ? 28 : 36);
    let x = cx + labelR * Math.cos(angle);
    let y = cy + labelR * Math.sin(angle);

    // Adjust label position
    if (angle > Math.PI * 0.25 && angle < Math.PI * 0.75) y += 8;
    if (angle > -Math.PI * 0.75 && angle < -Math.PI * 0.25) y -= 4;

    // Word wrap for long labels
    const words = labels[i].split(" ");
    if (words.length > 2) {
      const mid = Math.ceil(words.length / 2);
      ctx.fillText(words.slice(0, mid).join(" "), x, y - 7);
      ctx.fillText(words.slice(mid).join(" "), x, y + 7);
    } else {
      ctx.fillText(labels[i], x, y);
    }
  }
}

// Start button
function startDiagnostic() {
  document.getElementById("hero").style.display = "none";
  document.getElementById("diagnostic").style.display = "flex";
  document.getElementById("diagnostic").scrollIntoView({ behavior: "smooth" });
  initDiagnostic();
}

// Init on load
document.addEventListener("DOMContentLoaded", () => {
  // Nothing auto-starts — user clicks CTA
});
