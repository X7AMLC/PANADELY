const icons = [
    document.getElementById("icon-1"),
    document.getElementById("icon-2"),
    document.getElementById("icon-3"),
    document.getElementById("icon-4")
];

const loader = document.getElementById("loader-container");
const header = document.querySelector(".header");
const body = document.body;
const content = document.querySelector(".content") || document.body;

let count = 0;
const maxCycles = 8;

function switchIcons() {
    if (count >= maxCycles) {
        if (loader) {
            loader.style.display = "none";
        }
        if (content) {
            content.style.opacity = "1";
            content.style.visibility = "visible";
            content.style.pointerEvents = "auto";
        }
        if (header) {
            header.style.display = "flex";
        }
        body.classList.add("loaded");
        body.style.overflow = "auto";
        body.style.height = "auto";
        return;
    }

    icons.forEach(icon => {
        if (icon) icon.classList.remove("show");
    });

    if (icons[count % icons.length]) {
        icons[count % icons.length].classList.add("show");
    }

    count++;
    setTimeout(switchIcons, 500);
}

window.onload = function () {
    if (header) {
        header.style.display = "none";
    }
    if (content) {
        content.style.opacity = "0";
        content.style.visibility = "hidden";
        content.style.pointerEvents = "none";
    }
    body.style.overflow = "hidden";
    body.style.height = "100vh";
    count = 0;
    setTimeout(switchIcons, 500);
};