let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.9717, lng: -95.2353 },
    zoom: 10,
  });
  let latlng = new google.maps.LatLng(-34.397, 150.644);
  var myMarkerOptions = {
    position: latlng,
    map: map, 
 }
 var infowindow = new google.maps.InfoWindow();
 infowindow.setContent('<b>Faith</b><br>The Weeknd<br>');
 var marker = new google.maps.Marker(myMarkerOptions);
  marker.addListener('mouseover', function() {
    infowindow.open(map, this);
  });

  // assuming you also want to hide the infowindow when user mouses-out
  marker.addListener('mouseout', function() {
    infowindow.close();
  });
 
}
