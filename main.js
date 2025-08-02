// Sample data pool (expand later or load from JSON)
const data = {
  traits: [
    { name: 'Swift Reflexes', rarity: 1.2, isNSFW: false },
    { name: 'Night Howler', rarity: 4.7, isNSFW: false },
    { name: 'Sensual Touch', rarity: 5.1, isNSFW: true }
  ],
  abilities: [
    { name: 'Fire Lash', rarity: 2.3, isNSFW: false },
    { name: 'Whisper Moan', rarity: 5.8, isNSFW: true }
  ],
  summons: [
    { name: 'Wisp Familiar', rarity: 1.5, isNSFW: false },
    { name: 'Succubus Embrace', rarity: 6.2, isNSFW: true }
  ],
  items: [
    { name: 'Ancient Ring', rarity: 2.8, isNSFW: false },
    { name: 'Forbidden Idol', rarity: 6.7, isNSFW: true }
  ],
  skills: [
    { name: 'Blade Dance', rarity: 3.4, isNSFW: false },
    { name: 'Flesh Bloom', rarity: 5.9, isNSFW: true }
  ],
  random: [
    { name: 'Mystery Cube', rarity: 3.1, isNSFW: false },
    { name: 'Obscene Scroll', rarity: 6.9, isNSFW: true }
  ]
};

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

window.nsfwEnabled = false;

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

// Drawing logic with NSFW-aware filtering
function draw(category) {
  const min = parseFloat(document.getElementById('minRarity').value);
  const avg = parseFloat(document.getElementById('avgRarity').value);
  const max = parseFloat(document.getElementById('maxRarity').value);
  
  const roll = generateRandomRarity(min, avg, max);
  const pool = data[category] || [];

  const filtered = pool.filter(item => {
    if (!window.nsfwEnabled && item.isNSFW) return false;
    return item.rarity >= min && item.rarity <= max;
  });

  let resultText;
  if (filtered.length > 0) {
    const randomItem = filtered[Math.floor(Math.random() * filtered.length)];
    resultText = `${capitalize(category)}: ${randomItem.name} (Rarity: ${randomItem.rarity.toFixed(2)})`;
  } else {
    resultText = `No ${category} found in this rarity range${window.nsfwEnabled ? '' : ' (NSFW filtered)'}.`;
  }

  document.getElementById('result').textContent = resultText;

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

function generateRandomRarity(min, avg, max) {
  const r = Math.random();
  const bias = (r + Math.random()) / 2;
  return min + bias * (max - min);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

<script>
  const toggleBtn = document.getElementById('settings-toggle');
  const overlay = document.getElementById('settings-overlay');
  const panel = document.getElementById('settings-panel');

  toggleBtn.addEventListener('click', () => {
    panel.classList.add('visible');
    overlay.classList.remove('hidden');
  });

  overlay.addEventListener('click', closeSettings);

  function closeSettings() {
    panel.classList.remove('visible');
    overlay.classList.add('hidden');
  }
</script>
