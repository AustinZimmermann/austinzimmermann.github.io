const episodes = [
    "Abby Gives a Tour",
    "The Princess Flug Challenge",
    "Aced It!",
    "Awesome Adventure Race",
    "What’s Squishy in the Box",
    "Abby’s Splizzacular Dance Off",
    "Fuzzly Treasure Hunt",
    "Who Knows That Smell",
    "Not My Fuzzly Arms",
    "The Great Fuzzly Adventure"
];

function populateEpisodes() {
    const tableBody = document.getElementById('episode-body');
    
    episodes.forEach((title, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${title}</td>
            <td>1080p</td>
            <td>420 MB</td>
        `;
        tableBody.appendChild(row);
    });
}

function triggerDownload() {
    alert("Magnet link copied to clipboard! (Simulation)");
}

document.addEventListener('DOMContentLoaded', populateEpisodes);