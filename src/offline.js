/**
 * Let's try to use service workers to test some offline features and capabilities
 */
export default function initOffline(){
    console.log('Offline started');

    // Register a service worker
    if ('serviceWorker' in navigator){
        // Service worker is supported
        console.log('Service worker is supported, proceeding to register one...')

        navigator.serviceWorker.register('/service_worker.js').then(
            (registration) => {
                console.log('Registration successful, registration object: ', registration);
            },
            (error) => {
                console.log('Error during registration', error)
            }
        )


    } else {
        console.log('Service worker is not supported.')
    }


    let button = document.getElementById('load-image');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Loading the image...');
        let image = document.createElement('img');
        image.src = "test_files/sample_image_large.jpg";
        document.getElementById('sw_output').appendChild(image);

    });

}