var ul = document.getElementById("playerSelection");
localStorage.setItem("playerSelection", "2 Player");
console.log(localStorage.getItem("playerSelection"));

ul.onclick = function (event) {
  if (event.target.innerHTML.trim().length > 0) {
    localStorage.setItem("playerSelection", event.target.innerHTML);
  }
};

function startGame() {
  window.location.href = "game.html";
}
