(() => {
  const descriptions={tr:'Yayını kuşan, kahramanını geliştir ve Pipshot’ın fantastik dünyasında mücadeleye katıl. Şimdi Android için Google Play’de.',en:'Equip your bow, build your hero and explore the fantasy world of Pipshot. Available now on Google Play for Android.'};
  function setLanguage(lang){
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-tr]').forEach(el=>{el.textContent=el.dataset[lang]});
    document.querySelectorAll('[data-alt-tr]').forEach(el=>{el.alt=el.getAttribute('data-alt-'+lang)});
    document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
    document.title=lang==='tr'?'Pipshot — Her atış bir macera.':'Pipshot — Every shot an adventure.';
    document.querySelector('meta[name="description"]').content=descriptions[lang];
    try{localStorage.setItem('redblood-language',lang)}catch(_){}
  }
  document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>setLanguage(el.dataset.lang)));
  let lang;try{lang=localStorage.getItem('redblood-language')}catch(_){}
  setLanguage(['tr','en'].includes(lang)?lang:(navigator.language.toLowerCase().startsWith('tr')?'tr':'en'));
})();
