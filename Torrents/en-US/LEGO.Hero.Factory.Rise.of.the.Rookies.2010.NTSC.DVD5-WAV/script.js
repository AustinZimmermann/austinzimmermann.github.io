const canvas = document.getElementById('torrentCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download-btn');

let downloading = false;
let progress = 0;
let speed = 0;
let pieces = [];
const totalPieces = 60;

// Initialize file pieces blocks (0 = missing, 1 = downloading, 2 = done)
for (let i = 0; i < totalPieces; i++) {
    pieces.push({ status: 0 });
}

downloadBtn.addEventListener('click', () => {
    if (!downloading && progress < 100) {
        downloading = true;
        downloadBtn.innerText = "⏳ Connecting to Swarm...";
        downloadBtn.style.opacity = 0.6;
    }
});

function drawCanvas() {
    // Clear background
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Title/Status text
    ctx.font = '12px Arial';
    if (!downloading && progress === 0) {
        ctx.fillStyle = '#888';
        ctx.fillText('Status: Idle (Click Magnet Link to start)', 15, 25);
    } else if (downloading && progress < 100) {
        ctx.fillStyle = '#39ff14';
        ctx.fillText(`Status: Downloading from swarm... Speed: ${speed.toFixed(1)} MB/s`, 15, 25);
    } else {
        ctx.fillStyle = '#f4c430';
        ctx.fillText('Status: Finished Seeding (100% Completed)', 15, 25);
    }

    // Draw Progress Bar outline
    ctx.strokeStyle = '#333';
    ctx.strokeRect(15, 40, 420, 15);
    
    // Draw Progress Fill
    ctx.fillStyle = '#28a745';
    ctx.fillRect(15, 40, (progress / 100) * 420, 15);

    // Percentage Text
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px Arial';
    ctx.fillText(`${Math.floor(progress)}%`, 210, 52);

    // Draw Torrent Bitfield (Grid of Blocks)
    const startX = 15;
    const startY = 75;
    const blockSize = 12;
    const padding = 3;
    const cols = 20;

    pieces.forEach((piece, index) => {
        const r = Math.floor(index / cols);
        const c = index % cols;
        const x = startX + c * (blockSize + padding);
        const y = startY + r * (blockSize + padding);

        if (piece.status === 0) ctx.fillStyle = '#222';       // Missing
        else if (piece.status === 1) ctx.fillStyle = '#007bff'; // In Progress
        else ctx.fillStyle = '#28a745';                       // Done

        ctx.fillRect(x, y, blockSize, blockSize);
    });
}

function updateDownload() {
    if (downloading && progress < 100) {
        speed = Math.random() * 4 + 1.5; // Simulate shifting 2010 download speed (1.5 - 5.5 MB/s)
        progress += speed * 0.05;

        // Randomly pick pieces to turn active or completed
        pieces.forEach(piece => {
            if (piece.status === 0 && Math.random() < 0.02) piece.status = 1;
            if (piece.status === 1 && Math.random() < 0.05) piece.status = 2;
        });

        if (progress >= 100) {
            progress = 100;
            downloading = false;
            pieces.forEach(p => p.status = 2);
            downloadBtn.innerText = "✅ Download Complete";
            downloadBtn.style.backgroundColor = "#28a745";
            downloadBtn.style.opacity = 1;
        }
    }
    
    // Slight random flicker to seeders/leechers for realism
    if (Math.random() < 0.05) {
        const seedEl = document.getElementById('seed-count');
        const leechEl = document.getElementById('leech-count');
        seedEl.innerText = Math.floor(142 + (Math.random() * 6 - 3));
        leechEl.innerText = Math.floor(28 + (Math.random() * 4 - 2));
    }

    drawCanvas();
    requestAnimationFrame(updateDownload);
}

// Kick off simulation loop
updateDownload();