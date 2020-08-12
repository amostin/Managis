<?php
include_once 'dbAccess.php';
//include '../DBAccess/dbAccess.php';
$db = new dbAccess();
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$idReste = $obj['idReste']; 
$marche = $db->procCall('donneurConfirm', [$idReste]);
echo json_encode('ok'); //Decode le en JS