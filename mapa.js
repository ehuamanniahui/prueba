// Coordenadas
const lat = 19.4326;
const lon = -99.1332;

// Inicializa el mapa dentro del div con id "map"
const map = L.map('map').setView([lat, lon], 14);

// Capa base oscura
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> & OpenStreetMap contributors',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Marcador
L.marker([lat, lon]).addTo(map)
  .bindPopup("¡Estamos aquí! 🍕<br>Visítanos en nuestra pizzería.")
  .openPopup();
