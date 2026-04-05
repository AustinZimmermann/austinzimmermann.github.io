function downloadTorrent() {
    alert("Starting download for: Star.Wars.Episode.II.Attack.of.the.Clones.2002.1080p.Blu-ray.Remux.AVC.DTS-HD.MA.6.1-FraMeSToR.torrent");
}

function copyMagnet() {
    const magnetLink = "magnet:?xt=urn:btih:EXAMPLE123456789&dn=Star.Wars.Episode.II.Attack.of.the.Clones.2002.1080p.Blu-ray.Remux.AVC.DTS-HD.MA.6.1-FraMeSToR";
    navigator.clipboard.writeText(magnetLink);
    alert("Magnet link copied to clipboard!");
}
