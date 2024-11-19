document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formContainer = document.getElementById("form-container");
    const registerContainer = document.getElementById("register-container");
    const profileContainer = document.getElementById("profile-container");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
    const logoutButton = document.getElementById("logout");

    // Check if user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        document.getElementById("user-name").textContent = user.name;
        document.getElementById("user-email").textContent = user.email;
        formContainer.style.display = "none";
        profileContainer.style.display = "block";
    }

    showRegister.addEventListener("click", () => {
        formContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    showLogin.addEventListener("click", () => {
        registerContainer.style.display = "none";
        formContainer.style.display = "block";
    });

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;

        const user = { name, email, password };
        localStorage.setItem(email, JSON.stringify(user));

        alert("Registration successful!");
        registerContainer.style.display = "none";
        formContainer.style.display = "block";
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            // Save logged-in user info in localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            document.getElementById("user-name").textContent = user.name;
            document.getElementById("user-email").textContent = user.email;
            formContainer.style.display = "none";
            profileContainer.style.display = "block";
        } else {
            alert("Invalid login credentials.");
        }
    });

    logoutButton.addEventListener("click", () => {
        // Remove logged-in user info from localStorage
        localStorage.removeItem("loggedInUser");
        profileContainer.style.display = "none";
        formContainer.style.display = "block";
    });
});
