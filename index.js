const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Get Your Qoute Today  ${card.querySelector('h2').textContent}`);
    });
});