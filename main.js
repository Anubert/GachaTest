const data = [
  // Sample data entries
  { name: "Common Cat", tier: "bronze", isNSFW: false },
  { name: "Legendary Fox", tier: "legendary", isNSFW: false },
  { name: "Mythical Succubus", tier: "mythical", isNSFW: true },
  // Add more entries as needed
];

let selectedCategory = null;
let selectedTier = null;

// Sound files
const sounds = {
  trash: new Audio("assets/trash.mp3"),
  win: new Audio("assets/win.mp3"),
  winRare: new Audio("assets/winRare.mp3"),
  click: new Audio("assets/click.mp3"),
  hover: new Audio("assets/hover.mp3"),
};

let soundEnabled = true;
let animationEnabled = true;
let nsfwEnabled = false;

function playSound(sound) {
  if (!soundEnabled) return;
  const s = sounds[sound];
  if (s) {
    s.currentTime = 0;
    s.play();
  }
}

function draw() {
  if (!selectedCategory || !selectedTier) return;

  const min = parseInt(document.getElementById("min").value) || 0;
  const avg = parseInt(document.getElementById("avg").value) || 0;
  const max = parseInt(document.getElementById("max").value) || 0;

  let filtered = data.filter(d => d.tier === selectedTier);
  if (!nsfwEnabled) filtered = filtered.filter(d => !d.isNSFW);

  const result = filtered[Math.floor(Math.random() * filtered.length)];
  const resultDisplay = document.getElementById("result");

  if (result) {
    resultDisplay.textContent = result.name;

    const rareTiers = ["mythril", "legendary", "mythical"];
    if (result.tier === "trash") playSound("trash");
    else if (rareTiers.includes(result.tier)) playSound("winRare");
    else playSound("win");

    if (animationEnabled) {
      resultDisplay.classList.remove("shake");
      void resultDisplay.offsetWidth; // retrigger animation
      resultDisplay.classList.add("shake");
    }
  } else {
    resultDisplay.textContent = "No valid results.";
  }
}

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.dataset.category;
    playSound("click");
    draw();
  });
});

document.querySelectorAll(".tier-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTier = btn.dataset.tier;
    playSound("click");
    draw();
  });

  // Only play hover sound for rare tiers
  btn.addEventListener("mouseenter", () => {
    const rare = ["mythril", "legendary", "mythical"];
    if (rare.includes(btn.dataset.tier)) playSound("hover");
  });
});

document.getElementById("min").addEventListener("input", draw);
document.getElementById("avg").addEventListener("input", draw);
document.getElementById("max").addEventListener("input", draw);

// Settings toggles
document.getElementById("toggle-sound").addEventListener("change", e => {
  soundEnabled = e.target.checked;
});

document.getElementById("toggle-animation").addEventListener("change", e => {
  animationEnabled = e.target.checked;
});

document.getElementById("toggle-nsfw").addEventListener("change", e => {
  nsfwEnabled = e.target.checked;
});

// Settings panel toggle
const settingsBtn = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const overlay = document.getElementById("settings-overlay");

function toggleSettingsPanel() {
  const isVisible = settingsPanel.classList.contains("visible");
  if (isVisible) {
    settingsPanel.classList.remove("visible");
    overlay.classList.add("hidden");
  } else {
    settingsPanel.classList.add("visible");
    overlay.classList.remove("hidden");
  }
}

settingsBtn.addEventListener("click", toggleSettingsPanel);
overlay.addEventListener("click", toggleSettingsPanel);
document.querySelector("#settings-panel .close-btn").addEventListener("click", toggleSettingsPanel);
