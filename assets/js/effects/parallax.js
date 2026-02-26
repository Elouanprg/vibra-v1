/* Parallax Effects using GSAP ScrollTrigger */

const initParallax = () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  const { enableParallax } = window.VIBRA.config;

  if (!enableParallax) {
    return;
  }

  // Parallax shapes with data-speed attribute
  const parallaxShapes = document.querySelectorAll('.parallax-shape');

  parallaxShapes.forEach((shape) => {
    const speed = parseFloat(shape.dataset.speed) || 0.5;

    gsap.to(shape, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: shape,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Hero parallax background
  const heroParallaxBg = document.querySelector('.hero-parallax-bg');

  if (heroParallaxBg) {
    gsap.to(heroParallaxBg, {
      y: () => window.innerHeight * 0.4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // General parallax images
  const parallaxImages = document.querySelectorAll('.parallax-image');

  parallaxImages.forEach((image) => {
    const container = image.closest('.parallax-image-container');
    if (!container) return;

    gsap.to(image, {
      y: () => container.offsetHeight * 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Parallax sections
  const parallaxSections = document.querySelectorAll('[data-parallax="true"]');

  parallaxSections.forEach((section) => {
    const speed = parseFloat(section.dataset.parallaxSpeed) || 0.5;

    gsap.to(section, {
      y: () => window.innerHeight * speed * -1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallax);
} else {
  initParallax();
}

export { initParallax };
