// VARIABLES
const menuMov = document.getElementById('menu-mov');
const items = document.getElementById('items');
const nombre = document.getElementById('nombre').value;
const tel = document.getElementById('tel').value;
const empresa = document.getElementById('empresa').value;
const correo = document.getElementById('correo').value;
const sendEmail = document.getElementById('send-email');
const styleMessage = document.querySelector('.message-box');
const message = document.querySelector('.message')
expresionEmail = /\w+@\w+\.+[a-z]/;

document.addEventListener('DOMContentLoaded', function () {

    // ANIMACION DEL MENU EN MOBILE
    menuMov.addEventListener('click', () => {
        items.classList.toggle('menu-mov');
    });

    items.addEventListener('click', () => {
        items.classList.remove('menu-mov');
    });

    // VALIDACION DEL FORMULARIO
    sendEmail.addEventListener('submit', validateEmail);
});

function validateEmail(e) {
    e.preventDefault();

    if (nombre === "" || tel === "" || empresa === "" || correo === "") {
        styleMessage.classList.add('error');
        message.innerHTML = "Todos los campos son obligatorios!";
        setTimeout(() => {
            styleMessage.style.display = 'none';
        }, 5000);
        return false;
    } else if (nombre.length > 20) {
        styleMessage.classList.add('error');
        message.innerHTML = "El campo nombre es muy largo";
        setTimeout(() => {
            styleMessage.style.display = 'none';
        }, 5000);
        return false;
    } else if (tel.length > 10) {
        styleMessage.classList.add('error');
        message.innerHTML = "El teléfono tiene mas de 10 digitos";
        setTimeout(() => {
            styleMessage.style.display = 'none';
        }, 5000);
        return false;
    } else if (empresa.length > 20) {
        styleMessage.classList.add('error');
        message.innerHTML = "El campo empresa es muy largo";
        setTimeout(() => {
            styleMessage.style.display = 'none';
        }, 5000);
        return false;
    } else if (!expresionEmail.test(correo)) {
        styleMessage.classList.add('error');
        message.innerHTML = "El correo electronico es invalido";
        setTimeout(() => {
            styleMessage.style.display = 'none';
        }, 5000);
        return false;
    } else {
        styleMessage.classList.add('success');
        message.innerHTML = "El correo electronico se envio con exito!";
        setTimeout(() => {
            styleMessage.style.display = 'none';
        }, 5000);
    }

}