/* VIBRA Event Agency - Main JavaScript */

// Device detection
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isLowEndDevice = navigator.hardwareConcurrency < 4;
const isTouchDevice = 'ontouchstart' in window;

// Global app configuration
window.VIBRA = {
  config: {
    prefersReducedMotion,
    isLowEndDevice,
    isTouchDevice,
    particleCount: isLowEndDevice ? 25 : 50,
    enableParallax: !isTouchDevice && !prefersReducedMotion,
    enableCursorEffects: !isTouchDevice,
    gradientSpeed: isLowEndDevice ? 0.5 : 1
  }
};

// Initialize GSAP
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Lenis Smooth Scroll — disabled (native scroll like apple.com)
let lenis;
// if (typeof Lenis !== 'undefined' && !isTouchDevice) {
//   lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     smooth: true,
//     smoothTouch: false
//   });
//   function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
//   requestAnimationFrame(raf);
//   window.vibraLenis = lenis;
//   if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
//     lenis.on('scroll', ScrollTrigger.update);
//     gsap.ticker.add((time) => { lenis.raf(time * 1000); });
//     gsap.ticker.lagSmoothing(0);
//   }
// }

// Initialize LazyLoad
if (typeof LazyLoad !== 'undefined') {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    threshold: 300,
    callback_loaded: (el) => {
      el.classList.add('loaded');
    }
  });
}

// Stagger animation on scroll
if (typeof IntersectionObserver !== 'undefined') {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stagger-item').forEach((item) => {
    observer.observe(item);
  });
}

// Initialize header navigation (burger menu, dropdowns, etc.)
import './components/header.js';

// Header scroll behavior
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }

  lastScrollTop = scrollTop;
});

// Load page-specific scripts
const loadPageScripts = async () => {
  const currentPage = window.location.pathname;

  if (currentPage === '/' || currentPage.includes('index.html')) {
    // Load home page scripts
    await import('./pages/home.js');
  }
  // Add other page-specific imports as needed
};

// Dark mode toggle
function initDarkMode() {
  document.querySelectorAll('.dark-mode-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('vibra-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('vibra-theme', 'dark');
      }
    });
  });
}

// Apply saved theme immediately (before DOMContentLoaded)
(function() {
  const saved = localStorage.getItem('vibra-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('VIBRA Event Agency - Initialized');

  // Init dark mode
  initDarkMode();

  // Load page scripts
  loadPageScripts();
});

// Export for use in other modules
export { lenis };
