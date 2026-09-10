/* The only script on the site.
   1. Language switch (EN/RU): EN text lives in the markup, RU
      equivalents live in STRINGS below. The switch button label always
      shows the language you would switch TO.
   2. Illustration lightbox (case-study pages): every img[data-lightbox]
      opens in the .lightbox overlay defined at the end of the body. */
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
      projectsLink: 'Projects',
      aboutMe: 'About me',
      contactMe: 'Contacts',
      projectsTitle: 'My projects',
      card1Title: 'Logistics CRM',
      card1Desc: 'A CRM for managing transportation operations and the day-to-day workflow of a logistics team.',
      card1Alt: 'Logistics CRM project preview',
      card2Title: 'Production Line Simulator',
      card2Desc:
        'A B2B simulation interface for configuring production lines, analysing performance and comparing improvement scenarios.',
      card2Alt: 'Production Line Simulator project preview',
      heroMediaAria: 'Showreel',
      copyright: '© 2026 Zemfira Nurgaleeva',
      copiedLabel: 'Copied!',
      mailLabel: 'Mail',
      copyEmailAria: 'Copy email address',

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
      backToOverview: 'Back to overview',
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
      cons5: 'Iterative design',

      /* ----- case study: Production Line Simulator (projects/production-line-simulator.html) ----- */
      case2DocTitle: 'Production Line Simulator — Zemfira Nurgaleeva',
      case2DocDescription:
        'Production Line Simulator case study — a B2B simulation interface for configuring production lines, designed by Zemfira Nurgaleeva.',
      case2Eyebrow: 'UX/UI Design',
      case2Title: 'Production Line Simulator',
      case2Lead:
        'A B2B simulation interface for configuring production lines, analysing performance and comparing improvement scenarios.',
      case2Goal:
        'Design a scalable simulation platform that helps production teams quickly configure production models, identify bottlenecks, evaluate key performance and cost metrics, and compare improvement scenarios',
      case2RoleLabel: 'role',
      case2Role:
        'My role was to translate the logic of the calculation model into a usable product experience — from information architecture and data input to analysis, scenario comparison and UI patterns.',
      case2MediaAlt:
        'Production line simulator dashboard with KPI cards and a station capacity chart highlighting the bottleneck',
      ov2ProductLabel: 'Product',
      ov2ProductItem: 'B2B / Industrial Software',
      ov2FormatLabel: 'Format',
      ov2FormatItem: 'Demo / MVP',
      ctx2Eyebrow: 'Product Context & Challenge',
      ctx2Title: 'From a calculation model to a decision-making product',
      ctx2Body1:
        'The underlying model combines a large number of interdependent parameters: production stations, operations, cycle time, personnel, shift settings and costs. Changes to one parameter can affect several outputs at once.',
      ctx2Body2:
        'The UX challenge was to create a workflow that makes this complexity understandable without exposing the full calculation model at once.',
      modelDiagramLabel: 'Calculation model: inputs, core model and outputs',
      mIn1Name: 'Production Line',
      mIn1Caption: 'Stations · Operations · Cycle Time',
      mIn2Name: 'People',
      mIn2Caption: 'Roles · Headcount · Rates',
      mIn3Name: 'Shift',
      mIn3Caption: 'Duration · Efficiency',
      mIn4Name: 'Costs',
      mIn4Caption: 'Labour · Fixed Costs · Margin',
      mCoreLabel: 'Core',
      mCoreName: 'Calculation Model',
      mOut1: 'Throughput',
      mOut2: 'Bottleneck',
      mOut3: 'Cost',
      mOut4: 'Utilisation',
      mOut5: 'Scenarios',
      c2s1Title: 'Structure before data',
      c2s1Lead:
        'I separated configuration, production data, analysis and decision-making into distinct working contexts instead of exposing the entire calculation model at once.',
      c2s1Step1Name: 'Structured tabs',
      c2s1Step1Text: 'Each working area is organized into a dedicated tab.',
      c2s1Step2Name: 'Compact overview',
      c2s1Step2Text: 'Key line parameters and current results stay visible regardless of the active tab.',
      c2s1Step3Name: 'Contextual actions',
      c2s1Step3Text: 'Actions are placed next to the information they relate to.',
      userflowLabel: 'Core user flow',
      uf1: 'Select model',
      uf2: 'Configure parameters',
      uf3: 'Configure line',
      uf4: 'Recalculate',
      uf5: 'Find bottleneck',
      uf6: 'Analyse results',
      uf7: 'Compare scenarios',
      c2s1Shot1Alt: 'Model configuration screen with sidebar navigation, Excel import and an editable tariff table',
      c2s1Shot2Alt: 'Production line editor with an operations table and staff and shift summary panels',
      c2s1Shot3Alt: 'Line configuration screen with a stations table and staff assignment panels',
      c2s1Shot4Alt: 'Simulation results dashboard with KPI cards, station capacity chart and cost breakdown',
      c2s2Title: 'Three decisions that shaped the product experience',
      c2d1Label: 'Decision 01',
      c2d1Title: 'Edit where you see the data',
      c2d1Text:
        'Production-line configuration contains many interdependent values. I used inline editing so users could modify data directly in context instead of opening separate dialogs.',
      c2d1Alt: 'Operations table with inline editing and a contractor resources panel',
      c2d2Label: 'Decision 02',
      c2d2Title: 'Shorten the distance between action and result',
      c2d2TextA:
        'Because the model is intended for rapid experimentation, the workflow was designed around automatic recalculation.',
      c2d2TextB: 'Every change triggers an immediate update across KPIs, bottleneck indicators and charts.',
      c2d2Alt: 'KPI cards and station throughput chart with the bottleneck highlighted after recalculation',
      c2d3Label: 'Decision 03',
      c2d3Title: 'Make the bottleneck visible',
      c2d3Text:
        'The bottleneck is a key output of the model: the station with the lowest throughput determines the production capacity. I surfaced it at three levels simultaneously — table, KPI and chart — so it becomes a visual anchor rather than a value hidden inside a calculation.',
      c2d3Alt: 'Bottleneck highlighted across utilisation bars, KPI cards and the shift cost chart',
      c2s2Shot1Alt: 'Line dashboard with KPI cards, station capacity chart and staffing and cost breakdowns',
      c2s2Shot2Alt: 'Production line editor with an operations table and staff and shift summary panels',
      c2s3Title: 'The result should explain what to do next',
      c2s3MediaAlt: 'Scenario comparison dashboard with KPI summary cards, a comparison table and per-scenario charts',
      c2s3ResultTitle: 'Product Outcome',
      c2r1Name: 'Demo launched',
      c2r1Text: 'The production line simulator was designed, built and released as a working demo in production.',
      c2r2Name: 'Bottlenecks became visible',
      c2r2Text:
        'The production bottleneck became a clear visual element across the interface, helping users quickly identify the limiting station and understand its impact.',
      c2r3Name: 'Production data became actionable',
      c2r3Text:
        'Structured large volumes of interconnected production data into clear tables, KPIs and visualisations, making key performance indicators easier to interpret.',
      c2r4Name: 'Predictable next actions',
      c2ConstraintsText:
        'The product was developed as a demo/MVP, so some calculation and optimisation mechanics were simplified. The interface still had to support realistic workflows, including large editable tables, Excel import, validation and automatic recalculation.',
      lightboxLabel: 'Illustration view',
      lightboxClose: 'Close'
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
      projectsLink: 'Проекты',
      aboutMe: 'Обо мне',
      contactMe: 'Контакты',
      projectsTitle: 'Мои проекты',
      card1Title: 'Logistics CRM',
      card1Desc: 'CRM для управления транспортными операциями и ежедневными задачами логистической команды.',
      card1Alt: 'Превью проекта «Logistics CRM»',
      card2Title: 'Production Line Simulator',
      card2Desc:
        'B2B-интерфейс симуляции: настройка производственных линий, анализ показателей и сравнение сценариев улучшений.',
      card2Alt: 'Превью проекта «Production Line Simulator»',
      heroMediaAria: 'Шоурил',
      copyright: '© 2026 Земфира Нургалеева',
      copiedLabel: 'Скопировано!',
      mailLabel: 'Почта',
      copyEmailAria: 'Скопировать адрес электронной почты',

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
      backToOverview: 'Назад к обзору',
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
      cons5: 'Итеративная проработка',

      /* ----- case study: Production Line Simulator (projects/production-line-simulator.html) ----- */
      case2DocTitle: 'Production Line Simulator — Земфира Нургалеева',
      case2DocDescription:
        'Кейс Production Line Simulator — B2B-интерфейс симуляции производственных линий, дизайн: Земфира Нургалеева.',
      case2Eyebrow: 'UX/UI-дизайн',
      case2Title: 'Production Line Simulator',
      case2Lead:
        'B2B-интерфейс симуляции: настройка производственных линий, анализ показателей и сравнение сценариев улучшений.',
      case2Goal:
        'Спроектировать масштабируемую платформу симуляции, которая помогает производственным командам быстро настраивать модели производства, находить узкие места, оценивать ключевые показатели и затраты и сравнивать сценарии улучшений',
      case2RoleLabel: 'роль',
      case2Role:
        'Моя задача — перевести логику расчётной модели в удобный продуктовый опыт: от информационной архитектуры и ввода данных до анализа, сравнения сценариев и UI-паттернов.',
      case2MediaAlt:
        'Дашборд симулятора производственной линии: KPI-карточки и диаграмма загрузки станций с выделенным узким местом',
      ov2ProductLabel: 'Продукт',
      ov2ProductItem: 'B2B / промышленное ПО',
      ov2FormatLabel: 'Формат',
      ov2FormatItem: 'Демо / MVP',
      ctx2Eyebrow: 'Контекст продукта и задача',
      ctx2Title: 'От расчётной модели — к продукту для принятия решений',
      ctx2Body1:
        'В основе модели — большое количество взаимозависимых параметров: производственные станции, операции, время цикла, персонал, настройки смен и затраты. Изменение одного параметра влияет сразу на несколько результатов.',
      ctx2Body2:
        'UX-задача — построить рабочий процесс, который делает эту сложность понятной, не раскрывая всю расчётную модель сразу.',
      modelDiagramLabel: 'Схема расчётной модели: входные данные, ядро и результаты',
      mIn1Name: 'Производственная линия',
      mIn1Caption: 'Станции · Операции · Время цикла',
      mIn2Name: 'Персонал',
      mIn2Caption: 'Роли · Штат · Ставки',
      mIn3Name: 'Смена',
      mIn3Caption: 'Длительность · Эффективность',
      mIn4Name: 'Затраты',
      mIn4Caption: 'Оплата труда · Постоянные затраты · Маржа',
      mCoreLabel: 'Ядро',
      mCoreName: 'Расчётная модель',
      mOut1: 'Производительность',
      mOut2: 'Узкое место',
      mOut3: 'Стоимость',
      mOut4: 'Загрузка',
      mOut5: 'Сценарии',
      c2s1Title: 'Сначала структура — потом данные',
      c2s1Lead:
        'Я разделила настройку, производственные данные, анализ и принятие решений на отдельные рабочие контексты, вместо того чтобы показывать всю расчётную модель сразу.',
      c2s1Step1Name: 'Структурированные вкладки',
      c2s1Step1Text: 'Каждая рабочая зона вынесена в отдельную вкладку.',
      c2s1Step2Name: 'Компактный обзор',
      c2s1Step2Text: 'Ключевые параметры линии и текущие результаты остаются на виду независимо от активной вкладки.',
      c2s1Step3Name: 'Контекстные действия',
      c2s1Step3Text: 'Действия расположены рядом с информацией, к которой относятся.',
      userflowLabel: 'Основной пользовательский сценарий',
      uf1: 'Выбрать модель',
      uf2: 'Настроить параметры',
      uf3: 'Настроить линию',
      uf4: 'Пересчитать',
      uf5: 'Найти узкое место',
      uf6: 'Проанализировать результаты',
      uf7: 'Сравнить сценарии',
      c2s1Shot1Alt: 'Экран настройки модели: навигация, импорт из Excel и редактируемая таблица тарифов',
      c2s1Shot2Alt: 'Редактор производственной линии: таблица операций и панели персонала и смены',
      c2s1Shot3Alt: 'Экран настройки линии: таблица станций и панели распределения персонала',
      c2s1Shot4Alt: 'Дашборд результатов симуляции: KPI-карточки, диаграмма загрузки станций и структура затрат',
      c2s2Title: 'Три решения, которые сформировали продуктовый опыт',
      c2d1Label: 'Решение 01',
      c2d1Title: 'Редактирование там, где видны данные',
      c2d1Text:
        'Настройка производственной линии содержит много взаимозависимых значений. Я использовала инлайн-редактирование, чтобы менять данные прямо в контексте, не открывая отдельные диалоги.',
      c2d1Alt: 'Таблица операций с инлайн-редактированием и панель ресурсов контрагентов',
      c2d2Label: 'Решение 02',
      c2d2Title: 'Сократить путь от действия до результата',
      c2d2TextA: 'Модель создана для быстрых экспериментов, поэтому процесс построен вокруг автоматического пересчёта.',
      c2d2TextB: 'Каждое изменение сразу обновляет KPI, индикаторы узких мест и графики.',
      c2d2Alt: 'KPI-карточки и диаграмма производительности станций с выделенным узким местом после пересчёта',
      c2d3Label: 'Решение 03',
      c2d3Title: 'Сделать узкое место видимым',
      c2d3Text:
        'Узкое место — ключевой результат модели: станция с минимальной производительностью определяет мощность всей линии. Я показала его одновременно на трёх уровнях — в таблице, KPI и графике, — превратив в визуальный якорь, а не значение внутри расчёта.',
      c2d3Alt: 'Узкое место выделено в шкалах загрузки, KPI-карточках и диаграмме затрат смены',
      c2s2Shot1Alt: 'Дашборд линии: KPI-карточки, диаграмма загрузки станций, структура персонала и затрат',
      c2s2Shot2Alt: 'Редактор производственной линии: таблица операций и панели персонала и смены',
      c2s3Title: 'Результат должен подсказывать, что делать дальше',
      c2s3MediaAlt: 'Дашборд сравнения сценариев: KPI-карточки, таблица сравнения и графики по сценариям',
      c2s3ResultTitle: 'Продуктовый результат',
      c2r1Name: 'Демо запущено',
      c2r1Text: 'Симулятор производственной линии спроектирован, разработан и выпущен в виде рабочего демо.',
      c2r2Name: 'Узкие места стали видимыми',
      c2r2Text:
        'Узкое место стало заметным визуальным элементом интерфейса: пользователь сразу видит ограничивающую станцию и её влияние.',
      c2r3Name: 'Данные стали основой для решений',
      c2r3Text:
        'Большие объёмы взаимозависимых производственных данных структурированы в понятные таблицы, KPI и визуализации.',
      c2r4Name: 'Предсказуемые дальнейшие действия',
      c2ConstraintsText:
        'Продукт разрабатывался как демо/MVP, поэтому часть расчётных и оптимизационных механик упрощена. При этом интерфейс должен был поддерживать реалистичные сценарии работы: большие редактируемые таблицы, импорт из Excel, валидацию и автоматический пересчёт.',
      lightboxLabel: 'Просмотр иллюстрации',
      lightboxClose: 'Закрыть'
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

