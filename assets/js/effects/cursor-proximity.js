/* Cursor Proximity Effects */

const initCursorProximity = () => {
  const { enableCursorEffects, prefersReducedMotion } = window.VIBRA.config;

  if (!enableCursorEffects || prefersReducedMotion) {
    return;
  }

  const proximityCards = document.querySelectorAll('.proximity-card, .service-card');

  proximityCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS custom properties for radial gradient
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      // Reset to center
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });

  // Custom cursor (optional - creates a glowing cursor effect)
  const createCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid var(--orange-primary);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.2s ease;
      mix-blend-mode: difference;
      display: none;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: var(--orange-primary);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      display: none;
    `;
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.display = 'block';
      cursorDot.style.left = mouseX - 2 + 'px';
      cursorDot.style.top = mouseY - 2 + 'px';
    });

    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.1;
      cursorY += dy * 0.1;

      cursor.style.display = 'block';
      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Scale cursor on interactive element hover
    const interactiveElements = document.querySelectorAll('a, button, .card, .btn');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
      });
    });
  };

  // Uncomment to enable custom cursor
  // createCustomCursor();
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCursorProximity);
} else {
  initCursorProximity();
}

export { initCursorProximity };
