let score = 0;
let scoreEl = document.getElementById("score");
let fish = document.getElementById("fish");
let isPlaying = false;
let music = new Audio("assets/bg.mp3");
let hitSound = new Audio("assets/hit.wav");

function startGame() {
  document.getElementById("menu").style.display = "none";
  isPlaying = true;
  score = 0;
  music.loop = true;
  music.play();
  moveFish();
}

function moveFish() {
  if (!isPlaying) return;
  score++;
  scoreEl.textContent = "Score: " + score;

  fish.style.top = parseInt(fish.style.top || "300px") - 20 + "px";

  setTimeout(() => {
    fish.style.top = parseInt(fish.style.top) + 20 + "px";
    if (score >= 100) gameOver(); // for demo
    else moveFish();
  }, 800);
}

function gameOver() {
  isPlaying = false;
  hitSound.play();
  music.pause();
  alert("Game Over! Your score: " + score);
  document.getElementById("menu").style.display = "block";
}

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space" && isPlaying) moveFish();
});

window.addEventListener("online", () => {
  document.getElementById("offline").style.display = "none";
});
window.addEventListener("offline", () => {
  document.getElementById("offline").style.display = "block";
});
