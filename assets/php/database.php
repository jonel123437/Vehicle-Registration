<?php
$servername = "localhost";
$username = "michael";
$password = "root";
$dbname = "SignUpDB";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
