// Dynamic Tab Engine
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    // Bookmark Toggle Interactions
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    let isBookmarked = false;

    bookmarkBtn.addEventListener('click', () => {
        isBookmarked = !isBookmarked;
        if(isBookmarked) {
            bookmarkBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> Bookmarked`;
            bookmarkBtn.style.borderColor = 'var(--primary)';
            bookmarkBtn.style.color = 'var(--primary)';
        } else {
            bookmarkBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> Bookmark`;
            bookmarkBtn.style.borderColor = 'var(--border-color)';
            bookmarkBtn.style.color = 'var(--text-main)';
        }
    });

    // Alert simulation for .torrent download
    const downloadTorrent = document.getElementById('downloadTorrent');
    downloadTorrent.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Downloading torrent file meta payload: Space.Chimps.2008.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1-FGT.torrent');
    });

    // Simulated Tracker Live Peer Fluctuation Fluctuations
    const seedElement = document.getElementById('seedCount');
    const leechElement = document.getElementById('leechCount');

    setInterval(() => {
        let currentSeeds = parseInt(seedElement.textContent);
        let currentLeeches = parseInt(leechElement.textContent);

        // Random swing between -2 and +2
        let seedDelta = Math.floor(Math.random() * 5) - 2;
        let leechDelta = Math.floor(Math.random() * 3) - 1;

        seedElement.textContent = Math.max(120, currentSeeds + seedDelta);
        leechElement.textContent = Math.max(5, currentLeeches + leechDelta);
    }, 4000);
});