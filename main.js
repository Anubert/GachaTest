
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

function getRarityClass(rarity) {
  if (rarity < 1) return "rarity-trash";
  else if (rarity < 2) return "rarity-bronze";
  else if (rarity < 3) return "rarity-silver";
  else if (rarity < 4) return "rarity-gold";
  else if (rarity < 5) return "rarity-platinum";
  else if (rarity < 6) return "rarity-diamond";
  else if (rarity < 7) return "rarity-mythril";
  else if (rarity < 8) return "rarity-legendary";
  else return "rarity-mythical";
}

window.draw = function (category) {
  const resultBox = document.getElementById("result");
  resultBox.className = "rolling";
  resultBox.textContent = "Rolling...";

  setTimeout(() => {
    if (category === "random") {
      const categories = Object.keys(data);
      category = categories[Math.floor(Math.random() * categories.length)];
    }

    const pool = data[category];
    if (!pool) {
      resultBox.className = "";
      resultBox.textContent = "Unknown category!";
      return;
    }

    const result = weightedDraw(pool);
    const rarityClass = getRarityClass(result.rarity);
    resultBox.className = rarityClass;
    resultBox.innerHTML = `
      <h2>${result.name}</h2>
      <p>${result.description}</p>
      <small>Rarity: ${result.rarity.toFixed(2)}%</small>
    `;
  }, 1500);
};
