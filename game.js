let ingles = [
    "House", "Car", "Tree", "Sky", "River",
    "Mountain", "Computer", "Phone", "Book", "Music",
    "Chair", "Table", "Window", "Door", "Dog",
    "Cat", "Bicycle", "Road", "Ocean", "Forest",
    "School", "Pen", "Clock", "Light", "Mirror",
    "Camera", "Train", "Bus", "Airplane", "City",
    "Town", "Bridge", "Tower", "Garden", "Flower",
    "Grass", "Moon", "Sun", "Star", "Cloud",
    "Rain", "Snow", "Wind", "Fire", "Earth",
    "Rock", "Island", "Desert"
];

let espanol = [
    "Casa", "Coche", "Árbol", "Cielo", "Río",
    "Montaña", "Computadora", "Teléfono", "Libro", "Música",
    "Silla", "Mesa", "Ventana", "Puerta", "Perro",
    "Gato", "Bicicleta", "Carretera", "Océano", "Bosque",
    "Escuela", "Pluma", "Reloj", "Luz", "Espejo",
    "Cámara", "Tren", "Autobús", "Avión", "Ciudad",
    "Pueblo", "Puente", "Torre", "Jardín", "Flor",
    "Césped", "Luna", "Sol", "Estrella", "Nube",
    "Lluvia", "Nieve", "Viento", "Fuego", "Tierra",
    "Roca", "Isla", "Desierto"
];

let indices = [];
for (let i = 0; i < 5; i++) {
    indices.push(Math.floor(Math.random() * 48));
}

// Asignar palabras a los botones en inglés
for (let i = 0; i < 5; i++) {
    document.getElementById(`btn${i + 1}`).innerText = ingles[indices[i]];
}

// Asignar traducciones a los botones en español
let botonesEsp = [7, 10, 9, 6, 8];
for (let i = 0; i < 5; i++) {
    document.getElementById(`btn${botonesEsp[i]}`).innerText = espanol[indices[i]];
}

// Variables para la selección
let seleccionIngles = [null, null, null, null, null];
let seleccionEspañol = [null, null, null, null, null]; 

// Función para manejar la selección y deselección
function seleccionarPalabra(id, idioma, index) {
    const boton = document.getElementById(id);

    if (boton.style.backgroundColor === 'lightblue') {
        // Si el botón ya está seleccionado, deseleccionarlo
        boton.style.backgroundColor = '';
        if (idioma === 'ingles') {
            seleccionIngles[index] = null;
        } else {
            seleccionEspañol[index] = null;
        }
    } else {
        // Seleccionar el botón
        boton.style.backgroundColor = 'lightblue';
        if (idioma === 'ingles') {
            if (seleccionIngles[index]) {
                // Si ya hay una palabra seleccionada en inglés, deseleccionarla
                document.getElementById(seleccionIngles[index].id).style.backgroundColor = '';
            }
            seleccionIngles[index] = { palabra: boton.innerText, id };
        } else {
            if (seleccionEspañol[index]) {
                // Si ya hay una palabra seleccionada en español, deseleccionarla
                document.getElementById(seleccionEspañol[index].id).style.backgroundColor = '';
            }
            seleccionEspañol[index] = { palabra: boton.innerText, id };
        }
    }

    // Verificar si todas las selecciones están hechas
    if (seleccionIngles.every(item => item !== null) && seleccionEspañol.every(item => item !== null)) {
        verificarSeleccion();
    }
}

// Función para verificar todas las selecciones
function verificarSeleccion() {
    let aciertos = 0;
    let errores = 0;

    for (let i = 0; i < 5; i++) {
        if (esCorrecto(seleccionIngles[i].palabra, seleccionEspañol[i].palabra)) {
            document.getElementById(seleccionIngles[i].id).classList.add('correcto');
            document.getElementById(seleccionEspañol[i].id).classList.add('correcto');
            aciertos++;
        } else {
            document.getElementById(seleccionIngles[i].id).classList.add('incorrecto');
            document.getElementById(seleccionEspañol[i].id).classList.add('incorrecto');
            errores++;
        }
    }

    alert(`Juego terminado! Aciertos: ${aciertos}, Errores: ${errores}`);
}

// Función para verificar si la traducción es correcta
function esCorrecto(palabraIngles, palabraEspanol) {
    let index = ingles.indexOf(palabraIngles);
    return espanol[index] === palabraEspanol;
}

// Asignar la función de selección a los botones
for (let i = 1; i <= 10; i++) {
    let idioma = i <= 5 ? 'ingles' : 'espanol';
    let index = i <= 5 ? i - 1 : i - 6;
    document.getElementById(`btn${i}`).onclick = function() {
        seleccionarPalabra(`btn${i}`, idioma, index);
    };
}
