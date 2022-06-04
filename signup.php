<?php

header("Access-Control-Allow-Origin: *");
header("Acces-Control-Allow-headers: *");
$host="localhost";
$db_user = "root";
$db_pass = null;
$db_name = "facebookdb";

$mysqli = new mysqli($host,$db_user, $db_pass, $db_name);

$username = $_POST["username"];
$password = hash("sha256",$_POST["password"]);

$query = $mysqli->prepare("INSERT INTO USERS (USERNAME, PASSWORD) VALUES (?, ?)");
$query->bind_param("ss", $username, $password);
$query->execute();

$response = [];
$response ["success"] = true;

echo json_encode($response)

?>