let map: any;
let addresses: any[];
let mapMarkers: MapMarker[] = [];

interface LatLng {
	lat: number;
	lng: number; 
}

class MapMarker {
	
	public constructor(address: string, latlng: LatLng) {
		this.Address = address;
		this.LatLng = latlng;
	}

	Address: string;
	LatLng: LatLng;
}

let toronto: LatLng = {
	lat: 43,
	lng: -79.38
};

// console.log(toronto);
// console.log(toronto.lat);

$.ajax({
	url: 'locations.json',
	dataType: 'json',
	success: function(data){
		addresses = data;
		for(let i of addresses){
			let newLatLng: LatLng = {
				lat: i.lat,
				lng: i.lon
			};
			let newMapMarker: MapMarker = new MapMarker(i.address, newLatLng);
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
	
	let geocoder = new google.maps.Geocoder();
	geocoder.geocode();

	let marker:any;
	let infowindow = new google.maps.InfoWindow();

	for(let i of mapMarkers){
		marker = new google.maps.Marker({
			position: i.LatLng,
			map: map,
			title: i.Address
		});
		// console.log(marker);
		// marker.setMap(map);
	}

	function addMarker():void {
		// body...
	}

	function getLatLng(address: string): LatLng {
		let result: LatLng = {lat:0,lng:0};
		geocoder.geocode(
			{
				"address": address
			},function(results, status){
				if (status==='OK') { 
					result.lat = results[0].geometry.location.lat();
					result.lng = results[0].geometry.location.lng();
				}
			});
		return result;
	}



}