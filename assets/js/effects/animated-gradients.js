/* Animated Gradients */

const initGradients = () => {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded');
    return;
  }

  const { prefersReducedMotion, gradientSpeed } = window.VIBRA.config;

  if (prefersReducedMotion) {
    return;
  }

  // Animate gradient backgrounds
  const gradientElements = document.querySelectorAll('.gradient-bg');

  gradientElements.forEach((element) => {
    // Animate background position for smooth gradient movement
    gsap.to(element, {
      backgroundPosition: '200% 200%',
      duration: 10 / gradientSpeed,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  // Animate gradient text
  const gradientTextElements = document.querySelectorAll('.gradient-text');

  gradientTextElements.forEach((element) => {
    gsap.to(element, {
      backgroundPosition: '200% center',
      duration: 8 / gradientSpeed,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  // Animate gradient shapes
  const gradientShapes = document.querySelectorAll('.gradient-shape');

  gradientShapes.forEach((shape, index) => {
    // Floating animation
    gsap.to(shape, {
      y: '+=30',
      duration: 4 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.5
    });

    // Subtle rotation
    gsap.to(shape, {
      rotation: 360,
      duration: 20 + index * 5,
      repeat: -1,
      ease: 'none'
    });

    // Opacity pulse
    gsap.to(shape, {
      opacity: 0.5,
      duration: 3 + index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGradients);
} else {
  initGradients();
}

export { initGradients };
