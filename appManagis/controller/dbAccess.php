<?php
class dbAccess
{
    private $pdo = null; //Le PDO donc la requete vers la BDD
    private $action = null; //Action qui va reprendre la classe action
    /**
     * La fonction permet d'effectuer une connexion vers la BDD
     */
    public function connexionBDD()
    {
        try {
            $this->pdo = new PDO('mysql:host=91.216.107.162;dbname=ambro1430042', 'ambro1430042', 'shnzqwgi7h');
            //$this->pdo = new PDO('mysql:host=localhost;dbname=projet', 'root', 'root');
        } catch (PDOException $e) {
            print_r($e);
        }
    }
    /**
     * La fonction permet d'effectuer les requetes aux procèdures dans BDD
     * @param $procName nom de la procèdure
     * @param array $procParams les paramètres qu'on transmet vers la procèdure
     * @return mixed
     */
    public function procCall($procName, $procParams = array())
    {
        $params = array();
        switch ($procName) {
            case 'creationUser':
                array_push($params, '?', '?');
            case 'verifEmail':
            case 'verifPseudo':
            case 'espaceMembre':
            case 'nombreComm':
            case 'nombreFour':
            case 'nombreInv':
            case 'vosEventFutur':
            case 'vosEventPasse':
            case 'nombreParticipant':
            case 'listeParticipant':
            case 'vosInvitAno':
            case 'suppEvent':
            case 'infoEvent':
            case 'mailSupprInvite':
            case 'mailInv':
            case 'infoPopUp':
            case 'marcheRestes':
            case 'mesAnnoncesMarche':
            case 'deleteAnnonce':
                array_push($params, '?');
            case 'tousLesUsers':
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'connexionUser':
            case 'connexionUserApp':
            case 'modifMdp':
            case 'ajouterInvites':
            case 'ajouterFournitures':
            case 'ajoutCommentaire':
            case 'supprCommentaire':
            case 'supprFourniture':
            case 'supprInvites':
            case 'vosInvitFutur':
            case 'vosInvitPasse':
            case 'ajoutParticipant':
            case 'supprParticipant':
                array_push($params, '?', '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'creerEvent':
                array_push($params, '?', '?', '?', '?');
            case 'listeInvites':
            case 'listeFourniture':
            case 'listeCommentaire':
                array_push($params, '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'ajoutQuantite':
                array_push($params, '?', '?', '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'modifEvent':
                array_push($params, '?', '?', '?', '?', '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'ajoutAnnonce':
                array_push($params, '?', '?', '?', '?', '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'modifAnnonce':
                array_push($params, '?', '?', '?', '?', '?', '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'getDateCreatCompte':
                array_push($params, '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'receveurConfirm':
                array_push($params, '?', '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'donneurConfirm':
                array_push($params, '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'getNbRecup':
                array_push($params, '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
        switch ($procName) {
            case 'getNbDonne':
                array_push($params, '?');
                try {
                    $this->connexionBDD();
                    $callProc = 'call ' . $procName . '(' . join(',', $params) . ')';
                    $request = $this->pdo->prepare($callProc);
                    $request->execute($procParams);
                    return $request->fetchAll();
                } catch (PDOException $e) {
                    $e->getMessage();
                }
                break;
        }
    }
}

