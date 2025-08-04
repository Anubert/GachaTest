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

// Draw logic
function draw(category) {
  if (!category) return;

  // Combine all categories for "random"
  let entries = [];
  if (category === 'random') {
    const cats = ['traits', 'abilities', 'summons', 'items', 'skills'];
    cats.forEach(cat => {
      if (allData[cat]) {
        entries = entries.concat(allData[cat]);
      }
    });
  } else {
    if (!allData[category]) return;
    entries = allData[category];
  }

  const min = parseFloat(minInput.value);
  const avg = parseFloat(avgInput.value);
  const max = parseFloat(maxInput.value);

  entries = entries.filter(entry => {
    return entry.rarity >= min && entry.rarity <= max &&
           (window.showNSFW || !entry.isNSFW);
  });

  if (entries.length === 0) {
    displayResult("Nothing found...", "");
    return;
  }

  const chosen = entries[Math.floor(Math.random() * entries.length)];

  // Color by rarity
  let color = "white";
  if (chosen.rarity >= 8.99) color = "red";
  else if (chosen.rarity >= 7) color = "#c90";         // Mythical
  else if (chosen.rarity >= 5.5) color = "#c0f";       // Legendary
  else if (chosen.rarity >= 4) color = "#0ff";         // Mythril
  else if (chosen.rarity >= 3.25) color = "#0cf";      // Diamond
  else if (chosen.rarity >= 2) color = "#ffd700";      // Gold
  else if (chosen.rarity >= 1.25) color = "#ccc";      // Silver
  else if (chosen.rarity >= 0.75) color = "#cd7f32";   // Bronze
  else color = "#999";                                 // Trash

  const nameText = `${chosen.name}${chosen.isNSFW ? " (NSFW!)" : ""}`;
  const resultHTML = `<span style="color: ${color}">${nameText}</span>`;
  const flavorText = chosen.description || "";

  displayResult(resultHTML, flavorText);

  // Play sound based on rarity
  if (chosen.rarity >= 5) playSound("winRare");
  else if (chosen.rarity >= 2) playSound("win");
  else playSound("trash");
}

function displayResult(nameHTML, description) {
  const res = resultBubble;
  res.innerHTML = `<div class="result-name">${nameHTML}</div>
                   <div class="result-desc">${description}</div>`;

  if (window.animEnabled) {
    res.classList.add("pulse");
    setTimeout(() => res.classList.remove("pulse"), 300);
  }
}

// Play sound by key
function playSound(key) {
  if (!window.soundEnabled) return;
  const sound = audio[key];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// Expose functions globally
window.draw = draw;
window.playSound = playSound;
