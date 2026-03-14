document.addEventListener('DOMContentLoaded', () => {
    const magnetBtn = document.getElementById('magnetBtn');
    
    // Fake magnet link for the purpose of the mockup
    const fakeMagnetURI = "magnet:?xt=urn:btih:fakehash1234567890&dn=Underworld.Evolution.2006.1080p.Blu-ray.Remux.MPEG-2.LPCM.5.1-iLLUSiON.mkv";

    magnetBtn.addEventListener('click', () => {
        // Attempt to copy the fake magnet link to clipboard
        navigator.clipboard.writeText(fakeMagnetURI).then(() => {
            // Provide visual feedback
            const originalText = magnetBtn.innerText;
            magnetBtn.innerText = "✓ Magnet Copied!";
            magnetBtn.style.backgroundColor = "#388E3C";
            
            // Revert back after 2 seconds
            setTimeout(() => {
                magnetBtn.innerText = originalText;
                magnetBtn.style.backgroundColor = ""; // Reverts to CSS default
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert("Could not copy magnet link.");
        });
    });
});