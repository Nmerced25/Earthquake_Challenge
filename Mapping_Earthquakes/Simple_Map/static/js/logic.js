// Add console.log to check to see if our code is working.
console.log("working");


// We create the map object with options.
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: pk.eyJ1IjoibWlzdGVybWVyY2VkIiwiYSI6ImNsNHlzcXNxZjA2Z3gzanA4a3Axam5pcGsifQ.ALCS4Qw7ZhWwPZdVaGoiHg
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
