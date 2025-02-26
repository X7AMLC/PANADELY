document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel, .carousel-2");

    carousels.forEach((carousel) => {
        const products = Array.from(carousel.querySelectorAll(".product"));
        let selectedProduct = null;

        // Agregar corazones y funcionalidad
        products.forEach((product) => {
            const heart = document.createElement("div");
            heart.classList.add("heart-icon");
            heart.innerHTML = "\u2665"; // Corazón
            product.appendChild(heart);

            // Evento al hacer clic en un producto (hace zoom extra y pausa el carrusel)
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

            // Evento al hacer clic en el corazón (reanuda carrusel y cambia color)
            heart.addEventListener("click", function (e) {
                e.stopPropagation();
                heart.classList.toggle("liked");
                resetZoom(product);
                resumeCarousel(carousel);
                selectedProduct = null;
            });
        });

        // Función para pausar el carrusel
        const pauseCarousel = (carousel) => {
            carousel.style.animationPlayState = "paused";
        };

        // Función para reanudar el carrusel
        const resumeCarousel = (carousel) => {
            carousel.style.animationPlayState = "running";
        };

        // Función para quitar el zoom
        const resetZoom = (product) => {
            product.classList.remove("zoomed");
        };

        // Iniciar carrusel con animación activa
        resumeCarousel(carousel);
    });
});
