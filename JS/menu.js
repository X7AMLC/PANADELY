// 🔹 Seleccionar elementos
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 🔹 Evento para abrir/cerrar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// 🔹 Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle && event.target !== menuToggle.querySelector('img')) {
        menu.classList.remove('open');
    }
});
