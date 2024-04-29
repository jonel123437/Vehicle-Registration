document.querySelector('.loginButton').addEventListener('click', function(){
    var email = document.getElementById('email').value.toLowerCase();
    var password = document.getElementById('password').value.toLowerCase();
    if (email == "admin" && password == "admin"){
        window.location.href = "../../pagesHTML/admin.html";
    }
})