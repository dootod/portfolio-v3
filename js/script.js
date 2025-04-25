document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  // Menu hamburger
  mobileMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navbarMenu.classList.toggle('active');
      document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : 'auto';
  });
  
  // Fermer le menu au clic sur un lien
  document.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
              mobileMenu.classList.remove('active');
              navbarMenu.classList.remove('active');
              document.body.style.overflow = 'auto';
          }
          
          // Retirer active de tous les liens
          document.querySelectorAll('.navbar-link').forEach(el => {
              el.classList.remove('active');
          });
          
          // Ajouter active au lien cliqué
          e.currentTarget.classList.add('active');
      });
  });
  
  // Effet au scroll
  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      const scrollY = window.scrollY;
      
      if (scrollY > 20) {
          navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
          navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
          navbar.style.borderBottomColor = 'rgba(103, 138, 188, 0.5)';
      } else {
          navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
          navbar.style.boxShadow = 'none';
          navbar.style.borderBottomColor = 'rgba(103, 138, 188, 0.3)';
      }
  });
});