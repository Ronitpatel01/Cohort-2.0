let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let toggle = "off";

button.addEventListener("click", () => {
  if (toggle === "off") {
    h1.style.backgroundColor = "gold";
    h1.style.fontWeight = "600";
    h1.innerHTML = "I am batman !!";
    button.innerHTML = "Hide identity";

    toggle = "on";
  } else {
    h1.style.backgroundColor = "maroon";
    h1.style.color = "white";
    h1.style.fontWeight = "normal";
    h1.innerHTML = "I am Bruce Wayne";
    button.innerHTML = "Reveal identity";

    toggle = "off";
  }
});
