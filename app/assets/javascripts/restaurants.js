function initialize() {
  var myLatlng = new google.maps.LatLng(37.761436,-122.424313);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);