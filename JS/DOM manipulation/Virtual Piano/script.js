const keys = document.querySelectorAll(".key");

function playSound(note) {
  // This converts "c4" to "C4" automatically
  const fileName = note.toUpperCase();
  const audio = new Audio(`tunes/${fileName}.mp3`);

  audio.currentTime = 0;
  audio.play();
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.getAttribute("data-note");
    handleNotePlaying(key, note);
  });
});

function handleNotePlaying(element, note) {
  element.classList.add("active");
  playSound(note);

  setTimeout(() => {
    element.classList.remove("active");
  }, 150);
}

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const pressedKey = e.key.toLowerCase();
  const targetKey = document.querySelector(`.key[data-key="${pressedKey}"]`);

  if (targetKey) {
    const note = targetKey.getAttribute("data-note");
    handleNotePlaying(targetKey, note);
  }
});
