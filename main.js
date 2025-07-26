import { traits } from './traits.js';
import { abilities } from './abilities.js';
import { summons } from './summons.js';
import { items } from './items.js';
import { skills } from './skills.js';

const data = { traits, abilities, summons, items, skills };

function getTier(rarity) { return Math.min(9, Math.floor(rarity)); }

window.setTier = function(t) {
  const min = t-1+0.01, max = t-1+0.99, avg=(min+max)/2;
  document.getElementById('minRarity').value=min.toFixed(2);
  document.getElementById('avgRarity').value=avg.toFixed(2);
  document.getElementById('maxRarity').value=max.toFixed(2);
};

function weightedDraw(pool,min,max) {
  const filt=pool.filter(i=>i.rarity>=min&&i.rarity<=max);
  const sum=filt.reduce((s,i)=>s+i.rarity,0);
  let r=Math.random()*sum; return filt.find(i=>(r-=i.rarity)<0);
}

window.draw = function(cat) {
  const min=parseFloat(document.getElementById('minRarity').value);
  const max=parseFloat(document.getElementById('maxRarity').value);
  if(cat==='random'){
    const cats=Object.keys(data);
    cat=cats[Math.floor(Math.random()*cats.length)];
  }
  const pool=data[cat];
  const box=document.getElementById('result');
  box.className='result-box animate'; box.textContent='Rolling...';
  setTimeout(()=>{
    const res=weightedDraw(pool,min,max);
    if(!res){box.className='result-box'; box.textContent='No results!'; return;}
    const tier=getTier(res.rarity);
    box.className=`result-box tier-${tier}`; box.innerHTML=`<h2>${res.name}</h2><p>${res.description}</p><small>Rarity: ${res.rarity.toFixed(2)}</small>`;
  },1000);
};