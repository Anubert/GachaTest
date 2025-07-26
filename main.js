import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

const tierRanges = [
  [0.01, 1.11], [1.12, 2.22], [2.23, 3.33],
  [3.34, 4.44], [4.45, 5.55], [5.56, 6.66],
  [6.67, 7.77], [7.78, 8.88], [8.89, 9.99]
];

window.setTier = function(tierIndex) {
  const [min, max] = tierRanges[tierIndex];
  document.getElementById('minRarity').value = min.toFixed(2);
  document.getElementById('avgRarity').value = ((min + max) / 2).toFixed(2);
  document.getElementById('maxRarity').value = max.toFixed(2);
};

function weightedDraw(pool, minRarity, maxRarity) {
  const filtered = pool.filter(item => item.rarity >= minRarity && item.rarity <= maxRarity);
  const total = filtered.reduce((sum, item) => sum + item.rarity, 0);
  let roll = Math.random() * total;
  return filtered.find(item => (roll -= item.rarity) < 0);
}

window.draw = function(category) {
  if (category === "random") {
    const categories = Object.keys(data);
    category = categories[Math.floor(Math.random() * categories.length)];
  }

  const pool = data[category];
  if (!pool) {
    document.getElementById("result").textContent = "Unknown category!";
    return;
  }

  const minRarity = parseFloat(document.getElementById("minRarity").value);
  const maxRarity = parseFloat(document.getElementById("maxRarity").value);

  const result = weightedDraw(pool, minRarity, maxRarity);
  if (!result) {
    document.getElementById("result").innerHTML = "<p>No results in that rarity range.</p>";
    return;
  }

  document.getElementById("result").innerHTML = `
    <h2>${result.name}</h2>
    <p>${result.description}</p>
    <small>Rarity: ${result.rarity.toFixed(2)}</small>
  `;
};
