<?php
$name = $_POST['name'];
$tel = $_POST['tel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$tel = urldecode($tel);

$name = trim($name);
$tel = trim($tel);

// echo $name;
// echo "<br>";
// echo $tel;

if (mail("zavetnaya.13@gmail.com", "Заявка с сайта", "Имя:".$fio."\n Телефон: ".$email,"From: zavetnaya.13@gmail.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

ini_set('display_errors','On');
error_reporting('E_ALL');
?>