document.addEventListener('DOMContentLoaded', () => {
  // Footer dynamic year and last modified
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

  // Responsive navigation menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
  });

  // Reset menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
      navMenu.classList.remove('open');
      hamburger.textContent = '☰';
    }
  });
});