
// Mapa: botón -> sección
const map = {
  "tag-cat1": "ferreteria",
  "tag-cat2": "herrajes",
  "tag-cat3": "jardineria",
  "tag-cat4": "limpieza",
  "tag-cat5": "perneria",
  "tag-cat6": "seguridad_industrial",
  "tag-cat7": "plomeria",
  "tag-cat8": "agricola",
  "tag-cat9": "automotriz",
  "tag-cat10": "baños",
  "tag-cat11": "acc_electricos",
  "tag-cat12": "maquinas",
  "tag-cat13": "herr_mecanicas",
  "tag-cat14": "abrasivos",
  "tag-cat15": "herr_electricas",
  "tag-cat16": "herr_mano",
};

// Pre-cargamos botones y secciones
const buttons = Object.keys(map).map(id => document.getElementById(id));
const sect = Object.values(map).map(id => document.getElementById(id));

// Función que activa una categoría
function activate(buttonId) {
  // 1) Quitar selección a todos los botones
  buttons.forEach(btn => btn.classList.remove("seleccion"));

  // 2) Ocultar todas las secciones
  sect.forEach(sec => sec.classList.add("ocultar"));

  // 3) Activar el botón clickeado
  const btn = document.getElementById(buttonId);
  btn.classList.add("seleccion");

  // 4) Mostrar la sección asociada
  const sectionId = map[buttonId];
  document.getElementById(sectionId).classList.remove("ocultar");
}

// 1 solo listener para todos (delegación)
document.addEventListener("click", (e) => {
  const id = e.target.id;
  if (map[id]) activate(id);
});


/*
const buttons = document.querySelectorAll(".tag-cat");
const sections = document.querySelectorAll(".section-cat"); // pon esta clase a tus secciones

function showSection(targetId) {
    buttons.forEach(b => b.classList.remove("seleccion"));
    sections.forEach(s => s.classList.add("ocultar"));

    const btn = document.querySelector(`[data-target="${targetId}"]`);
    btn.classList.add("seleccion");

    document.getElementById(targetId).classList.remove("ocultar");
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".tag-cat");
    if (!btn) return;

    showSection(btn.dataset.target);
});
``
*/