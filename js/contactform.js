let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");

function showLoading(show){
    document.getElementById('loading').style.display = show ? 'flex' : 'none';
}

function showStep(index) {
    formSteps.forEach((step, i) => {
        step.classList.remove("active");
        if (i === index) step.classList.add("active");
    });
}

function nextStep() {
    if (validateForm(currentStep)) {
        showLoading(true);  // Show loading animation
        
        setTimeout(() => {
            currentStep++;
            if (currentStep >= formSteps.length) currentStep = formSteps.length - 1;
            showStep(currentStep);
            showLoading(false);  // Hide loading animation
        }, 3000);  // 3-second delay
    }
}
function previousStep() {
    showLoading(true);  // Show loading animation
    
    setTimeout(() => {
        currentStep--;
        if (currentStep < 0) currentStep = 0;
        showStep(currentStep);
        showLoading(false);  // Hide loading animation
    }, 3000);  // 3-second delay
}

function validateForm(stepIndex) {
    clearErrors();
    let isValid = true;

    if (stepIndex === 0) {
        const name = document.getElementById("name").value.trim();
        if (name === "") {
            showError("nameError", "Name is required.");
            isValid = false;
        }
    }
    if (stepIndex === 1) {
        const email = document.getElementById("email").value.trim();
        if (email === "") {
            showError("emailError", "Email is required.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("emailError", "Please enter a valid email address.");
            isValid = false;
        }
    }
    if (stepIndex === 2) {
        const subject = document.getElementById("subject").value.trim();
        if (subject === "") {
            showError("subjectError", "Subject is required.");
            isValid = false;
        }
    }
    if (stepIndex === 3) {
        const message = document.getElementById("message").value.trim();
        if (message === "") {
            showError("messageError", "Message is required.");
            isValid = false;
        }
    }

    return isValid;
}

document.getElementById("multiStepForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm(currentStep)) {
        alert("Form submitted successfully!");
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = "astanait.edu.kz";
    return regex.test(email) && email.endsWith(`@${domain}`);
}

function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.textContent = ""; // Clears the error message
    });
}
