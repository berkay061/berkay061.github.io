(() => {
  const buttons = [...document.querySelectorAll('[data-lang]')];
  function setLanguage(lang) {
    if (!['tr', 'en'].includes(lang)) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-tr][data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('[data-alt-tr][data-alt-en]').forEach(el => { el.alt = el.getAttribute('data-alt-' + lang); });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    document.title = lang === 'tr' ? 'Project Rune — Her rün, yeni bir yol. | Red Blood' : 'Project Rune — Every rune, a new path. | Red Blood';
    document.querySelector('meta[name="description"]').content = lang === 'tr' ? 'Rünleri yerleştir, altın çizgileri tamamla ve bulmaca adalarını keşfet. Project Rune şimdi Android için Google Play’de.' : 'Place runes, complete golden lines and explore puzzle islands. Project Rune is now on Google Play for Android.';
    try { localStorage.setItem('redblood-language', lang); } catch (_) {}
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  let stored;
  try { stored = localStorage.getItem('redblood-language'); } catch (_) {}
  setLanguage(['tr', 'en'].includes(stored) ? stored : (navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en'));
})();
