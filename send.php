<?php
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$fio = urlcode($fio);
$phone = urlcode($phone);
$email = urlcode($email);
$fio = trim($fio);
$phone = trim($phone);
$email = trim($phone);
// echo $fio;
// echo "<br>";
// echo $phone;
// echo "<br>";
// echo $phone;
// echo "<br>";
// echo $email;
mail("andrey.budylin@gmail.com", "Обращение с сайта", "Name:".$fio.". Phone:".$phone, "From: lp@beget.ru \r\n");
if (mail("andrey.budylin@gmail.com", "Обращение с сайта", "Name:".$fio.". Phone:".$phone, "From: lp@beget.ru \r\n"))
	{echo "Ваша заявка успешно отправлена";
	}
	else {echo "возникла ошибка соединения. Пожалуйста, повторите запрос";}

	?>