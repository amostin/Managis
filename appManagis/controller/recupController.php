<?php
include_once 'dbAccess.php';
//include '../DBAccess/dbAccess.php';
$db = new dbAccess();
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$idReceveur = $obj['idReceveur']; 
$idReste = $obj['idReste']; 
$marche = $db->procCall('receveurConfirm', [$idReceveur, $idReste]);
echo json_encode('ok'); //Decode le en JS