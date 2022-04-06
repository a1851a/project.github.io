<?php
	include("connect1.php");
	header("Connect-type = text/html; charset = utf-8");
	$slcdb=mysqli_select_db($db_link,"simpleml1");
	$nowdata=$_POST["nowdata"];
	if(!$slcdb){die("資料庫連接失敗");}
	else{
	$sql_query="INSERT INTO `record1`(`code`, `mr`, `lmr`, `ymr`, `mc`, `yc`, `ym`, `lmc`, `kmeans_cluster`, `kmeans_pep`, `knn_id`, `knn_pep`, `ca_pep`) VALUES ('".$nowdata[0]."','".$nowdata[1]."','".$nowdata[2]."','".$nowdata[3]."','".$nowdata[4]."','".$nowdata[5]."','".$nowdata[6]."','".$nowdata[7]."','".$nowdata[8]."','".$nowdata[9]."','".$nowdata[10]."','".$nowdata[11]."','".$nowdata[12]."')";
	}
	$result=mysqli_query($db_link,$sql_query);
?>