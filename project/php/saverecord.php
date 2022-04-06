<?php
	include("connect.php");
	header("connect-type: text/html; charset = utf-8");
	$slcdb=mysqli_select_db($db_link,"decisiontree1");
	if(!$slcdb) die("資料庫選擇失敗");

	$code=$_POST["codetext"];
	$mr=$_POST["mrtext"];
	$lmr=$_POST["lmrtext"];
	$ymr=$_POST["ymrtext"];
	$mc=$_POST["mctext"];
	$yc=$_POST["yctext"];
	$ym=$_POST["ymselect"];
	$lmc=$_POST["lmcselect"];
	$predicted=$_POST["finalanswer"];

	$sql_query = "INSERT INTO `record`(`code`, `mr`, `lmr`, `ymr`, `mc`, `yc`, `ym`, `lmc`, `predicted`) VALUES (".$code.",".$mr.",".$lmr.",".$ymr.",".$mc.",".$yc.",'".$ym."','".$lmc."','".$predicted."')";

	$result=mysqli_query($db_link,$sql_query);
	$sql_lastone = "SELECT `id` FROM `record` order by `id` desc LIMIT 0 , 1";
	$lastonequery = mysqli_query($db_link,$sql_lastone);
	$row = mysqli_fetch_array($lastonequery,MYSQLI_ASSOC);
	if ($result) {
		echo $row["id"];
	}
?>