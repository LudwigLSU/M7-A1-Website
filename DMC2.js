
const characterCards = document.querySelectorAll('.character-card');
const detailsBox = document.getElementById('character-details');
const nameEl = document.getElementById('character-name');
const descriptionEl = document.getElementById('character-description');

characterCards.forEach((card) => {
  card.addEventListener('click', () => {
    characterCards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');

    const name = card.dataset.name;
    const description = card.dataset.description;

    nameEl.textContent = name;
    descriptionEl.textContent = description;
    detailsBox.classList.add('is-visible');
  });
});