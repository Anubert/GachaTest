import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

window.setTier = (min, max) => {
  document.getElementById('minRarity').value = min.toFixed(2);
  document.getElementById('avgRarity').value = ((min + max)/2).toFixed(2);
  document.getElementById('maxRarity').value = max.toFixed(2);
};

function weightedDraw(pool, min, max) {
  const filtered = pool.filter(i => i.rarity >= min && i.rarity <= max);
  const total = filtered.reduce((s,i) => s + i.rarity, 0);
  let r = Math.random() * total;
  return filtered.find(i => (r -= i.rarity) < 0);
}

window.draw = (category) => {
  if (category === 'random') {
    const keys = Object.keys(data);
    category = keys[Math.floor(Math.random()*keys.length)];
  }

  const min = parseFloat(document.getElementById('minRarity').value);
  const avg = parseFloat(document.getElementById('avgRarity').value);
  const max = parseFloat(document.getElementById('maxRarity').value);

  const pool = data[category];
  const box = document.getElementById('result');
  box.classList.add('shake');
  box.textContent = 'Rolling...';

  setTimeout(() => {
    box.classList.remove('shake');
    const result = weightedDraw(pool, min, max);
    if (!result) {
      box.textContent = 'No results!';
      return;
    }
    box.innerHTML = `
      <h2>${result.name}</h2>
      <p>${result.description}</p>
      <small>Rarity: ${result.rarity.toFixed(2)}</small>
    `;
  }, 500);
};
