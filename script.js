/* =========================================
   VIBEMATCH — K-POP SONG MATCHER
   Vanilla JavaScript
   ========================================= */


/* =========================================
   SONG DATABASE
   ========================================= */

const songs = [

    {
        title: "Ditto",
        artist: "NewJeans",
        album: "OMG · 2023",
        vibes: ["dreamy", "nostalgic", "chill", "sad"],
        energy: "low",
        reason: "Soft, nostalgic, and a little bittersweet — this is the perfect soundtrack for getting lost in your thoughts."
    },

    {
        title: "Super Shy",
        artist: "NewJeans",
        album: "Get Up · 2023",
        vibes: ["romantic", "dreamy", "energetic"],
        energy: "medium",
        reason: "That butterflies-in-your-stomach feeling deserves something bright, playful, and impossible not to dance to."
    },

    {
        title: "Hype Boy",
        artist: "NewJeans",
        album: "New Jeans · 2022",
        vibes: ["romantic", "confident", "energetic"],
        energy: "medium",
        reason: "You're feeling cute, confident, and just a little obsessed. This one fits the energy perfectly."
    },

    {
        title: "I AM",
        artist: "IVE",
        album: "I've IVE · 2023",
        vibes: ["confident", "energetic"],
        energy: "high",
        reason: "Main-character mode activated. This track was practically made for walking into a room like you own it."
    },

    {
        title: "LOVE DIVE",
        artist: "IVE",
        album: "LOVE DIVE · 2022",
        vibes: ["romantic", "confident", "dreamy"],
        energy: "medium",
        reason: "Elegant, addictive, and effortlessly cool — exactly the energy of knowing your own worth."
    },

    {
        title: "Super",
        artist: "SEVENTEEN",
        album: "FML · 2023",
        vibes: ["energetic", "confident", "chaotic"],
        energy: "high",
        reason: "You don't need motivation. You need maximum volume and a song that makes you feel unstoppable."
    },

    {
        title: "HOT",
        artist: "SEVENTEEN",
        album: "Face the Sun · 2022",
        vibes: ["confident", "chaotic", "energetic"],
        energy: "high",
        reason: "Big energy, zero hesitation. This is your sign to stop overthinking and just go for it."
    },

    {
        title: "God of Music",
        artist: "SEVENTEEN",
        album: "SEVENTEENTH HEAVEN · 2023",
        vibes: ["energetic", "romantic", "happy"],
        energy: "high",
        reason: "Pure feel-good energy. Put this on when you want everything around you to feel a little brighter."
    },

    {
        title: "Love Scenario",
        artist: "iKON",
        album: "Return · 2018",
        vibes: ["nostalgic", "romantic", "chill", "sad"],
        energy: "medium",
        reason: "A classic for those moments when you're looking back at something that used to mean everything."
    },

    {
        title: "Feel My Rhythm",
        artist: "Red Velvet",
        album: "The ReVe Festival 2022 – Feel My Rhythm · 2022",
        vibes: ["dreamy", "romantic", "chill"],
        energy: "medium",
        reason: "Dreamy and elegant with just enough magic to make an ordinary moment feel cinematic."
    },

    {
        title: "Psycho",
        artist: "Red Velvet",
        album: "The ReVe Festival: Finale · 2019",
        vibes: ["romantic", "sad", "confident", "dreamy"],
        energy: "medium",
        reason: "Beautifully dramatic and emotionally complicated — for when your feelings refuse to be simple."
    },

    {
        title: "After LIKE",
        artist: "IVE",
        album: "After LIKE · 2022",
        vibes: ["romantic", "confident", "energetic"],
        energy: "high",
        reason: "You're feeling bold and a little flirty. This is the soundtrack for turning your confidence all the way up."
    },

    {
        title: "ANTIFRAGILE",
        artist: "LE SSERAFIM",
        album: "ANTIFRAGILE · 2022",
        vibes: ["confident", "energetic", "chaotic"],
        energy: "high",
        reason: "Nothing is bringing you down. You're turning every challenge into another reason to shine."
    },

    {
        title: "EASY",
        artist: "LE SSERAFIM",
        album: "EASY · 2024",
        vibes: ["confident", "chill", "dreamy"],
        energy: "medium",
        reason: "Cool, effortless, and completely unbothered. You don't have to prove anything today."
    },

    {
        title: "Perfect Night",
        artist: "LE SSERAFIM",
        album: "Perfect Night · 2023",
        vibes: ["chill", "romantic", "dreamy", "happy"],
        energy: "medium",
        reason: "For nights when you just want good music, good company, and absolutely no unnecessary drama."
    },

    {
        title: "MANIAC",
        artist: "Stray Kids",
        album: "ODDINARY · 2022",
        vibes: ["chaotic", "confident", "energetic"],
        energy: "high",
        reason: "Forget normal. Embrace the weird. This is your permission to be completely yourself."
    },

    {
        title: "God's Menu",
        artist: "Stray Kids",
        album: "GO生 · 2020",
        vibes: ["chaotic", "energetic", "confident"],
        energy: "high",
        reason: "Maximum chaos, maximum confidence. Turn this up when you need an instant energy injection."
    },

    {
        title: "Case 143",
        artist: "Stray Kids",
        album: "MAXIDENT · 2022",
        vibes: ["romantic", "chaotic", "energetic"],
        energy: "high",
        reason: "Your brain says calm down, but your heart says absolutely not. This is your soundtrack."
    },

    {
        title: "Love Talk",
        artist: "WayV",
        album: "Take Over the Moon · 2019",
        vibes: ["romantic", "confident", "dreamy"],
        energy: "medium",
        reason: "Smooth, confident, and a little dangerous — for when you're feeling extra magnetic."
    },

    {
        title: "Growl",
        artist: "EXO",
        album: "XOXO · 2013",
        vibes: ["romantic", "nostalgic", "confident"],
        energy: "medium",
        reason: "A nostalgic K-pop classic with just the right amount of swagger."
    },

    {
        title: "Spring Day",
        artist: "BTS",
        album: "You Never Walk Alone · 2017",
        vibes: ["nostalgic", "sad", "dreamy"],
        energy: "low",
        reason: "For when you're missing someone, remembering something, or simply letting yourself feel."
    },

    {
        title: "Dynamite",
        artist: "BTS",
        album: "Dynamite · 2020",
        vibes: ["happy", "energetic", "confident"],
        energy: "high",
        reason: "Sometimes you don't need a deep reason. You just need something bright, fun, and impossible not to smile to."
    },

    {
        title: "Black Swan",
        artist: "BTS",
        album: "Map of the Soul: 7 · 2020",
        vibes: ["dreamy", "sad", "confident"],
        energy: "medium",
        reason: "Dark, atmospheric, and introspective — perfect for a cinematic late-night mood."
    },

    {
        title: "Queencard",
        artist: "(G)I-DLE",
        album: "I feel · 2023",
        vibes: ["confident", "chaotic", "happy"],
        energy: "high",
        reason: "You already know you're that person. Now you just need the soundtrack."
    },

    {
        title: "TOMBOY",
        artist: "(G)I-DLE",
        album: "I NEVER DIE · 2022",
        vibes: ["confident", "chaotic", "energetic"],
        energy: "high",
        reason: "Zero apologies. Zero second guessing. Just pure confidence and attitude."
    },

    {
        title: "MAGO",
        artist: "GFRIEND",
        album: "回:Walpurgis Night · 2020",
        vibes: ["dreamy", "confident", "romantic", "nostalgic"],
        energy: "medium",
        reason: "Disco magic with a dreamy edge — perfect when you want to romanticize your entire evening."
    },

    {
        title: "INVU",
        artist: "TAEYEON",
        album: "INVU · 2022",
        vibes: ["sad", "romantic", "dreamy", "chill"],
        energy: "low",
        reason: "For the quiet moments when you're feeling everything at once and don't really want to explain it."
    },

    {
        title: "Bambi",
        artist: "BAEKHYUN",
        album: "Bambi · 2021",
        vibes: ["romantic", "dreamy", "chill"],
        energy: "low",
        reason: "Smooth and intimate — the perfect choice for a slow, late-night kind of mood."
    },

    {
        title: "0X1=LOVESONG",
        artist: "TXT",
        album: "The Chaos Chapter: FREEZE · 2021",
        vibes: ["sad", "romantic", "chaotic", "nostalgic"],
        energy: "high",
        reason: "When everything feels overwhelming, sometimes the best answer is a song that screams the feeling with you."
    },

    {
        title: "Blue Hour",
        artist: "TXT",
        album: "minisode1: Blue Hour · 2020",
        vibes: ["dreamy", "romantic", "nostalgic", "happy"],
        energy: "medium",
        reason: "A little dreamy, a little nostalgic, and completely magical — just like that moment between day and night."
    },

    {
        title: "Deja Vu",
        artist: "TXT",
        album: "minisode 3: TOMORROW · 2024",
        vibes: ["romantic", "dreamy", "nostalgic"],
        energy: "medium",
        reason: "For that strange feeling that you've lived this moment before — emotional and cinematic in all the right ways."
    },

    {
        title: "Attention",
        artist: "NewJeans",
        album: "New Jeans · 2022",
        vibes: ["romantic", "dreamy", "chill"],
        energy: "low",
        reason: "Light, effortless, and quietly romantic — perfect for a soft crush kind of mood."
    },

    {
        title: "Eve, Psyche & The Bluebeard's Wife",
        artist: "LE SSERAFIM",
        album: "UNFORGIVEN · 2023",
        vibes: ["chaotic", "confident", "energetic"],
        energy: "high",
        reason: "You're not here to follow the rules today. You're here to have fun and make questionable decisions."
    },

    {
        title: "Magnetic",
        artist: "ILLIT",
        album: "SUPER REAL ME · 2024",
        vibes: ["romantic", "dreamy", "happy", "energetic"],
        energy: "medium",
        reason: "Cute, sparkly, and slightly obsessed — perfect for when someone has been living rent-free in your head."
    },

    {
        title: "Drama",
        artist: "aespa",
        album: "Drama · 2023",
        vibes: ["confident", "chaotic", "energetic"],
        energy: "high",
        reason: "Your life is a movie and apparently today is the dramatic episode. Own it."
    },

    {
        title: "Spicy",
        artist: "aespa",
        album: "MY WORLD · 2023",
        vibes: ["confident", "energetic", "chaotic"],
        energy: "high",
        reason: "Bold, playful, and unapologetic. You came here to make an entrance."
    },

    {
        title: "LILAC",
        artist: "IU",
        album: "LILAC · 2021",
        vibes: ["nostalgic", "romantic", "dreamy", "happy"],
        energy: "medium",
        reason: "A bittersweet goodbye wrapped in something beautiful — perfect for turning a memory into a moment."
    },

    {
        title: "eight",
        artist: "IU feat. SUGA",
        album: "eight · 2020",
        vibes: ["nostalgic", "sad", "dreamy"],
        energy: "low",
        reason: "Warm, nostalgic, and quietly emotional — like looking through old photos at midnight."
    },
   
   {
        title: "Eyes, Nose, Lips",
        artist: "TAEYANG",
        album: "RISE · 2014",
        vibes: ["romantic", "sad", "nostalgic", "dreamy"],
        energy: "low",
        reason: "Raw, emotional, and unforgettable — perfect for when you're stuck thinking about someone."
   },


];


