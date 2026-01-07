(function () {
  const STORAGE_KEY = 'caffettino_lang';

  function setLang(lang) {
    const safe = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dataset.lang = safe;
    document.documentElement.setAttribute('lang', safe);
    document.documentElement.setAttribute('dir', safe === 'ar' ? 'rtl' : 'ltr');
    try {
      localStorage.setItem(STORAGE_KEY, safe);
    } catch (_) {
      // ignore
    }

    const buttons = document.querySelectorAll('[data-set-lang]');
    buttons.forEach((btn) => {
      const isActive = btn.getAttribute('data-set-lang') === safe;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function getInitialLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') return stored;
    } catch (_) {
      // ignore
    }
    return document.documentElement.dataset.lang === 'ar' ? 'ar' : 'en';
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setLang(getInitialLang());

  const langButtons = document.querySelectorAll('[data-set-lang]');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-set-lang') || 'en';
      setLang(lang);
    });
  });

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
