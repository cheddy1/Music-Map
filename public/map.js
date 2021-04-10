let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.9717, lng: -95.2353 },
    zoom: 10,
  });
  let latlng = new google.maps.LatLng(-34.397, 150.644);
  var myMarkerOptions = {
    position: latlng,
    map: map
 }
 var myMarker = new google.maps.Marker(myMarkerOptions);
}
