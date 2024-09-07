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
    indices.push(Math.floor(Math.random() * ingles.length));
}

for (let i = 0; i < 5; i++) {
    document.getElementById(`btn${i + 1}`).innerText = ingles[indices[i]];
    document.getElementById(`btn${i + 1}`).setAttribute('data-index', indices[i]);
}

let botonesEsp = [7, 10, 9, 6, 8];
for (let i = 0; i < 5; i++) {
    document.getElementById(`btn${botonesEsp[i]}`).innerText = espanol[indices[i]];
    document.getElementById(`btn${botonesEsp[i]}`).setAttribute('data-index', indices[i]);
}

function verificarGanador() {
    let todosDeshabilitados = true;
    for (let i = 1; i <= 5; i++) {
        if (!document.getElementById(`btn${i}`).disabled) {
            todosDeshabilitados = false;
            break;
        }
    }
    for (let i = 0; i < botonesEsp.length; i++) {
        if (!document.getElementById(`btn${botonesEsp[i]}`).disabled) {
            todosDeshabilitados = false;
            break;
        }
    }

    if (todosDeshabilitados) {
        alert('¡Ganaste!');
        location.reload();
    }
}

let vidas = 5;

function actualizarBarraDeVidas(vidas) {
    for (let i = 1; i <= 5; i++) {
        let corazon = document.getElementById('corazon' + i);
        if (i <= vidas) {
            corazon.classList.remove('vacio');
        } else {
            corazon.classList.add('vacio');
        }
    }
}

function seleccionarBoton(tipo, id) {
    let boton = document.getElementById(`btn${id}`);
    let index = boton.getAttribute('data-index');

    if (tipo === 'palabra') {
        seleccionPalabra = { id, index };
        boton.style.backgroundColor = 'lightgray';
    } else if (tipo === 'sinonimo') {
        seleccionSinonimo = { id, index };
        boton.style.backgroundColor = 'lightgray';
    }

    if (seleccionPalabra && seleccionSinonimo) {
        if (seleccionPalabra.index === seleccionSinonimo.index) {
            document.getElementById(`btn${seleccionPalabra.id}`).style.backgroundColor = 'green';
            document.getElementById(`btn${seleccionSinonimo.id}`).style.backgroundColor = 'green';

            document.getElementById(`btn${seleccionPalabra.id}`).disabled = true;
            document.getElementById(`btn${seleccionSinonimo.id}`).disabled = true;

            setTimeout(() => {
                verificarGanador();
            }, 1000);

            seleccionPalabra = null;
            seleccionSinonimo = null;
        } else {
            document.getElementById(`btn${seleccionPalabra.id}`).style.backgroundColor = 'red';
            document.getElementById(`btn${seleccionSinonimo.id}`).style.backgroundColor = 'red';

            vidas--;
            actualizarBarraDeVidas(vidas);

            setTimeout(() => {
                document.getElementById(`btn${seleccionPalabra.id}`).style.backgroundColor = '';
                document.getElementById(`btn${seleccionSinonimo.id}`).style.backgroundColor = '';
                seleccionPalabra = null;
                seleccionSinonimo = null;
            }, 500);

            if (vidas <= 0) {
                setTimeout(() => {
                    alert('¡Has perdido!');
                    location.reload();
                }, 500);
            }
        }
    }
}