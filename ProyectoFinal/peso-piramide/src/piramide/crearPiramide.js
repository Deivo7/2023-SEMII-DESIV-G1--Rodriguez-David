import { Piramide, Coordenada } from "./piramide";

export function crearPiramide(altura) {
  const nodos = {};
  const piramideElement = crearPiramideElement();
  const piramide = new Piramide(altura);

  for (let piso_numero = 0; piso_numero < altura; piso_numero++) {
    const piso = crearPiramidePiso();

    for (let bloque_numero = 0; bloque_numero <= piso_numero; bloque_numero++) {
      const peso = Math.floor(Math.random() * 99) + 1;
      const coordenada = `${piso_numero}-${bloque_numero}`;
      nodos[coordenada] = peso;
      piramide.agregarCordenada(new Coordenada(coordenada, peso));

      piso.appendChild(crearPiramideBloque(coordenada, altura, peso, piso));
    }

    piramideElement.appendChild(piso);
  }
  return { piramideElement, nodos, piramide };
}

export function renderPiramide(piramide) {
  let app = document.querySelector("#app");
  app.innerHTML = null;
  console.log({ c: piramide.coordenadas });

  let i = 0;
  const piramideElement = crearPiramideElement();
  for (let piso_numero = 0; piso_numero < piramide.altura; piso_numero++) {
    const piso = crearPiramidePiso();

    for (let bloque_numero = 0; bloque_numero <= piso_numero; bloque_numero++) {
      const coordenada = piramide.coordenadas[i];
      piso.appendChild(
        crearPiramideBloque(
          coordenada.coordenada,
          piramide.altura,
          coordenada.peso,
          piso
        )
      );
      i++;
    }

    piramideElement.appendChild(piso);
  }

  app.appendChild(piramideElement);
}

function crearPiramideElement() {
  const piramideElement = document.createElement("div");
  piramideElement.classList.add("piramide");
  return piramideElement;
}

function crearPiramidePiso() {
  const piso = document.createElement("div");
  piso.classList.add("piramide-altura");
  return piso;
}

function crearPiramideBloque(coordenada, altura, peso) {
  const bloque = document.createElement("div");
  bloque.dataset.cord = coordenada;
  bloque.classList.add("piramide-bloque");
  bloque.classList.add(escogerSize(altura));

  bloque.innerHTML = `<span>${peso}</span>`;

  return bloque;
}

function escogerSize(altura) {
  if (altura > 40) {
    return "piramide-bloque-s";
  }
  if (altura > 22) {
    return "piramide-bloque-m";
  }

  if (altura > 8) {
    return "piramide-bloque-l";
  }

  return "piramide-bloque-xl";
}
