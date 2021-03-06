<div class="panel-heading">
    <h3 class="panel-title gestionDeCompteTitre" align="center">Modifiez votre événement!</h3>
</div>
<div class="row centered-form" >
    <div class="col-lg-12">
        <form id="formModifEvent" class="formModifEvent" name="formModifEvent" method="post" action="validation.html">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="nom" name="nomEvent" type="text"  required="required" autocomplete="on">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="adresse" name="adresse" type="text" required="required" autocomplete="on">
                        *Format numero rue ville pays
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="date" name="date" type="date"  required="required" autocomplete="on">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="heure" name="heure" type="time" required="required" autocomplete="on">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                    <div id="success"></div>
                    <button class="btn btn-primary btn-xl text-uppercase" name="form" type="submit">Enregistrez vos modifications</button>
                </div>
            </div>
        </form>
    </div>
</div>