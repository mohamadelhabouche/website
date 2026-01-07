(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.contains('is-open');
    if (isOpen) closeNav();
    else openNav();
  });

  nav.addEventListener('click', function (e) {
    const target = e.target;
    if (target && target.tagName === 'A') closeNav();
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
