var map;
var toronto = {
    lat: 43,
    lng: -79.38
};
console.log(toronto);
console.log(toronto.lat);
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: toronto,
        zoom: 8
    });
}
