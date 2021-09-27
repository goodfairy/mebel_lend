<?php

require "smtp/PHPMailerAutoload.php";

$mailArray = array("freem@it-keeper.ru");

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'no-reply@it-keeper.ru';
$mail->Password = 'yfujhirtcbltkrjhjkm';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->CharSet = 'UTF-8';

$mail->isHTML(true);

$mail->From = "no-reply@it-keeper.ru";
$mail->FromName = "Мебель";
$mail->Subject = "Новое сообщение с сайта Мебель";

$mail->Body = "Имя: ".$_POST['name']."</br>";
$mail->Body .= "Телефон: ".$_POST['phone']."</br>";
$mail->Body .= "Вопрос: ".$_POST['comment']."</br>";
    
foreach($mailArray as $mailItem){
    $mail->addAddress($mailItem);
    $mail->send();
    $mail->clearAddresses();
}

$response = array("form" => $_POST["form"],"status" => "ok");

echo json_encode($response);
