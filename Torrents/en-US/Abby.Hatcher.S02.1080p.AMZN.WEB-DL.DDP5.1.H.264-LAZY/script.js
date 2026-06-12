document.addEventListener("DOMContentLoaded", () => {
    // Exact list of 26 episodic breakdowns for Abby Hatcher Season 2
    const episodes = [
        "S02E01.The.Peeper.Transport.Tubes.Abby.Loses.Her.Glasses",
        "S02E02.Game.Time.with.Mo.and.Bo.Grumbles.Goes.Down.the.Drain",
        "S02E03.Teeny.Terry.is.TeenyMan.Mo.and.Bo.and.the.Missing.Button.Trail",
        "S02E04.Mo.and.Bo.On.a.Roll.Dance.Dance.Grumbles",
        "S02E05.Super.Strength.Curly.Super.Sitter.Abby",
        "S02E06.Otis.and.the.Snack.Machine.Abbys.Runaway.Care.Case",
        "S02E07.Little.Dohs.Lost.Binky.Chef.Beth",
        "S02E08.Teeny.Terrys.Perfect.Sport.Abbys.Track.and.Field.Day",
        "S02E09.Abby.and.the.Costume.Ball.Big.Terry.Fix-It.Fuzzly",
        "S02E10.Otis.Sick.Day.Lights.Camera.Fuzzlies",
        "S02E11.Fuzzly.Beach.Day",
        "S02E12.A.Princess.and.the.Peepers.The.Perfect.Job.for.Mo.and.Bo",
        "S02E13.Teeny.Terry.Safety.Officer.Abby.Babysits.Melvin",
        "S02E14.Princess.Flug.Goes.Skiing.Mo.and.Bos.Big.Art.Show",
        "S02E15.The.Blossom.Band",
        "S02E16.Mo.and.Bo.Hit.the.Road.Happy.Fuzzly.Birthday",
        "S02E17.Bozzly.and.the.Baby.Fuzzly.Lemonade.Stand",
        "S02E18.A.Very.Fuzzly.Christmas",
        "S02E19.Teeny.Terry.Takes.Off.Grumbles.the.Squeaky.Peeper",
        "S02E20.Mo.and.Bo.Where.Theyd.Go.Abby.and.the.Winning.Fuzzlies",
        "S02E21.Mo.and.Bo.Go.Toe.to.Toe.Abby.and.the.Rooftop.Playground",
        "S02E22.Blossom.Band.on.Tour.Abbys.Old.Toys",
        "S02E23.Blossom.Band.and.the.Rock.n.Roll.Stage.The.Squeaky.Peeper.Prize",
        "S02E24.Bozzly.and.the.Missing.Pill.Bug.Grumbles.Family.Reunion",
        "S02E25.Blossom.Band.Break.Up.Abbys.Quick.Fix",
        "S02E26.Abbys.Farm.Animal.Friend.The.Princess.Flug.Bug"
    ];

    const container = document.getElementById("filesListContainer");

    // Populate the table with the 26 structured Season 2 files
    episodes.forEach((episode) => {
        // Realistically higher audio bitrate footprint (~610MB to 640MB per file)
        const sizeMb = (610 + Math.random() * 30).toFixed(2);
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="file-name-cell">
                    <i class="fa-regular fa-file-video"></i>
                    <span>Abby.Hatcher.${episode}.1080p.AMZN.WEB-DL.DDP5.1.H.264-LAZY.mkv</span>
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