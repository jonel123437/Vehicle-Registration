<?php
require('database.php');

function signup($firstname, $lastname, $username, $email, $password, $role) {
    global $conn;
    $id = bin2hex(random_bytes(16));

    $password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (id, firstname, lastname, username, email, password, role) 
            VALUES ('$id', '$firstname', '$lastname', '$username', '$email', '$password', '$role')";

    if (mysqli_query($conn, $sql)) {
        return true;
    } else {
        return "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
