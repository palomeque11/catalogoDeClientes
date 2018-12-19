 
$('#botonGuardar').click(function () {

    var id = $('#textoId').val();
    var nombre = $('#textoNombre').val();
    var apellidos = $('#textoApellidos').val();
    var telefono = $('#textoTelefono').val();
    var email = $('#textoEmail').val();

    PageMethods.Guardar(id, nombre, apellidos, telefono, email);
   
});


