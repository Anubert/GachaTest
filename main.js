const categories = document.querySelectorAll(".category-btn");
const tiers = document.querySelectorAll(".tier-btn");
const resultBubble = document.getElementById("result");
const scrollingItems = document.getElementById("scrolling-items");
const finalResultText = document.getElementById("final-result-text");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");
const toggleBtn = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const settingsOverlay = document.getElementById("settings-overlay");
const soundToggle = document.getElementById("toggle-sound");
const animationToggle = document.getElementById("toggle-animation");
const nsfwToggle = document.getElementById("toggle-nsfw");

const sounds = {
  roll: new Audio("assets/sound/roll.mp3"),
  click: new Audio("assets/sound/click.mp3"),
  win: new Audio("assets/sound/win.mp3"),
  winRare: new Audio("assets/sound/winRare.mp3"),
};

const rareTiers = ["mythril", "legendary", "mythical"];

function updateMuteState() {
  const muted = !soundToggle.checked;
  Object.values(sounds).forEach(s => s.muted = muted);
}

soundToggle.addEventListener("change", updateMuteState);
updateMuteState();

function playSound(soundKey) {
  const sound = sounds[soundKey];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

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
  if (!nsfwToggle.checked) {
    entries = entries.filter(e => !e.isNSFW);
  }

  if (entries.length === 0) {
    scrollingItems.textContent = "";
    finalResultText.textContent = "Nothing found...";
    return;
  }

  const chosen = entries[Math.floor(Math.random() * entries.length)];
  const finalName = typeof chosen === "string" ? chosen : chosen.name;

  if (animationToggle.checked) {
    resultBubble.classList.remove("shake");
    void resultBubble.offsetWidth;
    resultBubble.classList.add("shake");
  }

  playSound("roll");

  const scrollDuration = 1000;
  const interval = 100;
  let count = 0;
  scrollingItems.textContent = "";
  finalResultText.textContent = "";

  const intervalId = setInterval(() => {
    const temp = entries[Math.floor(Math.random() * entries.length)];
    scrollingItems.textContent = typeof temp === "string" ? temp : temp.name;
    count += interval;
    if (count >= scrollDuration) {
      clearInterval(intervalId);
      scrollingItems.textContent = "";
      finalResultText.textContent = finalName;
      if (rareTiers.includes(currentTier)) playSound("winRare");
      else playSound("win");
    }
  }, interval);
}

function toggleSettings() {
  settingsPanel.classList.toggle("visible");
  settingsOverlay.classList.toggle("hidden");
}
toggleBtn.addEventListener("click", toggleSettings);
settingsOverlay.addEventListener("click", toggleSettings);
