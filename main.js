// === DOM Elements ===
const resultBubble = document.getElementById("result");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");
const categoryButtons = document.querySelectorAll(".category-btn");
const tierButtons = document.querySelectorAll(".tier-btn");

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

// --- Weighted random helper ---
function weightedRandom(items, weights) {
  let total = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    if (rand < weights[i]) return items[i];
    rand -= weights[i];
  }
  return items[items.length - 1];
}

let rolling = false;

// Draw logic with rolling animation and weighting by average rarity closeness
function draw(category) {
  if (rolling) return; // Prevent double rolls

  if (!category) return;

  // Combine all categories for "random"
  let entries = [];
  if (category === "random") {
    const cats = ["traits", "abilities", "summons", "items", "skills"];
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

  // Filter entries by rarity and NSFW
  entries = entries.filter(entry => {
    return (
      entry.rarity >= min &&
      entry.rarity <= max &&
      (window.showNSFW || !entry.isNSFW)
    );
  });

  if (entries.length === 0) {
    displayResult("Nothing found...", "");
    return;
  }

  rolling = true;
  disableButtons(true);

  // Rolling animation: cycle through random entries quickly
  const rollDuration = 1500; // ms
  const rollInterval = 80; // ms
  let elapsed = 0;

  const rollTimer = setInterval(() => {
    // Pick random entry (unweighted, just for animation)
    const randomEntry = entries[Math.floor(Math.random() * entries.length)];

    const color = getColorByRarity(randomEntry.rarity);
    const nameText = `${randomEntry.name}${
      randomEntry.isNSFW ? " (NSFW!)" : ""
    }`;
    const resultHTML = `<span style="color: ${color}">${nameText}</span>`;
    const flavorText = randomEntry.description || "";

    displayResult(resultHTML, flavorText);

    elapsed += rollInterval;
    if (elapsed >= rollDuration) {
      clearInterval(rollTimer);

      // After animation, pick final weighted entry
      const sigma = 1.5;
      const weights = entries.map(entry => {
        const diff = entry.rarity - avg;
        return Math.exp(-(diff * diff) / (2 * sigma * sigma));
      });

      const chosen = weightedRandom(entries, weights);

      const finalColor = getColorByRarity(chosen.rarity);
      const finalNameText = `${chosen.name}${chosen.isNSFW ? " (NSFW!)" : ""}`;
      const finalResultHTML = `<span style="color: ${finalColor}">${finalNameText}</span>`;
      const finalFlavorText = chosen.description || "";

      displayResult(finalResultHTML, finalFlavorText);

      playSoundByRarity(chosen.rarity);

      rolling = false;
      disableButtons(false);
    }
  }, rollInterval);
}

function disableButtons(disable) {
  categoryButtons.forEach(btn => (btn.disabled = disable));
  tierButtons.forEach(btn => (btn.disabled = disable));
}

function getColorByRarity(rarity) {
  if (rarity >= 9) return "red";
  if (rarity >= 7) return "#c90"; // Mythical
  if (rarity >= 5.5) return "#c0f"; // Legendary
  if (rarity >= 4) return "#0ff"; // Mythril
  if (rarity >= 3.25) return "#0cf"; // Diamond
  if (rarity >= 2) return "#ffd700"; // Gold
  if (rarity >= 1.25) return "#ccc"; // Silver
  if (rarity >= 0.75) return "#cd7f32"; // Bronze
  return "#999"; // Trash
}

function playSoundByRarity(rarity) {
  if (!window.soundEnabled) return;

  // Stop all other sounds before playing new one
  Object.values(audio).forEach(aud => {
    aud.pause();
    aud.currentTime = 0;
  });

  if (rarity >= 9) audio.winRare.play();
  else if (rarity >= 1) audio.win.play();
  else if (rarity >= 0.01 && rarity <= 0.99) audio.trash.play();
  // No sound if rarity is outside these bounds (optional)
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

// Expose functions globally
window.draw = draw;
window.playSound = playSoundByRarity;
