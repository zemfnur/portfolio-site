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
      card1Title: 'Logistics CRM',
      card1Desc: 'A CRM for managing transportation operations and the day-to-day workflow of a logistics team.',
      card1Alt: 'Logistics CRM project preview',
      card2Title: 'Public library service',
      card2Desc: 'I design systems, not just screens — from research to scalable UI',
      card2Alt: 'Public library service project preview',
      heroMediaAria: 'Showreel',
      copyright: '© 2026 Zemfira Nurgaleeva',

      /* ----- case study: Logistics CRM (projects/logistics-crm.html) ----- */
      caseDocTitle: 'Logistics CRM — Zemfira Nurgaleeva',
      caseDocDescription:
        'Logistics CRM case study — a CRM for managing transportation operations, designed by Zemfira Nurgaleeva.',
      caseEyebrow: 'Product Design · UX/UI',
      caseTitle: 'Logistics CRM',
      caseLead: 'A CRM for managing transportation operations and the day-to-day workflow of a logistics team.',
      caseGoalLabel: 'Goal',
      caseGoal:
        'Create a practical working interface for processing shipments and handling multiple tasks in parallel.',
      caseMediaAlt: 'Logistics CRM transportation card interface',
      chipStatus: 'Status',
      chipWorkspace: 'Workspace',
      chipCard: 'Transportation card',
      caseRoleLabel: 'my role',
      roleUxLabel: 'UX',
      roleUiLabel: 'UI',
      roleCollabLabel: 'Collaboration',
      roleUx1: 'Requirements analysis',
      roleUx2: 'User flows',
      roleUx3: 'Transportation workflow structure',
      roleUi1: 'Transportation card',
      roleUi2: 'Working tabs',
      roleUi3: 'Interaction patterns',
      roleCollab1: 'UI Kit & components',
      roleCollab2: 'Interactive prototypes',
      roleCollab3: 'Iterations based on team and stakeholder feedback',
      solutionsTitle: 'What I designed',
      sol1Title: 'Transportation card',
      sol1Desc: 'Organize a large amount of information and operations into a compact working space.',
      sol1Alt: 'Transportation card with working tabs',
      sol2Title: 'Multiple transports',
      sol2Desc: 'Allow users to work with several active transports without losing context.',
      sol2Alt: 'Panel of open transports',
      sol3Title: 'Status updates',
      sol3Desc: 'Make transportation status changes clear, predictable and visible.',
      sol3Alt: 'Transports table with a status filter',
      backToSolutions: 'Back to solutions',
      challengeLabel: 'Challenge',
      whatDesigned: 'What I designed',
      designLogicLabel: 'Design logic',
      beforeLabel: 'Before',
      solutionLabel: 'Solution',
      beforeTitle: 'Information-heavy screen',
      beforeRow1: 'Route & dates',
      beforeRow2: 'Driver & vehicle',
      beforeRow3: 'Cargo details',
      beforeRow4: 'Documents list',
      beforeRow5: 'Payment info',
      beforeRow6: 'Notes & history',
      beforeRow7: 'Status actions',
      beforeRow8: 'Contact details',
      solutionTitle: 'Structured transportation workspace',
      resultLabel: 'Result',
      s1Title: 'Transportation card',
      s1Challenge:
        'A transportation card contains a large amount of information and operations. The goal was to make it practical for everyday work, while keeping the interface compact and focused.',
      s1Step1Name: 'Structured tabs',
      s1Step1Text: 'Each working area is organized into a dedicated tab.',
      s1Step2Name: 'Compact overview',
      s1Step2Text: 'Key transportation information and current status remain visible regardless of the active tab.',
      s1Step3Name: 'Contextual actions',
      s1Step3Text: 'Actions are placed next to the information they relate to.',
      s1ResultTitle:
        'The transportation card became a working space rather than just a place to store information.',
      s1Result1Name: 'Preserved context',
      s1Result1Text: 'Users can move between tasks without losing the main transportation context.',
      s1Result2Name: 'Contextual actions',
      s1Result2Text: 'Actions can be performed directly within the relevant section.',
      s1Result3Name: 'Scalable structure',
      s1Result3Text: 'New information can be added to dedicated areas without increasing screen complexity.',
      s2Title: 'Working with multiple transports',
      s2Challenge:
        'Operational work rarely involves a single transport at a time. Users may need to open multiple transports, compare information, switch between tasks, and return to something they were working on earlier. With standard list-based navigation, this can lead to repeated searching and loss of working context.',
      s2Step1Name: 'Open Transports Panel',
      s2Step1TextA:
        'I introduced a dedicated navigation layer that displays all currently open transports and allows users to switch between them quickly.',
      s2Step1TextB:
        'The panel keeps active work accessible and separates finding a transport from switching between transports that are already open.',
      workflowLabel: 'Workflow',
      flow1: 'Search',
      flow2: 'Open transport',
      flow3: 'Work',
      flow4: 'Switch',
      flow5: 'Continue',
      s2ResultTitle: 'Users can work with multiple transports while keeping their working context.',
      s2Result1Name: 'Open transports',
      s2Result1Text: 'Users can work with multiple transports without repeatedly returning to the main list.',
      s2Result2Name: 'Preserved context',
      s2Result2Text: 'The current working context remains available.',
      s2Result3Name: 'Fast switching',
      s2Result3Text: 'Users can switch between active transports without returning to the main list.',
      s3Title: 'Transportation status update',
      s3Challenge:
        'A transport status represents its current operational state and determines what the team can do next. Changing the status therefore needs to be clear and predictable. Users should immediately understand which state is active and what happened after the change.',
      s3Step1Name: 'State transition flow',
      s3Step1TextA: 'I defined the interaction around a simple sequence',
      s3Step1TextB:
        'The interface clearly displays the current status and allows users to change it directly within the transportation context.',
      statusTransitionLabel: 'Status transition',
      sf1Type: 'Current state',
      sf1Value: 'In Transit',
      sf2Type: 'Available action',
      sf2Value: 'Update status',
      sf3Type: 'New state',
      sf3Value: 'Delivered',
      s3ResultTitle:
        'Users understand the current state, the available action and what happened after the change.',
      s3Result1Name: 'Transparent status changes',
      s3Result2Name: 'Immediate feedback',
      s3Result3Name: 'Predictable next actions',
      outcomesTitle: 'What changed in the workflow',
      out1Title: 'Structured workspace',
      out1Text: 'The transportation card became a unified working space — not a flat list of fields.',
      out2Title: 'Parallel work',
      out2Text: 'Users can work with multiple transports without repeatedly searching for them.',
      out3Title: 'Predictable status flow',
      out3Text: 'Status changes became a clear and controlled interaction with immediate feedback.',
      constraintsTitle: 'Constraints',
      constraintsText:
        'The project was at the MVP stage, so full UX research and quantitative metrics were not conducted.',
      constraintsLead: 'Design decisions were based on:',
      cons1: 'Business requirements',
      cons2: 'Process analysis',
      cons3: 'Team discussions',
      cons4: 'Stakeholder feedback',
      cons5: 'Iterative design'
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
      card1Title: 'Logistics CRM',
      card1Desc: 'CRM для управления транспортными операциями и ежедневными задачами логистической команды.',
      card1Alt: 'Превью проекта «Logistics CRM»',
      card2Title: 'Сервис публичной библиотеки',
      card2Desc: 'Я проектирую системы, а не отдельные экраны — от исследований до масштабируемого интерфейса',
      card2Alt: 'Превью проекта «Сервис публичной библиотеки»',
      heroMediaAria: 'Шоурил',
      copyright: '© 2026 Земфира Нургалеева',

      /* ----- case study: Logistics CRM (projects/logistics-crm.html) ----- */
      caseDocTitle: 'Logistics CRM — Земфира Нургалеева',
      caseDocDescription:
        'Кейс Logistics CRM — CRM для управления транспортными операциями, дизайн: Земфира Нургалеева.',
      caseEyebrow: 'Продуктовый дизайн · UX/UI',
      caseTitle: 'Logistics CRM',
      caseLead: 'CRM для управления транспортными операциями и ежедневными задачами логистической команды.',
      caseGoalLabel: 'Цель',
      caseGoal:
        'Создать практичный рабочий интерфейс для обработки перевозок и параллельной работы с несколькими задачами.',
      caseMediaAlt: 'Интерфейс карточки перевозки в Logistics CRM',
      chipStatus: 'Статус',
      chipWorkspace: 'Рабочая зона',
      chipCard: 'Карточка перевозки',
      caseRoleLabel: 'моя роль',
      roleUxLabel: 'UX',
      roleUiLabel: 'UI',
      roleCollabLabel: 'Взаимодействие',
      roleUx1: 'Анализ требований',
      roleUx2: 'Пользовательские сценарии',
      roleUx3: 'Структура процесса перевозки',
      roleUi1: 'Карточка перевозки',
      roleUi2: 'Рабочие вкладки',
      roleUi3: 'Паттерны взаимодействия',
      roleCollab1: 'UI-кит и компоненты',
      roleCollab2: 'Интерактивные прототипы',
      roleCollab3: 'Итерации на основе обратной связи команды и стейкхолдеров',
      solutionsTitle: 'Что я спроектировала',
      sol1Title: 'Карточка перевозки',
      sol1Desc: 'Организовать большой объём информации и операций в компактном рабочем пространстве.',
      sol1Alt: 'Карточка перевозки с рабочими вкладками',
      sol2Title: 'Несколько перевозок',
      sol2Desc: 'Дать возможность работать с несколькими активными перевозками без потери контекста.',
      sol2Alt: 'Панель открытых перевозок',
      sol3Title: 'Обновления статусов',
      sol3Desc: 'Сделать смену статуса перевозки понятной, предсказуемой и заметной.',
      sol3Alt: 'Таблица перевозок с фильтром по статусу',
      backToSolutions: 'Назад к решениям',
      challengeLabel: 'Задача',
      whatDesigned: 'Что я спроектировала',
      designLogicLabel: 'Логика решения',
      beforeLabel: 'Было',
      solutionLabel: 'Стало',
      beforeTitle: 'Экран, перегруженный информацией',
      beforeRow1: 'Маршрут и даты',
      beforeRow2: 'Водитель и транспорт',
      beforeRow3: 'Данные о грузе',
      beforeRow4: 'Список документов',
      beforeRow5: 'Оплата',
      beforeRow6: 'Заметки и история',
      beforeRow7: 'Действия со статусом',
      beforeRow8: 'Контакты',
      solutionTitle: 'Структурированное рабочее пространство',
      resultLabel: 'Результат',
      s1Title: 'Карточка перевозки',
      s1Challenge:
        'Карточка перевозки содержит большой объём информации и операций. Задача — сделать её практичной для повседневной работы, сохранив компактный и сфокусированный интерфейс.',
      s1Step1Name: 'Структурированные вкладки',
      s1Step1Text: 'Каждая рабочая зона вынесена в отдельную вкладку.',
      s1Step2Name: 'Компактный обзор',
      s1Step2Text: 'Ключевая информация о перевозке и текущий статус остаются на виду независимо от активной вкладки.',
      s1Step3Name: 'Контекстные действия',
      s1Step3Text: 'Действия расположены рядом с информацией, к которой относятся.',
      s1ResultTitle: 'Карточка перевозки стала рабочим пространством, а не просто местом хранения информации.',
      s1Result1Name: 'Сохранение контекста',
      s1Result1Text: 'Пользователь переключается между задачами, не теряя контекст основной перевозки.',
      s1Result2Name: 'Контекстные действия',
      s1Result2Text: 'Действия выполняются прямо в соответствующем разделе.',
      s1Result3Name: 'Масштабируемая структура',
      s1Result3Text: 'Новая информация добавляется в выделенные зоны, не усложняя экран.',
      s2Title: 'Работа с несколькими перевозками',
      s2Challenge:
        'Операционная работа редко связана с одной перевозкой. Пользователю нужно открывать несколько перевозок, сравнивать информацию, переключаться между задачами и возвращаться к начатому. При стандартной навигации через список это приводит к повторному поиску и потере рабочего контекста.',
      s2Step1Name: 'Панель открытых перевозок',
      s2Step1TextA:
        'Я добавила отдельный слой навигации, который показывает все открытые перевозки и позволяет быстро переключаться между ними.',
      s2Step1TextB:
        'Панель держит активную работу под рукой и разделяет поиск новой перевозки и переключение между уже открытыми.',
      workflowLabel: 'Сценарий работы',
      flow1: 'Поиск',
      flow2: 'Открыть перевозку',
      flow3: 'Работа',
      flow4: 'Переключение',
      flow5: 'Продолжить',
      s2ResultTitle: 'Пользователь работает с несколькими перевозками, сохраняя рабочий контекст.',
      s2Result1Name: 'Открытые перевозки',
      s2Result1Text: 'Можно работать с несколькими перевозками, не возвращаясь постоянно к общему списку.',
      s2Result2Name: 'Сохранённый контекст',
      s2Result2Text: 'Текущий рабочий контекст остаётся доступным.',
      s2Result3Name: 'Быстрое переключение',
      s2Result3Text: 'Переключение между активными перевозками происходит без возврата к общему списку.',
      s3Title: 'Обновление статуса перевозки',
      s3Challenge:
        'Статус перевозки отражает её текущее операционное состояние и определяет, что команда может делать дальше. Поэтому смена статуса должна быть понятной и предсказуемой: пользователю сразу видно, какое состояние активно и что изменилось после действия.',
      s3Step1Name: 'Поток смены состояний',
      s3Step1TextA: 'Взаимодействие построено вокруг простой последовательности',
      s3Step1TextB:
        'Интерфейс наглядно показывает текущий статус и позволяет изменить его прямо в контексте перевозки.',
      statusTransitionLabel: 'Смена статуса',
      sf1Type: 'Текущее состояние',
      sf1Value: 'В пути',
      sf2Type: 'Доступное действие',
      sf2Value: 'Обновить статус',
      sf3Type: 'Новое состояние',
      sf3Value: 'Доставлено',
      s3ResultTitle: 'Пользователь видит текущее состояние, доступное действие и результат изменения.',
      s3Result1Name: 'Прозрачная смена статуса',
      s3Result2Name: 'Мгновенная обратная связь',
      s3Result3Name: 'Предсказуемые дальнейшие действия',
      outcomesTitle: 'Что изменилось в рабочем процессе',
      out1Title: 'Структурированное рабочее пространство',
      out1Text: 'Карточка перевозки стала единым рабочим пространством, а не плоским списком полей.',
      out2Title: 'Параллельная работа',
      out2Text: 'Можно работать с несколькими перевозками, не ища их заново каждый раз.',
      out3Title: 'Предсказуемая смена статуса',
      out3Text: 'Смена статуса стала понятным и контролируемым взаимодействием с мгновенной обратной связью.',
      constraintsTitle: 'Ограничения',
      constraintsText:
        'Проект находился на стадии MVP, поэтому полноценное UX-исследование и количественные метрики не проводились.',
      constraintsLead: 'Решения принимались на основе:',
      cons1: 'Бизнес-требования',
      cons2: 'Анализ процессов',
      cons3: 'Обсуждения с командой',
      cons4: 'Обратная связь стейкхолдеров',
      cons5: 'Итеративная проработка'
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

    /* <title>/<meta description> key — pages other than the homepage pick
       their own strings via data-i18n-title / data-i18n-description on <body>. */
    var titleKey = document.body.getAttribute('data-i18n-title') || 'docTitle';
    var descKey = document.body.getAttribute('data-i18n-description') || 'docDescription';
    if (dict[titleKey]) document.title = dict[titleKey];

    var meta = document.querySelector('meta[name="description"]');
    if (meta && dict[descKey]) meta.setAttribute('content', dict[descKey]);
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
