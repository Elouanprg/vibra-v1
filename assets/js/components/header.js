/* Header Navigation Component */

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav-mobile');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.body;

// Mobile menu toggle
if (menuToggle && mobileMenu && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');

    if (!isOpen) {
      // Open menu
      mobileMenu.classList.add('open');
      menuOverlay.classList.add('visible');
      menuToggle.classList.add('active');
      body.style.overflow = 'hidden';

      // Animate menu items
      if (typeof gsap !== 'undefined') {
        gsap.from('.nav-mobile .nav-link', {
          x: -50,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out'
        });
      }
    } else {
      // Close menu
      mobileMenu.classList.remove('open');
      menuOverlay.classList.remove('visible');
      menuToggle.classList.remove('active');
      body.style.overflow = '';
    }

    // Update ARIA attribute
    menuToggle.setAttribute('aria-expanded', !isOpen);
  });

  // Close menu when clicking overlay
  menuOverlay.addEventListener('click', () => {
    menuToggle.click();
  });

  // Close menu when clicking anywhere outside the menu panel and toggle button
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove('open');
      menuOverlay.classList.remove('visible');
      menuToggle.classList.remove('active');
      body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking a link
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Don't close if it's a dropdown toggle
      if (!link.classList.contains('dropdown-toggle')) {
        menuToggle.click();
      }
    });
  });
}

// Dropdown functionality for mobile
const mobileDropdowns = document.querySelectorAll('.nav-mobile .dropdown-toggle');
mobileDropdowns.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = toggle.closest('.dropdown');
    dropdown.classList.toggle('active');
  });
});

// Desktop dropdown hover (already handled by CSS, but add ARIA support)
const desktopDropdowns = document.querySelectorAll('.nav-desktop .dropdown');
desktopDropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');

  dropdown.addEventListener('mouseenter', () => {
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Close mobile menu on ESC
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    menuToggle.click();
  }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
      menuToggle.click();
    }
  }, 250);
});

// Export for use in other modules
export { menuToggle, mobileMenu };
