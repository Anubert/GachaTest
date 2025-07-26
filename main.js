import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

window.setTier = function(min, max) {
  document.getElementById('minRarity').value = min.toFixed(2);
  document.getElementById('maxRarity').value = max.toFixed(2);
};

function weightedDraw(pool, minR, maxR) {
  const filtered = pool.filter(i => i.rarity >= minR && i.rarity <= maxR);
  const total = filtered.reduce((sum, i) => sum + i.rarity, 0);
  let roll = Math.random() * total;
  return filtered.find(i => (roll -= i.rarity) < 0);
}

window.draw = function(category) {
  const resultBox = document.getElementById('result');
  resultBox.textContent = 'Rolling...';
  resultBox.className = 'gacha-result rolling';
  setTimeout(() => {
    if (category === 'random') {
      const cats = Object.keys(data);
      category = cats[Math.floor(Math.random()*cats.length)];
    }
    const pool = data[category];
    const minR = parseFloat(document.getElementById('minRarity').value);
    const maxR = parseFloat(document.getElementById('maxRarity').value);
    const res = weightedDraw(pool, minR, maxR);
    if (!res) {
      resultBox.className = 'gacha-result';
      resultBox.textContent = 'No results';
      return;
    }
    resultBox.className = 'gacha-result';
    resultBox.innerHTML = `<h2>${res.name}</h2><p>${res.description}</p><small>Rarity: ${res.rarity.toFixed(2)}</small>`;
  }, 1000);
};
