// directions_reset.js //

// Initialize the map
var myMap = L.map('map').setView([50.0, -100], 3);

// Create a variable to store original markers or layers
var originalMarkers = L.layerGroup().addTo(myMap);

// Add initial markers to the originalMarkers layer
L.marker([51.5, -0.09]).addTo(originalMarkers);
// Add more markers as needed

// Define the clearMapLayers function
function clearMapLayers() {
  // Clear any additional layers you want to remove, but keep the originalMarkers layer intact
  // For example: myMap.removeLayer(someLayer);
}

// Define the resetPage function
function resetPage() {
  // Clear additional layers if needed using clearMapLayers function
  clearMapLayers();

  // Reset the map view to its initial state
  myMap.setView([50.0, -100], 3);

  // Clear the input fields
  const startAddressInput = document.getElementById('startAddress');
  const endAddressInput = document.getElementById('endAddress');
  startAddressInput.value = '';
  endAddressInput.value = '';
}