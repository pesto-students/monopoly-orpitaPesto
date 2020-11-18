var ul = document.getElementById("playerSelection");
console.log(localStorage.getItem("playerSelection"));

ul.onclick = function (event) {
  if (event.target.innerHTML.trim().length > 0) {
    localStorage.setItem("playerSelection", event.target.innerHTML);
  }
};

function startGame() {
  localStorage.setItem("playerSelection", "2 Player");
  window.location.href = "game.html";
}

document.onreadystatechange = function () {
  if (localStorage.getItem("playerSelection")) {
    startGame();
  }
};
