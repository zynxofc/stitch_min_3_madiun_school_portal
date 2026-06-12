/* ============================================
   MIN 3 MADIUN — Portal Scripts
   Parallax · Particles · Clock · Scroll FX
   ============================================ */

(function () {
  'use strict';

  // ---------- Digital Clock ----------
  function initClock() {
    const dateEl = document.getElementById('clock-date');
    const timeEl = document.getElementById('clock-time');
    if (!dateEl || !timeEl) return;

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    function update() {
      const now = new Date();
      const day = days[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');

      dateEl.textContent = `${day}, ${date} ${month} ${year}`;
      timeEl.textContent = `${h}:${m}:${s}`;
    }

    update();
    setInterval(update, 1000);
  }

  // ---------- Parallax Background ----------
  function initParallax() {
    const bg = document.getElementById('parallax-bg');
    if (!bg) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const scrollY = window.scrollY;
          bg.style.transform = 'scale(1.08) translateY(' + (scrollY * 0.25) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }

    // Initial scale
    bg.style.transform = 'scale(1.08)';
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Particles ----------
  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.3 + 0.05;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
    }

    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;
      this.pulse += this.pulseSpeed;

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    };

    Particle.prototype.draw = function () {
      var currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(141, 247, 193, ' + currentOpacity + ')';
      ctx.fill();
    };

    function createParticles() {
      var count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 60);
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    // Debounced resize
    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        resize();
        createParticles();
      }, 200);
    });
  }

  // ---------- Scroll-triggered Animations ----------
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ---------- Card ripple / touch feedback ----------
  function initCardInteractions() {
    var cards = document.querySelectorAll('.portal-card');
    cards.forEach(function (card) {
      // Add focus outline for keyboard navigation
      card.addEventListener('focus', function () {
        card.style.outline = '2px solid rgba(141, 247, 193, 0.6)';
        card.style.outlineOffset = '3px';
      });
      card.addEventListener('blur', function () {
        card.style.outline = 'none';
      });
    });
  }

  // ---------- Init on DOM Ready ----------
  document.addEventListener('DOMContentLoaded', function () {
    initClock();
    initParallax();
    initParticles();
    initScrollAnimations();
    initCardInteractions();
  });

})();
