const timeBlock = document.querySelector("#time-block");
const timeText = document.querySelector("#time-text");
const timeGreeting = document.querySelector("#time-greeting");
const clockButton = document.getElementById("clock-btn");

let blockVisibility = false;

setInterval(function() {
    let date = new Date();

    if (date.getHours() >= 4 && date.getHours() < 12) {
        timeGreeting.textContent = "Good Morning"; 
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        timeGreeting.textContent = "Good Day";
    } else if (date.getHours() >= 18 && date.getHours() < 23) {
        timeGreeting.textContent = "Good Evening";
    } else {
        timeGreeting.textContent = "Good Night";
    }

    timeText.innerHTML = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = date.toLocaleDateString();
}, 1000);

function toggleTimeBlock() {
    if (blockVisibility) {
        timeBlock.classList.remove('time-show');
        timeBlock.classList.add('time-hide');
    } else {
        timeBlock.classList.remove('time-hide');
        timeBlock.classList.add('time-show');
    }
    blockVisibility = !blockVisibility;
}

clockButton.addEventListener("mouseenter", () => {
    if (!blockVisibility) toggleTimeBlock();
});

clockButton.addEventListener("mouseleave", () => {
    if (blockVisibility) toggleTimeBlock();
});

clockButton.addEventListener("click", toggleTimeBlock);

clockButton.addEventListener("dblclick", () => {
    const is24Hour = timeText.getAttribute("data-24hour") === "true";
    timeText.setAttribute("data-24hour", !is24Hour);
    const date = new Date();
    timeText.innerHTML = is24Hour ? date.toLocaleTimeString('en-US') : date.toTimeString().split(" ")[0];
});
