 <style type="text/css">
    #map {
      /* la carte DOIT avoir une hauteur sinon elle n'apparaît pas */
      height: 400px;
    }
  </style>

<div class="container-fluid centered-form">
    <div class="panel-heading">
        <h3 class="panel-title gestionDeCompteTitre pasColler" align="center">Carte</h3>
    </div>
    <div id="map">
        <!-- Ici s'affichera la carte -->
    </div>
</div>

  <script type="text/javascript">
    // On initialise la latitude et la longitude de Paris (centre de la carte)
    var lat = 50.8466;
    var lon = 4.3528;
    var macarte = null;
    // Fonction d'initialisation de la carte
    function initMap() {
    console.log(lat);
      // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
      macarte = L.map('map').setView([lat, lon], 11);
      // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
      L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
      }).addTo(macarte);
    }
    //window.onload = function() {
      // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
      initMap();
    //};
  </script>