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
  "66443371d645925fa6f5c530_w420": {
    name: "Gimmick Puppet Fiendish Knight",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: "4",
    atk: "1800",
    def: "500",
    effect: `If this card is in your hand: You can target 1 "Gimmick Puppet" monster in your GY or 1 monster in your opponent's GY; Special Summon it to its owner's field in Defense Position, but its effects are negated, then Special Summon this card.
||If this card is sent to the GY, except from the hand: You can add it to your hand.
||You can only use each effect of "Gimmick Puppet Fiendish Knight" once per turn, also you cannot Special Summon from the Extra Deck the turn you activate either of this card's effects, except "Gimmick Puppet" monsters.`
  },
  // Add all other cards here with the same structure, using their unique data keys as the object keys
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
  document.querySelectorAll('.gallery img').forEach(img => {
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

      if (card.type.toLowerCase().includes('extra')) {
        // For Extra Deck cards: try to extract summoning condition before first period
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

      // Format effects with numbering and bullets
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

  // Tabs filtering functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.gallery img');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedTab = button.dataset.tab;

      cards.forEach(card => {
        if (selectedTab === 'all') {
          card.style.display = 'block';
        } else {
          card.style.display = (card.dataset.category === selectedTab) ? 'block' : 'none';
        }
      });
    });
  });
});
