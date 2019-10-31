<div class="panel-heading">
    <h3 class="panel-title gestionDeCompteTitre" align="center">Connectez-vous</h3>
</div>
<div class="row centered-form" >
    <div class="col-lg-12">
        <form id="formConnexion" class="formConnexion" name="formConnexion" method="post" action="validation.php">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="pseudo" name="pseudo" type="text" placeholder="Votre pseudo *" required="required">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="mdp" name="mdp" type="password" placeholder="Votre mot de passe *" required="required">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                    <div id="success"></div>
                    <button class="btn btn-primary btn-xl text-uppercase" name="form" type="submit">Connexion</button>
                </div>
            </div>
        </form>
    </div>
</div>
