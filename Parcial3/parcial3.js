function getRandomNumber() {
    return Math.floor(Math.random() * 98) + 1;
}

function createPyramid(height) {
    const pyramidContainer = document.getElementById('pyramid-container');
    pyramidContainer.innerHTML = '';

    for (let i = 1; i <= height; i++) {
        for (let j = 0; j < i; j++) {
            const box = document.createElement('div');
            box.classList.add('pyramid-box');
            box.innerText = getRandomNumber();
            box.dataset.position = [i, j];
            pyramidContainer.appendChild(box);
        }
        pyramidContainer.appendChild(document.createElement('br'));
    }
}

function findMaxPath() {
    // Crea una matriz para almacenar los caminos con el mayor peso
    const paths = new Array(pyramid.length);

    // Inicializa la matriz con caminos vacíos
    for (let i = 0; i < pyramid.length; i++) {
        paths[i] = [];
    }

    // Llena la matriz de abajo hacia arriba
    for (let i = pyramid.length - 1; i >= 0; i--) {
        for (let j = 0; j < i + 1; j++) {
            // Calcula el peso del camino que termina en la posición (i, j)
            const pathWeight = pyramid[i][j] + Math.max(paths[i + 1][j], paths[i + 1][j + 1]);

            // Agrega el camino a la matriz
            paths[i].push({
                position: [i, j],
                weight: pathWeight
            });
        }
    }

    // Devuelve el camino con el mayor peso
    return paths[0].find((path) => path.weight === Math.max(...paths[0].map((path) => path.weight)));
}

function highlightPath(path) {
    // Obtenemos las posiciones del camino
    const positions = path.position;

    
    for (const position of positions) {
        // se Obtenemos el elemento de la pirámide en la posición actual
        const element = document.querySelector(`#pyramid-container .pyramid-box[data-position="${position}"`);

        // Asignamos el estilo "path" al elemento
        //aqui intente que el camino se resalte en rojo sin exito :( 
        element.style.backgroundColor = 'red';
    }
}

document.getElementById('reset-button').addEventListener('click', () => {
    const height = parseInt(prompt('Introduce la altura de la pirámide (1 < n < 50):'));

    if (height > 1 && height < 50) {
        createPyramid(height);
    } else {
        alert('La altura de la pirámide debe estar entre 1 y 50.');
    }
});

// Llama a la función createPyramid() para generar la pirámide inicial
createPyramid(5);

// Llama a la función findMaxPath() para encontrar el camino con el mayor peso
const path = findMaxPath();

// Llama a la función highlightPath() para resaltar el camino
highlightPath(path);
