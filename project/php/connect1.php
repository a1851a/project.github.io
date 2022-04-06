<?php
	$db_host="localhost";
	$db_username="root";
	$db_link=mysqli_connect($db_host,$db_username);
	if(!$db_link){die("資料庫連接失敗");}
	mysqli_query($db_link,"SET NAMES 'utf8'");
?>