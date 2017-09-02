// Wrap in an IFFE to preserve scope

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
                console.log(location.coords);
                document.getElementById('geo_output').innerHTML = `
                    <p>Latitude: ${location.coords.latitude}</p>
                    <p>Longitude: ${location.coords.longitude}</p>
                    <p>Accuracy: ${location.coords.accuracy}</p>
                `;
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
