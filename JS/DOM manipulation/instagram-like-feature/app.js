let img = document.querySelector(".card img");
let like = document.querySelector(".card i");
let card = document.querySelector(".card ");

card.addEventListener("dblclick", () => {
  like.style.opacity = "1";
  like.style.scale = "1";
  setTimeout(() => {
    like.style.scale = "0"; 
  }, 1000);
});
