<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $subject = "Contact Form Submission";
        $name = $_POST["name"];
        $email = $_POST["email"];
        $number = $_POST["number"];
        $message = $_POST["message"];

        $to = "itsbeastieboy@gmail.com";
        $headers = "From: tristanbarnhouse.dev@noreply.com\r\n";
        // $headers .= "MIME-Version: 1.0" . "\r\n";
        // $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

        $message_body = "<b>Name:</b> " . $name . "<br>";
        $message_body .= "<b>Email:</b> " . $email . "<br>";
        $message_body .= "<b>Phone Number:</b> " . $number . "<br>";
        $message_body .= "<b>Message:</b><br>" . $message;

        if (mail($to, $subject, $message_body, $headers)) {
            echo "<p>Your message has been sent successfully.</p>";
        } else {
            echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
        }
    }

    // Make it so it stays on the current page but clears all fields with maybe a popup below the submit button stating success for message sent
?>