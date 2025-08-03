const categories = document.querySelectorAll(".category-btn");
const tiers = document.querySelectorAll(".tier-btn");
const resultBubble = document.getElementById("result");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");
const toggleBtn = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const settingsOverlay = document.getElementById("settings-overlay");
const soundToggle = document.getElementById("soundToggle");
const animationToggle = document.getElementById("animToggle");
const nsfwToggle = document.getElementById("nsfwToggle");

const sounds = {
  roll: new Audio("assets/audio/roll.mp3"),
  click: new Audio("assets/audio/click.mp3"),
  clickRare: new Audio("assets/audio/click_rare.mp3"),
  hoverRare: new Audio("assets/audio/hover_rare.mp3"),
  trash: new Audio("assets/audio/trash.mp3"),
  win: new Audio("assets/audio/win.mp3"),
  winRare: new Audio("assets/audio/win_rare.mp3"),
};

const rareTiers = ["mythril", "legendary", "mythical"];

// Mute/unmute all sounds when toggled
function updateMuteState() {
  const muted = !soundToggle.checked;
  Object.values(sounds).forEach((s) => (s.muted = muted));
}
soundToggle.addEventListener("change", updateMuteState);
updateMuteState();

function playSound(soundKey) {
  if (!soundToggle.checked) return;
  const sound = sounds[soundKey];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

let currentCategory = "traits"; // default selected category
let currentTier = "trash";      // default tier

// Example data structure for gacha pulls
const data = {
  traits: [
    { name: "Strong", rarity: 1.5 },
    { name: "Swift", rarity: 2.2 },
    { name: "Lucky", rarity: 3.0 },
    { name: "Epic", rarity: 5.5 },
    { name: "Mythical", rarity: 8.5 },
    { name: "Legendary", rarity: 9.5, isNSFW: true },
  ],
  abilities: [
    { name: "Fireball", rarity: 2 },
    { name: "Ice Shield", rarity: 3 },
    { name: "Thunder Strike", rarity: 6 },
    { name: "Heal", rarity: 4 },
  ],
  summons: [
    { name: "Wolf", rarity: 1 },
    { name: "Phoenix", rarity: 7 },
    { name: "Dragon", rarity: 8 },
  ],
  items: [
    { name: "Potion", rarity: 0.5 },
    { name: "Elixir", rarity: 1.5 },
    { name: "Excalibur", rarity: 9 },
  ],
  skills: [
    { name: "Stealth", rarity: 1.2 },
    { name: "Archery", rarity: 2.7 },
    { name: "Sword Mastery", rarity: 4.2 },
  ],
  random: [
    { name: "Surprise", rarity: 5 },
    { name: "Chaos", rarity: 7 },
    { name: "Destiny", rarity: 9.8 },
  ],
};

// Helper to get rarity class for coloring
function getRarityClass(rarity) {
  if (rarity > 8.99) return "rarity-red";
  if (rarity >= 8) return "rarity-violet";
  if (rarity >= 7) return "rarity-violet"; // Mythical
  if (rarity >= 6.5) return "rarity-orchid"; // Legendary
  if (rarity >= 5) return "rarity-deepskyblue"; // Mythril
  if (rarity >= 4.) return "rarity-gold"; // Diamond
  if (rarity >= 2.5) return "rarity-gold"; // Gold
  if (rarity >= 1.5) return "rarity-silver"; // Silver
  if (rarity >= 0.99) return "rarity-brown"; // Bronze
  return "rarity-gray"; // Trash or below
}

// Set rarity values when tier button clicked
function setRarity(min, avg, max, tierName) {
  minInput.value = min;
  avgInput.value = avg;
  maxInput.value = max;
  currentTier = tierName;
  draw(currentCategory);
}

categories.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentCategory = btn.textContent.toLowerCase();
    playSound("click");
    draw(currentCategory);
  });
});

tiers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tier = btn.classList[1]; // second class is tier name
    // Example ranges hardcoded per tier:
    switch (tier) {
      case "trash":
        setRarity(0.01, 0.5, 0.99, tier);
        break;
      case "bronze":
        setRarity(0.75, 1.5, 1.99, tier);
        break;
      case "silver":
        setRarity(1.25, 2.5, 3.25, tier);
        break;
      case "gold":
        setRarity(2, 3, 4.5, tier);
        break;
      case "diamond":
        setRarity(3.25, 4, 5.75, tier);
        break;
      case "mythril":
        setRarity(4, 5.25, 6.99, tier);
        break;
      case "legendary":
        setRarity(5, 5.5, 7, tier);
        break;
      case "mythical":
        setRarity(6.5, 7.75, 9.99, tier);
        break;
    }
    playSound("click");
  });
});

// Main draw function
function draw(category) {
  if (!category || !currentTier) return;

  let entries = data[category] || [];

  if (!nsfwToggle.checked) {
    entries = entries.filter((e) => !e.isNSFW);
  }

  if (entries.length === 0) {
    resultBubble.textContent = "Nothing found...";
    resultBubble.className = "result-bubble rarity-gray";
    return;
  }

  // Pick random entry
  const chosen = entries[Math.floor(Math.random() * entries.length)];
  const name = chosen.name || chosen;

  // Play roll sound if enabled
  if (soundToggle.checked) {
    sounds.roll.currentTime = 0;
    sounds.roll.play();
  }

  // Animate result bubble if enabled
  if (animationToggle.checked) {
    resultBubble.classList.remove("shake");
    void resultBubble.offsetWidth;
    resultBubble.classList.add("shake");
  }

  // Show result text
  resultBubble.textContent = name;

  // Clear existing rarity classes
  resultBubble.className = "result-bubble";

  // Use average rarity for coloring
  const avgRarity = parseFloat(avgInput.value) || 0;
  const rarityClass = getRarityClass(avgRarity);
  resultBubble.classList.add(rarityClass);

  // Play win sound based on rarity
  if (avgRarity > 5) {
    if (soundToggle.checked) {
      sounds.winRare.currentTime = 0;
      sounds.winRare.play();
    }
  } else {
    if (soundToggle.checked) {
      sounds.win.currentTime = 0;
      sounds.win.play();
    }
  }
}

// Settings panel toggle
function openSettings() {
  settingsOverlay.classList.remove("hidden");
  settingsPanel.classList.remove("hidden");
  requestAnimationFrame(() => settingsPanel.classList.add("visible"));
}

function closeSettings() {
  settingsPanel.classList.remove("visible");
  settingsOverlay.classList.add("hidden");
  settingsPanel.addEventListener(
    "transitionend",
    function hide() {
      settingsPanel.classList.add("hidden");
      settingsPanel.removeEventListener("transitionend", hide);
    },
    { once: true }
  );
}

toggleBtn.addEventListener("click", () => {
  if (settingsPanel.classList.contains("visible")) {
    closeSettings();
  } else {
    openSettings();
  }
});

settingsOverlay.addEventListener("click", closeSettings);

// Initialize default selection
draw(currentCategory);
