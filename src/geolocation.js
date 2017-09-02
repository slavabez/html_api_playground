// Wrap in an IFFE to preserve scope
import * as googleMaps from 'google-maps';
googleMaps.KEY = 'AIzaSyBiPDvQTDuSyrdq-oxGKni19qnUNLK87Fo';

export default function geoInit() {

    console.log('Initialising the geo module');

    const showMessage = (message) => {
        let outputBox = document.getElementById('geo_output');
        outputBox.innerText = message;
    };

    const onPermissionClick = (e) => {
        e.preventDefault();

        navigator.geolocation.getCurrentPosition(
            ()=>{
                // Do nothing on success
                showMessage('We have your location!')
            },
            (error) => {
                // On error
                showMessage(error.message);
            });

    };

    const onGetLocationClick = (e) => {
        e.preventDefault();

        navigator.geolocation.getCurrentPosition(
            (location) => {
                // On success
                let latLon = {lat: location.coords.latitude, lng: location.coords.longitude};
                googleMaps.load((google) => {
                    new google.maps.Map('map')
                });


            },
            (error) => {
                // On error
                showMessage(error.message);
            });
    };


    // Attach listeners to buttons
    const permissionButton = document.getElementById('geo_permission');
    permissionButton.onclick = onPermissionClick;

    const getLocationButton = document.getElementById('geo_locate');
    getLocationButton.onclick = onGetLocationClick;


}
