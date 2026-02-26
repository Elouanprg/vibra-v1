/* Micro-interactions - Button Glow, Card Lift, etc. */

const initMicroInteractions = () => {
  // No special initialization needed - most effects are CSS-based
  // This file handles dynamic micro-interactions that need JavaScript

  const { prefersReducedMotion } = window.VIBRA.config;

  if (prefersReducedMotion) {
    return;
  }

  // Magnetic button effect - DISABLED per user request
  // const magneticButtons = document.querySelectorAll('.btn-primary, .cta-card');

  // magneticButtons.forEach((button) => {
  //   button.addEventListener('mousemove', (e) => {
  //     const rect = button.getBoundingClientRect();
  //     const x = e.clientX - rect.left - rect.width / 2;
  //     const y = e.clientY - rect.top - rect.height / 2;

  //     const moveX = x * 0.1;
  //     const moveY = y * 0.1;

  //     if (typeof gsap !== 'undefined') {
  //       gsap.to(button, {
  //         x: moveX,
  //         y: moveY,
  //         duration: 0.3,
  //         ease: 'power2.out'
  //       });
  //     }
  //   });

  //   button.addEventListener('mouseleave', () => {
  //     if (typeof gsap !== 'undefined') {
  //       gsap.to(button, {
  //         x: 0,
  //         y: 0,
  //         duration: 0.5,
  //         ease: 'elastic.out(1, 0.5)'
  //       });
  //     }
  //   });
  // });

  // Add ripple effect on button click
  const rippleButtons = document.querySelectorAll('.btn');

  rippleButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple-effect');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add CSS for ripple effect dynamically
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }
      @keyframes ripple-animation {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Tilt effect on cards (3D-like rotation on hover)
  const tiltCards = document.querySelectorAll('.card, .cta-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -5; // Max 5 degrees
      const rotateY = (x - centerX) / centerX * 5;

      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
          transformOrigin: 'center'
        });
      }
    });

    card.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });
  });

  // Smooth reveal on scroll for fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    if (el.classList.contains('fade-in-up')) {
      el.style.transform = 'translateY(20px)';
    }
    revealObserver.observe(el);
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMicroInteractions);
} else {
  initMicroInteractions();
}

export { initMicroInteractions };
