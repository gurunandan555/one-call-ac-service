document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll get back to you soon.');
  e.target.reset();
});

