/* ===================================================================
   Academic Personal Website — Main JavaScript
   Hekai Bu
   =================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------
     DOM references
     ------------------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var navOverlay = document.getElementById('navOverlay');
  var siteNav = document.getElementById('siteNav');
  var navLinks = document.querySelectorAll('.site-nav a');

  /* -------------------------------------------------------------------
     Mobile navigation toggle
     ------------------------------------------------------------------- */
  function openNav() {
    siteNav.classList.add('open');
    navOverlay.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    siteNav.classList.remove('open');
    navOverlay.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (siteNav.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  /* Close mobile nav when a link is clicked */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (siteNav.classList.contains('open')) {
        closeNav();
      }
    });
  });

  /* -------------------------------------------------------------------
     Active navigation state — Intersection Observer
     ------------------------------------------------------------------- */
  var sections = [];
  var navLinkMap = {};

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var id = href.slice(1);
      var section = document.getElementById(id);
      if (section) {
        sections.push(section);
        navLinkMap[id] = link;
      }
    }
  });

  if (sections.length > 0 && 'IntersectionObserver' in window) {
    var observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var link = navLinkMap[id];
        if (!link) return;

        if (entry.isIntersecting) {
          /* Remove active from all links, add to current */
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* Fallback: set active on click */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');
    });
  });

  /* -------------------------------------------------------------------
     Keyboard: Escape to close mobile nav
     ------------------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && siteNav.classList.contains('open')) {
      closeNav();
    }
  });

})();
