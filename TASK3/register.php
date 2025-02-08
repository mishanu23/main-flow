<?php 
include 'connect.php';

if(isset($_POST['signUp'])){
    $firstName = $_POST['fName'];
    $lastName = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

 
    if($password !== $confirmPassword){
        $error = "Passwords do not match!";
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $checkEmail = "SELECT * FROM users WHERE email=?";
        $stmt = $conn->prepare($checkEmail);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows > 0){
            $error = "Email Address Already Exists!";
        } else {
           
            $insertQuery = "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($insertQuery);
            $stmt->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);

            if($stmt->execute()){
                header("Location: index.php"); 
                exit();
            } else {
                $error = "Error: " . $stmt->error;
            }
        }
    }
}

if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];


    $sql = "SELECT * FROM users WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        
    
        if(password_verify($password, $row['password'])){
            session_start();
            $_SESSION['email'] = $row['email'];
            header("Location: homepage.php");
            exit();
        } else {
            $error = "Incorrect Password!";
        }
    } else {
        $error = "No account found with this email!";
    }
}
?>

<?php if(isset($error)): ?>
    <div class="error"><?php echo $error; ?></div>
<?php endif; ?>