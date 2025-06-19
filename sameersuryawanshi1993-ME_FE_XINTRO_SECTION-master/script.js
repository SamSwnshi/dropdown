// Dropdown toggling for desktop and mobile
function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
}

document.querySelectorAll('.dropdown > .nav-link').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const parent = this.parentElement;
    const isOpen = parent.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
      parent.classList.add('open');
    }
  });
});

document.body.addEventListener('click', closeAllDropdowns);

// Mobile menu toggling
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
}
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  closeAllDropdowns();
}
if (openMenuBtn) openMenuBtn.addEventListener('click', openMobileMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
if (overlay) overlay.addEventListener('click', closeMobileMenu);

// Prevent dropdown click in mobile menu from closing menu
mobileMenu && mobileMenu.addEventListener('click', function(e) {
  e.stopPropagation();
}); 