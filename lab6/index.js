const container = document.querySelector(".container");
const inicial = document.querySelector("#inicial");
const final = document.querySelector("#final");
const generar = document.querySelector("#generar");

generar.addEventListener("click", () => {
  const numero = Math.floor(Math.random() * (final.value - inicial.value + 1)) + inicial.value;
  const binario = numero.toString(2);

  console.log(`El decimal es: ${numero}, transformado a binario: ${binario}`);
});
