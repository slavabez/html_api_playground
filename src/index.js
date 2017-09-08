import "./css/main.css";
import geolocation from './geolocation';
import offline from './offline';



document.addEventListener("DOMContentLoaded", function(event) {
    geolocation();
    offline();
});


