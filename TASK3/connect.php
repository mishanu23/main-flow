<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "login";
$port = 3307;


mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$conn = new mysqli($host, $user, $pass, $db, $port);


if ($conn->connect_error) {
  
    die("Failed to connect to the database: " . $conn->connect_error);
}

?>

