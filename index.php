<?php

$action = isset($_GET['action']) ? $_GET['action'] : 'signup';

switch ($action) {
    case 'signup':
        require 'Controller/signupController.php';
        $signupController = new signupController();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $signupController->register();
        } else {
            $signupController->index();
        }
        break;
    case 'login':
        require 'Controller/loginController.php';
        $loginController = new loginController();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $loginController->login();
        } else {
            $loginController->index();
        }
        break;
    default:
        echo "Invalid action!";
        break;
}
?>
