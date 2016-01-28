function initialize() {

  var myLatLng1 = {lat: 57.0473192, lng: 9.9206314};
  var mapCanvas = document.getElementById('mapAalborg');
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng1),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var marker = new google.maps.Marker({ position: myLatLng1, map: map, title: 'Tøjstory Alborg'});


  var myLatLng2 = {lat: 56.15821494, lng: 10.20716853};
  var mapCanvas = document.getElementById('mapAarhus');
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng2),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var marker = new google.maps.Marker({ position: myLatLng2, map: map, title: 'Tøjstory Aarhus!'});


  var myLatLng3 = {lat: 56.450985, lng: 9.407381};
  var mapCanvas = document.getElementById('mapViborg');
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng3),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var marker = new google.maps.Marker({ position: myLatLng3, map: map, title: 'Tøjstory Viborg'});
}
google.maps.event.addDomListener(window, 'load', initialize);
