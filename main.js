/* Language switch (EN/RU) — the only script on the site.
   EN text lives in index.html; RU equivalents live here.
   The switch button label always shows the language you would switch TO. */
(function () {
  'use strict';

  var STRINGS = {
    en: {
      docTitle: 'Zemfira Nurgaleeva — UX/UI Designer',
      docDescription:
        'Portfolio of Zemfira Nurgaleeva, a UX/UI designer focused on design systems and complex digital products.',
      displayTitle: 'Zemfira Nurgaleeva',
      role: 'designer',
      svc1: 'Product UX & UI Design',
      svc2: 'Complex B2B & SaaS Interfaces',
      svc3: 'User Flows & Information Architecture',
      svc4: 'Design Systems & UI Libraries',
      svc5: 'Prototyping & Interaction Design',
      aboutMe: 'About me',
      contactMe: 'Contact me',
      projectsTitle: 'My projects',
      card1Title: 'Public library service',
      card1Desc: 'I design systems, not just screens — from research to scalable UI',
      card1Alt: 'Public library service project preview',
      card2Title: 'Public library service',
      card2Desc: 'I design systems, not just screens — from research to scalable UI',
      card2Alt: 'Public library service project preview',
      heroMediaAria: 'Showreel',
      copyright: '© 2026 Zemfira Nurgaleeva'
    },
    ru: {
      docTitle: 'Земфира Нургалеева — UX/UI-дизайнер',
      docDescription:
        'Портфолио Земфиры Нургалеевой — UX/UI-дизайнера, специализирующегося на дизайн-системах и сложных цифровых продуктах.',
      displayTitle: 'Земфира Нургалеева',
      role: 'дизайнер',
      svc1: 'Продуктовый UX/UI-дизайн',
      svc2: 'Сложные B2B- и SaaS-интерфейсы',
      svc3: 'Пользовательские сценарии и информационная архитектура',
      svc4: 'Дизайн-системы и UI-библиотеки',
      svc5: 'Прототипирование и интерактивные сценарии',
      aboutMe: 'Обо мне',
      contactMe: 'Связаться со мной',
      projectsTitle: 'Мои проекты',
      card1Title: 'Сервис публичной библиотеки',
      card1Desc: 'Я проектирую системы, а не отдельные экраны — от исследований до масштабируемого интерфейса',
      card1Alt: 'Превью проекта «Сервис публичной библиотеки»',
      card2Title: 'Сервис публичной библиотеки',
      card2Desc: 'Я проектирую системы, а не отдельные экраны — от исследований до масштабируемого интерфейса',
      card2Alt: 'Превью проекта «Сервис публичной библиотеки»',
      heroMediaAria: 'Шоурил',
      copyright: '© 2026 Земфира Нургалеева'
    }
  };

  /* Label of the switch button per current language (= the other language). */
  var SWITCH_LABEL = { en: 'Русский язык', ru: 'English' };

  var STORAGE_KEY = 'lang';

  function applyLang(lang) {
    if (!STRINGS[lang]) lang = 'en';
    var dict = STRINGS[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('[data-i18n-arialabel]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-arialabel');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    var sw = document.getElementById('lang-switch');
    if (sw) sw.textContent = SWITCH_LABEL[lang];

    document.title = dict.docTitle;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict.docDescription);
  }

  /* English is the default (it is already in the markup).
     Restore a saved choice; localStorage can throw over file:// in some browsers. */
  var saved = null;
  try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (e) { /* no storage */ }
  if (saved === 'ru') applyLang('ru');

  var sw = document.getElementById('lang-switch');
  if (sw) {
    sw.addEventListener('click', function () {
      var next = document.documentElement.lang === 'ru' ? 'en' : 'ru';
      applyLang(next);
      try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* no storage */ }
    });
  }
})();
