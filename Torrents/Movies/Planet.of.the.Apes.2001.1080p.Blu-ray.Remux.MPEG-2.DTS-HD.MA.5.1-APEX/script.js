document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        // In a real scenario, this would link to the .torrent file or magnet link
        alert('Starting download for: Planet.of.the.Apes.2001.1080p.Blu-ray.Remux.MPEG-2.DTS-HD.MA.5.1-APEX');
        
        // Example: window.location.href = 'magnet:?xt=urn:btih:...';
    });
});