// modal.js

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
      modal.style.display = 'block';
      modalName.textContent = img.dataset.name || '';
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';

      const effectText = img.dataset.effect || '';
      const splitEffects = effectText.split('||').map(e => e.trim());

      let summoningCondition = '';
      let effectsList = [];

      if (img.dataset.category === 'extra') {
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
          // Replace bullet points with line breaks + bullet character
          const replaced = effect.replace(/●/g, '<br/>●');
          return `<strong>(${i + 1})</strong> ${replaced}`;
        })
        .join('<br/><br/>');

      // Determine if card is spell or trap
      const isSpellOrTrap = img.dataset.type?.toLowerCase().includes('spell') || img.dataset.type?.toLowerCase().includes('trap');

      // Build the details HTML string
      const detailsHTML = `
        <strong>Type:</strong> ${img.dataset.type || 'N/A'}<br/>
        ${!isSpellOrTrap ? `<strong>Attribute:</strong> ${img.dataset.attribute || 'N/A'}<br/>` : ''}
        ${img.dataset.level && img.dataset.level !== '-' && !isSpellOrTrap ? `<strong>Level:</strong> ${img.dataset.level}<br/>` : ''}
        ${img.dataset.rank && img.dataset.rank !== '-' ? `<strong>Rank:</strong> ${img.dataset.rank}<br/>` : ''}
        ${!isSpellOrTrap ? `<strong>ATK:</strong> ${img.dataset.atk || 'N/A'} | <strong>DEF:</strong> ${img.dataset.def || 'N/A'}<br/><br/>` : ''}
        ${summoningCondition ? `<strong>Summoning Condition:</strong> ${summoningCondition}<br/><br/>` : ''}
        ${formattedEffects}
      `;

      modalDetails.innerHTML = detailsHTML;

      // Reset zoom class in case it was toggled before
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
      // Remove active class from all tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Set clicked tab active
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
