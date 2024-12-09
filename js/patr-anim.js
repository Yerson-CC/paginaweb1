// Obtener la imagen de fondo
const originalImage = document.querySelector('.images-png');

// Clonar la imagen de fondo y añadir al contenedor
const clonedImage = originalImage.cloneNode(true);
originalImage.parentElement.appendChild(clonedImage);

// Función para animar el desplazamiento del carrusel
function moveCarousel() {
    // Valor inicial de la posición
    let position = 0;

    // Función para actualizar la posición del carrusel
    function step(timestamp) {
        // Incrementar la posición para desplazar el carrusel hacia la derecha
        position--;

        // Resetear la posición cuando la imagen original haya pasado completamente
        if (position <= -originalImage.offsetWidth) {
            position = 0;
        }

        // Aplicar la transformación para mover el carrusel
        originalImage.style.left = position + 'px';
        clonedImage.style.left = (position + originalImage.offsetWidth) + 'px';

        // Llamar a la función de nuevo para la siguiente animación
        window.requestAnimationFrame(step);
    }

    // Iniciar la animación
    window.requestAnimationFrame(step);
}

// Llamar a la función para iniciar el carrusel
moveCarousel();
