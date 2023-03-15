
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('button[aria-label="Toggle menu"]');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

