document.addEventListener("DOMContentLoaded", () => {
    const fileListContainer = document.getElementById("fileList");
    
    // Exact torrent tag requested
    const releaseTag = "Abby.Hatcher.Shorts.S01.1080p.AMZN.WEB-DL.DDP2.0.H.264-LAZY";
    
    // Explicit list of titles mimicking season 1 micro-episodes
    const episodes = [
        "E01.Abby.Gives.a.Tour",
        "E02.The.Princess.Flug.Challenge",
        "E03.Aced.It",
        "E04.Awesome.Adventure.Race",
        "E05.Whats.Squishy.in.the.Box",
        "E06.Abbys.Splizzacular.Dance-Off",
        "E07.Fuzzly.Treasure.Hunt",
        "E08.Who.Knows.that.Smell",
        "E09.Not.My.Fuzzly.Arms",
        "E10.The.Great.Fuzzly.Challenge"
    ];

    // Simulating distinct file sizes for the MKV files
    const sizes = ["412 MB", "445 MB", "398 MB", "420 MB", "460 MB", "415 MB", "432 MB", "427 MB", "451 MB", "480 MB"];

    // Programmatically inject the 10 files adhering to scene naming patterns
    episodes.forEach((episode, index) => {
        const listItem = document.createElement("li");
        listItem.className = "file-item";

        // Reconstruct classic torrent naming structure per file 
        const parts = releaseTag.split(".1080p");
        const baseName = parts[0]; // Abby.Hatcher.Shorts.S01
        const techSpecs = parts[1]; // .AMZN.WEB-DL.DDP2.0.H.264-LAZY

        const fullFileName = `${baseName}.${episode}.1080p${techSpecs}.mkv`;

        listItem.innerHTML = `
            <span class="file-name">📄 ${fullFileName}</span>
            <span class="file-size">${sizes[index]}</span>
        `;
        
        fileListContainer.appendChild(listItem);
    });
});