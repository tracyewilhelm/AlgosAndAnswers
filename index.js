const card = document.querySelectorAll(".flip-card");

card.forEach((card) => {
  card.addEventListener("click", (flip) => {
    flipCard;
  });
});

function flipCard() {
  card.classList.toggle("flipCard");
}
