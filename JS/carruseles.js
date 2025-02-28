document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel, .carousel-2");

    carousels.forEach(carousel => {
        let isPaused = false;
        let scrollSpeed = 1; // Ajustado para mayor fluidez
        let step = 0;
        let firstItemWidth = carousel.children[0].offsetWidth + 60; // Considerando el gap

        function moveCarousel() {
            if (!isPaused) {
                step -= scrollSpeed;
                carousel.style.transform = `translateX(${step}px)`;

                // Cuando el primer elemento está por salir, lo movemos al final antes de que se vea el espacio vacío
                if (Math.abs(step) >= firstItemWidth) {
                    carousel.appendChild(carousel.children[0]); // Mueve el primer elemento al final
                    carousel.style.transform = `translateX(0px)`;
                    step = 0;
                }
            }
            requestAnimationFrame(moveCarousel);
        }
        moveCarousel();

        // Pausa y reanuda el carrusel al hacer clic en un producto
        carousel.querySelectorAll(".product").forEach(product => {
            const heart = document.createElement("i");
            heart.classList.add("fa", "fa-heart", "heart");
            product.appendChild(heart);

            heart.addEventListener("click", (event) => {
                event.stopPropagation();
                heart.classList.toggle("liked");
                resetCarousel();
            });

            product.addEventListener("click", () => {
                if (product.classList.contains("selected")) {
                    product.classList.remove("selected");
                    isPaused = false;
                } else {
                    isPaused = true;
                    product.classList.add("selected");
                }
            });
        });

        // Reiniciar el carrusel cuando sea necesario
        function resetCarousel() {
            isPaused = false;
            carousel.querySelectorAll(".product.selected").forEach(el => el.classList.remove("selected"));
        }
    });
});
