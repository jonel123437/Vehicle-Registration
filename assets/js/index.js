var subtitle = document.getElementById('subtitle');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword')
var login = document.getElementById('login')
var sign = document.getElementById('sign')
var sign1 = document.getElementById('sign1')
var loginForm = document.getElementById('loginForm')
var email = document.getElementById('email')
var password = document.getElementById('password')

function toggleForm() {
    if (subtitle.innerText === "Login") {
        subtitle.innerText = "Sign Up";
        password.placeholder = "Create password";
        confirmPassword.style.display = "block";
        login.innerText = "Sign up";
        sign.innerText = "Already have an account? ";
        sign1.innerText = "Login";
        email.id = "createEmail"
        password.id = "createPassword"
    } else {
        subtitle.innerText = "Login";
        password.placeholder = "Password";
        confirmPassword.style.display = "none";
        login.innerText = "Log in";
        sign.innerText = "Don't have an account? ";
        sign1.innerText = "Signup";
        email.id = "email"
        password.id = "password"
    }
}
