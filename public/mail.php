<?php
require 'PHPMailerAutoload.php';

require_once('class.phpmailer.php');    // dodanie klasy phpmailer
require_once('class.smtp.php');    // dodanie klasy smtp
$mail = new PHPMailer();    //utworzenie nowej klasy phpmailer
$mail->From = "dk@rapidapps.pl";    //Pełny adres e-mail
$mail->FromName = 'From: ' . $_POST['email']; //imię i nazwisko lub nazwa użyta do wysyłania wiadomości
$mail->Host = "mailng.az.pl";    //adres serwera SMTP wysyłającego e-mail
$mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
$mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
$mail->Username = "dk@rapidapps.pl";    //nazwa użytkownika do skrzynki e-mail
$mail->Password = "kuna,Kuna88";    //hasło użytkownika do skrzynki e-mail
$mail->Port = 587; //port serwera SMTP 
//$mail->Subject = $_POST['userSubject']; //Temat wiadomości, można stosować zmienne i znaczniki HTML
$mail->Body = $_POST['message'];    //Treść wiadomości, można stosować zmienne i znaczniki HTML 
$mail->SMTPAutoTLS = false;   //wyłączenie TLS
$mail->SMTPSecure = '';    // 
$mail->AddAddress ("dawidkunicki88@gmail.com","Dawid Kunicki");    //adres skrzynki e-mail oraz nazwa
                                                    //adresata, do którego trafi wiadomość
if($mail->Send())    //sprawdzenie wysłania, jeśli wiadomość została pomyślnie wysłana
    {                      
        header('Location: http://dmkweb.pl/#/contact'); //wyświetl ten komunikat
        }            
    else    //w przeciwnym wypadku
        {           
        header('Location: http://dmkweb.pl/#/contact');    //wyświetl następujący
        }

// $to      = 'trzy.cztery@o2.pl';
// $subject = $_POST['subject'];
// $message = $_POST['message'];
// $headers = 'From: ' . $_POST['email'] . "\r\n" .
// 	'Content-type: text/html; charset=utf-8';

// mail($to, $subject, $message, $headers);
// echo 'Wszystko ok';
?>

