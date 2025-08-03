// Globals for rarity filtering, you can adjust these via UI inputs
let minRarity = 0.01;
let avgRarity = 3.5;
let maxRarity = 9.99;

// Set rarity ranges (call when tier buttons clicked)
function setRarity(min, avg, max) {
  minRarity = min;
  avgRarity = avg;
  maxRarity = max;
  // Update inputs if you have them visible
  const minInput = document.getElementById('minRarity');
  const avgInput = document.getElementById('avgRarity');
  const maxInput = document.getElementById('maxRarity');
  if (minInput) minInput.value = min;
  if (avgInput) avgInput.value = avg;
  if (maxInput) maxInput.value = max;
}

// Example datasets - replace with your actual data
// Each entry must have rarity property and other needed properties for display
const data = {
  traits: [
    { name: "Brave", rarity: 1.2 },
    { name: "Clever", rarity: 2.5 },
    { name: "Mysterious", rarity: 5.1 },
    { name: "Legendary Trait", rarity: 7.8 },
    { name: "Trash Trait", rarity: 0.3 },
    // ... add your own traits here
  ],
  abilities: [
    { name: "Fireball", rarity: 3.0 },
    { name: "Ice Shield", rarity: 4.2 },
    // ...
  ],
  // Add other categories like summons, items, skills, random...
};

// Utility to capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper to generate a random rarity within current set range, weighted towards avgRarity
function generateRandomRarity() {
  // Weighted average: simple triangular distribution approximation
  const rand1 = Math.random();
  const rand2 = Math.random();
  const weighted = (rand1 + rand2) / 2;
  return minRarity + weighted * (maxRarity - minRarity);
}

// Play click sound if enabled
function playClickSound(btn) {
  if (!window.soundEnabled) return;
  const clickSound = document.getElementById('clickSound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

// Play hover rare sound if enabled
function playHoverSound(btn) {
  if (!window.soundEnabled) return;
  const hoverRareSound = document.getElementById('hoverRareSound');
  if (hoverRareSound) {
    hoverRareSound.currentTime = 0;
    hoverRareSound.play();
  }
}

function stopHoverSound() {
  const hoverRareSound = document.getElementById('hoverRareSound');
  if (hoverRareSound) {
    hoverRareSound.pause();
    hoverRareSound.currentTime = 0;
  }
}

// Main draw function with scrolling animation
async function draw(category) {
  const resultDiv = document.getElementById('result');
  const scrollingItems = document.getElementById('scrolling-items');

  // Clear previous result text and scrolling items
  resultDiv.textContent = '';
  scrollingItems.innerHTML = '';

  // Safety check: category data exists
  if (!data[category] || data[category].length === 0) {
    resultDiv.textContent = 'No data for category: ' + category;
    return;
  }

  // Filter possible entries by rarity range
  const possibleEntries = data[category].filter(
    item => item.rarity >= minRarity && item.rarity <= maxRarity
  );

  if (possibleEntries.length === 0) {
    resultDiv.textContent = 'No items in selected rarity range.';
    return;
  }

  // Number of scroll steps before landing on final result
  const scrollSteps = 20;

  // Build the scroll sequence of random items (not final result)
  const scrollSequence = [];
  for (let i = 0; i < scrollSteps; i++) {
    const randomIndex = Math.floor(Math.random() * possibleEntries.length);
    scrollSequence.push(possibleEntries[randomIndex]);
  }

  // Pick final item randomly weighted around avgRarity
  let finalItem = null;
  let tries = 0;
  do {
    const candidateIndex = Math.floor(Math.random() * possibleEntries.length);
    const candidate = possibleEntries[candidateIndex];
    // Accept candidate if rarity near avgRarity +/- 1.5, else retry
    if (Math.abs(candidate.rarity - avgRarity) <= 1.5) {
      finalItem = candidate;
      break;
    }
    tries++;
  } while (tries < 30);

  // Fallback: if no match found after tries, just pick any
  if (!finalItem) {
    finalItem = possibleEntries[Math.floor(Math.random() * possibleEntries.length)];
  }

  // Animate scrolling items visually inside #scrolling-items
  for (let i = 0; i < scrollSequence.length; i++) {
    scrollingItems.textContent = capitalize(scrollSequence[i].name);
    await new Promise(res => setTimeout(res, 60 + i * 30)); // Speed up gradually
  }

  // Show final result
  scrollingItems.textContent = '';
  resultDiv.textContent = capitalize(finalItem.name);

  // Play sounds for rarity category (adjust as you want)
  if (finalItem.rarity < 1) {
    const trashSound = document.getElementById('trashSound');
    if (trashSound && window.soundEnabled) trashSound.play();
  } else if (finalItem.rarity < 4) {
    const winSound = document.getElementById('winSound');
    if (winSound && window.soundEnabled) winSound.play();
  } else {
    const winRareSound = document.getElementById('winRareSound');
    if (winRareSound && window.soundEnabled) winRareSound.play();
  }
}

// Initial rarity set (can be set via tier buttons)
setRarity(0.01, 3.5, 9.99);

// Add event listeners for rarity inputs to update values live
document.addEventListener('DOMContentLoaded', () => {
  const minInput = document.getElementById('minRarity');
  const avgInput = document.getElementById('avgRarity');
  const maxInput = document.getElementById('maxRarity');

  if (minInput) {
    minInput.value = minRarity;
    minInput.addEventListener('input', () => {
      minRarity = parseFloat(minInput.value) || 0.01;
    });
  }
  if (avgInput) {
    avgInput.value = avgRarity;
    avgInput.addEventListener('input', () => {
      avgRarity = parseFloat(avgInput.value) || 3.5;
    });
  }
  if (maxInput) {
    maxInput.value = maxRarity;
    maxInput.addEventListener('input', () => {
      maxRarity = parseFloat(maxInput.value) || 9.99;
    });
  }
});
