// Get the hamburger icon and the mobile menu (card menu)
const hamburger = document.getElementById('hamburger');
const cardMenu = document.getElementById('card-menu');

// Toggle the card sliding menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    cardMenu.classList.toggle('open');
});