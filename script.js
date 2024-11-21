// Obtener los elementos del formulario y la tabla
const formulario = document.getElementById('contactForm');
const tabla = {
    nombre: document.getElementById('tdNombre'),
    apellido: document.getElementById('tdApellido'),
    email: document.getElementById('tdEmail'),
    telefono: document.getElementById('tdTelefono'),
    edad: document.getElementById('tdEdad'),
    direccion: document.getElementById('tdDireccion'),
    provincia: document.getElementById('tdProvincia'),
    codigoPostal: document.getElementById('tdCodigoPostal'),
    contacto: document.getElementById('tdContacto'),
    suscripcion: document.getElementById('tdSuscripcion')
};

// Función para actualizar la tabla con los datos del formulario
function actualizarTabla() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('fname').value;
    const apellido = document.getElementById('fapellido').value;
    const email = document.getElementById('femail').value;
    const telefono = document.getElementById('ftelefono').value;
    const edad = document.getElementById('fedad').value;
    const direccion = document.getElementById('fdireccion').value;
    const provincia = document.querySelector('input[name="listaprovincias"]').value;
    const codigoPostal = document.getElementById('codigoPostal').value;

    // Métodos de contacto seleccionados
    const contacto = [];
    if (document.getElementById('correoElectronico').checked) contacto.push('Correo Electrónico');
    if (document.getElementById('correoPostal').checked) contacto.push('Correo Postal');
    if (document.getElementById('telefono').checked) contacto.push('Teléfono');

    // Suscripciones seleccionadas
    const suscripcion = [];
    if (document.getElementById('noticias').checked) suscripcion.push('Noticias');
    if (document.getElementById('alerta').checked) suscripcion.push('Alerta');
    if (document.getElementById('promociones').checked) suscripcion.push('Promociones');
    if (document.getElementById('eventos').checked) suscripcion.push('Eventos');

    // Actualizar la tabla con los valores
    tabla.nombre.textContent = nombre;
    tabla.apellido.textContent = apellido;
    tabla.email.textContent = email;
    tabla.telefono.textContent = telefono;
    tabla.edad.textContent = edad;
    tabla.direccion.textContent = direccion;
    tabla.provincia.textContent = provincia;
    tabla.codigoPostal.textContent = codigoPostal;
    tabla.contacto.textContent = contacto.join(', ');
    tabla.suscripcion.textContent = suscripcion.join(', ');
}

// Agregar un evento de escucha al formulario para actualizar la tabla cada vez que se cambian los valores
formulario.addEventListener('input', actualizarTabla);

// Llamar a la función para asegurar que los datos de la tabla estén actualizados al cargar la página
actualizarTabla();

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
