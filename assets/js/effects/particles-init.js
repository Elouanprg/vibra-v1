/* Particles.js Initialization */

const initParticles = () => {
  if (typeof particlesJS === 'undefined') {
    console.warn('Particles.js not loaded');
    return;
  }

  const { prefersReducedMotion, isLowEndDevice, particleCount } = window.VIBRA.config;

  // Don't initialize particles if user prefers reduced motion
  if (prefersReducedMotion) {
    const particlesElement = document.getElementById('particles-js');
    if (particlesElement) {
      particlesElement.style.display = 'none';
    }
    return;
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: particleCount,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: isLowEndDevice ? 0.5 : 1,
        direction: 'top',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: !isLowEndDevice,
          mode: 'bubble'
        },
        onclick: {
          enable: false
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 200,
          size: 6,
          duration: 2,
          opacity: 0.5,
          speed: 3
        }
      }
    },
    retina_detect: true
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParticles);
} else {
  initParticles();
}

export { initParticles };
