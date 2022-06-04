<?php
header("Access-Control-Allow-Origin: *");
header("Acces-Control-Allow-headers: *");
$host="localhost";
$db_user = "root";
$db_pass = null;
$db_name = "facebookdb";

$mysqli = new mysqli($host,$db_user, $db_pass, $db_name);

$username = $_POST["username"];
$password = $_POST["password"];
$query = $mysqli->prepare("SELECT USER_ID FROM USERS WHERE USERNAME = ? AND PASSWORD = ?");
$query->bind_param("ss", $username, $password);
$query->execute();
$query->store_result();
$record_num = $query->num_rows;
$query->bind_result($id);
$query->fetch();
if($record_num == 0){
    $response["response"]="user not found";
}else{
    $response["response"] = "Logged in!";
    $response["user_id"] = $id;
}

$JSON = json_encode($response);
echo $JSON;
?>