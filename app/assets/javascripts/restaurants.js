function initialize() {
  var myLatlng = new google.maps.LatLng(37.761436,-122.424313);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//   var delfina = document.getElementsByClassName('list')[0];

// google.maps.event.addDomListener(delfina, 'click', function() {
//   var delfinalatlng = new google.maps.LatLng(37.761436,-122.424313);
//   var marker = new google.maps.Marker({
//       position: delfinalatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Delfina'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var nopa = document.getElementsByClassName('list')[1];

// google.maps.event.addDomListener(nopa, 'click', function() {
//   var nopalatlng = new google.maps.LatLng(37.774834,-122.437469);
//   var marker = new google.maps.Marker({
//       position: nopalatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'NOPA'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var zuni = document.getElementsByClassName('list')[2];

// google.maps.event.addDomListener(zuni, 'click', function() {
//   var zunilatlng = new google.maps.LatLng(37.773432,-122.421555);
//   var marker = new google.maps.Marker({
//       position: zunilatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Zuni'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var pizzeriadelfina1 = document.getElementsByClassName('list')[3];

// google.maps.event.addDomListener(pizzeriadelfina1, 'click', function() {
//   var pizzeriadelfina1latlng = new google.maps.LatLng(37.788922,-122.434324);
//   var marker = new google.maps.Marker({
//       position: pizzeriadelfina1latlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Pizzeria Delfina California St.'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var pizzeriadelfina2 = document.getElementsByClassName('list')[4];

// google.maps.event.addDomListener(pizzeriadelfina2, 'click', function() {
//   var pizzeriadelfina2latlng = new google.maps.LatLng(37.761466,-122.424232);
//   var marker = new google.maps.Marker({
//       position: pizzeriadelfina2latlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Pizzeria Delfina 18th St.'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var cotogna = document.getElementsByClassName('list')[5];

// google.maps.event.addDomListener(cotogna, 'click', function() {
//   var cotognalatlng = new google.maps.LatLng(37.797336,-122.403576);
//   var marker = new google.maps.Marker({
//       position: cotognalatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Cotogna'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var kokkari = document.getElementsByClassName('list')[6];

// google.maps.event.addDomListener(kokkari, 'click', function() {
//   var kokkarilatlng = new google.maps.LatLng(37.797019,-122.399517);
//   var marker = new google.maps.Marker({
//       position: kokkarilatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Kokkari'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var chez = document.getElementsByClassName('list')[7];

// google.maps.event.addDomListener(chez, 'click', function() {
//   var chezlatlng = new google.maps.LatLng(37.879591,-122.268875);
//   var marker = new google.maps.Marker({
//       position: chezlatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Chez Panisse'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var otd = document.getElementsByClassName('list')[8];

// google.maps.event.addDomListener(otd, 'click', function() {
//   var otdlatlng = new google.maps.LatLng(37.787208,-122.43412);
//   var marker = new google.maps.Marker({
//       position: otdlatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'OTD Bush St.'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

// var frances = document.getElementsByClassName('list')[9];

// google.maps.event.addDomListener(frances, 'click', function() {
//   var franceslatlng = new google.maps.LatLng(37.76267,-122.432251);
//   var marker = new google.maps.Marker({
//       position: franceslatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: 'Frances'
//   });
//   map.panTo(marker.getPosition());
//   google.maps.event.addListener(marker, 'click', function() {
//   marker.setVisible(false);
// });
// });

$("div").click(function () {
  $('#moreinfo', this).toggle();
  // $('.list.dropdown').not(this).removeClass("dropdown");
  // $(this).toggleClass("dropdown");
  var id = $(this).attr('id').toString();
  $('#moreinfo', this).load(id);
});

}


google.maps.event.addDomListener(window, 'load', initialize);