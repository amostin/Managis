<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <META NAME="TITLE" CONTENT="Managis, l'outil de préparation d'événements et de gestion des restes">
  <META NAME="AUTHOR" CONTENT="Ambroise Mostin">
  <META NAME="DESCRIPTION" CONTENT="Managis est un outil qui facilite l'organisation d'événements en permettant d'ajouter le lieu, la date, les invités et plus. Les participants peuvent également aider à l'organisation. Il est possible de lutter contre le gaspillage en mettant en ligne des articles non consommé ou inutilisés">
  <META NAME="KEYWORDS" CONTENT="outil, facilite , preparation , organisation, gestion, logistique , evenement, soirée, privees, publique, anniversaire, vacances, congé, séjour, réunion, auberge espagnole, open air, barbecue, rencontre, fête, festival, concert, spectacle, repas, rendez-vous, festivité, convention, sortie, excursion, visite, voyage, en groupe, ensemble, partager, lieu, date, invité, participant, fournitures, utile, commenter, être informé, synchroniser,  anti gaspillage, gaspillage, restes, inutilisé, pas consommé, donner, vendre, donner ses restes, vendre ses restes, échange, lutte contre gaspillage, amitié, humanité, odd, objectif développement durable, articles, non consommé">
  <META NAME="OWNER" CONTENT="Ambroise Mostin">
  <META NAME="ROBOTS" CONTENT="index,all">
  <META NAME="Reply-to" CONTENT="contact@ambroisemostin.com">
  <META NAME="REVISIT-AFTER" CONTENT="15">

  <title>MANAGIS</title>

  <!-- CookieBot -->
  <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="04c00e12-09da-468b-88ed-cd50eb0ad319" data-blockingmode="auto" type="text/javascript"></script>

  <!-- Nous chargeons les fichiers CDN de Leaflet. Le CSS AVANT le JS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="" />


  <link rel="stylesheet" type="text/css" href="CSS/evo-calendar.css" />
  <link rel="stylesheet" type="text/css" href="CSS/evo-calendar.midnight-blue.css" />

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

  <!-- Bootstrap core CSS -->
  <!--<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">-->
  <!-- Material Design Bootstrap -->
  <!--<link href="CSS/mdb.min.css" rel="stylesheet">-->

  <!-- Your custom styles (optional) -->
  <link href="CSS/style2.css" rel="stylesheet">


  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
  <link href="CSS/agency.css" rel="stylesheet">
  <link rel="icon" type="image/png" href="IMG/favicon.png" />

  <!-- JQuery -->
  <script type="text/javascript" src="vendor/jquery/jquery.js"></script>
  <link rel="stylesheet" href="vendor/jquery/jquery-ui.css">
  <script src="vendor/jquery/jquery-1.12.4.js"></script>
  <script src="vendor/jquery/jquery-ui.js"></script>
  <!-- Bootstrap tooltips -->
  <script type="text/javascript" src="JS/popper.min.js"></script>
  <!-- MDB core JavaScript -->
  <script type="text/javascript" src="JS/mdb.min.js"></script>
  <script type="text/javascript" src="JS/main.js"></script>



</head>

