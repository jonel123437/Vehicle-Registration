function handleSignupForm(event) {
    event.preventDefault();
    var formData = new FormData(document.getElementById("loginForm"));

    fetch('../assets/php/signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

document.getElementById("loginForm").addEventListener("submit", handleSignupForm);

document.querySelector('.loginButton').addEventListener('click', function(){
    var email = document.getElementById('email').value.toLowerCase();
    var password = document.getElementById('password').value.toLowerCase();
    if (email == "admin" && password == "admin"){
        window.location.href = "../../pagesHTML/admin.html";
    }
});
