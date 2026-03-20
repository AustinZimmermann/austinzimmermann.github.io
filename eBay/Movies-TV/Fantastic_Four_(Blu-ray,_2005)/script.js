/**
 * Updates the main product image when a thumbnail is clicked.
 * @param {string} imageUrl - The URL of the image to display.
 */
function changeImage(imageUrl) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        // Fade out slightly for a smooth transition feel
        mainImage.style.opacity = '0.8';
        
        setTimeout(() => {
            mainImage.src = imageUrl;
            mainImage.style.opacity = '1';
        }, 50);
    }
}