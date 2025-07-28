// Audio refs
const clickSound = document.getElementById('clickSound');
const clickRareSound = document.getElementById('clickRareSound');
const hoverRareSound = document.getElementById('hoverRareSound');
const trashSound = document.getElementById('trashSound');
const winSound = document.getElementById('winSound');
const winRareSound = document.getElementById('winRareSound');

window.playClickSound = (btn) => {
  if (btn.classList.contains('rare')) {
    clickRareSound.currentTime = 0; clickRareSound.play();
  } else {
    clickSound.currentTime = 0; clickSound.play();
  }
};

let hoverAudio = null;
window.playHoverSound = (btn) => {
  hoverAudio = hoverRareSound; hoverAudio.currentTime = 0; hoverAudio.play();
};
window.stopHoverSound = () => {
  if (hoverAudio) { hoverAudio.pause(); hoverAudio.currentTime = 0; hoverAudio = null; }
};

window.setRarity = (min, avg, max) => {
  document.getElementById('minRarity').value = min.toFixed(2);
  document.getElementById('avgRarity').value = avg.toFixed(2);
  document.getElementById('maxRarity').value = max.toFixed(2);
};

window.draw = (category) => {
  const resultEl = document.getElementById('result');
  // simulate drawing
  const rarity = parseFloat(document.getElementById('avgRarity').value);
  if (rarity < 1) { trashSound.play(); resultEl.textContent = 'Trash Item!'; }
  else if (rarity >= 6) { winRareSound.play(); resultEl.textContent = 'Rare Item!'; }
  else { winSound.play(); resultEl.textContent = 'Standard Item!'; }
};
