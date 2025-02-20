document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const products = Array.from(carousel.querySelectorAll(".product"));
    let selectedProduct = null;

    // Agregar corazones y funcionalidad
    products.forEach((product) => {
        const heart = document.createElement("div");
        heart.classList.add("heart-icon");
        heart.innerHTML = "\u2665"; // Corazón
        product.appendChild(heart);

        // Control al hacer clic en el producto (pausar y aplicar zoom extra)
        product.addEventListener("click", function () {
            if (selectedProduct === product) {
                resetZoom(product);
                resumeCarousel(carousel);
                selectedProduct = null;
            } else {
                if (selectedProduct) {
                    resetZoom(selectedProduct);
                }
                pauseCarousel(carousel);
                product.classList.add("zoomed");
                selectedProduct = product;
            }
        });

        // Control al hacer clic en el corazón (reanuda carrusel y cambia color)
        heart.addEventListener("click", function (e) {
            e.stopPropagation();
            heart.classList.toggle("liked");
            resetZoom(product);
            resumeCarousel(carousel);
            selectedProduct = null;
        });
    });

    // Pausar carrusel
    const pauseCarousel = (carousel) => {
        carousel.style.animationPlayState = "paused";
    };

    // Reanudar carrusel
    const resumeCarousel = (carousel) => {
        carousel.style.animationPlayState = "running";
    };

    // Resetear zoom y restaurar tamaño normal
    const resetZoom = (product) => {
        product.classList.remove("zoomed");
    };

    // Iniciar carrusel en ejecución continua
    resumeCarousel(carousel);
});
