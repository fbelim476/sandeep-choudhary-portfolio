<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {

    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'faijalkhan.bca@gmail.com';
    $mail->Password = 'kixpdwperzobjkns';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('faijalkhan.bca@gmail.com', 'Contact Form');

    // ADMIN MAIL
    $mail->addAddress('faijalkhan.bca@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Message';

    $mail->Body = "
        Name: $name <br>
        Email: $email <br>
        Message: $message
    ";

    $mail->send();

    // USER MAIL
    $mail->clearAddresses();

    $mail->addAddress($email);

    $mail->Subject = 'Thank you for contacting us';

    $mail->Body = "
        Dear $name,<br><br>
        Thank you for contacting us.<br>
        We will reply soon.<br><br>
        Regards
    ";

    $mail->send();

    echo "Mail Sent Successfully";

} catch (Exception $e) {

    echo "Mail Failed: {$mail->ErrorInfo}";
}

?>