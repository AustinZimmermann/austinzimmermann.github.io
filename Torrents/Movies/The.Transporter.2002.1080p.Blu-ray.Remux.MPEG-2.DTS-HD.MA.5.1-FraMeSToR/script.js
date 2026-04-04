function triggerDownload() {
    const status = document.getElementById('status-msg');
    const folder = "The.Transporter.2002.1080p.Blu-ray.Remux.MPEG-2.DTS-HD.MA.5.1-FraMeSToR";
    
    status.innerText = "Connecting to seeds...";
    
    setTimeout(() => {
        status.innerText = "Downloading .torrent file for: " + folder;
        console.log("Torrent link triggered for folder: " + folder);
    }, 1500);
}