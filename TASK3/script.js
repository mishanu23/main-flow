const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});


document.querySelector("form").addEventListener("submit", function(e) {
    const password = document.getElementById("passwordSignUp").value;
    const confirmPassword = document.getElementById("confirmPasswordSignUp").value;

    if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
    }
});