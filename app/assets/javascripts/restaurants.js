function initialize() {
  var myLatlng = new google.maps.LatLng(37.761436,-122.424313);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var markers = {};
var counters = {
  0:0,
  1:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0
}
  $('ul').on("click", ".list", function() {
    var i = $(this).attr('id')-1;
    counters[i]++;
    var locationarray = [
    ['Delfina',37.761396,-122.424484],
    ['NOPA',37.774883,-122.437606],
    ['Zuni',37.77366,-122.421529],
    ['Pizzeria Delfina California St.',37.789008,-122.434355],
    ['Pizzeria Delfina 18th St.',37.761419,-122.424383],
    ['Cotogna',37.797418,-122.403569],
    ['Kokkari',37.797026,-122.399682],
    ['Chez Panisse',37.879613,-122.268962],
    ['OTD Bush St.',37.787077,-122.434122],
    ['Frances',37.762793,-122.43226]
    ];
  if (counters[i]%2===1) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locationarray[i][1],locationarray[i][2]),
        map: map,
        animation: google.maps.Animation.DROP,
        title: locationarray[i][0]
    });
    markers[i] = marker;
    map.panTo(marker.getPosition());
  }
  else {
      var marker = markers[i];
      marker.setMap(null);
      delete markers[i];
  }
});

$("div").one('click', function () {
  var id = $(this).attr('id').toString();
  $('#moreinfo', this).load(id);
});
$("div").click(function () {
  $('#moreinfo', this).slideToggle(400);
});

}


google.maps.event.addDomListener(window, 'load', initialize);