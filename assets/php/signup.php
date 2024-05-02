<?php
require('functions.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    $result = signup($firstname, $lastname, $username, $email, $password, $role);

    if ($result === true) {
        echo "Signup successful!";
    } else {
        echo $result;
    }
}
?>
