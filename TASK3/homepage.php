<?php
session_start();
include("connect.php");


if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}


$email = $_SESSION['email'];
$query = mysqli_query($conn, "SELECT firstName, lastName FROM users WHERE email='$email'");
$user = mysqli_fetch_assoc($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Your Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: url('images/background.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #333;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .container {
            position: relative;
            max-width: 700px;
            padding: 50px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 15px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
            color: white;
            backdrop-filter: blur(10px);
            animation: fadeIn 1s ease-in-out;
        }

        .greeting {
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #fff;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        }

        .btn {
            display: inline-block;
            background-color: #ff5733;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 20px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .btn:hover {
            background-color: #e64a19;
            transform: translateY(-5px);
        }

        .btn:focus {
            outline: none;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @media (max-width: 768px) {
            .container {
                padding: 20px;
                width: 90%;
            }

            .greeting {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <p class="greeting">
            Hello, <?php echo htmlspecialchars($user['firstName']) . ' ' . htmlspecialchars($user['lastName']); ?> 😊
        </p>
        <a href="logout.php" class="btn">Logout</a>
    </div>
</body>
</html>
