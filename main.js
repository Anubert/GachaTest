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

window.draw = function (category) {
  if (category === "random") {
    const categories = ['traits', 'abilities', 'summons', 'items', 'skills'];
    category = categories[Math.floor(Math.random() * categories.length)];
  }

  const pool = data[category];
  if (!pool) {
    document.getElementById("result").textContent = "Unknown category!";
    return;
  }

  const result = weightedDraw(pool);
  document.getElementById("result").innerHTML = \`
    <h2>\${result.name}</h2>
    <p>\${result.description}</p>
    <small>Rarity: \${result.rarity.toFixed(2)}%</small>
  \`;
};