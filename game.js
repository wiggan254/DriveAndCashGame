let multiplier = 1.0;
let isPlaying = true;
let hasCashedOut = false;

const multiplierEl = document.getElementById("multiplier");
const statusEl = document.getElementById("status");
const cashoutBtn = document.getElementById("cashout-btn");
const car = document.getElementById("car");

let interval = setInterval(() => {
  if (!isPlaying || hasCashedOut) return;

  multiplier += 0.05;
  multiplierEl.textContent = multiplier.toFixed(2) + "x";

  if (Math.random() < 0.01 * multiplier) {
    crash();
  }

  car.style.marginLeft = `${multiplier * 10}px`;
}, 100);

cashoutBtn.onclick = () => {
  if (isPlaying && !hasCashedOut) {
    hasCashedOut = true;
    isPlaying = false;
    clearInterval(interval);
    statusEl.textContent = `✅ You cashed out at ${multiplier.toFixed(2)}x!`;
  }
};

function crash() {
  isPlaying = false;
  clearInterval(interval);
  statusEl.textContent = "💥 CRASHED!";
  car.src = "assets/cars/crash.png";
}