/* ============================================================
   Footer email link — not a mailto: clicking copies the address
   to the clipboard and shows a brief "Copied!" pill above it.
   ============================================================ */
(function () {
  'use strict';

  function copyWithFallback(text) {
    /* navigator.clipboard requires a secure context (https/localhost);
       execCommand keeps the link working on plain-http hosts. */
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    var field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    try { document.execCommand('copy'); } catch (e) { /* nothing more to try */ }
    document.body.removeChild(field);
  }

  document.querySelectorAll('.footer__copy').forEach(function (link) {
    var timer = null;

    link.addEventListener('click', function () {
      var email = link.getAttribute('data-email');

      copyWithFallback(email).then(function () {
        link.classList.add('is-copied');
        clearTimeout(timer);
        timer = setTimeout(function () { link.classList.remove('is-copied'); }, 1800);
      });
    });
  });
})();

/* ============================================================
   Illustration lightbox (case-study pages)
   Opens the clicked img[data-lightbox] in the .lightbox overlay;
   closed with the X button, a click on the scrim, or Esc.
   ============================================================ */
(function () {
  'use strict';

  var lightbox = document.querySelector('.lightbox');
  if (!lightbox) return; /* page without the overlay markup (homepage) */

  var image = lightbox.querySelector('.lightbox__image');
  var lastTrigger = null;

  function open(trigger) {
    image.src = trigger.currentSrc || trigger.src;
    image.alt = trigger.alt;
    lastTrigger = trigger;
    lightbox.classList.add('lightbox--open');

    /* Freeze the page. Pad the layout by the scrollbar's width so the
       sticky header does not jump when the scrollbar disappears. */
    var scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = scrollbar + 'px';

    lightbox.querySelector('.lightbox__close').focus();
  }

  function close() {
    lightbox.classList.remove('lightbox--open');
    document.documentElement.style.overflow = '';
    document.documentElement.style.paddingRight = '';
  }

  document.querySelectorAll('img[data-lightbox]').forEach(function (img) {
    img.addEventListener('click', function () {
      open(img);
    });
  });

  /* the scrim is the overlay itself — clicks that reach it (not the
     image or the close button) close the lightbox */
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox || event.target.closest('.lightbox__close')) close();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') close();
  });
})();
