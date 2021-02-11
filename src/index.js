import './style.scss';

(() => {
  const customCursor = document.querySelector('.cursor');

  class Ripple {
    constructor(x,y) {
      this.x = x;
      this.y = y;

      this.create();
    }

    create() {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.top = `${this.y}px`;
      ripple.style.left = `${this.x}px`;

      document.body.append(ripple);

      ripple.addEventListener('animationend', () => ripple.remove());
    }
  }

  window.addEventListener('mousemove', (evt) => {
    customCursor.style.top = `${evt.clientY}px`;
    customCursor.style.left = `${evt.clientX}px`;
  });

  window.addEventListener('mousedown', (evt) => new Ripple(evt.clientX, evt.clientY));
})();
