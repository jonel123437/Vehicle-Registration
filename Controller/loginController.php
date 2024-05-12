<?php

require 'Model/authModel';

class loginController
{
    public function index()
    {
        include 'View/login.php';
    }

    public function login()
    {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $user = new authModel();
        $user->setEmail($email);
        $user->setPassword($password);

        if ($user->login()) {
            echo "Login successful!";
        } else {
            echo "Invalid username or password!";
        }
    }
}
?>
