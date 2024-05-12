<?php

require 'Model/authModel.php';

class signupController
{
    public function index()
    {
        include 'View/signup.php';
    }

    public function register()
    {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $user = new authModel();
        $user->setFirstName($fname);
        $user->setLastName($lname);
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setPassword($password);

        if ($user->save()) {
            echo "User registered successfully!";
        } else {
            echo "Failed to register user!";
        }
    }
}
?>
