var header_container2 = document.querySelector('.header_container2');
var dropdown = document.querySelector('.dropdown-content');

function toggleDropdown() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

header_container2.addEventListener('click', toggleDropdown);
