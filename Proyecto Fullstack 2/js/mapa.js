// Inicializar mapa centrado en Santiago
var map = L.map('map').setView([-33.4489, -70.6693], 6);

// Cargar tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lista de eventos gamer
var eventos = [
  { nombre: "Gamers Fest Santiago", coords: [-33.4489, -70.6693] },
  { nombre: "ExpoGame Concepción", coords: [-36.8201, -73.0444] },
  { nombre: "Valpo eSports Arena", coords: [-33.0458, -71.6197] },
  { nombre: "Antofagasta Gaming Expo", coords: [-23.6509, -70.3975] }
];

// Crear marcadores en el mapa
eventos.forEach(e => {
  L.marker(e.coords).addTo(map)
    .bindPopup(`<b>${e.nombre}</b><br>¡Participa y gana puntos LevelUp!`);
});
