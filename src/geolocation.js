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
                // On success
                let latlon = location.coords.latitude + "," + location.coords.longitude;
                let imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center="
                    +latlon+"&zoom=14&size=400x300&key=AIzaSyDZEfAsf5P90STLksy-gWBhsUOZOJvanyo";
                document.getElementById('geo_output').innerHTML = `<p>Your browser says you're somewhere here</p><img src="${imgUrl}" />`;
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
