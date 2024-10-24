// JSON inicial con tres usuarios estáticos
let usuarios = [
    {nombre: "Juan", apellido: "Pérez", cedula: "123456", email: "juan@example.com", telefono: "3001234567", direccion: "Calle 1", ciudad: "Bogotá", fecha_nacimiento: "1990-01-01"},
    {nombre: "María", apellido: "Gómez", cedula: "789012", email: "maria@example.com", telefono: "3001234568", direccion: "Calle 2", ciudad: "Medellín", fecha_nacimiento: "1992-02-02"},
    {nombre: "Luis", apellido: "Rodríguez", cedula: "345678", email: "luis@example.com", telefono: "3001234569", direccion: "Calle 3", ciudad: "Cali", fecha_nacimiento: "1994-03-03"}
];

// Mostrar usuarios en la tabla
function mostrarUsuarios() {
    const tablaUsuarios = document.getElementById('tablaUsuarios');
    tablaUsuarios.innerHTML = ''; // Limpiar la tabla antes de listar
    usuarios.forEach(usuario => {
        let fila = `<tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.cedula}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.direccion}</td>
            <td>${usuario.ciudad}</td>
            <td>${usuario.fecha_nacimiento}</td>
        </tr>`;
        tablaUsuarios.innerHTML += fila;
    });
}

// Agregar nuevo usuario
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    let nuevoUsuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        fecha_nacimiento: document.getElementById('fecha_nacimiento').value
    };

    // Validar si el usuario ya existe (por cédula)
    let usuarioExistente = usuarios.find(usuario => usuario.cedula === nuevoUsuario.cedula);
    if (usuarioExistente) {
        alert("El usuario con esta cédula ya existe.");
        return;
    }

    // Agregar el nuevo usuario al JSON
    usuarios.push(nuevoUsuario);
    mostrarUsuarios(); // Actualizar la tabla
    alert("Usuario registrado exitosamente.");
});

// Botón para listar usuarios
document.getElementById('btnListar').addEventListener('click', mostrarUsuarios);
