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