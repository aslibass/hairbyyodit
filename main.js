/* =========================================================
   Hair by Yodit — main.js
   - The signature web moment: services table price reveal.
     When the services section enters viewport, each row
     animates in sequence: name fades up, then price slides
     in from the right with a Rose underline.
   - Generic reveal-on-scroll for headings + leads.
   - Hero load stagger.
   - Respects prefers-reduced-motion.
   ========================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Generic reveal for headings + leads.
  const revealTargets = document.querySelectorAll('main h1, main h2, main .lead');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if (prefersReducedMotion) {
    revealTargets.forEach(function (el) { el.classList.add('is-revealed'); });
    document.querySelectorAll('.srv-name, .srv-desc, .srv-price').forEach(function (el) {
      el.classList.remove('pre-reveal');
      el.classList.add('is-revealed');
    });
    return;
  }

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  revealTargets.forEach(function (el) { revealObserver.observe(el); });

  // Hero stagger on load.
  window.addEventListener('load', function () {
    const heroHeading = document.querySelector('.hero h1');
    const heroLead = document.querySelector('.hero .lead');
    const heroCTA = document.querySelector('.hero .cta-primary');
    const heroAnchor = document.querySelector('.hero .hero-anchor');
    if (heroHeading) heroHeading.classList.add('is-revealed');
    setTimeout(function () { if (heroLead) heroLead.classList.add('is-revealed'); }, 200);
    setTimeout(function () { if (heroCTA) heroCTA.classList.add('is-revealed'); }, 400);
    setTimeout(function () { if (heroAnchor) heroAnchor.classList.add('is-revealed'); }, 550);
  });

  // The signature web moment: services table price reveal.
  const servicesSection = document.querySelector('.services');
  if (servicesSection) {
    // Pre-set every row cell to entry state.
    const rows = servicesSection.querySelectorAll('.services-table tr');
    rows.forEach(function (row) {
      row.querySelectorAll('.srv-name, .srv-desc, .srv-price').forEach(function (cell) {
        cell.classList.add('pre-reveal');
      });
    });

    const servicesObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          rows.forEach(function (row, i) {
            const stagger = i * 80;
            setTimeout(function () {
              row.querySelectorAll('.srv-name, .srv-desc, .srv-price').forEach(function (cell) {
                cell.classList.remove('pre-reveal');
                cell.classList.add('is-revealed');
              });
            }, stagger);
          });
          servicesObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    servicesObserver.observe(servicesSection);
  }
})();
