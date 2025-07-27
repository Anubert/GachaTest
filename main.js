
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

function getRarityRange() {
  return {
    min: parseFloat(document.getElementById("minRarity").value) || 0.01,
    avg: parseFloat(document.getElementById("avgRarity").value) || 5.00,
    max: parseFloat(document.getElementById("maxRarity").value) || 9.99,
  };
}

function filterByRarity(pool, { min, max }) {
  return pool.filter(item => item.rarity >= min && item.rarity <= max);
}

window.setTier = function (min, avg, max) {
  document.getElementById("minRarity").value = min;
  document.getElementById("avgRarity").value = avg;
  document.getElementById("maxRarity").value = max;
}

window.draw = function (category) {
  if (category === "random") {
    const categories = Object.keys(data);
    category = categories[Math.floor(Math.random() * categories.length)];
  }

  const pool = data[category];
  if (!pool) {
    document.getElementById("result").textContent = "Unknown category!";
    return;
  }

  const { min, max } = getRarityRange();
  const filtered = filterByRarity(pool, { min, max });

  const result = weightedDraw(filtered.length ? filtered : pool);

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = \`
    <h2>\${result.name}</h2>
    <p>\${result.description}</p>
    <small>Rarity: \${result.rarity.toFixed(2)}%</small>
  \`;

  resultBox.classList.remove("shake");
  void resultBox.offsetWidth; // reset animation
  resultBox.classList.add("shake");
};
