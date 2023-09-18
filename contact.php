<?php
if (isset($_POST['submit'])) {
    $subject = "Contact Form Submission";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "itsbeastieboy@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    // Build the email message
    $message_body = "Name: " . $name . "\n";
    $message_body .= "Email: " . $email . "\n";
    $message_body .= "Message:\n" . $message;

    // Send the email
    if (mail($to, $subject, $txt, $headers)) {
        echo "<p>Your message has been sent successfully.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
    header("Location: index.html?mailsend")
}
?>