/* =========================================
   STATE
   ========================================= */

let selectedVibe = null;
let selectedEnergy = null;

let currentMatches = [];
let currentMatchIndex = 0;


/* =========================================
   DOM ELEMENTS
   ========================================= */

const vibeButtons =
    document.querySelectorAll(".vibe-btn");

const energyButtons =
    document.querySelectorAll(".energy-btn");

const matchButton =
    document.getElementById("matchBtn");

const againButton =
    document.getElementById("againBtn");

const resultSection =
    document.getElementById("resultSection");

const songTitle =
    document.getElementById("songTitle");

const artistName =
    document.getElementById("artistName");

const albumName =
    document.getElementById("albumName");

const songReason =
    document.getElementById("songReason");

const matchPercent =
    document.getElementById("matchPercent");

const albumArt =
    document.getElementById("albumArt");


/* =========================================
   VIBE SELECTION
   ========================================= */

vibeButtons.forEach(button => {

    button.addEventListener("click", () => {

        vibeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedVibe =
            button.dataset.vibe;

    });

});


/* =========================================
   ENERGY SELECTION
   ========================================= */

energyButtons.forEach(button => {

    button.addEventListener("click", () => {

        energyButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedEnergy =
            button.dataset.energy;

    });

});


/* =========================================
   MATCHING ALGORITHM
   ========================================= */

