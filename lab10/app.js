const inputN = document.getElementById("input-n");
const buttonGenerar = document.getElementById("button-generar");
const cuadros = document.getElementById("cuadros");

buttonGenerar.addEventListener("click", () => {
  const n = parseInt(inputN.value);
  if (n < 1 || n > 20) {
    alert("El número debe estar entre 1 y 20");
    return;
  }

  // Generamos los cuadros
  for (let i = 0; i < n; i++) {
    const cuadro = document.createElement("div");
    cuadro.classList.add("cuadro");
    cuadro.innerHTML = fibonacci(i);
    cuadros.appendChild(cuadro);
  }

  // Agregamos la X a cada cuadro
  for (const cuadro of cuadros.querySelectorAll(".cuadro")) {
    const x = document.createElement("span");
    x.classList.add("x");
    x.textContent = "X";
    cuadro.addEventListener("mouseover", () => {
      x.style.display = "block";
    });
    cuadro.addEventListener("mouseout", () => {
      x.style.display = "none";
    });
    cuadro.appendChild(x);
  }
});

// Función para calcular el número de Fibonacci
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
