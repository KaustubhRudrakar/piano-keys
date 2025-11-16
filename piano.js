document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", () => {
        playNote(key.dataset.note);
    });
});

const keyMap = {
    q: "C",
    2: "C#",
    w: "D",
    3: "D#",
    e: "E",
    r: "F",
    5: "F#",
    t: "G",
    6: "G#",
    y: "A",
    7: "A#",
    u: "B"
};

document.addEventListener("keydown", e => {
    const key = keyMap[e.key.toLowerCase()];
    if (key) {
        playNote(key);
    }
});

function playNote(note) {
    let audio = document.getElementById(note);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    animateKey(note);
}

function animateKey(note) {
    const key = document.querySelector(`[data-note="${note}"]`);
    if (!key) return;

    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 120);
}
