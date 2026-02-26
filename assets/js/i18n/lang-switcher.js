/**
 * VIBRA - Language Switcher
 * Persists language choice in localStorage across all pages.
 */
(function () {
  var STORAGE_KEY = 'vibra-lang';
  var DEFAULT_LANG = 'fr';

  // Get saved language or default
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  // Save language
  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Get translation value for a key
  function t(key, lang) {
    var T = window.VIBRA_TRANSLATIONS;
    if (!T) return null;
    // Search through all sections
    var sections = Object.keys(T);
    for (var i = 0; i < sections.length; i++) {
      var section = T[sections[i]];
      if (section[key]) {
        return section[key][lang] || null;
      }
    }
    return null;
  }

  // Apply translations to the entire page
  function applyLang(lang) {
    // 1. Text content: data-i18n
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key, lang);
      if (val !== null) el.textContent = val;
    });

    // 2. HTML content: data-i18n-html (for elements with <br> etc.)
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    htmlEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = t(key, lang);
      if (val !== null) el.innerHTML = val;
    });

    // 3. Placeholders: data-i18n-ph
    var phEls = document.querySelectorAll('[data-i18n-ph]');
    phEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      var val = t(key, lang);
      if (val !== null) el.placeholder = val;
    });

    // 4. Update html lang attribute
    document.documentElement.lang = lang;

    // 5. Update active state on language buttons
    var btns = document.querySelectorAll('.lang-btn');
    btns.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Initialize: apply saved language + bind buttons
  function init() {
    var lang = getLang();
    applyLang(lang);

    // Bind all language buttons (desktop + mobile)
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var newLang = this.getAttribute('data-lang');
        setLang(newLang);
        applyLang(newLang);
      });
    });
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.VIBRA_switchLang = function (lang) {
    setLang(lang);
    applyLang(lang);
  };
})();
