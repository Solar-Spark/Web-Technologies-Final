document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline ol");
    let isScrolling = false;
    let scrollInterval;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            isScrolling = true;
            startAutoScroll(); // Start the scrolling animation
          }
        });
      },
    );
  
    observer.observe(document.querySelector(".timeline"));
  
    function startAutoScroll() {
      let scrollAmount = 0;
      const scrollStep = 1; // Adjust scroll speed
      const scrollIntervalDuration = 20; // Adjust smoothness

      function scrollTimeline() {
        scrollAmount += scrollStep;

        // When the timeline reaches the end, reset to the start smoothly
        if (scrollAmount >= timeline.scrollWidth - timeline.clientWidth) {
          scrollAmount = 0; // Reset scroll to the start
          timeline.scrollTo({ left: scrollAmount, behavior: "smooth" });
        } else {
          timeline.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }

      scrollInterval = setInterval(scrollTimeline, scrollIntervalDuration);
    }
});
