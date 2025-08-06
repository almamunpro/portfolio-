<?php
$success = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // DB connection
  $conn = new mysqli("localhost", "root", "", "portfolio_db");

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Sanitize user inputs
  $name = $conn->real_escape_string($_POST['name']);
  $email = $conn->real_escape_string($_POST['email']);
  $subject = $conn->real_escape_string($_POST['subject']);
  $message = $conn->real_escape_string($_POST['message']);

  $sql = "INSERT INTO contact_messages (name, email, subject, message)
          VALUES ('$name', '$email', '$subject', '$message')";

  if ($conn->query($sql) === TRUE) {
    $success = true;
  }

  $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Response</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div style="padding: 50px; text-align: center;">
    <?php if ($success): ?>
      <h2 style="color: green;">✅ Thank you! Your message has been sent successfully.</h2>
    <?php else: ?>
      <h2 style="color: red;">❌ Sorry! Something went wrong.</h2>
    <?php endif; ?>
    <br>
    <a href="index.html">← Back to Home</a>
  </div>
</body>
</html>
