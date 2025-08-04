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
let soundEnabled = true;
let animEnabled = true;
let showNSFW = false;

document.getElementById("soundToggle").addEventListener("change", e => {
  soundEnabled = e.target.checked;
});
document.getElementById("animToggle").addEventListener("change", e => {
  animEnabled = e.target.checked;
});
document.getElementById("nsfwToggle").addEventListener("change", e => {
  showNSFW = e.target.checked;
});

// === Sounds ===
function playClickSound(btn) {
  if (!soundEnabled) return;
  const tier = btn.className || "";
  if (tier.includes("rare")) audio.clickRare.play();
  else audio.click.play();
}
function playHoverSound(btn) {
  if (!soundEnabled) return;
  const tier = btn.className || "";
  if (tier.includes("rare")) audio.hoverRare.play();
}
function stopHoverSound() {
  if (!soundEnabled) return;
  audio.hoverRare.pause();
  audio.hoverRare.currentTime = 0;
}

// === Tier Rarity Set ===
function setRarity(min, avg, max) {
  minInput.value = min;
  avgInput.value = avg;
  maxInput.value = max;
}

// === Dynamic Category Loader ===
async function draw(category) {
  const min = parseFloat(minInput.value);
  const avg = parseFloat(avgInput.value);
  const max = parseFloat(maxInput.value);

  if (isNaN(min) || isNaN(avg) || isNaN(max)) {
    resultBubble.textContent = "Invalid rarity values.";
    return;
  }

  // Dynamic import
  try {
    const module = await import(`./${category}.js`);
    const pool = module.default;

    const filtered = showNSFW ? pool : pool.filter(obj => !obj.isNSFW);
    if (filtered.length === 0) {
      resultBubble.textContent = "No entries found.";
      return;
    }

    // Weighted roll
    const selected = filtered[Math.floor(Math.random() * filtered.length)];
    const rarity = selected.rarity ?? avg;
    const color = getColorForRarity(rarity);

    if (animEnabled) {
      resultBubble.classList.add("pulse");
      setTimeout(() => resultBubble.classList.remove("pulse"), 300);
    }

    resultBubble.innerHTML = `<span style
