const p = document.querySelector("p");
const text = p.innerText;

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interval = null;

let isAnimating = false;
function randomText() {
  let it = 0;

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    str = text
      .split("")
      .map((char, index) => {
        if (index < it) return char;
        return alphabets.split("")[Math.floor(Math.random() * 52)];
      })
      .join("");

    const finalHTML = str.replace("FOR SURE !!", `<span class="highlight">FOR SURE !!</span>`);
    p.innerHTML = finalHTML;

    it += 0.5;
  }, 30);
}

p.addEventListener("mouseenter", () => {
    p.classList.add("searching")
  randomText()
});
