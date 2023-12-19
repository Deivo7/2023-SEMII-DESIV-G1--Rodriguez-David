/**
 * piramide.js
 * Imita A la clase piramide en el backend para facilitar la comunicacion y el 
 * consumo de la api
 */

export class Piramide {
  constructor(altura, cordenadas = []) {
    this.altura = altura;
    this.coordenadas = cordenadas;
  }

  agregarCordenada(cordenada) {
    this.coordenadas.push(cordenada);
  }
}

export class Coordenada {
  constructor(coordenada, peso) {
    this.coordenada = coordenada;
    this.peso = peso;
  }
}
