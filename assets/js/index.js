document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();
    toAdmin();
});

function toAdmin() {
    var vehicleIdInput = document.getElementById('vehicleId');
    var passwordInput = document.getElementById('password');
    var vehicleId = vehicleIdInput.value.toLowerCase();
    var password = passwordInput.value.toLowerCase();

    if (vehicleId === "admin" && password === "admin") {
        passwordInput.value = "";
        vehicleIdInput.value = "";
        displayAdmin();
    } else {
        toDashboard()
    }
}

function displayAdmin() {
    var title = document.getElementById('title');
    var gear = document.getElementById('gear');
    var loginForm = document.getElementById('loginForm')

    title.innerText = "Welcome admin";
    gear.style.display = "block";
    loginForm.style.display = "none"
    adminBtn.style.display = "block"
}

function toDashboard() {
}
var logoutAdmin = document.getElementById('logoutAdmin');
var gearIcon = document.getElementById('gear');

gearIcon.addEventListener('click', function(){
    if (logoutAdmin.style.display === "block") {
        logoutAdmin.style.display = "none"; // Hide the logout element
    } else {
        logoutAdmin.style.display = "block"; // Show the logout element
    }
});

logoutAdmin.addEventListener('click', function() {
    title.innerText = "Vehicle Registration"; // Reset title
    gear.style.display = "none"; // Hide gear icon
    loginForm.style.display = "flex"; // Show login form
    adminBtn.style.display = "none"; // Hide admin buttons
    logoutAdmin.style.display = "none"; // Hide logout button again
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}