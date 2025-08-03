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

// Global flags
window.soundEnabled = true;
window.animEnabled = true;
window.nsfwEnabled = false;

// SOUND HELPERS
function stopAllSounds() {
  const soundIds = [
    'clickSound',
    'clickRareSound',
    'hoverRareSound',
    'trashSound',
    'winSound',
    'winRareSound'
  ];
  soundIds.forEach(id => {
    const audio = document.getElementById(id);
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

function muteAllSounds(mute) {
  const soundIds = [
    'clickSound',
    'clickRareSound',
    'hoverRareSound',
    'trashSound',
    'winSound',
    'winRareSound'
  ];
  soundIds.forEach(id => {
    const audio = document.getElementById(id);
    if (audio) audio.muted = mute;
  });
}

// PLAY SOUNDS
function playClickSound(button) {
  if (!window.soundEnabled) return;
  stopAllSounds();
  if (
    button.classList.contains('mythical') ||
    button.classList.contains('legendary') ||
    button.classList.contains('mythril')
  ) {
    document.getElementById('clickRareSound').play();
  } else {
    document.getElementById('clickSound').play();
  }
}

function playHoverSound(button) {
  if (!window.soundEnabled) return;
  if (
    button.classList.contains('mythical') ||
    button.classList.contains('legendary') ||
    button.classList.contains('mythril')
  ) {
    document.getElementById('hoverRareSound').play();
  }
}

function stopHoverSound() {
  const audio = document.getElementById('hoverRareSound');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

// RANDOM RARITY GENERATION
function generateRandomRarity(min, avg, max) {
  const r = Math.random();
  const bias = (r + Math.random()) / 2;
  return min + bias * (max - min);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// DRAW FUNCTION WITH NSFW FILTERING AND SOUND PLAYBACK
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

  if (!window.soundEnabled) return;

  if (roll < 0.99) {
    document.getElementById('trashSound').play();
  } else if (roll >= 9) {
    document.getElementById('winRareSound').play();
  } else {
    document.getElementById('winSound').play();
  }
}

// RARITY INPUT SETTER
function setRarity(min, avg, max) {
  document.getElementById('minRarity').value = min;
  document.getElementById('avgRarity').value = avg;
  document.getElementById('maxRarity').value = max;
}

// SETTINGS PANEL OPEN/CLOSE LOGIC
function openSettings() {
  const overlay = document.getElementById('settings-overlay');
  const panel = document.getElementById('settings-panel');
  overlay.classList.remove('hidden');
  panel.classList.remove('hidden');
  requestAnimationFrame(() => {
    panel.classList.add('visible');
  });
}

function closeSettings() {
  const overlay = document.getElementById('settings-overlay');
  const panel = document.getElementById('settings-panel');
  panel.classList.remove('visible');
  overlay.classList.add('hidden');
  panel.addEventListener('transitionend', function hide() {
    panel.classList.add('hidden');
    panel.removeEventListener('transitionend', hide);
  });
}

// TOGGLE SETTINGS BUTTON - Also closes settings if open
document.getElementById('settings-toggle').addEventListener('click', () => {
  const panel = document.getElementById('settings-panel');
  if (panel.classList.contains('visible')) {
    closeSettings();
  } else {
    openSettings();
  }
});

// SETTINGS TOGGLES
document.getElementById('soundToggle').addEventListener('change', e => {
  window.soundEnabled = e.target.checked;
  muteAllSounds(!window.soundEnabled);
});

document.getElementById('animToggle').addEventListener('change', e => {
  window.animEnabled = e.target.checked;
});

document.getElementById('nsfwToggle').addEventListener('change', e => {
  window.nsfwEnabled = e.target.checked;
});

// WRAP ORIGINAL FUNCTIONS TO ADD SOUND & ANIM CHECKS
const origPlayClick = playClickSound;
playClickSound = btn => {
  if (window.soundEnabled) origPlayClick(btn);
};

const origPlayHover = playHoverSound;
playHoverSound = btn => {
  if (window.soundEnabled) origPlayHover(btn);
};

const origDraw = draw;
draw = cat => {
  if (window.animEnabled) {
    const result = document.getElementById('result');
    result.classList.add('pulse');
    setTimeout(() => {
      result.classList.remove('pulse');
      origDraw(cat);
    }, 300);
  } else {
    origDraw(cat);
  }
};

// ESC key closes settings
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSettings();
});
