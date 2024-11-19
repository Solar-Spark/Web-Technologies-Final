document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline ol");
    let isScrolling = false;
    let scrollInterval;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            isScrolling = true;
            startAutoScroll();
          }
        });
      },
    );
  
    observer.observe(document.querySelector(".timeline"));
  
    function startAutoScroll() {
      let scrollAmount = 0;
      const scrollStep = 1;
      const scrollIntervalDuration = 20;

      function scrollTimeline() {
        scrollAmount += scrollStep;

        if (scrollAmount >= timeline.scrollWidth - timeline.clientWidth) {
          scrollAmount = 0;
          timeline.scrollTo({ left: scrollAmount, behavior: "smooth" });
        } else {
          timeline.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }

      scrollInterval = setInterval(scrollTimeline, scrollIntervalDuration);
    }
});
