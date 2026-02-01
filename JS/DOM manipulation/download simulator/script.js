let grow = 0;
let btn = document.querySelector("button");
let percent = document.querySelector("h2");
let inner = document.querySelector(".inner");

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  let time = Math.floor(Math.random() * 50);
  var int = setInterval(() => {
    grow++;
    percent.innerHTML = `${grow}%`;
    inner.style.width = `${grow}%`;
  }, time);

  setTimeout(() => {
    console.log(`Downloaded in ${time / 10} seconds`);
    btn.style.opacity = '0.5';
    btn.innerHTML = 'Downloaded';
    clearInterval(int);
  }, time * 100);
});
