var map;
var addresses;
var mapMarkers = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address, latlng) {
        this.Address = address;
        this.LatLng = latlng;
    }
    return MapMarker;
}());
var toronto = {
    lat: 43,
    lng: -79.38
};
// console.log(toronto);
// console.log(toronto.lat);
$.ajax({
    url: 'locations.json',
    dataType: 'json',
    success: function (data) {
        addresses = data;
        for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
            var i = addresses_1[_i];
            var newLatLng = {
                lat: i.lat,
                lng: i.lon
            };
            var newMapMarker = new MapMarker(i.address, newLatLng);
            mapMarkers.push(newMapMarker);
        }
        // console.log(mapMarkers);
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: toronto,
        zoom: 8
    });
    // console.log("map made");
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode();
    var marker;
    for (var _i = 0, mapMarkers_1 = mapMarkers; _i < mapMarkers_1.length; _i++) {
        var i = mapMarkers_1[_i];
        marker = new google.maps.Marker({
            position: i.LatLng,
            map: map,
            title: i.Address
        });
        console.log(marker);
        marker.setMap(map);
    }
    // function getLatLng(address: string): LatLng {
    // 	let result: LatLng = {lat:0,lng:0};
    // 	geocoder.geocode(
    // 		{
    // 			"address": address
    // 		},function(results, status){
    // 			if (status==='OK') { 
    // 				result.lat = results[0].geometry.location.lat();
    // 				result.lng = results[0].geometry.location.lng();
    // 			}
    // 		});
    // }
}
