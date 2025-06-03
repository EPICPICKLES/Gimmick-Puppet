// modal.js

const cardData = [
  {
    name: "Gimmick Puppet Little Soldiers",
    category: "monster",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: 4,
    atk: 0,
    def: 0,
    effect: "If this card is Normal or Special Summoned: You can send 1 \"Gimmick Puppet\" monster with a different Level than this card from your Deck to the GY; this card's Level becomes that monster's. You can only use this effect of \"Gimmick Puppet Little Soldiers\" once per turn. ||You can banish this card from your GY, then target up to 2 \"Gimmick Puppet\" monsters you control; increase their Levels by 4 until the end of this turn.",
    imgSrc: "https://s3.duellinksmeta.com/cards/65f321124e67b487ab0883a7_w420.webp",
    alt: "Gimmick Puppet Little Soldiers"
  },
  {
    name: "Gimmick Puppet Fiendish Knight",
    category: "monster",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: 4,
    atk: 1800,
    def: 500,
    effect: "If this card is in your hand: You can target 1 \"Gimmick Puppet\" monster in your GY or 1 monster in your opponent's GY; Special Summon it to its owner's field in Defense Position, but its effects are negated, then Special Summon this card. ||If this card is sent to the GY, except from the hand: You can add it to your hand. ||You can only use each effect of \"Gimmick Puppet Fiendish Knight\" once per turn, also you cannot Special Summon from the Extra Deck the turn you activate either of this card's effects, except \"Gimmick Puppet\" monsters.",
    imgSrc: "https://s3.duellinksmeta.com/cards/66443371d645925fa6f5c530_w420.webp",
    alt: "Gimmick Puppet Fiendish Knight"
  },
  {
    name: "Gimmick Puppet Terror Baby",
    category: "monster",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: 4,
    atk: 500,
    def: 0,
    effect: "When this card is Normal Summoned: You can target 1 \"Gimmick Puppet\" monster in your GY, except \"Gimmick Puppet Terror Baby\"; Special Summon it in Defense Position. ||You can banish this card from your GY; your opponent cannot activate cards or effects in response to the activation of your \"Gimmick Puppet\" monster effects this turn.",
    imgSrc: "https://s3.duellinksmeta.com/cards/60c2b3aba0e24f2d54a523d9_w420.webp",
    alt: "Gimmick Puppet Terror Baby"
  },
  {
    name: "Gimmick Puppet Rouge Doll",
    category: "monster",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: 8,
    atk: 400,
    def: 1400,
    effect: "If this card is in your hand: You can reveal 1 \"Gimmick Puppet\" Xyz Monster in your Extra Deck; Special Summon both this card, and 1 \"Gimmick Puppet\" monster with the same Level as the revealed monster's Rank from your Deck. ||If this card is sent to the GY, except from the hand: You can add this card to your hand. ||You can only use each effect of \"Gimmick Puppet Rouge Doll\" once per turn. You cannot Special Summon from the Extra Deck the turn you activate either of this card's effects, except \"Gimmick Puppet\" monsters.",
    imgSrc: "https://s3.duellinksmeta.com/cards/65f3212e4e67b487ab0885b3_w420.webp",
    alt: "Gimmick Puppet Rouge Doll"
  },
  {
    name: "Gimmick Puppet Cattle Scream",
    category: "monster",
    type: "Machine / Effect Monster",
    attribute: "DARK",
    level: 8,
    atk: 2000,
    def: 2000,
    effect: "You can detach 1 material from an Xyz Monster you control; Special Summon this card from your hand or GY, but banish it when it leaves the field. You can only use this effect of \"Gimmick Puppet Cattle Scream\" once per turn. ||A \"Gimmick Puppet\" Xyz Monster that has this card as material gains this effect.\n\n● Once per turn: You can target 1 monster in your opponent's GY; Special Summon it to your opponent's field in Defense Position.",
    imgSrc: "https://s3.duellinksmeta.com/cards/65f3214d4e67b487ab0887c0_w420.webp",
    alt: "Gimmick Puppet Cattle Scream"
  },
  {
    name: "Gimmick Puppet Fantasix Machinix",
    category: "extra",
    type: "Machine / Xyz / Effect Monster",
    attribute: "DARK",
    rank: 8,
    atk: 1500,
    def: 3100,
    effect: "2 Level 8 monsters. You can detach 1 material from this card; add 1 \"Rank-Up-Magic\" Spell from your Deck to your hand, also, you can Normal Summon 1 Machine monster during your Main Phase this turn, in addition to your Normal Summon/Set. (You can only gain this effect once per turn.) ||If you Special Summon a \"Gimmick Puppet\" Xyz Monster(s) (except during the Damage Step): You can Special Summon this card from your GY to either field in Defense Position, then you can add 1 \"Rank-Up-Magic\" Spell from your GY to your hand. ||You can only use each effect of \"Gimmick Puppet Fantasix Machinix\" once per turn.",
    imgSrc: "https://s3.duellinksmeta.com/cards/65f3216e4e67b487ab08898c_w420.webp",
    alt: "Gimmick Puppet Fantasix Machinix"
  },
  {
    name: "Condolence Puppet",
    category: "spell",
    type: "Spell Card",
    attribute: "N/A",
    level: "N/A",
    atk: "N/A",
    def: "N/A",
    effect: "Send \"Gimmick Puppet\" monsters with different names from your Deck to the GY, up to the number of monsters your opponent controls that were Special Summoned from the Extra Deck +1. ||You can banish this card from your GY, then target 1 Machine Xyz Monster you control; it cannot be destroyed by your opponent's card effects while face-up on the field. ||You can only use each effect of \"Condolence Puppet\" once per turn.",
    imgSrc: "https://s3.duellinksmeta.com/cards/60c2b3aaa0e24f2d54a519e3_w420.webp",
    alt: "Condolence Puppet"
  },
  {
    name: "Service Puppet Play",
    category: "trap",
    type: "Trap Card",
    attribute: "N/A",
    level: "N/A",
    atk: "N/A",
    def: "N/A",
    effect: "Target monsters your opponent controls, up to the number of \"Gimmick Puppet\" Xyz Monsters you control; take control of those monsters until the End Phase. ||If this card is in your GY, except the turn it was sent there, and you control a \"Gimmick Puppet\" Xyz Monster: You can banish this card, then target 1 Xyz Monster in either GY; Special Summon it to either field in Defense Position. ||You can only use each effect of \"Service Puppet Play\" once per turn.",
    imgSrc: "https://s3.duellinksmeta.com/cards/65f321b64e67b487ab088de1_w420.webp",
    alt: "Service Puppet Play"
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
    const cardName = img.dataset.name;
    const card = cardData.find(c => c.name === cardName);

    if (!card) {
      console.error("Card data missing for name:", cardName);
      return;
    }

    modal.style.display = 'block';
    modalName.textContent = card.name;
    modalImg.src = img.src;
    modalImg.alt = card.name;

    // (keep the rest of your code unchanged)
  });
});

    const effectText = card.effect || '';
    const splitEffects = effectText.split('||').map(e => e.trim());

    let summoningCondition = '';
    let effectsList = [];

    if (card.type.toLowerCase().includes('xyz') || card.type.toLowerCase().includes('fusion') || card.type.toLowerCase().includes('synchro') || card.type.toLowerCase().includes('link')) {
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
