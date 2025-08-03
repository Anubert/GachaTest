const categories = document.querySelectorAll(".category-btn");
const tiers = document.querySelectorAll(".tier-btn");
const resultBubble = document.getElementById("result");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");
const toggleBtn = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const settingsOverlay = document.getElementById("settings-overlay");
const soundToggle = document.getElementById("toggle-sound");
const animationToggle = document.getElementById("toggle-animation");
const nsfwToggle = document.getElementById("toggle-nsfw");

// Audio setup
const sounds = {
  roll: new Audio("assets/sound/roll.mp3"),
  click: new Audio("assets/sound/click.mp3"),
  win: new Audio("assets/sound/win.mp3"),
  winRare: new Audio("assets/sound/winRare.mp3"),
};

const rareTiers = ["mythril", "legendary", "mythical"];

function playSound(soundKey) {
  if (!soundToggle.checked) return;
  const sound = sounds[soundKey];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// Sample data
const data = {
  animal: {
    bronze: ["Dog", "Cat"],
    gold: ["Dragon"],
    mythical: [{ name: "Cerberus", isNSFW: true }],
  },
  waifu: {
    silver: ["Maid"],
    diamond: ["Princess"],
    legendary: [{ name: "Succubus", isNSFW: true }],
  },
};

let currentCategory = null;
let currentTier = null;

// Button logic
categories.forEach((btn) => {
  btn.addEventListener("click", () => {
    playSound("click");
    currentCategory = btn.dataset.category;
  });
});

tiers.forEach((btn) => {
  const tier = btn.dataset.tier;
  btn.addEventListener("mouseenter", () => {
    if (rareTiers.includes(tier)) playSound("winRare");
  });
  btn.addEventListener("click", () => {
    playSound("click");
    currentTier = tier;
    draw();
  });
});

function draw() {
  if (!currentCategory || !currentTier) return;

  let entries = data[currentCategory]?.[currentTier] || [];
  if (!nsfwToggle.checked) entries = entries.filter(e => !e.isNSFW);

  if (entries.length === 0) {
    resultBubble.textContent = "Nothing found...";
    return;
  }

  playSound("roll");

  const chosen = entries[Math.floor(Math.random() * entries.length)];
  const name = typeof chosen === "string" ? chosen : chosen.name;

  resultBubble.textContent = name;

  if (animationToggle.checked) {
    resultBubble.classList.remove("shake");
    void resultBubble.offsetWidth;
    resultBubble.classList.add("shake");
  }

  if (rareTiers.includes(currentTier)) playSound("winRare");
  else playSound("win");
}

// Toggle settings panel
function toggleSettings() {
  settingsPanel.classList.toggle("visible");
  settingsOverlay.classList.toggle("hidden");
}

toggleBtn.addEventListener("click", toggleSettings);
settingsOverlay.addEventListener("click", toggleSettings);
