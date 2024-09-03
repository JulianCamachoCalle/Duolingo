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

// Generar números aleatorios
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

