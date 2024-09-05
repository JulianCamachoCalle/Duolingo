let palabras = [
    "Felicidad", "Tristeza", "Amistad", "Coraje", "Sabiduría",
    "Belleza", "Fuerza", "Debilidad", "Generosidad", "Bondad",
    "Amor", "Esperanza", "Odio", "Libertad", "Justicia",
    "Paciencia", "Paz", "Conocimiento", "Alegría", "Miedo",
    "Confianza", "Respeto", "Responsabilidad", "Lealtad", "Honestidad",
    "Perdón", "Ternura", "Compasión", "Orgullo", "Humildad",
    "Valentía", "Sinceridad", "Solidaridad", "Integridad", "Tolerancia",
    "Optimismo", "Entusiasmo", "Perseverancia", "Dedicación", "Esfuerzo",
    "Cuidado", "Comprensión", "Aceptación", "Inocencia", "Crecimiento",
    "Amabilidad", "Carisma", "Educación"
];

let sinonimos = [
    "Alegría", "Melancolía", "Compañerismo", "Valentía", "Inteligencia",
    "Hermosura", "Poder", "Fragilidad", "Altruismo", "Benevolencia",
    "Afecto", "Ilusión", "Rencor", "Independencia", "Equidad",
    "Tolerancia", "Tranquilidad", "Erudición", "Gozo", "Temor",
    "Seguridad", "Consideración", "Compromiso", "Fidelidad", "Sinceridad",
    "Absolución", "Cariño", "Misericordia", "Dignidad", "Modestia",
    "Audacia", "Franqueza", "Apoyo", "Honradez", "Respeto",
    "Positivismo", "Euforia", "Persistencia", "Compromiso", "Dedicación",
    "Atención", "Empatía", "Inclusión", "Pureza", "Desarrollo",
    "Cortesía", "Encanto", "Formación"
];

let indices = [];
for (let i = 0; i < 5; i++) {
    indices.push(Math.floor(Math.random() * palabras.length));
}

for (let i = 0; i < 5; i++) {
    document.getElementById(`btn${i + 1}`).innerText = palabras[indices[i]];
    document.getElementById(`btn${i + 1}`).setAttribute('data-index', indices[i]);
}

let botonesEsp = [7, 10, 9, 6, 8];
for (let i = 0; i < 5; i++) {
    document.getElementById(`btn${botonesEsp[i]}`).innerText = sinonimos[indices[i]];
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