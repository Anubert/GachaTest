
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

window.setTier = function(min, max) {
  document.getElementById("minRarity").value = min.toFixed(2);
  document.getElementById("avgRarity").value = ((min + max) / 2).toFixed(2);
  document.getElementById("maxRarity").value = max.toFixed(2);
}

window.draw = function (category) {
  const min = parseFloat(document.getElementById("minRarity").value);
  const max = parseFloat(document.getElementById("maxRarity").value);

  if (category === "random") {
    const categories = Object.keys(data);
    category = categories[Math.floor(Math.random() * categories.length)];
  }

  const pool = data[category].filter(item => item.rarity >= min && item.rarity <= max);
  if (!pool.length) {
    document.getElementById("result").innerHTML = "No item in selected rarity range.";
    return;
  }

  const result = weightedDraw(pool);
  document.getElementById("result").innerHTML = `
    <h2>${result.name}</h2>
    <p>${result.description}</p>
    <small>Rarity: ${result.rarity.toFixed(2)}%</small>
  `;
}
