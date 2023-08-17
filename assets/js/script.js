// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*Click y alerta*/
$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });
});