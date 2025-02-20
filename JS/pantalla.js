/** Referencias a los elementos de la pantalla de carga */
const icons = [
    document.getElementById("icon-1"),
    document.getElementById("icon-2"),
    document.getElementById("icon-3"),
    document.getElementById("icon-4")
];

const loader = document.getElementById("loader-container"); /** Contenedor de la pantalla de carga */
const header = document.querySelector(".header"); /** Referencia al header */
const body = document.body; /** Referencia al body */

let count = 0; /** Contador de ciclos */
const maxCycles = 8; /** 8 cambios (2 ciclos completos para 4 imágenes) */

/** 
 * Función que alterna los íconos en la pantalla de carga.
 * Después de `maxCycles`, oculta la pantalla de carga y muestra el header.
 */
function switchIcons() {
    if (count >= maxCycles) {
        /** Oculta la pantalla de carga */
        loader.style.display = "none";

        /** Muestra el header */
        header.style.display = "flex";

        /** Agrega una clase al body para marcar que la carga terminó */
        body.classList.add("loaded");
        return;
    }

    /** Oculta todos los iconos */
    icons.forEach(icon => icon.classList.remove("show"));

    /** Muestra el icono correspondiente según el ciclo */
    icons[count % 4].classList.add("show");

    count++;
    setTimeout(switchIcons, 500); /** Alternar cada 0.5 segundos */
}

/** 
 * Iniciar la animación de carga cuando la página se haya cargado completamente.
 */
window.onload = function () {
    /** Oculta el header al inicio */
    header.style.display = "none";

    /** Inicia la secuencia de cambio de iconos */
    setTimeout(switchIcons, 500);
};
