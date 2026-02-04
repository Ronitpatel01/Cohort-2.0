let main = document.querySelector("main");

main.addEventListener("mousemove", (dets) => {
  main.style.setProperty("--X", dets.clientX + "px");
  main.style.setProperty("--Y", dets.clientY + "px");
});
