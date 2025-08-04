// === DOM Elements ===
const resultBubble = document.getElementById("result");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");
const categoryButtons = document.querySelectorAll(".category-btn");

// === Audio ===
const audio = {
  click: document.getElementById("clickSound"),
  clickRare: document.getElementById("clickRareSound"),
  hoverRare: document.getElementById("hoverRareSound"),
  trash: document.getElementById("trashSound"),
  win: document.getElementById("winSound"),
  winRare: document.getElementById("winRareSound"),
  roll: document.getElementById("rollSound"),
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

// --- Rolling animation logic ---
const ROLL_DURATION = 1500; // milliseconds
const ROLL_INTERVAL = 70;   // ms between rapid cycling entries

function draw(category) {
  if (!category) return;

  // Disable buttons during roll
  categoryButtons.forEach(btn => btn.disabled = true);

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
    if (!allData[category]) {
      // Re-enable buttons if no data
      categoryButtons.forEach(btn => btn.disabled = false);
      return;
    }
    entries = allData[category];
  }

  const min = parseFloat(minInput.value);
  const avg = parseFloat(avgInput.value);
  const max = parseFloat(maxInput.value);

  // Filter entries by rarity and NSFW
  entries = entries.filter(entry => {
    return entry.rarity >= min && entry.rarity <= max &&
           (window.showNSFW || !entry.isNSFW);
  });

  if (entries.length === 0) {
    displayResult("Nothing found...", "");
    // Re-enable buttons if no data
    categoryButtons.forEach(btn => btn.disabled = false);
    return;
  }

  // Calculate weights: higher weight for rarity closer to avg
  const sigma = 1.5;
  const weights = entries.map(entry => {
    const diff = entry.rarity - avg;
    return Math.exp(-(diff * diff) / (2 * sigma * sigma));
  });

  // We'll roll visually by cycling entries quickly before picking final
  if (!window.animEnabled) {
    // If animations off, pick directly
    const chosen = weightedRandom(entries, weights);
    showResultAndPlaySound(chosen);
    categoryButtons.forEach(btn => btn.disabled = false);
    return;
  }

  // Animation enabled:
  resultBubble.classList.add("rolling");

  // Prepare a list of entries to cycle through rapidly (random subset or all)
  const rollEntries = entries.length > 20 ? entries.slice(0, 20) : entries;

  let rollCount = Math.floor(ROLL_DURATION / ROLL_INTERVAL);
  let currentIndex = 0;

  // Play roll sound if enabled
  if (window.soundEnabled) {
    audio.roll.currentTime = 0;
    audio.roll.play();
  }

  const rollIntervalId = setInterval(() => {
    const entry = rollEntries[currentIndex];
    const color = getColorByRarity(entry.rarity);
    const nameText = `${entry.name}${entry.isNSFW ? " (NSFW!)" : ""}`;
    const html = `<span style="color: ${color}">${nameText}</span>`;
    displayResult(html, entry.description || "");

    currentIndex = (currentIndex + 1) % rollEntries.length;
    rollCount--;
    if (rollCount <= 0) {
      clearInterval(rollIntervalId);

      // Stop rolling sound immediately
      if (window.soundEnabled) {
        audio.roll.pause();
        audio.roll.currentTime = 0;
      }

      // Final chosen entry with weighted random
      const chosen = weightedRandom(entries, weights);
      showResultAndPlaySound(chosen);
      resultBubble.classList.remove("rolling");
      // Re-enable buttons
      categoryButtons.forEach(btn => btn.disabled = false);
    }
  }, ROLL_INTERVAL);
}

function getColorByRarity(rarity) {
  if (rarity >= 9) return "red";
  if (rarity >= 7) return "#c90";         // Mythical
  if (rarity >= 5.5) return "#c0f";       // Legendary
  if (rarity >= 4) return "#0ff";         // Mythril
  if (rarity >= 3.25) return "#0cf";      // Diamond
  if (rarity >= 2) return "#ffd700";      // Gold
  if (rarity >= 1.25) return "#ccc";      // Silver
  if (rarity >= 0.75) return "#cd7f32";   // Bronze
  return "#999";                          // Trash
}

function showResultAndPlaySound(chosen) {
  const color = getColorByRarity(chosen.rarity);
  const nameText = `${chosen.name}${chosen.isNSFW ? " (NSFW!)" : ""}`;
  const resultHTML = `<span style="color: ${color}">${nameText}</span>`;
  const flavorText = chosen.description || "";
  displayResult(resultHTML, flavorText);

  if (chosen.rarity >= 9) playSound("winRare");
  else if (chosen.rarity >= 1) playSound("win");
  else if (chosen.rarity >= 0.01 && chosen.rarity <= 0.99) playSound("trash");
}

function displayResult(nameHTML, description) {
  resultBubble.innerHTML = `<div class="result-name">${nameHTML}</div>
                            <div class="result-desc">${description}</div>`;

  if (window.animEnabled) {
    resultBubble.classList.add("pulse");
    setTimeout(() => resultBubble.classList.remove("pulse"), 300);
  }
}

// Play sound by key, stopping any other sounds first
function playSound(key) {
  if (!window.soundEnabled) return;
  // Stop all other sounds before playing new one
  Object.values(audio).forEach(aud => {
    aud.pause();
    aud.currentTime = 0;
  });

  const sound = audio[key];
  if (sound) {
    sound.play();
  }
}

// Expose functions globally
window.draw = draw;
window.playSound = playSound;
