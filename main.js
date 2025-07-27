const hoverSound = new Audio("asset/audio/hover_rare.mp3");
const clickSound = new Audio("asset/audio/click.mp3");
const clickRareSound = new Audio("asset/audio/click_rare.mp3");
const trashSound = new Audio("asset/audio/trash.mp3");
const winSound = new Audio("asset/audio/win.mp3");
const winRareSound = new Audio("asset/audio/win_rare.mp3");

document.querySelectorAll(".tier-button").forEach(button => {
  button.addEventListener("mouseenter", () => {
    const tier = button.dataset.tier;
    if (["mythril", "legendary", "mythical"].includes(tier)) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });

  button.addEventListener("click", () => {
    const tier = button.dataset.tier;
    if (["mythril", "legendary", "mythical"].includes(tier)) {
      clickRareSound.currentTime = 0;
      clickRareSound.play();
    } else {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });
});

function draw(category) {
  const min = parseFloat(document.getElementById("minRarity").value) || 0.01;
  const avg = parseFloat(document.getElementById("avgRarity").value) || 5.0;
  const max = parseFloat(document.getElementById("maxRarity").value) || 9.99;
  const rarity = Math.random() * (max - min) + min;
  const resultEl = document.getElementById("result");

  let resultText = "";
  let sound = winSound;

  if (rarity < 1) {
    resultText = "Trash Item!";
    sound = trashSound;
  } else if (rarity >= 7) {
    resultText = "Mythical Item!";
    sound = winRareSound;
  } else {
    resultText = "Standard Item!";
  }

  resultEl.textContent = resultText;
  resultEl.classList.add("shake");

  sound.currentTime = 0;
  sound.play();

  setTimeout(() => resultEl.classList.remove("shake"), 500);
}

function setTier(tier) {
  const values = {
    trash: [0.01, 0.25, 0.99],
    bronze: [1.0, 1.5, 1.99],
    silver: [2.0, 2.5, 2.99],
    gold: [3.0, 3.5, 3.99],
    platinum: [4.0, 4.5, 4.99],
    diamond: [5.0, 5.5, 5.99],
    mythril: [6.0, 6.5, 6.99],
    legendary: [7.0, 7.5, 7.99],
    mythical: [8.0, 9.0, 9.99]
  };

  const [min, avg, max] = values[tier];
  document.getElementById("minRarity").value = min;
  document.getElementById("avgRarity").value = avg;
  document.getElementById("maxRarity").value = max;
}