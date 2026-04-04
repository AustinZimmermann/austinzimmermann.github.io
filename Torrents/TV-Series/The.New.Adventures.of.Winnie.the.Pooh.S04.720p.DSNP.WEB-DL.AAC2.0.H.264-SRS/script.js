const episodes = [
    "S04E01 - Sorry, Wrong Slusher",
    "S04E02 - Grown, But Not Forgotten",
    "S04E03 - A Pooh Day Afternoon",
    "S04E04 - The Good, the Bad, and the Tigger",
    "S04E05 - Home Is Where the Home Is",
    "S04E06 - Shovel, Shovel, Toil and Trouble / The Wise Have It",
    "S04E07 - Cloud, Cloud Go Away / To Dream the Impossible Scheme",
    "S04E08 - Piglet’s Poohetry / Owl’s Well That Ends Well"
];

const listContainer = document.getElementById('episodes');

episodes.forEach((ep) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${ep}</span>
        <span class="ep-size">400 MB</span>
    `;
    listContainer.appendChild(li);
});
