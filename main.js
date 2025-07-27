import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

function weightedDraw(pool) {
  const total = pool.reduce((sum, item) => sum + item.rarity, 0);
  let roll = Math.random() * total;
  return pool.find(item => (roll -= item.rarity) < 0);
}

function getUserRarityRange() {
  return {
    min: parseFloat(document.getElementById("minRarity").value) || 0.01,
    avg: parseFloat(document.getElementById("avgRarity").value) || 5.00,
    max: parseFloat(document.getElementById("maxRarity").value) || 9.99,
  };
}

window.setTier = function (tierIndex) {
  const min = (tierIndex * 1).toFixed(2);
  const avg = (tierIndex * 1 + 0.5).toFixed(2);
  const max = (tierIndex * 1 + 0.99).toFixed(2);

  document.getElementById("minRarity").value = min;
  document.getElementById("avgRarity").value = avg;
  document.getElementById("maxRarity").value = max;
};

window.draw = function (category) {
  if (category === "random") {
    const keys = Object.keys(data);
    category = keys[Math.floor(Math.random() * keys.length)];
  }

  const pool = data[category];
  if (!pool) return;

  const { min, max } = getUserRarityRange();
  const filtered = pool.filter(item => item.rarity >= min && item.rarity <= max);
  if (!filtered.length) return;

  const result = weightedDraw(filtered);

  const resultBox = document.getElementById("result");
  resultBox.classList.add("flip");

  setTimeout(() => {
    resultBox.classList.remove("flip");
    resultBox.innerHTML = `
      <h2>${result.name}</h2>
      <p>${result.description}</p>
      <small>Rarity: ${result.rarity.toFixed(2)}%</small>
    `;
  }, 800);
};