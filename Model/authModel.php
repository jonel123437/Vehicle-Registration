<?php

class authModel
{
    private $conn;
    private $fname;
    private $lname;
    private $username;
    private $email;
    private $password;

    public function __construct()
    {
        $servername = "localhost";
        $dbusername = "michael";
        $dbpassword = "root";
        $dbname = "signupdb";

        $this->conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function getFirstName()
    {
        return $this->fname;
    }

    public function setFirstName()
    {
        $this->fname;
    }

    public function getLastName()
    {
        return $this->lname;
    }

    public function setLastName()
    {
        $this->lname;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function save()
    {
        $id = bin2hex(random_bytes(16));
        $hashedpassword = password_hash($this->password, PASSWORD_DEFAULT);
        $stmt = $this->conn->prepare("INSERT INTO users (id, fname, lname, username, email, password) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $this->id, $this->fname, $this->lname, $this->username, $this->email, $hashedpassword);

        if ($stmt->execute()) {
            $stmt->close();
            $this->conn->close();
            return true;
        } else {
            echo "Error: " . $this->conn->error;
            $stmt->close();
            $this->conn->close();
            return false;
        }
    }

    public function login()
    {
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE email=? AND password=?");
        $stmt->bind_param("ss", $this->email, $this->password);

        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $stmt->close();
            $this->conn->close();
            return true;
        } else {
            $stmt->close();
            $this->conn->close();
            return false;
        }
    }
}
?>