function calculateMatch(song) {

    let score = 0;

    /*
     * Vibe is more important than energy.
     */
    if (
        selectedVibe &&
        song.vibes.includes(selectedVibe)
    ) {
        score += 70;
    }

    /*
     * Energy provides the remaining score.
     */
    if (
        selectedEnergy &&
        song.energy === selectedEnergy
    ) {
        score += 30;
    }

    /*
     * If only vibe was selected.
     */
    if (!selectedEnergy) {
        if (
            selectedVibe &&
            song.vibes.includes(selectedVibe)
        ) {
            score = 85;
        }
    }

    /*
     * If only energy was selected.
     */
    if (!selectedVibe && selectedEnergy) {

        if (song.energy === selectedEnergy) {
            score = 75;
        }

    }

    /*
     * If nothing was selected.
     */
    if (!selectedVibe && !selectedEnergy) {
        score = 50;
    }

    return score;
}


/* =========================================
   FIND MATCHES
   ========================================= */

function findMatches() {

    const scoredSongs = songs.map(song => {

        return {
            song: song,
            score: calculateMatch(song)
        };

    });

    /*
     * Sort highest score first.
     */
    scoredSongs.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        /*
         * Randomize songs with equal scores.
         */
        return Math.random() - 0.5;

    });

    /*
     * Keep the strongest matches.
     */
    currentMatches =
        scoredSongs
            .filter(item => item.score > 0)
            .slice(0, 10);

    currentMatchIndex = 0;

}


