export function showMap(lat, lng) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZml6aWsiLCJhIjoiY2thdTloZjJhMDk3NTJ5bzlqdmpuZXpzZSJ9.VRtOSj5RqTBn56KIVI1q6g";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [lat, lng],
    zoom: 15,
    scrollZoom: {
      ctrl: true,
    },
  });
  map.scrollZoom.disable();

  const marker = new mapboxgl.Marker().setLngLat([lat, lng]).addTo(map);
}
