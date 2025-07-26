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

const siteUnderConstruction = true; // Set to true to disable gacha

document.addEventListener("DOMContentLoaded", () => {
  if (siteUnderConstruction) {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    result.textContent = "🛠️ The Gacha is currently going through its training arc, please check back soon!";
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = 0.5;
      btn.style.cursor = "not-allowed";
    });
    return; // stop any further loading if paused
  }

  // 👉 Place your regular gacha draw logic below here:
  window.draw = function (type) {
    import(`./${type}.js`)
      .then((module) => {
        const items = module[type];
        const totalWeight = items.reduce((sum, item) => sum + (100 - item.rarity), 0);
        let rand = Math.random() * totalWeight;
        for (const item of items) {
          rand -= (100 - item.rarity);
          if (rand <= 0) {
            document.getElementById("result").innerHTML = `
              <h2>${item.name}</h2>
              <p><em>Rarity: ${item.rarity.toFixed(2)}%</em></p>
              <p>${item.description}</p>
            `;
            break;
          }
        }
      })
      .catch((err) => {
        console.error("Failed to load module:", err);
        document.getElementById("result").textContent = "Error loading data.";
      });
  };
});
