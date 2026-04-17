// --- Navegación ---
function mostrar(id, link) {
  document
    .querySelectorAll(".seccion")
    .forEach((s) => s.classList.remove("activa"));
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.remove("activo"));
  document.getElementById(id).classList.add("activa");
  link.classList.add("activo");
}

// --- S1: innerHTML ---
document.getElementById("out-innerhtml").innerHTML =
  "Nombre: <b>Luis Diaz</b> | Edad: 20 | Carrera: Ingeniería en Software | Ciudad: Los Mochis";

function logConsola() {
  console.log("Nombre: Luis Diaz");
  console.log("Edad: 20");
  console.log("Carrera: Ingeniería en Software");
  const el = document.getElementById("out-console");
  el.style.display = "block";
  el.textContent =
    "Datos enviados a la consola.\nAbre DevTools (F12) para verlos.";
}

// --- S2: Variables fijas ---
(function() {
  const a = 15,
    b = 4;
  document.getElementById("s2-res").innerHTML =
    `<div class="resultado">Suma:           ${a} + ${b} = ${a + b}</div>` +
    `<div class="resultado">Resta:          ${a} - ${b} = ${a - b}</div>` +
    `<div class="resultado">División:       ${a} / ${b} = ${(a / b).toFixed(4)}</div>` +
    `<div class="resultado">Exponenciación: ${a} ^ ${b} = ${a ** b}</div>`;
})();

// --- S3: Formulario aritmético ---
function operar(op) {
  const a = parseFloat(document.getElementById("f3a").value);
  const b = parseFloat(document.getElementById("f3b").value);
  const res = document.getElementById("f3-res");
  res.style.display = "block";
  if (isNaN(a) || isNaN(b)) {
    res.textContent = "Ingresa valores válidos en ambos campos.";
    return;
  }
  if (op === "suma") res.textContent = `Suma: ${a} + ${b} = ${a + b}`;
  if (op === "resta") res.textContent = `Resta: ${a} - ${b} = ${a - b}`;
  if (op === "division") {
    if (b === 0) {
      res.textContent = "Error: no se puede dividir entre cero.";
      return;
    }
    res.textContent = `División: ${a} / ${b} = ${(a / b).toFixed(4)}`;
  }
  if (op === "exp")
    res.textContent = `Exponenciación: ${a} ^ ${b} = ${a ** b}`;
}

// --- S4: Cuadrática ---
function calcCuadratica() {
  const a = parseFloat(document.getElementById("f4a").value);
  const b = parseFloat(document.getElementById("f4b").value);
  const c = parseFloat(document.getElementById("f4c").value);
  const res = document.getElementById("f4-res");
  res.style.display = "block";
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    res.textContent = "Ingresa valores válidos.";
    return;
  }
  if (a === 0) {
    res.textContent = 'El coeficiente "a" no puede ser 0.';
    return;
  }
  const disc = b ** 2 - 4 * a * c;
  if (disc > 0) {
    const x1 = (-b + Math.sqrt(disc)) / (2 * a);
    const x2 = (-b - Math.sqrt(disc)) / (2 * a);
    res.textContent = `Discriminante: ${disc} — dos raíces reales\nx₁ = ${x1.toFixed(4)}\nx₂ = ${x2.toFixed(4)}`;
  } else if (disc === 0) {
    const x = -b / (2 * a);
    res.textContent = `Discriminante: 0 — raíz doble\nx₁ = x₂ = ${x.toFixed(4)}`;
  } else {
    const real = (-b / (2 * a)).toFixed(4);
    const imag = (Math.sqrt(Math.abs(disc)) / (2 * a)).toFixed(4);
    res.textContent = `Discriminante: ${disc} — raíces complejas\nx₁ = ${real} + ${imag}i\nx₂ = ${real} - ${imag}i`;
  }
}

// --- S5: IMC ---
function calcIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const talla = parseFloat(document.getElementById("talla").value);
  const res = document.getElementById("imc-res");
  res.style.display = "block";
  if (isNaN(peso) || isNaN(talla) || peso <= 0 || talla <= 0) {
    res.textContent = "Ingresa valores válidos.";
    return;
  }
  const imc = peso / talla ** 2;
  let clasificacion;
  if (imc < 18.5) clasificacion = "Bajo peso";
  else if (imc < 25) clasificacion = "Peso normal";
  else if (imc < 30) clasificacion = "Sobrepeso";
  else if (imc < 35) clasificacion = "Obesidad grado I";
  else if (imc < 40) clasificacion = "Obesidad grado II";
  else clasificacion = "Obesidad grado III (mórbida)";
  res.textContent = `IMC = ${peso} / (${talla})² = ${imc.toFixed(2)}\nClasificación: ${clasificacion}`;
}

// --- S6: Fecha actual con switch ---
function mostrarFecha() {
  const hoy = new Date();
  const diaSemana = hoy.getDay(); // 0=Dom … 6=Sab
  const diaMes = hoy.getDate();
  const mes = hoy.getMonth(); // 0–11
  const anio = hoy.getFullYear();

  let nombreDia;
  switch (diaSemana) {
    case 0: nombreDia = "domingo"; break;
    case 1: nombreDia = "lunes"; break;
    case 2: nombreDia = "martes"; break;
    case 3: nombreDia = "miércoles"; break;
    case 4: nombreDia = "jueves"; break;
    case 5: nombreDia = "viernes"; break;
    case 6: nombreDia = "sábado"; break;
  }

  let nombreMes;
  switch (mes) {
    case 0: nombreMes = "Enero"; break;
    case 1: nombreMes = "Febrero"; break;
    case 2: nombreMes = "Marzo"; break;
    case 3: nombreMes = "Abril"; break;
    case 4: nombreMes = "Mayo"; break;
    case 5: nombreMes = "Junio"; break;
    case 6: nombreMes = "Julio"; break;
    case 7: nombreMes = "Agosto"; break;
    case 8: nombreMes = "Septiembre"; break;
    case 9: nombreMes = "Octubre"; break;
    case 10: nombreMes = "Noviembre"; break;
    case 11: nombreMes = "Diciembre"; break;
  }

  const frase = `Hoy es ${nombreDia} ${diaMes} de ${nombreMes} del año ${anio}`;
  const contenedor = document.getElementById("s6-res");
  contenedor.classList.add("visible");
  document.getElementById("s6-texto").textContent = "→ new Date()";
  document.getElementById("s6-grande").textContent = frase;
}

// --- S7: Tablas del 1 al 10 ---
function generarTablas10() {
  const cont = document.getElementById("s7-res");
  cont.style.display = "grid";
  cont.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let html = `<div class="tabla-item"><div class="tabla-titulo">Tabla del ${i}</div>`;
    for (let j = 1; j <= 10; j++) {
      html += `${i} × ${j} = ${i * j}\n`;
    }
    html += "</div>";
    cont.innerHTML += html;
  }
}

// --- S8: Tablas hasta N ---
function generarTablasN() {
  const n = parseInt(document.getElementById("f8n").value);
  const cont = document.getElementById("s8-res");

  if (isNaN(n) || n < 1) {
    cont.style.display = "grid";
    cont.innerHTML =
      '<div class="tabla-item">Ingresa un número positivo y entero.</div>';
    return;
  }

  cont.style.display = "grid";
  cont.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    let html = `<div class="tabla-item"><div class="tabla-titulo">Tabla del ${i}</div>`;
    for (let j = 1; j <= 10; j++) {
      html += `${i} × ${j} = ${i * j}\n`;
    }
    html += "</div>";
    cont.innerHTML += html;
  }
}
