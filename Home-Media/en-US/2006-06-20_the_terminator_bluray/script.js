document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buy-btn');
    const trailerBtn = document.getElementById('trailer-btn');
    const coverImage = document.getElementById('cover-image');

    // Simulate adding to a collection
    buyBtn.addEventListener('click', () => {
        alert('The Terminator (Blu-ray) added to your collection!');
        buyBtn.textContent = '✓ In Collection';
        buyBtn.style.backgroundColor = '#1b5e20'; // Dark green
    });

    // Simulate loading a trailer
    trailerBtn.addEventListener('click', () => {
        alert('Loading original theatrical trailer...');
    });

    // Simple image toggle to zoom
    let isZoomed = false;
    
    coverImage.addEventListener('click', () => {
        if (!isZoomed) {
            coverImage.style.transform = 'scale(1.1)';
            coverImage.style.boxShadow = '0 25px 50px rgba(0,0,0,1)';
        } else {
            coverImage.style.transform = 'scale(1)';
            coverImage.style.boxShadow = '0 15px 30px rgba(0,0,0,0.8)';
        }
        isZoomed = !isZoomed;
    });
});