<?php
    require('database.php');

    function signup($firstname, $lastname, $username, $email, $password) {
        global $pdo;
        $id = bin2hex(random_bytes(16));
        $password = password_hash($password, PASSWORD_DEFAULT);

        try {
            $stmt = $pdo->prepare("INSERT INTO users (id, firstname, lastname, username, email, password)
                                VALUES (:id, :firstname, :lastname, :username, :email, :password)");
            $stmt->execute([
                ':id' => $id,
                ':firstname' => $firstname,
                ':lastname' => $lastname,
                ':username' => $username,
                ':email' => $email,
                ':password' => $password,
                // ':role' => $role
            ]);
            $to = $email;
            $subject = 'Welcome to our website!';
            $message = 'Dear ' . $firstname . ' ' . $lastname . ',<br><br>You have successfully signed up for our website.';
            $headers = "From: michaeltristanflores646@gmail.com\r\n";
            $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

            $mail_result = mail($to, $subject, $message, $headers);
            if ($mail_result) {
                return true;
            } else {
                return "Signup successful, but failed to send confirmation email.";
            }
        } catch (PDOException $e) {
            return "Error: " . $e->getMessage();
        }
    }
?>
