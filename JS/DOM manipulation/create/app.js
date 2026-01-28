let btn = document.querySelector("button");
let main = document.querySelector("main");
const affirmations = [
  "I am a logic master.",
  "My code is clean and efficient.",
  "I can solve any bug.",
  "I am a DOM dominator.",
  "Every error makes me stronger.",
  "I am a consistent learner.",
  "My CSS skills are top-notch.",
  "I build amazing things.",
  "JavaScript is my superpower.",
  "I am focused and productive.",
  "My potential is limitless.",
  "I write code that changes lives.",
  "I am a problem-solving machine.",
  "Debugging is just a puzzle to me.",
  "I am proud of my progress.",
  "I am Batman of the DOM.",
  "Success is inevitable for me.",
  "I embrace the grind.",
  "My projects are world-class.",
  "I am a Sheryian in the making.",
];

btn.addEventListener("click", () => {
  let n = Math.floor(Math.random() * affirmations.length);
  let top = Math.random() * 80;
  let left = Math.random() * 80;
  let deg = Math.random() * 180 -90;
  let scale = Math.random()* 3;

  let txt = document.createElement("h1");
  txt.parentElement = "main"
  txt.style.position = "absolute";
  txt.innerHTML = affirmations[n];
  txt.style.color = "white"
  txt.style.top = `${top}%`;
  txt.style.left = `${left}%`;
  txt.style.rotate = deg +'deg'
  // txt.style.scale = scale;
  main.appendChild(txt);
});
