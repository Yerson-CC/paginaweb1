document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces "Leer Más"
    var links = document.querySelectorAll(".leer-mas");

    // Para cada enlace, agregar un evento de clic
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Obtener el ID del modal específico desde el atributo data-modal
            var modalId = link.getAttribute("data-modal");

            // Obtener el modal correspondiente
            var modal = document.getElementById(modalId);

            // Obtener el <span> que cierra el modal
            var span = modal.querySelector(".close");

            // Mostrar el modal al hacer clic en el enlace
            modal.style.display = "block";

            // Cuando el usuario hace clic en <span> (x), cierra el modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cierra
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
    });
});
