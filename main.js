// === DOM Elements ===
const resultBubble = document.getElementById("result");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");

// === Audio ===
const audio = {
  click: document.getElementById("clickSound"),
  clickRare: document.getElementById("clickRareSound"),
  hoverRare: document.getElementById("hoverRareSound"),
  trash: document.getElementById("trashSound"),
  win: document.getElementById("winSound"),
  winRare: document.getElementById("winRareSound"),
};

// === Toggles ===
window.soundEnabled = true;
window.animEnabled = true;
window.showNSFW = false;

document.getElementById("soundToggle").addEventListener("change", e => {
  window.soundEnabled = e.target.checked;
});
document.getElementById("animToggle").addEventListener("change", e => {
  window.animEnabled = e.target.checked;
});
document.getElementById("nsfwToggle").addEventListener("change", e => {
  window.showNSFW = e.target.checked;
});

// === Sounds ===
function playClickSound(btn) {
  if (!window.soundEnabled) return;
  const tier = btn.className || "";
  if (tier.includes("rare")) audio.clickRare.play();
  else audio.click.play();
}
function playHoverSound(btn) {
  if (!window.soundEnabled) return;
  const tier = btn.className || "";
  if (tier.includes("rare")) audio.hoverRare.play();
}
function stopHoverSound() {
  if (!window.soundEnabled) return;
  audio.hoverRare.pause();
  audio.hoverRare.currentTime = 0;
}

// Expose audio functions globally
window.playClickSound = playClickSound;
window.playHoverSound = playHoverSound;
window.stopHoverSound = stopHoverSound;

// === Tier Rarity Set ===
function setRarity(min, avg, max) {
  minInput.value = min;
  avgInput.value = avg;
  maxInput.value = max;
}
window.setRarity = setRarity;

// === Draw ===
async function draw(category) {
  const min = parseFloat(minInput.value);
  const avg = parseFloat(avgInput.value);
  const max = parseFloat(maxInput.value);

  if (isNaN(min) || isNaN(avg) || isNaN(max)) {
    resultBubble.textContent = "Invalid rarity values.";
    return;
  }

  try {
    const module = await import(`./${category}.js`);
    const pool = module.default;
    const filtered = window.showNSFW ? pool : pool.filter(obj => !obj.isNSFW);

    if (filtered.length === 0) {
      resultBubble.textContent = "No entries found.";
      return;
    }

    const selected = filtered[Math.floor(Math.random() * filtered.length)];
    const rarity = selected.rarity ?? avg;
    const color = getColorForRarity(rarity);

    if (window.animEnabled) {
      resultBubble.classList.add("pulse");
      setTimeout(() => resultBubble.classList.remove("pulse"), 300);
    }

    resultBubble.innerHTML = `<span style="color:${color}">${selected.name}</span>`;

    if (!window.soundEnabled) return;
    if (rarity >= 8.99) audio.winRare.play();
    else if (rarity >= 5.5) audio.win.play();
    else if (rarity < 1.5) audio.trash.play();
    else audio.click.play();
  } catch (err) {
    console.error("Category load failed:", err);
    resultBubble.textContent = "Error loading data.";
  }
}
window.draw = draw;

// === Color Helper ===
function getColorForRarity(rarity) {
  if (rarity >= 8.99) return "red";
  if (rarity >= 7.5) return "magenta";
  if (rarity >= 6.5) return "orange";
  if (rarity >= 5.5) return "gold";
  if (rarity >= 4) return "deepskyblue";
  if (rarity >= 3) return "green";
  if (rarity >= 1.5) return "gray";
  return "dimgray";
}
