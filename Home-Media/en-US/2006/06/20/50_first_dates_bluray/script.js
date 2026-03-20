document.addEventListener("DOMContentLoaded", () => {
    const coverImage = document.getElementById("cover-image");
    const flipBtn = document.getElementById("flip-btn");

    const frontSrc = "https://images.blu-ray.com/movies/covers/116_front.jpg";
    const backSrc = "https://images.blu-ray.com/movies/covers/116_back.jpg";
    
    let isShowingFront = true;

    flipBtn.addEventListener("click", () => {
        if (isShowingFront) {
            coverImage.src = backSrc;
            coverImage.alt = "50 First Dates Back Cover";
            flipBtn.textContent = "View Front Cover";
        } else {
            coverImage.src = frontSrc;
            coverImage.alt = "50 First Dates Front Cover";
            flipBtn.textContent = "View Back Cover";
        }
        isShowingFront = !isShowingFront;
    });
});