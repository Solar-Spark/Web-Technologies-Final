document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const speedRange = document.getElementById("speed-range");
    const speedDisplay = document.getElementById("speed-display");

    let currentIndex = 0;
    let interval = null;
    let autoPlaySpeed = parseInt(speedRange.value); // Initial speed

    // Function to start the carousel auto-play
    const startCarousel = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length; // Loop back to the start
            updateCarousel();
        }, autoPlaySpeed);
    };

    // Function to stop the carousel auto-play
    const stopCarousel = () => {
        clearInterval(interval);
    };

    // Function to update the carousel position
    const updateCarousel = () => {
        const offset = -currentIndex * 100; // Calculate offset in percentage
        carousel.style.transform = `translateX(${offset}%)`;
    };

    // Update speed based on user input
    speedRange.addEventListener("input", (event) => {
        autoPlaySpeed = parseInt(event.target.value);
        speedDisplay.textContent = `${(autoPlaySpeed / 1000).toFixed(1)}s`;
        stopCarousel();
        startCarousel();
    });

    // Start the carousel on page load
    startCarousel();
});
