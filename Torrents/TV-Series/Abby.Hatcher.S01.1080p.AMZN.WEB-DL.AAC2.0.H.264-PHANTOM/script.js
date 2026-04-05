document.addEventListener('DOMContentLoaded', () => {
    const fileContainer = document.getElementById('fileContainer');
    const episodeCount = 26;
    
    // Simulating the file list for the 26 episodes (51 segments)
    const files = [];
    
    for (let i = 1; i <= episodeCount; i++) {
        const epNumber = i.toString().padStart(2, '0');
        // Standard naming convention for scene releases
        files.push(`Abby.Hatcher.S01E${epNumber}.1080p.AMZN.WEB-DL.AAC2.0.H.264-PHANTOM.mkv`);
    }

    files.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `<span style="color: #666;">📄</span> ${file} <span style="float: right; color: #444;">~1.2 GB</span>`;
        fileContainer.appendChild(li);
    });

    document.getElementById('downloadBtn').addEventListener('click', () => {
        alert('Magnet link copied to clipboard! (Simulation)');
    });
});