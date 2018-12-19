function validacionCliente() {

    var id = $('#textoId').val();
    var nombre = $('#textoNombre').val();
    var apellidos = $('#textoApellidos').val();
    var telefono = $('#textoTelefono').val();
    var email = $('#textoEmail').val();
    var validacion = false;
    if (id != '' && nombre != '' && apellidos != '' & telefono != '' && email != '') {
        if (!validaEmail(email)) {
            validacion = true;
            document.getElementById("demo").innerHTML = "* formato de email incorrecto";
        }
        if (!validaId(id)) {
            validacion = true;
            document.getElementById("demo").innerHTML = "* formato de id incorrecto";
        }
        if (!validaTelefono(telefono)) {
            validacion = true;
            document.getElementById("demo").innerHTML = "* formato de telefono incorrecto";
        }

        if (validacion == false) {
            PageMethods.Guardar(id, nombre, apellidos, telefono, email);
            document.getElementById("demo").innerHTML = "";
            location.href = '../ValorAgregado.aspx';
        }

    } else {
        document.getElementById("demo").innerHTML = "*Falta llenar un campo";
    }

}