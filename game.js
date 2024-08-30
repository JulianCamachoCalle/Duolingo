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

function palabrasRandom() {
    let n1 = Math.floor(Math.random() * 48);
    let n2 = Math.floor(Math.random() * 48);
    let n3 = Math.floor(Math.random() * 48);
    let n4 = Math.floor(Math.random() * 48);
    let n5 = Math.floor(Math.random() * 48);

    //Ingles
    document.getElementById("btn1").innerText = ingles[n1];
    document.getElementById("btn2").innerText = ingles[n2];
    document.getElementById("btn3").innerText = ingles[n3];
    document.getElementById("btn4").innerText = ingles[n4];
    document.getElementById("btn5").innerText = ingles[n5];

    //Espanol
    document.getElementById("btn7").innerText = espanol[n1];
    document.getElementById("btn10").innerText = espanol[n2];
    document.getElementById("btn9").innerText = espanol[n3];
    document.getElementById("btn6").innerText = espanol[n4];
    document.getElementById("btn8").innerText = espanol[n5];
}