function downloadAlert() {
    const folderName = document.getElementById('folder-name').innerText;
    alert("Requesting .torrent for: " + folderName);
    console.log("Download initiated for release: FraMeSToR");
}

// Optional: Change header background on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000';
    } else {
        header.style.backgroundColor = '#1f1f1f';
    }
};
