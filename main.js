import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

function getTier(rarity) {
  return Math.min(9, Math.floor(rarity)); // 0.01-0.99 = tier 0, 1.00-1.99 = tier 1, ..., 9.00-9.99 = tier 9
}

function weightedDraw(pool, min, max) {
  const filtered = pool.filter(item => item.rarity >= min && item.rarity <= max);
  const total = filtered.reduce((sum, item) => sum + item.rarity, 0);
  let roll = Math.random() * total;
  return filtered.find(item => (roll -= item.rarity) < 0);
}

window.draw = function (category) {
  const min = parseFloat(document.getElementById("minRarity").value);
  const max = parseFloat(document.getElementById("maxRarity").value);
  const avg = parseFloat(document.getElementById("avgRarity").value);

  if (category === "random") {
    const categories = Object.keys(data);
    category = categories[Math.floor(Math.random() * categories.length)];
  }

  const pool = data[category];
  if (!pool) {
    document.getElementById("result").textContent = "Unknown category!";
    return;
  }

  const result = weightedDraw(pool, min, max);
  if (!result) {
    document.getElementById("result").textContent = "No item found in range!";
    return;
  }

  const tier = getTier(result.rarity);
  const resultBox = document.getElementById("result");
  resultBox.className = `result-box tier-${tier} animate`;
  resultBox.innerHTML = `
    <h2>${result.name}</h2>
    <p>${result.description}</p>
    <small>Rarity: ${result.rarity.toFixed(2)}</small>
  `;

  // Remove animation class after animation completes
  setTimeout(() => {
    resultBox.classList.remove("animate");
  }, 600);
};

window.setTier = function (tier) {
  const min = (tier - 1) + 0.01;
  const max = tier - 0.01 + 1;
  const avg = (min + max) / 2;
  document.getElementById("minRarity").value = min.toFixed(2);
  document.getElementById("maxRarity").value = max.toFixed(2);
  document.getElementById("avgRarity").value = avg.toFixed(2);
};
