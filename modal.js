// modal.js

const cardData = {
  "65f321124e67b487ab0883a7_w420": {
    name: "Gimmick Puppet Little Soldiers",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: "4",
    atk: "0",
    def: "0",
    effect: `If this card is Normal or Special Summoned: You can send 1 "Gimmick Puppet" monster with a different Level than this card from your Deck to the GY; this card's Level becomes that monster's. You can only use this effect of "Gimmick Puppet Little Soldiers" once per turn.
||You can banish this card from your GY, then target up to 2 "Gimmick Puppet" monsters you control; increase their Levels by 4 until the end of this turn.`
  },
  "65f3214d4e67b487ab0887c0_w420": {
    name: "Gimmick Puppet Cattle Scream",
    type: "Spell Card",
    effect: `Activate by targeting 1 "Gimmick Puppet" monster you control; Special Summon up to 2 "Gimmick Puppet" monsters from your hand whose total Levels are less than or equal to the targeted monster's Level, but their effects are negated, also you cannot Special Summon monsters, except "Gimmick Puppet" monsters, for the rest of this turn.
||You can only activate 1 "Gimmick Puppet Cattle Scream" per turn.`
  },
  "65f3216e4e67b487ab08898c_w420": {
    name: "Gimmick Puppet Fantasix Machinix",
    type: "Machine / XYZ Monster",
    attribute: "DARK",
    rank: "8",
    atk: "3000",
    def: "2000",
    effect: `2 Level 8 "Gimmick Puppet" monsters
||When your opponent activates a monster effect (Quick Effect): You can detach 1 material from this card; destroy that opponent's monster.
||You can only use this effect of "Gimmick Puppet Fantasix Machinix" once per turn.`
  }
  // Add more cards here!
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cardModal');
  const modalName = document.getElementById('modalName');
  const modalImg = document.getElementById('modalImg');
  const modalDetails = document.getElementById('modalDetails');
  const modalClose = document.getElementById('modalClose');

  // Close modal on close button click
  modalClose.onclick = () => {
    modal.style.display = 'none';
    modalImg.classList.remove('zoomed'); // Reset zoom
  };

  // Close modal on clicking outside modal content
  window.onclick = event => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalImg.classList.remove('zoomed');
    }
  };

  // Open modal and populate data on card click
  document.querySelectorAll('.images img').forEach(img => {
    img.addEventListener('click', () => {
      const key = img.dataset.key;
      const card = cardData[key];

      if (!card) {
        console.error("Card data missing for key:", key);
        return;
      }

      modal.style.display = 'block';
      modalName.textContent = card.name;
      modalImg.src = img.src;
      modalImg.alt = card.name;

      const effectText = card.effect || '';
      const splitEffects = effectText.split('||').map(e => e.trim());

      let summoningCondition = '';
      let effectsList = [];

      if (card.type.toLowerCase().includes('xyz') || card.type.toLowerCase().includes('fusion') || card.type.toLowerCase().includes('synchro') || card.type.toLowerCase().includes('link')) {
        // For Extra Deck cards, extract summoning condition from first effect
        const firstPart = splitEffects[0] || '';
        const firstPeriodIndex = firstPart.indexOf('.');
        if (firstPeriodIndex !== -1) {
          summoningCondition = firstPart.slice(0, firstPeriodIndex).trim();
          const restEffect = firstPart.slice(firstPeriodIndex + 1).trim();
          if (restEffect) effectsList.push(restEffect);
        } else {
          effectsList.push(firstPart);
        }
        effectsList = effectsList.concat(splitEffects.slice(1));
      } else {
        effectsList = splitEffects;
      }

      // Format effects
      const formattedEffects = effectsList
        .filter(e => e.length > 0)
        .map((effect, i) => {
          const replaced = effect.replace(/●/g, '<br/>●');
          return `<strong>(${i + 1})</strong> ${replaced}`;
        })
        .join('<br/><br/>');

      const isSpellOrTrap = card.type.toLowerCase().includes('spell') || card.type.toLowerCase().includes('trap');

      const detailsHTML = `
        <strong>Type:</strong> ${card.type || 'N/A'}<br/>
        ${!isSpellOrTrap ? `<strong>Attribute:</strong> ${card.attribute || 'N/A'}<br/>` : ''}
        ${card.level && card.level !== '-' && !isSpellOrTrap ? `<strong>Level:</strong> ${card.level}<br/>` : ''}
        ${card.rank && card.rank !== '-' ? `<strong>Rank:</strong> ${card.rank}<br/>` : ''}
        ${!isSpellOrTrap ? `<strong>ATK:</strong> ${card.atk || 'N/A'} | <strong>DEF:</strong> ${card.def || 'N/A'}<br/><br/>` : ''}
        ${summoningCondition ? `<strong>Summoning Condition:</strong> ${summoningCondition}<br/><br/>` : ''}
        ${formattedEffects}
      `;

      modalDetails.innerHTML = detailsHTML;
      modalImg.classList.remove('zoomed');
    });
  });

  // Image zoom toggle on modal image click
  modalImg.addEventListener('click', () => {
    modalImg.classList.toggle('zoomed');
  });
});
