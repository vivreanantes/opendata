if (typeof jQuery !== 'undefined') {
	(function($) {
		
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

/* Init */

$(document).ready(function() {

	$('#searchresults .result').mouseover(function() { jQuery(this).addClass('hover'); });	
	$('#searchresults .result').mouseout(function() { jQuery(this).removeClass('hover'); });	
	
});

/* Google Maps avec layer Open Street Map */
var geocoder;
var map;

function displayMap(latitude,longitude) {

var element = document.getElementById("map");	
	
/*
Build list of map types.
You can also use var mapTypeIds = ["roadmap", "satellite", "hybrid", "terrain", "OSM"]
but static lists sucks when google updates the default list of map types.
*/
var mapTypeIds = [];
mapTypeIds.push("OSM");
for(var type in google.maps.MapTypeId) {
    mapTypeIds.push(google.maps.MapTypeId[type]);
}


/* Init Geocoder */
geocoder = new google.maps.Geocoder();
map = new google.maps.Map(element, {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 14,
    mapTypeId: "OSM",
    mapTypeControlOptions: {
        mapTypeIds: mapTypeIds
    }
});

map.mapTypes.set("OSM", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "OpenStreetMap",
    maxZoom: 18
}));

}

/* Affiche un marqueur pour l'adresse entree 
 * Service de geocoding Google Adresse => Latitude,Longitude
 * */

function addMarkerAddress(myadress,markertype) {

    geocoder.geocode( { 'address': myadress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
          
        var markerImage= new google.maps.MarkerImage('../images/content/marker_'+markertype+'.png');
        
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon : markerImage           
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }





