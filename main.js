import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';

const data = { traits, abilities, summons };

function weightedDraw(pool) {
  const total = pool.reduce((sum, item) => sum + item.rarity, 0);
  let roll = Math.random() * total;
  return pool.find(item => (roll -= item.rarity) < 0);
}

window.draw = function (category) {
  const pool = data[category];
  if (!pool) return;

  const result = weightedDraw(pool);
  document.getElementById("result").innerHTML = `
    <h2>${result.name}</h2>
    <p>${result.description}</p>
    <small>Rarity: ${result.rarity.toFixed(2)}%</small>
  `;
};

const siteUnderConstruction = false; // ⛔ Set to false to reactivate the gacha

if (siteUnderConstruction) {
  document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    result.textContent = "🛠️ the Gacha is currently going through a training arc. Please check back soon!";
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = 0.5;
      btn.style.cursor = "not-allowed";
    });
  });
}
