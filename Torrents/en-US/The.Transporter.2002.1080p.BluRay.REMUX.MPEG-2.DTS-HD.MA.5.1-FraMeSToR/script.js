document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const seedersCount = document.getElementById('seedersCount');
    const leechersCount = document.getElementById('leechersCount');

    // Simulate real-time peer fluctuation slightly for immersion
    setInterval(() => {
        const seederChange = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const leecherChange = Math.floor(Math.random() * 3) - 1; 
        
        let currentSeeders = parseInt(seedersCount.textContent);
        let currentLeechers = parseInt(leechersCount.textContent);

        seedersCount.textContent = currentSeeders + seederChange;
        leechersCount.textContent = Math.max(1, currentLeechers + leecherChange); // dynamic but keeps it realistic
    }, 10000);

    // Mock download action
    downloadBtn.addEventListener('click', () => {
        downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Connecting...';
        downloadBtn.style.background = '#6fcf97';
        
        setTimeout(() => {
            alert('Magnet link copied to clipboard and triggered! Opening your torrent client...');
            downloadBtn.innerHTML = '<i class="fa-solid fa-magnet"></i> Download Magnet';
            downloadBtn.style.background = '#00adb5';
        }, 1200);
    });
});