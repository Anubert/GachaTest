import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

window.setTier = (min,max) => {
  document.getElementById('minRarity').value = min.toFixed(2);
  document.getElementById('maxRarity').value = max.toFixed(2);
};

function weightedDraw(arr, min, max) {
  const pool = arr.filter(i=>i.rarity>=min && i.rarity<=max);
  const total = pool.reduce((s,i)=>s+i.rarity,0);
  let r=Math.random()*total; return pool.find(i=>(r-=i.rarity)<0);
}

window.draw = (cat) => {
  if(cat==='random'){
    const keys=Object.keys(data);
    cat=keys[Math.floor(Math.random()*keys.length)];
  }
  const arr=data[cat];
  const min=parseFloat(document.getElementById('minRarity').value);
  const max=parseFloat(document.getElementById('maxRarity').value);
  const resBox=document.getElementById('result');
  resBox.classList.add('flip');
  setTimeout(()=>{
    const result=weightedDraw(arr,min,max);
    resBox.classList.remove('flip');
    if(!result){resBox.textContent='No results';return;}
    resBox.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p>`;
  },800);
};
