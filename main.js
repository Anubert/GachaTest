function draw(category) {
  const result = document.getElementById('result');
  result.textContent = `Rolled from ${category}`;
}

function setRarity(min, avg, max) {
  document.getElementById('minRarity').value = min;
  document.getElementById('avgRarity').value = avg;
  document.getElementById('maxRarity').value = max;
}
