function ValidaSeguridadPassword(password) {
    var strength = 1;

    if (password.length >= 8) {
        strength++;
    }

    /*tener letras minusculas*/
    if (password.match(/[a-z]+/)) {
        strength++;
    }

    if (password.match(/[0-9]+/)) {
        strength++;
    }
    if (password.match(/[A-Z]+/)) {
        strength++;
    }

    if (strength == 5) {
        return true;
    } else {
        return false;
    }

}

function ValidaNumeroEntero(value) {
    var bool = isNaN(+value);
    bool = bool || (value.indexOf(".") != -1);
    bool = bool || (value.indexOf(",") != -1);
    return !bool;

}

function validaEmail(email) {
    email = replaceAll(email, '_', '');

    var reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (reg.test(email)){
        return true;
    } else {
        return false;
    }
}

function validaId(num) {

    var reg = /^\d{3}$/;;

    if (reg.test(num)) {
        return true;
    } else {
        return false;
    }
}

function validaTelefono(num) {

    var reg = /^\d{10}$/;;

    if (reg.test(num)) {
        return true;
    } else {
        return false;
    }
}

function replaceAll(texto, busca, reemplaza) {
    while (texto.toString().indexOf(busca) != -1)
        texto = texto.toString().replace(busca, reemplaza);
    return texto;
}