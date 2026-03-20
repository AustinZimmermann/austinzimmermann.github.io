/**
 * Changes the main product image when a thumbnail is clicked.
 * It also updates the 'active' class on the thumbnails for styling purposes.
 */
function changeImage(element) {
    // 1. Get the source of the clicked thumbnail
    const newSrc = element.src;
    
    // 2. Update the main image source
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = newSrc;
    
    // 3. Remove 'active' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // 4. Add 'active' class to the clicked thumbnail
    element.classList.add('active');
}