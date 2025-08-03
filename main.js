// Tier rarity ranges will be set by setRarity()
let rarityRange = { min: 0.01, avg: 3.5, max: 9.99 };
let currentCategory = null;

const resultBubble = document.getElementById("result");

// Audio elements
const clickSound = document.getElementById("clickSound");
const hoverRareSound = document.getElementById("hoverRareSound");
const trashSound = document.getElementById("trashSound");
const winSound = document.getElementById("winSound");
const winRareSound = document.getElementById("winRareSound");

function playClickSound(btn) {
  if (window.soundEnabled) clickSound.play();
}

function playHoverSound(btn) {
  if (window.soundEnabled) hoverRareSound.play();
}

function stopHoverSound() {
  if (window.soundEnabled) hoverRareSound.pause();
}

function setRarity(min, avg, max) {
  rarityRange.min = min;
  rarityRange.avg = avg;
  rarityRange.max = max;

  document.getElementById("minRarity").value = min;
  document.getElementById("avgRarity").value = avg;
  document.getElementById("maxRarity").value = max;
}

// Sample data — you’ll replace these with your real trait pools
const data = {
  traits: [{ name: "Brave", rarity: 2 }],
  abilities: [{ name: "Fireball", rarity: 4 }],
  summons: [{ name: "Mini Dragon", rarity: 5.5 }],
  items: [{ name: "Rusty Sword", rarity: 1 }],
  skills: [{ name: "Lockpicking", rarity: 2.5 }],
  random: [
    { name: "Mysterious Goo", rarity: 3 },
    { name: "Forbidden Desire", rarity: 6.66, isNSFW: true },
  ],
};

function draw(categoryName) {
  currentCategory = categoryName;

  const min = parseFloat(document.getElementById("minRarity").value);
  const avg = parseFloat(document.getElementById("avgRarity").value);
  const max = parseFloat(document.getElementById("maxRarity").value);

  const entries = data[categoryName] || [];
  const filtered = entries.filter(entry => {
    const validRarity = entry.rarity >= min && entry.rarity <= max;
    const nsfwOkay = window.showNSFW || !entry.isNSFW;
    return validRarity && nsfwOkay;
  });

  if (filtered.length === 0) {
    resultBubble.textContent = "Nothing found...";
    trashSound.play();
    return;
  }

  const chosen = filtered[Math.floor(Math.random() * filtered.length)];

  if (window.animEnabled) {
    resultBubble.classList.add("pulse");
    setTimeout(() => resultBubble.classList.remove("pulse"), 300);
  }

  resultBubble.textContent = chosen.name;

  if (chosen.rarity >= 6.5) winRareSound.play();
  else winSound.play();
}
