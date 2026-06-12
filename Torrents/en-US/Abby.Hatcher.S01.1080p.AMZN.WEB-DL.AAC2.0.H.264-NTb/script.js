document.addEventListener("DOMContentLoaded", () => {
    // Exact list of 26 canonical structured release episodes for Season 1
    const episodes = [
        "S01E01.When.Abby.Met.Bozzly.Hair.Flair.Everywhere",
        "S01E02.Mo.and.Bo.in.the.Snow.Otis.Out.of.Order",
        "S01E03.Theres.Only.One.Bozzly.Cousin.Flugtilda",
        "S01E04.Princess.Flugs.Flower.Float.The.Fuzzlies.Talent.Show",
        "S01E05.Too.Tired.to.Tuba.Princess.Flug.Day",
        "S01E06.Hair.Flair.Fuzzly.The.Fuzzlies.in.the.Attic",
        "S01E07.Afraid.of.Cats.Chef.Curly",
        "S01E08.Curly.and.the.Sock.Doll.In.the.Park",
        "S01E09.Teeny.Terrys.Gift.Peeper.Time.Blues",
        "S01E10.Abbys.Squeaky.Peeper.Panic.Things.That.Go.Ding.in.the.Night",
        "S01E11.Hearts.and.Hugs.Day.Teeny.Terrys.Treehouse",
        "S01E12.Secret.Basement.Disco.Frazzled.Fuzzly",
        "S01E13.Fuzzly.Slumber.Party.Fix.It.Flug",
        "S01E14.Princess.Flugs.Flowery.Adventure.Fuzzliest.Dinner",
        "S01E15.Princess.Flugs.Pet.Slug.Fuzzly.Photo.Day",
        "S01E16.Fairy.Tale.Fuzzly.Super.Secret.Passageway",
        "S01E17.Teeny.Pelican.Terry.Tappin.Mo.and.Bo",
        "S01E18.Grumbles.First.Haircut.Fuzzly.Ball",
        "S01E19.The.Fuzzlies.Camping.Trip",
        "S01E20.Snug.Loving.Chipmunks.Abbys.Snug",
        "S01E21.Trick.or.Treat.Otis.Bedtime.For.Peepers",
        "S01E22.Otis.on.the.Go.Abbys.Afraid",
        "S01E23.Shape.of.Grumbles.Wai.Pos.Wild.Day",
        "S01E24.Abby.Loses.Elvin.The.Berry.Thief",
        "S01E25.Fuzzlies.New.Year.Dragon.Full.Moon.Fuzzly",
        "S01E26.Grumbles.Gets.Gone.Here.an.Abby.There.an.Abby"
    ];

    const container = document.getElementById("filesListContainer");

    // Populate the table with the 26 structured MKV titles mimicking standard tracker formatting
    episodes.forEach((episode) => {
        // Generate pseudo-random realistic episodic file weights (~550MB to 590MB per file)
        const sizeMb = (550 + Math.random() * 40).toFixed(2);
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="file-name-cell">
                    <i class="fa-regular fa-file-video"></i>
                    <span>Abby.Hatcher.${episode}.1080p.AMZN.WEB-DL.AAC2.0.H.264-NTb.mkv</span>
                </div>
            </td>
            <td>${sizeMb} MB</td>
            <td>MKV Video</td>
        `;
        container.appendChild(row);
    });

    // Collapsible functionality logic for the Files Component
    const toggleHeader = document.getElementById("toggleFiles");
    const filesBody = document.getElementById("filesBody");
    const chevron = document.getElementById("chevron");

    toggleHeader.addEventListener("click", () => {
        filesBody.classList.toggle("hidden");
        chevron.classList.toggle("collapsed");
    });
});