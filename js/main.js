const menuMov = document.getElementById('menu-mov');
const items = document.getElementById('items');
// const nombre = document.getElementById('nombre');
// const tel = document.getElementById('tel');
// const empresa = document.getElementById('empresa');
// const correo = document.getElementById('correo');

menuMov.addEventListener('click', () => {
    items.classList.toggle('menu-mov');
});

items.addEventListener('click', () => {
    items.classList.remove('menu-mov');
});