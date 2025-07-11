function mostrarEscena(id) {
    // Oculta todas las escenas
    document.querySelectorAll('.escena').forEach(escena => {
        escena.style.display = 'none';
    });
    // Muestra la escena seleccionada
    const escena = document.getElementById(id);
    if (escena) {
        escena.style.display = 'block';
    } else {
        console.log("Escena " + id + " no encontrada");
    }
    // Controla el contenedor inicial
    if (id === 'inicio') {
        document.querySelector('.contenedor').style.display = 'block';
    } else {
        document.querySelector('.contenedor').style.display = 'none';
    }
}

function reproducirPichiCarcajada() {
    var audio = document.getElementById('audioPichi');
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Error al reproducir el audio: ", error);
        });
    } else {
        console.log("Elemento audio no encontrado");
    }
}

// Placeholder para mostrarImagen (ajustaremos según tu intención)
function mostrarImagen() {
    console.log("Función mostrarImagen llamada");
    // Añadiremos la lógica aquí una vez que compartas tu código
}