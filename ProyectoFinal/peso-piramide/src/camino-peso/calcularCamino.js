import { WeightedGraph } from "./dijkstras";

export function calcularCamino() {
  const piramide = JSON.parse(localStorage.getItem("piramide"));
  const nodos = piramide.coordenadas.reduce((acc, item) => {
    acc[item.coordenada] = item.peso;
    // console.log({acc})
    return acc;
  }, {});

  const altura = piramide.altura;

  const graph = new WeightedGraph();

  for (const nodo in nodos) {
    graph.addVertex(nodo);
  }

  const tiempo = Date.now();
  console.log("Empezando a recorrer");

  for (let piso = 0; piso < altura - 1; piso++) {
    for (let bloque = 0; bloque <= piso; bloque++) {
      let bloqueActual = `${piso}-${bloque}`;
      let bloqueIzquierda = `${piso + 1}-${bloque}`;
      let bloqueDerecha = `${piso + 1}-${bloque + 1}`;

      // console.log(
      //   `Creado camino: ${bloqueIzquierda} ---${nodos[bloqueActual]} --> ${bloqueActual}`
      // );
      graph.addEdge(bloqueIzquierda, bloqueActual, 99 - nodos[bloqueActual]);
      // console.log(
      //   `Creado camino: ${bloqueDerecha} ---${nodos[bloqueActual]} --> ${bloqueActual}`
      // );
      graph.addEdge(bloqueDerecha, bloqueActual, 99 - nodos[bloqueActual]);
    }
  }

  // Crear punto de origen
  graph.addVertex("O");
  for (let bloque = 0; bloque < altura; bloque++) {
    const bloqueActual = `${altura - 1}-${bloque}`;
    // console.log(`Creado camino: O ---${0} --> ${altura - 1}-${bloque}`);
    graph.addEdge("O", bloqueActual, 0);
  }

  let resultado = graph.Dijkstra("O", "0-0");
  console.log(`finalizando el recorrido en ${(Date.now() - tiempo) / 1000}s`);
  // console.log({ resultado });
  return resultado;
}
