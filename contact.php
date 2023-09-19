<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = "Contact Form Submission";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $message = $_POST["message"];

    $to = "youremail@example.com"; // Replace with your email address

    // Build the email message
    $message_body = "Name: " . $name . "\n";
    $message_body .= "Email: " . $email . "\n";
    $message_body .= "Phone Number: " . $number . "\n";
    $message_body .= "Message:\n" . $message;

    // Send the email
    if (mail($to, $subject, $message_body)) {
        echo "<p>Your message has been sent successfully.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
}
?>