var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
   
}).addTo(map);

var marker = L.marker([44.39658924161665, 26.013907543181485]).addTo(map);
map.locate({setView: true, maxZoom: 16});


// var circle = L.circle([44.39658924161665, 26.013907543181485], {





    
//     color: 'red',
//     fillColor: '#5A9EFC',
//     fillOpacity: 0.4,
//     radius: 1000
// }).addTo(map);




function onLocationFound(e) {

    var radius = e.accuracy;
    
    radius = 500;

    


    L.circle(e.latlng,  radius).addTo(map);
    
}



map.on('locationfound', onLocationFound);






// ===========================================Error
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);