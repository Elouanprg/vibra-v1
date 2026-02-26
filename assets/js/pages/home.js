/* Home Page Specific JavaScript */

// Import effects
import '../components/header.js';
import '../effects/particles-init.js';
import '../effects/animated-gradients.js';
import '../effects/parallax.js';
import '../effects/micro-interactions.js';
import '../effects/cursor-proximity.js';

const initHomePage = () => {
  console.log('Home page initialized');

  // Hero content animations
  if (typeof gsap !== 'undefined' && !window.VIBRA.config.prefersReducedMotion) {
    // Animate hero content
    gsap.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });

    gsap.from('.primary-ctas .cta-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.7,
      ease: 'power3.out'
    });

    gsap.from('.scroll-indicator', {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: 'power2.out'
    });
  }

  // Trust bar scroll animation
  if (typeof ScrollTrigger !== 'undefined' && !window.VIBRA.config.prefersReducedMotion) {
    gsap.from('.client-logo', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.trust-bar',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
      }
    });
  }

  // Services grid animation
  if (typeof ScrollTrigger !== 'undefined' && !window.VIBRA.config.prefersReducedMotion) {
    gsap.from('.services-grid .service-card', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
      }
    });
  }

  // Rating cards animation
  if (typeof ScrollTrigger !== 'undefined' && !window.VIBRA.config.prefersReducedMotion) {
    gsap.from('.rating-card', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.ratings-grid',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none'
      }
    });

    // Animate rating numbers
    const ratingScores = document.querySelectorAll('.rating-score');
    ratingScores.forEach((score) => {
      ScrollTrigger.create({
        trigger: score,
        start: 'top 80%',
        onEnter: () => {
          const targetValue = parseFloat(score.textContent);
          gsap.from(score, {
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 0.1 },
            onUpdate: function() {
              score.textContent = this.targets()[0].textContent;
            }
          });
        },
        once: true
      });
    });
  }

  // Grid shimmer effect
  const gridPattern = document.querySelector('.grid-pattern');
  if (gridPattern && typeof gsap !== 'undefined' && !window.VIBRA.config.prefersReducedMotion) {
    gsap.to(gridPattern, {
      opacity: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  // Add proximity class to service cards for cursor effects
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('proximity-card');
  });

  // Smooth scroll to sections — uses Lenis if available, else custom fallback
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;

        // Use Lenis scrollTo for smooth, non-conflicting animation
        if (window.vibraLenis) {
          window.vibraLenis.scrollTo(target, {
            offset: -headerHeight,
            duration: 1.8
          });
        } else {
          // Fallback: custom easeInOutCubic scroll
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1800;
          let startTime = null;

          function easeInOutCubic(t) {
            return t < 0.5
              ? 4 * t * t * t
              : 1 - Math.pow(-2 * t + 2, 3) / 2;
          }

          function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (progress < 1) {
              requestAnimationFrame(animation);
            }
          }

          requestAnimationFrame(animation);
        }
      }
    });
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}

export { initHomePage };
