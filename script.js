 function actualizarTabla() {
            // Obtener los valores de los campos
            const nombre = document.getElementById('fname').value;
            const apellido = document.getElementById('fapellido').value;
            const email = document.getElementById('femail').value;
            const telefono = document.getElementById('ftelefono').value;
            const edad = document.getElementById('fedad').value;
            const direccion = document.getElementById('fdireccion').value;
            const provincia = document.getElementById('listaprovincias').value;
            const codigoPostal = document.getElementById('codigoPostal').value;

            // Métodos de contacto seleccionados
            const contacto = [];
            if (document.getElementById('correoElectronico').checked) contacto.push('Correo Electrónico');
            if (document.getElementById('correoPostal').checked) contacto.push('Correo Postal');
            if (document.getElementById('telefono').checked) contacto.push('Teléfono');

            // Suscripciones seleccionadas
            const suscripcion = [];
            if (document.getElementById('noticias').checked) suscripcion.push('Noticias');
            if (document.getElementById('alerta').checked) suscripcion.push('Alertas');
            if (document.getElementById('promociones').checked) suscripcion.push('Promociones');
            if (document.getElementById('eventos').checked) suscripcion.push('Eventos');

            // Actualizar la tabla con los valores
            document.getElementById('tdNombre').textContent = nombre;
            document.getElementById('tdApellido').textContent = apellido;
            document.getElementById('tdEmail').textContent = email;
            document.getElementById('tdTelefono').textContent = telefono;
            document.getElementById('tdEdad').textContent = edad;
            document.getElementById('tdDireccion').textContent = direccion;
            document.getElementById('tdProvincia').textContent = provincia;
            document.getElementById('tdCodigoPostal').textContent = codigoPostal;
            document.getElementById('tdContacto').textContent = contacto.join(', ');
            document.getElementById('tdSuscripcion').textContent = suscripcion.join(', ');
        }

// Función para mostrar el CV completo cuando se haga clic en el botón
function mostrarCV() 
{
    const cvRevelado = document.getElementById("cv-revelado");
    const leerMasBtn = document.getElementById("leerMasBtn");

    if (cvRevelado.style.display === "none") {
        cvRevelado.style.display = "inline";
        leerMasBtn.textContent = "Leer menos";
    } else {
        cvRevelado.style.display = "none";
        leerMasBtn.textContent = "Leer más";
    }
}
