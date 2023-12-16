import { renderPiramide } from "./crearPiramide";
import { obtenerPiramides, subirPiramide } from "../api/manejarAPI";

/**
 * Funcion para Actualizar el html cuando se genere una piramide y comunicarse
 * con el backend para indicarle que una piramide se ha creado
 */
export async function actualizarListaPiramides(piramide) {
  if (!!piramide) {
    console.log("Subiendo piramide");
    await subirPiramide(piramide);
  }

  const piramides = await obtenerPiramides();

  const ul = document.getElementById("lista-piramides");
  ul.innerHTML = null;

  piramides.forEach((piramide) => {
    ul.appendChild(crearLI(piramide));
  });
}

function crearLI(piramide) {
  const li = document.createElement("li");
  li.classList.add("lista-piramides-item");

  const text = document.createElement("span");
  text.textContent = `Altura ${piramide.altura}`;

  const button = document.createElement("button");
  button.textContent = "Cargar";

  li.appendChild(text);
  li.appendChild(button);

  button.addEventListener("click", () => {
    renderPiramide(piramide);
    localStorage.setItem("piramide", JSON.stringify(piramide));
    const ruta = document.querySelector("#ruta");
    ruta.innerHTML = null;
  });

  return li;
}
