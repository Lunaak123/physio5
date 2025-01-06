// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Add event listener for menu toggle
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
