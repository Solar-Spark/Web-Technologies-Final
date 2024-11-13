const navItems = document.querySelectorAll(".nav-panel ul li");

document.addEventListener("keydown", (event) => {
    const focusedElement = document.activeElement;
    const index = Array.from(navItems).indexOf(focusedElement);

    if (index !== -1) {  // Check if a navigation item is focused
        switch (event.key) {
            case "ArrowRight":
                event.preventDefault();
                const nextIndex = (index + 1) % navItems.length;
                navItems[nextIndex].focus();
                break;

            case "ArrowLeft":
                event.preventDefault();
                const prevIndex = (index - 1 + navItems.length) % navItems.length;
                navItems[prevIndex].focus();
                break;
        }
    }
});
