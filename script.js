(() => {
  "use strict";

  /* =========================================================
     1. BANCO DE TEMAS CURADOS
     ========================================================= */

  const TOPICS = [
    "La paradoja del abuelo en los viajes en el tiempo",
    "El efecto Mandela y la memoria colectiva",
    "El manuscrito Voynich, el libro que nadie ha descifrado",
    "El incidente del paso Dyatlov",
    "Los círculos en los cultivos y sus posibles orígenes",
    "El sonido Bloop grabado en el océano Pacífico",
    "Islas fantasma que aparecieron en mapas durante siglos",
    "Ciudades subterráneas como Derinkuyu",
    "El experimento Filadelfia y sus leyendas",
    "La máquina de Antikitera, la primera computadora conocida",
    "Los cultos de carga surgidos en el Pacífico",
    "El Triángulo de las Bermudas",
    "Animales capaces de regenerar órganos completos",
    "El Reloj del Apocalipsis y quién decide la hora",
    "La luz de Marfa, un fenómeno lumínico sin explicación",
    "Pueblos que fueron abandonados de la noche a la mañana",
    "Los ovnis reales según archivos militares desclasificados",
    "El código genético compartido entre especies muy distintas",
    "Las Torres del Silencio y los ritos funerarios zoroástricos",
    "La ciudad perdida de Ciudad Blanca en Honduras",
    "El fenómeno de la generación espontánea de fuego en cuerpos",
    "Los relojes biológicos y por qué el jet lag afecta distinto a cada persona",
    "El lenguaje silbado de La Gomera",
    "Los números primos gemelos y su misterio sin resolver",
    "La conjetura de Collatz, un problema matemático aparentemente simple",
    "El fenómeno de la sinestesia, ver colores al escuchar música",
    "Los perros que predicen terremotos antes que los sismógrafos",
    "El Área 51 y la historia real detrás del secreto",
    "Los faros que se apagaron sin nadie dentro",
    "La ciudad de Pompeya congelada en un instante",
    "El fenómeno de la Nube de Morning Glory en Australia",
    "Las plantas que se comunican mediante señales químicas subterráneas",
    "El misterio del Mary Celeste, el barco hallado sin tripulación",
    "El culto a los cargamentos de la Segunda Guerra Mundial",
    "La teoría de los universos paralelos en la física cuántica",
    "Los sueños compartidos y la posibilidad de una mente colectiva",
    "El fenómeno Baader-Meinhof, cuando algo nuevo aparece por todas partes",
    "El pueblo de Hoia Baciu, el bosque más embrujado del mundo",
    "La desaparición del vuelo MH370",
    "El fenómeno de la combustión espontánea en edificios",
    "Los idiomas artificiales creados para experimentos sociales",
    "El síndrome de la Bella Durmiente, dormir semanas seguidas",
    "El descubrimiento de microplásticos en las nubes",
    "Los templos hindúes construidos con precisión astronómica",
    "La hipótesis del mundo simulado",
    "El pulpo Paul y los animales que predicen resultados deportivos",
    "El colapso de la civilización de la Isla de Pascua",
    "Los agujeros negros que emiten sonido en clave musical",
    "El experimento de la prisión de Stanford",
    "Las auroras boreales que se pueden escuchar",
    "El fenómeno de la risa contagiosa de Tanganica en 1962",
    "Los ríos que cambian de color de un día para otro",
    "El manuscrito de Rohonc, otro texto sin descifrar",
    "La teoría de la Tierra hueca y quiénes la defendieron en serio",
    "Los delfines que se llaman entre sí por nombre propio",
    "Las supercélulas y por qué generan tornados tan precisos",
    "El fenómeno de la memoria eidética, recordarlo todo",
    "Las ciudades que se construyeron sobre otras ciudades enterradas",
    "El eclipse que detuvo una guerra en la antigua Grecia",
    "Los cementerios de elefantes, mito o realidad",
    "El código Enigma y la carrera para romperlo",
    "El fenómeno de la deriva continental antes de que se aceptara como ciencia",
    "Los hongos que controlan el comportamiento de los insectos",
    "El misterio de las Pirámides de Bosnia",
    "Las tribus que nunca han tenido contacto con el resto del mundo",
    "El experimento de la doble rendija y el observador cuántico",
    "La Gran Mancha de Basura del Pacífico",
    "El fenómeno de la voz interior y por qué no todos la tienen",
    "Los cementerios de barcos abandonados en el mar de Aral",
    "El extraño caso de los gatos que caen siempre de pie",
    "Las civilizaciones que desaparecieron sin guerra ni desastre aparente",
    "El fenómeno de deja vu explicado por la neurociencia",
    "Los bosques sincronizados que florecen el mismo día",
    "El misterio de las líneas de Nazca",
    "La ciudad de Chernóbil treinta años después, tomada por la naturaleza",
    "El fenómeno de las tormentas de arena electrificadas",
    "Los relatos de marineros sobre luces bajo el agua",
    "El experimento mental del gato de Schrödinger explicado sin fórmulas",
    "La hipótesis de que los pulpos llegaron del espacio en cometas",
    "El pueblo que canta en vez de hablar, en Kuşköy, Turquía",
    "Los archivos perdidos de la Biblioteca de Alejandría",
    "El fenómeno del fuego de San Telmo en los barcos",
    "Las matemáticas ocultas en la disposición de los girasoles",
    "El misterio de las Piedras de Georgia",
    "La verdadera historia detrás del motín del Bounty",
    "El fenómeno de los relámpagos catatumbo en Venezuela",
    "Las ciudades japonesas que desaparecieron tras un solo tsunami",
    "El extraño comportamiento cuántico del entrelazamiento",
    "Los rituales de las tribus que usan trance para sanar",
    "El misterio de la nave fantasma Baychimo, a la deriva por 38 años",
    "La teoría del multiverso cíclico",
    "Los glaciares que cantan antes de romperse",
    "El fenómeno de las supertormentas solares y el evento Carrington",
    "Las abejas que bailan para dar direcciones exactas",
    "El misterio del Hombre de Somerton, jamás identificado",
    "Las cuevas de cristal de Naica, gigantes bajo tierra",
    "El fenómeno psicológico del efecto espectador",
    "La búsqueda de la Atlántida y sus candidatos reales",
    "El extraño caso de los relojes que se detuvieron todos a la misma hora",
    "Las plantas carnívoras que cuentan hasta tres antes de cerrarse",
    "El misterio de las bolas de fuego que persiguen a los aviones",
    "La teoría de que la Luna es hueca según datos sísmicos de la NASA",
    "El fenómeno de la resonancia Schumann, el latido de la Tierra",
    "Los pueblos que viven bajo tierra en Coober Pedy, Australia",
    "El misterio del faro de Eilean Mor, sin guardianes ni explicación",
    "Las medusas inmortales que pueden revertir su propio envejecimiento",
    "El código secreto detrás de los tambores parlantes africanos",
    "La teoría del big bounce como alternativa al Big Bang",
    "Los cementerios de meteoritos en la Antártida",
    "El misterio de las cuevas de Longyou en China",
    "Las ciudades construidas para desaparecer sin dejar huella",
    "El fenómeno de la telepatía en gemelos idénticos",
    "La verdadera historia del hombre que sobrevivió a dos bombas atómicas",
  ];

  /* =========================================================
     2. GENERADOR COMBINATORIO (para variedad prácticamente infinita)
     ========================================================= */

  const LUGARES = [
    "el Ártico", "una isla desierta", "el fondo del océano", "un pueblo abandonado",
    "la Antártida", "una ciudad subterránea", "el desierto de Atacama", "un bosque milenario",
    "una estación espacial", "un archipiélago remoto", "el borde de un volcán activo",
    "una cueva sin explorar", "un glaciar en retroceso", "una isla flotante de basura",
    "una mina abandonada", "un pueblo sin electricidad desde hace décadas",
  ];

  const FENOMENOS = [
    "luces que nadie ha podido explicar", "desapariciones que ocurren siempre en el mismo punto",
    "sonidos que se repiten cada cierto tiempo exacto", "cambios de clima demasiado repentinos",
    "migraciones animales fuera de temporada", "apagones que suceden al mismo segundo en distintos países",
    "olores sin ningún origen conocido", "mareas que se comportan al revés de lo esperado",
    "señales de radio que se repiten en un patrón fijo", "temblores que no coinciden con ninguna falla sísmica",
  ];

  const SUJETOS = [
    "los pulpos", "las plantas", "los hongos", "las abejas", "los delfines", "los cuervos",
    "las bacterias", "los virus", "las auroras boreales", "los agujeros negros",
    "los sueños lúcidos", "la música", "los idiomas extintos", "las civilizaciones perdidas",
    "los relojes atómicos", "las hormigas",
  ];

  const ACCIONES = [
    "tener una forma de conciencia distinta a la nuestra",
    "comunicarse de maneras que todavía no entendemos",
    "anticipar eventos antes de que ocurran",
    "alterar el paso del tiempo a su alrededor",
    "conservar memorias de generaciones anteriores",
    "influir en el clima a escala global",
    "sincronizarse sin ningún contacto físico entre sí",
    "sobrevivir a una extinción casi total",
    "ocultar patrones matemáticos en su propio comportamiento",
    "responder a estímulos que no deberían poder percibir",
  ];

  const COSAS = [
    "los sueños", "las migrañas", "los números primos", "el moho", "las mareas",
    "los terremotos", "la intuición", "el jet lag", "los patrones de tráfico",
    "los mercados financieros", "los enjambres de aves", "el lenguaje de señas",
    "los rituales antiguos", "las redes neuronales", "los volcanes dormidos",
    "las hormigas", "los relojes biológicos", "los agujeros de gusano",
    "las civilizaciones perdidas", "la gravedad cuántica",
  ];

  const EVENTOS = [
    "un pueblo entero desapareció sin dejar rastro",
    "la marea se retiró y no volvió durante horas",
    "miles de aves cayeron del cielo al mismo tiempo",
    "un iceberg gigante se partió en completo silencio",
    "un satélite dejó de responder sin ninguna razón aparente",
    "un río cambió de color de un día para otro",
    "una ciudad entera perdió la electricidad en el mismo instante",
    "el mismo sonido se escuchó en tres continentes distintos",
    "un bosque floreció fuera de temporada en una sola noche",
  ];

  const AFIRMACIONES = [
    "el tiempo no fluye igual para todos los objetos",
    "existen universos paralelos que a veces se rozan con el nuestro",
    "la conciencia podría ser un fenómeno cuántico",
    "los sueños comparten un lenguaje universal entre culturas",
    "algunas civilizaciones antiguas conocían astronomía que hoy nos sorprende",
    "la memoria podría heredarse genéticamente",
    "el ADN humano guarda señales que aún no sabemos traducir",
    "los animales perciben desastres antes que cualquier instrumento",
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickTwoDistinct(arr) {
    const a = pick(arr);
    let b = pick(arr);
    let guard = 0;
    while (b === a && guard++ < 10) b = pick(arr);
    return [a, b];
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function withDe(str) {
    return str.startsWith("el ") ? "del " + str.slice(3) : "de " + str;
  }

  const TEMPLATES = [
    () => `El misterio de ${withDe(pick(LUGARES))} y ${pick(FENOMENOS)}`,
    () => `¿Por qué ${pick(SUJETOS)} podrían ${pick(ACCIONES)}?`,
    () => {
      const [a, b] = pickTwoDistinct(COSAS);
      return `La extraña conexión entre ${a} y ${b}`;
    },
    () => `El día que ${pick(EVENTOS)}`,
    () => `La teoría de que ${pick(AFIRMACIONES)}`,
    () => `Lo que nadie explica sobre ${pick(FENOMENOS)} en ${pick(LUGARES)}`,
    () => `¿Y si ${pick(SUJETOS)} llevan más tiempo entendiendo ${pick(COSAS)} que nosotros?`,
  ];

  function generateFromTemplate() {
    const fn = pick(TEMPLATES);
    return capitalize(fn());
  }

  let lastTopic = "";

  function generateTopic() {
    let topic;
    let guard = 0;
    do {
      topic = Math.random() < 0.55 ? pick(TOPICS) : generateFromTemplate();
      guard++;
    } while (topic === lastTopic && guard < 6);
    lastTopic = topic;
    return topic;
  }

  /* =========================================================
     3. TABLERO SPLIT-FLAP
     ========================================================= */

  const ROWS = 3;
  const board = document.getElementById("board");
  const counterLabel = document.getElementById("counterLabel");
  const historyList = document.getElementById("historyList");
  const generateBtn = document.getElementById("generateBtn");

  let cols = 18;
  let cells = [];
  let currentRawText = "";
  let animating = false;
  let count = 0;

  function computeCols() {
    const w = window.innerWidth;
    if (w < 400) return 10;
    if (w < 560) return 12;
    if (w < 760) return 15;
    return 18;
  }

  function wrapText(text, colCount, rowCount) {
    const upper = text.toUpperCase();
    const words = upper.split(" ");
    const lines = [];
    let current = "";

    for (let word of words) {
      if (word.length > colCount) {
        if (current) {
          lines.push(current);
          current = "";
        }
        while (word.length > colCount) {
          lines.push(word.slice(0, colCount));
          word = word.slice(colCount);
        }
        current = word;
        continue;
      }
      const candidate = current ? current + " " + word : word;
      if (candidate.length <= colCount) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);

    if (lines.length > rowCount) {
      lines.length = rowCount;
      let last = lines[rowCount - 1].trim();
      if (last.length > colCount - 1) last = last.slice(0, colCount - 1);
      lines[rowCount - 1] = last + "…";
    }

    while (lines.length < rowCount) lines.push("");

    const padded = lines.map((l) => l.padEnd(colCount, " ").slice(0, colCount));
    return padded.join("").split("");
  }

  function buildBoard() {
    board.innerHTML = "";
    board.style.setProperty("--cols", cols);
    cells = [];

    const total = cols * ROWS;
    for (let i = 0; i < total; i++) {
      const flap = document.createElement("div");
      flap.className = "flap";

      const inner = document.createElement("div");
      inner.className = "flap-inner";

      const front = document.createElement("div");
      front.className = "flap-face flap-front";
      front.textContent = " ";

      const back = document.createElement("div");
      back.className = "flap-face flap-back";
      back.textContent = " ";

      inner.appendChild(front);
      inner.appendChild(back);
      flap.appendChild(inner);
      board.appendChild(flap);

      cells.push({ flap, inner, front, back, current: " " });
    }
  }

  function setChar(cell, ch) {
    if (cell.current === ch) return;
    const display = ch === " " ? " " : ch;
    cell.back.textContent = display;

    const onEnd = (e) => {
      if (e.propertyName !== "transform") return;
      cell.inner.removeEventListener("transitionend", onEnd);
      cell.inner.style.transition = "none";
      cell.inner.classList.remove("flip");
      cell.front.textContent = display;
      // force reflow so the transition removal takes effect before restoring it
      void cell.inner.offsetHeight;
      cell.inner.style.transition = "";
      cell.current = ch;
    };
    cell.inner.addEventListener("transitionend", onEnd);
    cell.inner.classList.add("flip");
  }

  function renderText(text, animate) {
    const chars = wrapText(text, cols, ROWS);
    let changedCount = 0;

    chars.forEach((ch, i) => {
      const cell = cells[i];
      if (!cell || cell.current === ch) return;

      if (!animate) {
        const display = ch === " " ? " " : ch;
        cell.front.textContent = display;
        cell.back.textContent = display;
        cell.current = ch;
        return;
      }

      const delay = changedCount * 16 + Math.random() * 60;
      changedCount++;
      setTimeout(() => setChar(cell, ch), delay);
    });

    return changedCount;
  }

  function pushHistory(topic) {
    const li = document.createElement("li");
    li.textContent = topic;
    historyList.insertBefore(li, historyList.firstChild);
    while (historyList.children.length > 5) {
      historyList.removeChild(historyList.lastChild);
    }
  }

  function handleGenerate() {
    if (animating) return;
    const topic = generateTopic();
    currentRawText = topic;
    count++;
    counterLabel.textContent = "TEMA " + String(count).padStart(3, "0");

    const changed = renderText(topic, true);
    if (count > 1) pushHistory(topic);

    animating = true;
    generateBtn.disabled = true;
    generateBtn.classList.add("spinning");

    const totalTime = changed * 16 + 500;
    setTimeout(() => {
      animating = false;
      generateBtn.disabled = false;
      generateBtn.classList.remove("spinning");
    }, totalTime);
  }

  function handleResize() {
    const next = computeCols();
    if (next === cols) return;
    cols = next;
    buildBoard();
    if (currentRawText) renderText(currentRawText, false);
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 150);
  });

  generateBtn.addEventListener("click", handleGenerate);

  /* =========================================================
     4. INIT
     ========================================================= */

  cols = computeCols();
  buildBoard();
  currentRawText = "PRESIONA GENERAR";
  renderText(currentRawText, false);
})();
