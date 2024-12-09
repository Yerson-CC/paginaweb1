// scrollControl.js

// Función para ocultar suavemente el encabezado
function hideHeader() {
    var header = document.querySelector('.container');
    header.style.transition = 'transform 0.4s ease';
    header.style.transform = 'translateY(-100%)';
}

// Función para mostrar suavemente el encabezado
function showHeader() {
    var header = document.querySelector('.container');
    header.style.transition = 'transform 0.4s ease';
    header.style.transform = 'translateY(0)';
}

// Función para controlar la visibilidad del encabezado al hacer scroll
function handleScroll() {
    var currentPosition = window.scrollY;
    var hidePosition = 580;

    if (currentPosition > hidePosition) {
        hideHeader();
    } else {
        showHeader();
    }
}

// Agregar un listener para el evento scroll
window.addEventListener('scroll', handleScroll);
