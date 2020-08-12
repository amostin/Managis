<?php
include_once 'dbAccess.php';
$db = new dbAccess();
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$user = $obj['userId']; 
$marche = $db->procCall('getNbRecup', [$user]);
echo json_encode($marche); //Decode le en JS