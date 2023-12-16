import "./style.css";
import { crearPiramide } from "./src/piramide/crearPiramide.js";
import { calcularCamino } from "./src/camino-peso/calcularCamino.js";
import { actualizarListaPiramides as actualizarListaPiramides } from "./src/piramide/listaPiramides.js";

const inputAltura = document.querySelector("#altura");

window.addEventListener("load", async () => {
  actualizarListaPiramides();
});

let nodosPiramide;
let altura = 5;
agregarPiramideAldocumento(5);
inputAltura.value = 5;

/**
 * Construir piramide cuando se presione click
 */
document.querySelector("#btn-construir").addEventListener("click", (e) => {
  altura = inputAltura.value;
  altura = altura > 50 ? 50 : altura < 1 ? 1 : altura;
  agregarPiramideAldocumento(altura);
  document.querySelector("#peso").innerHTML = 0;
  ruta.innerHTML = null;
});

/**
 * Calcular camino de principio a fin en la piramide y mostrar peso total
 */
const btnCalcular = document.querySelector("#btn-calcular");
btnCalcular.addEventListener("click", () => {
  btnCalcular.disabled = true;

  const resultado = calcularCamino();
  resultado.shift(); // Eliminamos el origen por el momento

  for (let nodo of resultado) {
    const element = document.querySelector(`[data-cord="${nodo}"]`);
    element.classList.add("piramide-resaltar");
  }

  const piramide = JSON.parse(localStorage.getItem("piramide"));
  const nodos = piramide.coordenadas.reduce((acc, item) => {
    acc[item.coordenada] = item.peso;
    // console.log({acc})
    return acc;
  }, {});
  let pesoTotal = 0;
  for (let nodo of resultado) {
    pesoTotal += nodos[nodo];
  }

  generarRuta(resultado);

  document.querySelector("#peso").innerHTML = pesoTotal;
  btnCalcular.disabled = false;
});

/**
 * Regenerar piramide usando misma altura
 */
document.querySelector("#btn-reiniciar").addEventListener("click", () => {
  agregarPiramideAldocumento(altura);
  ruta.innerHTML = null;
});

/**
 * Agregar piramide generada al DOM
 */
function agregarPiramideAldocumento(altura) {
  let { piramideElement, nodos, piramide } = crearPiramide(altura);
  nodosPiramide = nodos;

  actualizarListaPiramides(piramide);

  localStorage.setItem("piramide", JSON.stringify(piramide));

  let app = document.querySelector("#app");
  app.innerHTML = null;
  app.appendChild(piramideElement);
}

const ruta = document.querySelector("#ruta");
function generarRuta(resultado) {
  const piramide = JSON.parse(localStorage.getItem("piramide"));
  const nodos = piramide.coordenadas.reduce((acc, item) => {
    acc[item.coordenada] = item.peso;
    // console.log({acc})
    return acc;
  }, {});

  ruta.innerHTML = null;
  for (let i = 0; i < resultado.length; i++) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("ruta-nodo");
    contenedor.textContent = `${nodos[resultado[i]]}`;

    if (i !== 0) {
      const separador = document.createElement("div");
      separador.classList.add("ruta-nodo");
      separador.innerHTML = ">";
      ruta.appendChild(separador);
    }

    ruta.appendChild(contenedor);
  }
}
