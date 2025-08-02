// Sound helpers
function stopAllSounds() {
  const sounds = [
    'clickSound',
    'clickRareSound',
    'clickDiamondSound',
    'hoverRareSound',
    'trashSound',
    'winSound',
    'winRareSound'
  ];
  sounds.forEach(id => {
    const audio = document.getElementById(id);
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

window.nsfwEnabled = false;  // default OFF

document.getElementById('nsfwToggle').addEventListener('change', e => {
  window.nsfwEnabled = e.target.checked;
});

function playClickSound(button) {
  stopAllSounds();

  if (button.classList.contains('mythical') ||
      button.classList.contains('legendary') ||
      button.classList.contains('mythril')) {
    document.getElementById('clickRareSound').play();
  } else {
    // Diamond and below
    document.getElementById('clickSound').play();
  }
}

function playHoverSound(button) {
  if (button.classList.contains('mythical') ||
      button.classList.contains('legendary') ||
      button.classList.contains('mythril')) {
    document.getElementById('hoverRareSound').play();
  }
}

function stopHoverSound() {
  const audio = document.getElementById('hoverRareSound');
  audio.pause();
  audio.currentTime = 0;
}

// Drawing logic
function draw(category) {
  const min = parseFloat(document.getElementById('minRarity').value);
  const avg = parseFloat(document.getElementById('avgRarity').value);
  const max = parseFloat(document.getElementById('maxRarity').value);
  
  const roll = generateRandomRarity(min, avg, max);
  const result = `${capitalize(category)} result (Rarity: ${roll.toFixed(2)})`;
  document.getElementById('result').textContent = result;

  if (roll < 0.99) {
    document.getElementById('trashSound').play();
  } else if (roll >= 9) {
    document.getElementById('winRareSound').play();
  } else {
    document.getElementById('winSound').play();
  }
}

function setRarity(min, avg, max) {
  document.getElementById('minRarity').value = min;
  document.getElementById('avgRarity').value = avg;
  document.getElementById('maxRarity').value = max;
}

// Weighted rarity generator toward avg
function generateRandomRarity(min, avg, max) {
  const r = Math.random();
  const bias = (r + Math.random()) / 2;
  return min + bias * (max - min);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
