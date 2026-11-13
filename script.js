const main = document.getElementById("main");
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    main.scrollBy({ left: main.clientWidth, behavior: "smooth" });
  }
  if (event.key === "ArrowLeft") {
    main.scrollBy({ left: -main.clientWidth, behavior: "smooth" });
  }
});