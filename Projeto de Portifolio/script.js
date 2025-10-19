const form = document.getElementById('contactForm');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  successMessage.style.display = 'block';
  form.reset();
});
