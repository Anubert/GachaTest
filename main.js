import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

// Audio setup
const audioPath = 'assets/audio/';
const clickSound = new Audio(audioPath + 'click.mp3');
const clickRareSound = new Audio(audioPath + 'click_rare.mp3');
const hoverRareSound = new Audio(audioPath + 'hover_rare.mp3');
const trashSound = new Audio(audioPath + 'trash.mp3');
const winSound = new Audio(audioPath + 'win.mp3');
const winRareSound = new Audio(audioPath + 'win_rare.mp3');

let currentHoverAudio = null;
window.playHoverSound = (btn) => {
  if (['mythril', 'legendary', 'mythical'].some(cls => btn.classList.contains(cls))) {
    if (currentHoverAudio) { currentHoverAudio.pause(); }
    currentHoverAudio = hoverRareSound;
    hoverRareSound.currentTime = 0;
    hoverRareSound.play();
  }
};
window.stopHoverSound = () => {
  if (currentHoverAudio) {
    currentHoverAudio.pause();
    currentHoverAudio.currentTime = 0;
    currentHoverAudio = null;
  }
};

// Click sounds
const rareBtnIds = ['btnMythril', 'btnLegendary', 'btnMythical'];
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (rareBtnIds.includes(btn.id)) {
      clickRareSound.currentTime = 0; clickRareSound.play();
    } else {
      clickSound.currentTime = 0; clickSound.play();
    }
  });
});

// Rarity range handlers
let currentMin = 0.01, currentMax = 9.99;
window.setTier = (min, max) => {
  currentMin = min; currentMax = max;
  document.getElementById('minRarity').value = min.toFixed(2);
  document.getElementById('maxRarity').value = max.toFixed(2);
};
['minRarity','maxRarity'].forEach(id => {
  document.getElementById(id).addEventListener('input', e => {
    if (id === 'minRarity') currentMin = parseFloat(e.target.value) || 0.01;
    else currentMax = parseFloat(e.target.value) || 9.99;
  });
});

function weightedDraw(pool) {
  const filtered = pool.filter(item => item.rarity >= currentMin && item.rarity <= currentMax);
  const total = filtered.reduce((sum,i) => sum + i.rarity, 0);
  let r = Math.random() * total;
  return filtered.find(i => (r -= i.rarity) < 0);
}

window.draw = (category) => {
  if (category === 'random') {
    const cats = Object.keys(data);
    category = cats[Math.floor(Math.random()*cats.length)];
  }
  const pool = data[category];
  const resultBox = document.getElementById('result');
  resultBox.classList.remove('shake'); void resultBox.offsetWidth; resultBox.classList.add('shake');
  resultBox.textContent = 'Rolling...';
  setTimeout(() => {
    const result = weightedDraw(pool);
    if (!result) { resultBox.textContent = 'No results!'; return; }
    // Result sound
    if (result.rarity <= 0.99) trashSound.play();
    else if (result.rarity >= 6.00) winRareSound.play();
    else winSound.play();
    resultBox.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p><small>Rarity: ${result.rarity.toFixed(2)}</small>`;
  }, 500);
};