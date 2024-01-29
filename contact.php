<?php
    function incrementCounter() {
        $counterFile = 'counter.txt';
    
        $currentCounter = (int) file_get_contents($counterFile);
    
        $newCounter = $currentCounter + 1;
    
        file_put_contents($counterFile, $newCounter);
    
        return $newCounter;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $counterValue = incrementCounter();

        $subject = 'Contact Form Submission #' . $counterValue;
        $name = $_POST["name"];
        $email = $_POST["email"];
        $number = $_POST["number"];
        $message = $_POST["message"];
            
        $to = "td.barnhouse@yahoo.com";
        $headers  = "From: <noreply@tristanbarnhouse.dev>\r\n"; 
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

        $message_body = '<div style="max-width: 500px;">
            <table border="1" style="border-collapse: collapse; width: 100%; color: black;">
                <tr>
                    <td><b>Name:</b></td>
                    <td>' . $name . '</td>
                </tr>
                <tr>
                    <td><b>Email:</b></td>
                    <td>' . $email . '</td>
                </tr>
                <tr>
                    <td><b>Phone Number:</b></td>
                    <td>' . $number . '</td>
                </tr>
                <tr>
                    <td colspan="2"><b>Message:</b></td>
                </tr>
                <tr>
                    <td colspan="2">' . $message . '</td>
                </tr>
            </table>
        </div>';


        if (mail($to, $subject, $message_body, $headers)) {
            $response = array("success" => true);
        } 
        else {
            $response = array("success" => false);
        }
        
        header("Content-Type: application/json");
        echo json_encode($response);
    }
?>