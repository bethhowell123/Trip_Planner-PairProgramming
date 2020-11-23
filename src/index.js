// console.log('Hello from JS!')

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3ZldGxhbmEtbGVvbm92YSIsImEiOiJja2h1dHV6b2IwejdlMnVwZ3dlajVnamk4In0.AbiT49rRPlwJc6BeYxk5Yw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const markerEl = document.createElement("div");
const coordinates = [-74.009151, 40.705086];

markerEl.style.width = "32px";
markerEl.style.height = "39px";
markerEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerEl).setLngLat(coordinates).addTo(map);
