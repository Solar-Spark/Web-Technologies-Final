document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const speedRange = document.getElementById("speed-range");
    const speedDisplay = document.getElementById("speed-display");

    let currentIndex = 0;
    let interval = null;
    let autoPlaySpeed = parseInt(speedRange.value);

    const startCarousel = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, autoPlaySpeed);
    };

    const stopCarousel = () => {
        clearInterval(interval);
    };

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    speedRange.addEventListener("input", (event) => {
        autoPlaySpeed = parseInt(event.target.value);
        speedDisplay.textContent = `${(autoPlaySpeed / 1000).toFixed(1)}s`;
        stopCarousel();
        startCarousel();
    });

    startCarousel();
});
