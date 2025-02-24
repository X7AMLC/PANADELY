document.addEventListener("DOMContentLoaded", function () {
    const carruseles = [
        { container: ".carousel", products: ".carousel .product" },
        { container: ".carousel-2", products: ".carousel-2 .product" }
    ];

    carruseles.forEach(({ container, products }) => {
        const carousel = document.querySelector(container);
        const productList = Array.from(document.querySelectorAll(products));
        let selectedProduct = null;

        if (!carousel || productList.length === 0) return;

        productList.forEach((product) => {
            const heart = document.createElement("div");
            heart.classList.add("heart-icon");
            heart.innerHTML = "\u2665"; 
            product.appendChild(heart);

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

            heart.addEventListener("click", function (e) {
                e.stopPropagation();
                heart.classList.toggle("liked");
                resetZoom(product);
                resumeCarousel(carousel);
                selectedProduct = null;
            });
        });

        const pauseCarousel = (carousel) => {
            carousel.style.animationPlayState = "paused";
        };

        const resumeCarousel = (carousel) => {
            carousel.style.animationPlayState = "running";
        };

        const resetZoom = (product) => {
            product.classList.remove("zoomed");
        };

        resumeCarousel(carousel);
    });
});