/* =========================================
   DISPLAY SONG
   ========================================= */

function displaySong(song, score) {

    songTitle.textContent =
        song.title;

    artistName.textContent =
        song.artist;

    albumName.textContent =
        song.album;

    songReason.textContent =
        song.reason;

    /*
     * Keep the displayed percentage
     * between 82 and 99 so it feels
     * like a recommendation rather
     * than a mathematical test.
     */
    let percentage;

    if (score >= 100) {
        percentage = 99;
    } else if (score >= 90) {
        percentage = 97 + Math.floor(Math.random() * 3);
    } else if (score >= 70) {
        percentage = 91 + Math.floor(Math.random() * 6);
    } else {
        percentage = 82 + Math.floor(Math.random() * 9);
    }

    matchPercent.textContent =
        `${percentage}% MATCH`;

    /*
     * Change album-art colors based
     * on the selected vibe.
     */
    updateAlbumArt(song);

    /*
     * Reset animation.
     */
    songTitle.style.animation = "none";

    requestAnimationFrame(() => {
        songTitle.style.animation =
            "resultIn 0.45s ease";
    });

}


/* =========================================
   ALBUM ART COLORS
   ========================================= */

function updateAlbumArt(song) {

    const colors = {

        dreamy: [
            "#312e81",
            "#a78bfa",
            "#f0abfc"
        ],

        romantic: [
            "#831843",
            "#ec4899",
            "#fb7185"
        ],

        confident: [
            "#4c1d95",
            "#7c3aed",
            "#c084fc"
        ],

        energetic: [
            "#7c2d12",
            "#ea580c",
            "#facc15"
        ],

        nostalgic: [
            "#164e63",
            "#0891b2",
            "#67e8f9"
        ],

        chill: [
            "#172554",
            "#3730a3",
            "#818cf8"
        ],

        sad: [
            "#1e1b4b",
            "#4338ca",
            "#64748b"
        ],

        chaotic: [
            "#4a044e",
            "#c026d3",
            "#f43f5e"
        ]

    };

    const selectedColors =
        colors[selectedVibe] ||
        colors.dreamy;

    albumArt.style.background = `
        radial-gradient(
            circle at 30% 25%,
            ${selectedColors[2]},
            transparent 25%
        ),
        radial-gradient(
            circle at 70% 70%,
            ${selectedColors[1]},
            transparent 45%
        ),
        linear-gradient(
            135deg,
            ${selectedColors[0]},
            ${selectedColors[1]}
        )
    `;

}


/* =========================================
   SHOW FIRST MATCH
   ========================================= */

function showFirstMatch() {

    findMatches();

    if (currentMatches.length === 0) {
        return;
    }

    const match =
        currentMatches[currentMatchIndex];

    displaySong(
        match.song,
        match.score
    );

    resultSection.classList.add("visible");

    /*
     * Scroll smoothly to the result.
     */
    setTimeout(() => {

        resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================
   SHOW ANOTHER MATCH
   ========================================= */

function showAnotherMatch() {

    if (currentMatches.length === 0) {
        findMatches();
    }

    /*
     * Move to another song.
     */
    currentMatchIndex++;

    if (
        currentMatchIndex >=
        currentMatches.length
    ) {
        currentMatchIndex = 0;
    }

    const match =
        currentMatches[currentMatchIndex];

    displaySong(
        match.song,
        match.score
    );

}


/* =========================================
   VALIDATION
   ========================================= */

function validateSelection() {

    if (!selectedVibe && !selectedEnergy) {

        /*
         * Highlight the matcher card
         * if the user hasn't selected anything.
         */
        const card =
            document.querySelector(".matcher-card");

        card.animate(
            [
                {
                    transform: "translateX(0)"
                },
                {
                    transform: "translateX(-7px)"
                },
                {
                    transform: "translateX(7px)"
                },
                {
                    transform: "translateX(-5px)"
                },
                {
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 350
            }
        );

        return false;
    }

    return true;

}


/* =========================================
   BUTTON EVENTS
   ========================================= */

matchButton.addEventListener(
    "click",
    () => {

        if (!validateSelection()) {
            return;
        }

        showFirstMatch();

    }
);


againButton.addEventListener(
    "click",
    () => {

        showAnotherMatch();

    }
);


/* =========================================
   KEYBOARD SUPPORT
   ========================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
         * Press Enter to find a match.
         */
        if (
            event.key === "Enter" &&
            !resultSection.classList.contains("visible")
        ) {

            if (validateSelection()) {
                showFirstMatch();
            }

        }

    }
);


/* =========================================
   INITIALIZATION
   ========================================= */

console.log(
    "VibeMatch loaded successfully ✦"
);
