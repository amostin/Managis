<?php

include 'dbAccess.php';

$db = new dbAccess();
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$pseudo = htmlspecialchars($obj["pseudo"]);
$email = htmlspecialchars($obj["email"]);
$password = hash("sha256", htmlspecialchars($obj["mdp"]));


$checkEmail = $db->procCall("verifEmail", [$email]);
$checkPseudo = $db->procCall("verifPseudo", [$pseudo]);

if (!empty($checkEmail)) {
    if (!empty($checkPseudo)) {
        echo json_encode("mailPseudoPasOk");
    } else {
        echo json_encode("mailPasOk");
    }
} else if (!empty($checkPseudo)) {
    echo json_encode("pseudoPasOk");
} else {
    $inscription = $db->procCall('creationUser', [$pseudo, $email, $password]);
    echo json_encode("ok");
    /*
    $SuccessLoginJson = json_encode($inscription);
    echo $SuccessLoginJson;
    */
}
