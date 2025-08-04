import traits from './traits.js';
import abilities from './abilities.js';
import summons from './summons.js';
import items from './items.js';
import skills from './skills.js';
import random from './random.js';

const data = {
  traits,
  abilities,
  summons,
  items,
  skills,
  random,
};

const resultDisplay = document.getElementById("result");
const minInput = document.getElementById("minRarity");
const avgInput = document.getElementById("avgRarity");
const maxInput = document.getElementById("maxRarity");

const clickSound = document.getElementById("clickSound");
const clickRareSound = document.getElementById("clickRareSound");
const hoverRareSound = document.getElementById("hoverRareSound");
const trashSound = document.getElementById("trashSound");
const winSound = document.getElementById("winSound");
const winRareSound = document.getElementById("winRareSound");

function playClickSound(button) {
  if (button.classList.contains("rare")) {
    clickRareSound.currentTime = 0;
    clickRareSound.play();
  } else {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

function playHoverSound(button) {
  hoverRareSound.currentTime = 0;
  hoverRareSound.play();
}

function stopHoverSound() {
  hoverRareSound.pause();
  hoverRareSound.currentTime = 0;
}

function setRarity(min, avg, max) {
  minInput.value = min;
  avgInput.value = avg;
  maxInput.value = max;
}

function getTierColor(rarity) {
  if (rarity >= 8.99) return 'red';
  if (rarity >= 7.75) return 'mythical';
  if (rarity >= 5.5) return 'legendary';
  if (rarity >= 5.25) return 'mythril';
  if (rarity >= 4) return 'diamond';
  if (rarity >= 3) return 'gold';
  if (rarity >= 2) return 'silver';
  if (rarity >= 1) return 'bronze';
  return 'trash';
}

function draw(category) {
  const min = parseFloat(minInput.value) || 0;
  const avg = parseFloat(avgInput.value) || 0;
  const max = parseFloat(maxInput.value) || 0;

  const pool = data[category] || [];
  const filtered = pool.filter(obj => {
    if (!window.showNSFW && obj.isNSFW) return false;
    return obj.rarity >= min && obj.rarity <= max;
  });

  if (filtered.length === 0) {
    resultDisplay.innerHTML = `<span class="tier-trash">Nothing found...</span>`;
    trashSound.play();
    return;
  }

  const selected = filtered[Math.floor(Math.random() * filtered.length)];
  const colorClass = `tier-${getTierColor(selected.rarity)}`;
  resultDisplay.innerHTML = `<span class="${colorClass}">${selected.name}</span>`;

  if (selected.rarity >= 8.99) {
    winRareSound.play();
  } else {
    winSound.play();
  }
}