<body id="page-top">

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" id="index" href="index.php">Managis</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <?php
          $services =
            '<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>';
          $quiSommesNous =
            '<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">L\'équipe</a>
          </li>';
          $connexion =
            '<li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="connexion" href="connexion.php">Connexion</a>
          </li>';
          $aProposDeNous =
            '<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">A propos de nous</a>
          </li>';
          $contact =
            '<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>';
          $telechargement =
            '<li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="downloadAppli.php">Telecharger notre application</a>
          </li>';
          $vosEvenements =
            '<li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle btn btn-outline-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span class="glyphicon glyphicon-calendar"></span> Gestion des événements
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="addEvent.php">CREER VOTRE EVENEMENT</a>
                              <a class="dropdown-item" href="vosEvenements.php">EVENEMENTS A VENIR</a>
                              <a class="dropdown-item" href="historiqueEvents.php">HISTORIQUE DE VOS EVENEMENTS</a>
                              <a class="dropdown-item" href="adresses.php">VOIR TOUTES LES ADRESSES</a>
                              <a class="dropdown-item" href="calendrier.php">VOIR LE CALENDRIER</a>
                            </div>
                </li>';
          if (!empty($_SESSION['user'])) {
            $espaceMembre = str_replace("<a class=\"nav-link js-scroll-trigger\" id=\"connexion\" href=\"connexion.php\">Connexion</a>", "<a href=\"espaceMembre.php\" id=\"espaceMembre\" class=\"nav-link js-scroll-trigger\">Gestion de  compte</a>", $connexion);
            $deconnexion = str_replace("<a class=\"nav-link js-scroll-trigger\" href=\"#team\">L'équipe</a>", "<a href=\"deconnexion.php\" id=\"deconnexion\" class=\"nav-link js-scroll-trigger\"> Déconnexion</a>", $quiSommesNous);
            echo $vosEvenements  . $espaceMembre . $deconnexion;
          } else {
            echo $services . $aProposDeNous . $quiSommesNous . $contact . $telechargement . $connexion;
          }
          ?>

        </ul>
      </div>
    </div>
  </nav>



  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Bienvenue sur Managis</div>
        <div class="intro-heading text-uppercase">Organisez au mieux vos événements! </div>
        <?php
        $commencez =  '<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Commencez dès maintenant !</a>';
        if (!empty($_SESSION['user'])) {
          echo '<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="addEvent.php">Commencez dès maintenant !</a>';
        } else {
          echo $commencez;
        }
        ?>
      </div>
    </div>
  </header>
  <div id="popUp"></div>
  <div id="cgu-priv"></div>
  <?php

  $difSection = '<div id="difSection">
  <!-- Services -->
  <section class="bg-white page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
          <h3 class="section-subheading text-muted">Nous vous accompagnons lors de l\'organisation de vos événements.</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-6">
          <span class="fa-stack fa-4x">
          <a  href="connexion.php"> 
            <i class="fas fa-circle fa-stack-2x text-primary" ></i>
            <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
           </a>
          </span>
          <h4 class="service-heading"  href="connexion.php">Créez vos événements</h4>
          <p class="text-muted">Préparez votre soirée au mieux en invitant tous vos amis tout en leur partageant les informations nécessaires pour le bon déroulement de celui-ci.</p>
        </div>
        <div class="col-md-6">
          <span class="fa-stack fa-4x">
          <a  href="connexion.php"> 
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-eye fa-stack-1x fa-inverse"></i>
           </a>
          </span>
          <h4 class="service-heading">Checkez vos événements</h4>
          <p class="text-muted">Recevez toutes vos invitations et regardez ce dont l\'hôte a besoin pour son événement.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="bg-light page-section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">A propos de nous</h2>
          <h3 class="section-subheading text-muted">Comment en sommes-nous arrivé là?</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="IMG/about/1.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Septembre 2019</h4>
                  <h4 class="subheading">Notre commencement</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Nous sommes des étudiants en 3eme technologie de l\'informatique à l\'EPHEC de Louvain-La-Neuve. Dans le cadre de notre cours de projet d\'intégration, nous avons comme tâche d\'effectuer un projet qui nous serait utile dans la vie de tous les jours</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="IMG/about/2.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Mi-Septembre 2019</h4>
                  <h4 class="subheading">L\'idée!</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lors de notre voyage de fin d\'étude nous sommes passé par l\'étape d\'organisation. C\'est alors que nous nous sommes dit que nous allions créer une plateforme afin de faciliter cette tâche!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Rejoignez-
                  <br>notre
                  <br>PROJET!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="bg-white page-section" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Notre équipe !</h2>
          <h3 class="section-subheading text-muted">Voici l\'équipe qui a travaillé sur ce projet.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/adri.png" alt="">
            <h4>Adrien Chellé</h4>
            <p class="text-muted">Product owner/Dev App</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/nico.png" alt="">
            <h4>Nicolas Viroux</h4>
            <p class="text-muted">Dev App/Admin</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/ibra.png" alt="">
            <h4>Ibrahima Conde</h4>
            <p class="text-muted">Dev App/Admin</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/dominik.png" alt="">
            <h4>Dominik Fiedorczuk</h4>
            <p class="text-muted">Chef Dev Web</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/Maxime.png" alt="">
            <h4>Maxime Liber</h4>
            <p class="text-muted">Dev Web</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/remy.png" alt="">
            <h4>Rémy Vase</h4>
            <p class="text-muted">Dev Web</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="IMG/team/ambroise.png" alt="">
            <h4>Ambroise Mostin</h4>
            <p class="text-muted">Scrum Master/Dev App</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted"></p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
      
        <div class="col-lg-12 text-center">
       
          <h2 class="section-heading text-uppercase">Contactez-nous</h2>
          <h3 class="section-subheading text-muted">Un soucis ? Nous sommes là pour répondre à vos questions.</h3>
          <div id="successMail"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate" method="post" action="validation.php">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" name="name" id="name" type="text" placeholder="Votre nom *" required="required" data-validation-required-message="Veuillez entrer votre prénom." autocomplete="on">
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" name="email" id="email" type="email" placeholder="Votre email *" required="required" data-validation-required-message="Veuillez entrer votre adresse email." autocomplete="on">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" name="message" id="message" placeholder="Votre message *" required="required" data-validation-required-message="Veuillez entrer votre message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>';
  if (empty($_SESSION['user'])) echo $difSection;
  ?>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Managis Website</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="CGU.php">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <!-- Portfolio Modals -->

  <!-- Modal 1 -->
  <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted"></p>
                <img class="img-fluid d-block mx-auto" src="IMG/portfolio/01-full.jpg" alt="">
                <p></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2 -->
  <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted"></p>
                <img class="img-fluid d-block mx-auto" src="IMG/portfolio/02-full.jpg" alt="">
                <p></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Explore</li>
                  <li>Category: Graphic Design</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3 -->
  <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted"></p>
                <img class="img-fluid d-block mx-auto" src="IMG/portfolio/03-full.jpg" alt="">
                <p></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Finish</li>
                  <li>Category: Identity</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 4 -->
  <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted"></p>
                <img class="img-fluid d-block mx-auto" src="IMG/portfolio/04-full.jpg" alt="">
                <p></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Lines</li>
                  <li>Category: Branding</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 5 -->
  <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted"></p>
                <img class="img-fluid d-block mx-auto" src="IMG/portfolio/05-full.jpg" alt="">
                <p></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Southwest</li>
                  <li>Category: Website Design</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 6 -->
  <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted"></p>
                <img class="img-fluid d-block mx-auto" src="IMG/portfolio/06-full.jpg" alt="">
                <p></p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Window</li>
                  <li>Category: Photography</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact form JavaScript -->
  <script src="JS/jqBootstrapValidation.js"></script>

  <!-- Custom scripts for this template -->
  <script src="JS/agency.min.js"></script>

  <!-- Fichiers Javascript -->
  <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>

  <!-- <script src="vendor/jquery/jquery.min.js"></script> -->
  <script src="JS/evo-calendar.js"></script>

</body>

</html>