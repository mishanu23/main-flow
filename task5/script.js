document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById("login-box");


    loginBox.innerHTML = `
        <div>
            <h2>Login</h2>
            <form id="login-form">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="input-field" placeholder="Enter your email" required />
                    <div class="error" id="email-error">Please enter a valid email.</div>
                </div>
                <div class="input-group password-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="input-field" placeholder="Enter your password" required />
                    <span class="toggle-password" id="toggle-password">👁️</span>
                    <div class="error" id="password-error">Password must be at least 6 characters.</div>
                </div>
                <button type="submit" class="btn" id="login-btn" disabled>Login</button>
            </form>
        </div>
    `;

    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const togglePasswordBtn = document.getElementById("toggle-password");
    const loginBtn = document.getElementById("login-btn");

    togglePasswordBtn.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordBtn.textContent = "🔒";
        } else {
            passwordInput.type = "password";
            togglePasswordBtn.textContent = "👁️";
        }
    });


    function validateForm() {
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        let isValid = true;


        if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,}$/i)) {
            emailError.classList.add("show");
            isValid = false;
        } else {
            emailError.classList.remove("show");
        }

     
        if (password.length < 6) {
            passwordError.classList.add("show");
            isValid = false;
        } else {
            passwordError.classList.remove("show");
        }

      
        loginBtn.disabled = !isValid;
    }

    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);

    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("Email:", emailInput.value);
        console.log("Password:", passwordInput.value);

        alert("Login Successful!");
        window.location.href = "welcome.html"; 
    });
});
