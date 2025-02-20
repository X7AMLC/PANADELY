document.addEventListener("DOMContentLoaded", function () {
    const carousel2 = document.querySelector(".carousel-2");
    const products2 = Array.from(document.querySelectorAll(".carousel-2 .product"));
    let selectedProduct = null;

    // Agregar corazones y funcionalidad
    products2.forEach((product) => {
        const heart = document.createElement("div");
        heart.classList.add("heart-icon");
        heart.innerHTML = "\u2665"; // Corazón
        product.appendChild(heart);

        // Control al hacer clic en el producto (pausar y aplicar zoom extra)
        product.addEventListener("click", function () {
            if (selectedProduct === product) {
                resetZoom(product);
                resumeCarousel(carousel2);
                selectedProduct = null;
            } else {
                if (selectedProduct) {
                    resetZoom(selectedProduct);
                }
                pauseCarousel(carousel2);
                product.classList.add("zoomed");
                selectedProduct = product;
            }
        });

        // Control al hacer clic en el corazón (reanuda carrusel y cambia color)
        heart.addEventListener("click", function (e) {
            e.stopPropagation();
            heart.classList.toggle("liked");
            resetZoom(product);
            resumeCarousel(carousel2);
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
    resumeCarousel(carousel2);
});
