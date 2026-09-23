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
        'Simulation interface for configuring production lines, analysing performance and comparing improvement scenarios.',
      card2Alt: 'Production Line Simulator project preview',
      card3Title: 'Martin Exam — AI Exam Preparation',
      card3Desc: 'AI-powered mobile app for independent exam preparation.',
      card3Alt: 'Martin Exam project preview',
      heroMediaAria: 'Showreel',
      copyright: '© 2026 Zemfira Nurgaleeva',
      copiedLabel: 'Copied!',
      mailLabel: 'Mail',
      copyEmailAria: 'Copy email address',

      /* ----- about page (about.html — Figma "About-1920") -----
         aboutQuote swaps as HTML (data-i18n-html) to carry the quote's
         <br> line break. The EN copy is a translation of the Russian
         mockup text. */
      aboutDocTitle: 'About me — Zemfira Nurgaleeva',
      aboutDocDescription:
        'About Zemfira Nurgaleeva — a UX/UI designer focused on design systems and complex digital products.',
      aboutContactLink: 'Contact me',
      aboutTitle: 'About me',
      aboutQuote: '“I design systems<br>from research to scalable UI”',
      aboutIntro:
        'I am a Product UX/UI designer focused on complex digital products and design systems, with 2 years of commercial experience.',
      aboutList:
        '<p>— analyze requirements and constraints</p><p>— build user scenarios and information architecture</p><p>— design interfaces and states</p><p>— build prototypes</p><p>— design and develop design systems</p><p>— document components and their states</p><p>— work with typography, tokens and structure</p><p>— think about scalability and product maintenance</p><p>— simplify complex user journeys</p>',
      aboutBody1:
        'My work often involves products with a lot of logic: customer portals, verification services, tables, forms and many states. In projects like these I pay special attention to structure and consistency, so the interface stays manageable as it grows.',
      aboutBody2:
        'Before design, I worked as a Chinese-language translator and in international trade. It is experience far removed from design, but exactly this background lets me structure large volumes of information, notice details and get up to speed in unfamiliar domains.',
      aboutBody3:
        "I am currently in my second year of a Graphic Design bachelor's programme, working on commercial digital products in parallel.",
      aboutBody4: 'I work with Figma and its products, Affinity, and know the basics of HTML/CSS',
      aboutBody5:
        'I enjoy building coherent systems: thinking through components, their states, logic and behaviour across scenarios. I treat interfaces as a construction kit — every detail must be clear, reusable and scalable.',

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
      researchTitle: 'Research',
      researchP1: "To understand the users' current workflow, I conducted interviews with potential users of the product.",
      researchP2:
        'The research showed that information about logistics processes was distributed across several tools. As a result, a single workflow required users to constantly switch between different sources of information.',
      researchToolsTitle: 'Current tool landscape',
      researchTool1: 'Excel',
      researchTool1Desc: 'Main source of information about shipments and ongoing operations',
      researchTool2: 'Folders',
      researchTool2Desc: 'Document storage',
      researchTool3: 'Messengers',
      researchTool3Desc: 'Work communication',
      researchTool4: 'Email',
      researchTool4Desc: 'Document exchange',
      researchCallout: 'Based on the interviews, we formed the initial product hypotheses.',
      researchHypLabel: 'Initial hypotheses',
      hyp1Title: 'Unified Shipment Workspace',
      hyp1Text:
        'If the main shipment information is collected in one interface, users will need fewer switches between tools and operational tasks will become faster to complete.',
      measureLabel: 'How to measure',
      hyp1M1: 'Number of switches between tools during a scenario',
      hyp1M2: 'Time to complete a typical scenario',
      hyp1M3: 'Number of actions required to find the needed information',
      hyp2Title: 'Documents in Shipment Context',
      hyp2Text:
        'If documents are available directly from the shipment card, users will find the required file faster and rely less on folders stored on their computer.',
      hyp2M1: 'Time required to find a document',
      hyp2M2: 'Number of actions required to open the required document',
      hyp2M3: 'Percentage of documents successfully found without external assistance',
      researchIterLabel: 'Hypotheses after iterations',
      researchIterText:
        'Additional hypotheses emerged during several prototype iterations and based on user feedback.',
      hyp3Title: 'Urgency and Statuses as Priority Signals',
      hyp3Text:
        'If the shipment status communicates both its current state and its urgency, users will be able to identify which shipments require attention first more quickly.',
      hyp3M1: 'Time required to identify the priority shipment',
      hyp3M2: 'Number of errors when selecting a shipment that requires attention',
      hyp3M3: 'Time required to identify the next action after opening the shipment list',
      hyp4Title: 'All Shipments on One Screen',
      hyp4Text:
        'If all shipment numbers are available on one screen and users can quickly switch between them, it will be easier to work with multiple shipments without returning to the main list and losing context.',
      hyp4M1: 'Time required to switch between shipments',
      hyp4M2: 'Number of actions required to move from one shipment to another',
      hyp4M3: 'Number of returns to the main list',
      hyp4M4:
        'Successful completion of a scenario that requires processing several shipments sequentially',
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
      c2s1Shot1Alt: 'Source data screen with a loaded-files panel and an editable products and tariffs table',
      c2s1Shot2Alt: 'Calculation settings screen with the limiting station selector, shift duration and labour rates',
      c2s1Shot3Alt: 'Simulation results dashboard with KPI cards, a station throughput chart with the bottleneck highlighted in red and an indicators table',
      c2s1Shot4Alt: 'Improvement scenarios screen comparing the base scenario with alternatives and highlighting the recommended option',
      c2s2Title: 'Three decisions that shaped the product experience',
      c2d1Label: 'Decision 01',
      c2d1Title: 'Edit where you see the data',
      c2d1Text:
        'Production-line configuration contains many interdependent values. I used inline editing so users could modify data directly in context instead of opening separate dialogs.',
      c2d1Alt: 'Results dashboard with KPI cards, a station throughput chart, utilisation panel and shift cost breakdown, the bottleneck marked in red',
      c2d2Label: 'Decision 02',
      c2d2Title: 'Shorten the distance between action and result',
      c2d2TextA:
        'Because the model is intended for rapid experimentation, the workflow was designed around automatic recalculation.',
      c2d2TextB: 'Every change triggers an immediate update across KPIs, bottleneck indicators and charts.',
      c2d2Alt: 'Bottleneck detail view with station utilisation bars, shift cost structure and a card showing the bottleneck at 100% utilisation',
      c2d3Label: 'Decision 03',
      c2d3Title: 'Make the bottleneck visible',
      c2d3Text:
        'The bottleneck is a key output of the model: the station with the lowest throughput determines the production capacity. I surfaced it at three levels simultaneously — table, KPI and chart — so it becomes a visual anchor rather than a value hidden inside a calculation.',
      c2d3Alt: 'Operations table with utilisation bars and bottleneck rows highlighted in red, with an auxiliary operations table below',
      c2s2Shot1Alt: 'Operations view with the main and auxiliary operations tables and bottleneck rows highlighted in red',
      c2s2Shot2Alt: 'Calculation settings screen with the limiting station selector, shift duration and labour rates',
      c2s3Title: 'The result should explain what to do next',
      c2s3MediaAlt: 'Scenario comparison screen with a table of improvement scenarios and the recommended option highlighted',
      c2s3ResultTitle: 'Product Outcome',
      c2r1Name: 'Demo launched',
      c2r1Text: 'The production line simulator was designed, built and released as a working demo in production.',
      c2r2Name: 'Bottlenecks became visible',
      c2r2Text:
        'Made the production bottleneck a clear visual element across the interface, helping users quickly identify the limiting station and understand its impact.',
      c2r3Name: 'Production data became actionable',
      c2r3Text:
        'Structured large volumes of interconnected production data into clear tables, KPIs and visualisations, making key performance indicators easier to interpret.',
      c2r4Name: 'Predictable next actions',
      c2ConstraintsText:
        'The product was developed as a demo/MVP, so some calculation and optimisation mechanics were simplified. The interface still had to support realistic workflows, including large editable tables, Excel import, validation and automatic recalculation.',

      /* ----- case study: Martin Exam (projects/martin-exam.html) ----- */
      case3DocTitle: 'Martin Exam — Zemfira Nurgaleeva',
      case3DocDescription:
        'Martin Exam case study — an AI-powered mobile app for independent exam preparation, designed by Zemfira Nurgaleeva.',
      c3Tag: 'EdTech · AI · Mobile',
      c3Duration: '2026 — Ongoing',
      c3Title: 'Martin Exam',
      c3Lead: 'AI-powered exam preparation for independent learning',
      c3Desc:
        'Martin Exam is an AI-powered service for school students preparing independently for exams. The app helps students study material, complete textbook-based tasks, check their knowledge, and review difficult topics without constant teacher assistance.',
      c3HeroAlt1: 'Martin Exam home screen with a daily study plan and a list of lessons with due dates',
      c3HeroAlt2: 'Course screen with a list of lessons and their completion status',
      c3HeroAlt3: 'Tasks screen with date filters and task cards with deadlines',
      c3RoleLabel: 'UX',
      c3Role1: 'Product Designer · UX/UI',
      c3Role2: 'Design system',
      c3TypeLabel: 'Product type',
      c3Type1: 'EdTech',
      c3Type2: 'AI · Mobile App',
      c3StatusLabel: 'Status',
      c3Status1: 'In testing',
      c3Status2: 'Iteration',
      c3GoalTitle: 'Project goal',
      c3GoalText:
        'Create a mobile app that lets a school student prepare for exams independently, moving step by step from studying the material to checking and reviewing knowledge.',
      c3Stage1: 'Study',
      c3Stage2: 'Practice',
      c3Stage3: 'Check',
      c3Stage4: 'Review',
      c3BenchText:
        'I benchmarked direct and indirect competitors and analysed user reviews, exam content and question types.',
      c3Bench1: 'Direct competitors',
      c3Bench2: 'Indirect competitors',
      c3Bench3: 'User reviews',
      c3Bench4: 'Exam content',
      c3Bench5: 'Question types',
      c3HypText1:
        'Based on the research, I formed the first product hypotheses: how to connect preparation with learning materials, which task formats to use, how to organise the review of weak topics, and what role a game mechanic could play.',
      c3HypText2:
        'The hypotheses were built into the first versions of the service and are being tested with real users. Testing results are used to iterate the scenarios and make the next product decisions.',
      c3ProcessLabel: 'Hypothesis-driven process',
      c3Proc1: 'Research',
      c3Proc2: 'Hypotheses',
      c3Proc3: 'Product versions',
      c3Proc4: 'User testing',
      c3Proc5: 'Iteration',
      c3D1Title: 'Information architecture & core flows',
      c3D1Text:
        'Designed the app structure and core self-study scenarios: theory study, task completion, knowledge checks, weak topic review, and work with learning materials.',
      c3D1Alt1: 'Course overview with lesson cards and completion badges',
      c3D1Alt2: 'Theory screen with lesson text and a continue button',
      c3D1Alt3: 'Quiz screen with a multiple-choice question and answer options',
      c3D1Alt4: 'Quiz screen with a multiple-choice question and answer options',
      c3D2Title: 'Learning task formats',
      c3D2Text:
        'Developed varied task types and interface states for practice, theory, and exam scenarios — accounting for the specifics of real exam formats.',
      c3D3Title: 'Learning materials',
      c3D3Text:
        'Designed a preparation scenario based on uploaded textbooks and other materials, so tasks are connected to the content the student is actually studying.',
      c3D4Title: 'Review & mistakes',
      c3D4Text:
        'Built scenarios where task results feed into subsequent review of difficult topics and additional practice sessions.',
      c3D5Title: 'Gamification',
      c3D5Text:
        'Added a simple reward system: completing tasks earns loot boxes. The game mechanic acts as an additional motivation for regular study without becoming a standalone product feature.',
      c3D6Title: 'Design system',
      c3D6Text:
        'Created the app design system: components, variants, states, and reusable UI patterns that enable consistent product growth and interface scaling.',
      c3TestingTitle: 'Testing',
      c3Stat1Label: 'school students',
      c3Stat2Label: 'years old',
      c3TestingText:
        'The first versions of the service are being tested with a group of 7 school students aged 6-13. Testing helps verify how clear the scenarios are, how students interact with the tasks, and how they respond to different product mechanics.',
      c3Finding1:
        'Testing checks how clear the scenarios are and how students interact with the tasks in real conditions of use.',
      c3Finding2:
        'Users’ reactions to the product mechanics are recorded and feed into the following iterations.',
      c3Finding3: 'Testing results set the priorities for developing the product scenarios.',
      c3IterationTitle: 'Product iteration',
      c3IterationText:
        'Testing results are used to iterate the scenarios and make the next product decisions.',
      c3It1: 'Test',
      c3It2: 'Observe',
      c3It3: 'Learn',
      c3It4: 'Iterate',
      c3ConstraintsText:
        'The service is available to users who have their own access to the API of the AI model it uses.',
      lightboxLabel: 'Illustration view',
      lightboxClose: 'Close',
      backToTopAria: 'Back to top'
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
      card1Title: 'Логистическая CRM',
      card1Desc: 'CRM для управления транспортными операциями и ежедневными задачами логистической команды.',
      card1Alt: 'Превью проекта «Логистическая CRM»',
      card2Title: 'Симулятор производственной линии',
      card2Desc:
        'Интерфейс симуляции: настройка производственных линий, анализ показателей и сравнение сценариев улучшений.',
      card2Alt: 'Превью проекта «Симулятор производственной линии»',
      card3Title: 'Martin Exam — подготовка к экзаменам с ИИ',
      card3Desc: 'Мобильное приложение с ИИ для самостоятельной подготовки к экзаменам.',
      card3Alt: 'Превью проекта «Martin Exam»',
      heroMediaAria: 'Шоурил',
      copyright: '© 2026 Земфира Нургалеева',
      copiedLabel: 'Скопировано!',
      mailLabel: 'Почта',
      copyEmailAria: 'Скопировать адрес электронной почты',

      /* ----- about page (about.html) — RU body copy verbatim from the design ----- */
      aboutDocTitle: 'Обо мне — Земфира Нургалеева',
      aboutDocDescription:
        'Обо мне — Земфира Нургалеева, UX/UI-дизайнер, специализирующийся на дизайн-системах и сложных цифровых продуктах.',
      aboutContactLink: 'Связаться со мной',
      aboutTitle: 'Обо мне',
      aboutQuote: '“Я проектирую системы<br>от исследований до масштабируемого интерфейса”',
      aboutIntro:
        'Я — Product UX/UI-дизайнер с фокусом на сложные цифровые продукты и дизайн-системы, у меня 2 года коммерческого опыта.',
      aboutList:
        '<p>— разбираю требования и ограничения</p><p>— строю пользовательские сценарии и информационную архитектуру</p><p>— проектирую интерфейсы и состояния</p><p>— собираю прототипы</p><p>— проектирую и развиваю дизайн-системы</p><p>— описываю компоненты и их состояния</p><p>— работаю с типографикой, токенами и структурой</p><p>— думаю про масштабируемость и поддержку продукта</p><p>— упрощаю сложные пользовательские пути</p>',
      aboutBody1:
        'Часто мои задачи связаны с продуктами, в которых много логики: личные кабинеты, сервисы с верификацией, таблицы, формы и много состояний. В таких проектах я уделяю особое внимание структуре и консистентности, чтобы интерфейс оставался управляемым при росте.',
      aboutBody2:
        'До дизайна я работала переводчиком с китайского языка и в международной торговле. Это довольно далёкий от дизайна опыт, но именно благодаря этому опыту я могу структурировать большой объём информации, замечать детали и разбираться в незнакомой предметной области.',
      aboutBody3:
        'Сейчас я учусь на 2 курсе бакалавриата по направлению «Графический дизайн» и параллельно работаю над коммерческими цифровыми продуктами.',
      aboutBody4: 'Знаю Figma и ее продукты, Affinity, основы HTML/CSS',
      aboutBody5:
        'Мне интересно выстраивать целостные системы: продумывать компоненты, их состояния, логику и поведение в разных сценариях. Я работаю с интерфейсами как с конструктором — где каждая деталь должна быть понятной, переиспользуемой и масштабируемой.',

      /* ----- case study: Logistics CRM (projects/logistics-crm.html) ----- */
      caseDocTitle: 'Логистическая CRM — Земфира Нургалеева',
      caseDocDescription:
        'Кейс «Логистическая CRM» — CRM для управления транспортными операциями, дизайн: Земфира Нургалеева.',
      caseEyebrow: 'Продуктовый дизайн · UX/UI',
      caseTitle: 'Логистическая CRM',
      caseLead: 'CRM для управления транспортными операциями и ежедневными задачами логистической команды.',
      caseGoalLabel: 'Цель',
      caseGoal:
        'Создать практичный рабочий интерфейс для обработки перевозок и параллельной работы с несколькими задачами.',
      caseMediaAlt: 'Интерфейс карточки перевозки в Логистической CRM',
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
      researchTitle: 'Исследование',
      researchP1:
        'Чтобы понять текущий рабочий процесс пользователей, я провела интервью с потенциальными пользователями продукта.',
      researchP2:
        'Исследование показало, что информация о логистических процессах распределена между несколькими инструментами. Из-за этого даже один рабочий сценарий требовал постоянных переключений между разными источниками информации.',
      researchToolsTitle: 'Текущий набор инструментов',
      researchTool1: 'Excel',
      researchTool1Desc: 'Основной источник информации о перевозках и текущих операциях',
      researchTool2: 'Папки',
      researchTool2Desc: 'Хранение документов',
      researchTool3: 'Мессенджеры',
      researchTool3Desc: 'Рабочее общение',
      researchTool4: 'Почта',
      researchTool4Desc: 'Обмен документами',
      researchCallout: 'На основе интервью мы сформулировали первые продуктовые гипотезы.',
      researchHypLabel: 'Первичные гипотезы',
      hyp1Title: 'Единое рабочее пространство перевозки',
      hyp1Text:
        'Если основная информация о перевозке собрана в одном интерфейсе, пользователю нужно меньше переключений между инструментами, а операционные задачи выполняются быстрее.',
      measureLabel: 'Как измерить',
      hyp1M1: 'Количество переключений между инструментами в рамках сценария',
      hyp1M2: 'Время выполнения типового сценария',
      hyp1M3: 'Количество действий, необходимых для поиска нужной информации',
      hyp2Title: 'Документы в контексте перевозки',
      hyp2Text:
        'Если документы доступны прямо из карточки перевозки, пользователь быстрее находит нужный файл и меньше зависит от папок на своём компьютере.',
      hyp2M1: 'Время поиска документа',
      hyp2M2: 'Количество действий, необходимых для открытия нужного документа',
      hyp2M3: 'Доля документов, найденных без посторонней помощи',
      researchIterLabel: 'Гипотезы после итераций',
      researchIterText:
        'Дополнительные гипотезы появились в ходе нескольких итераций прототипа и на основе обратной связи пользователей.',
      hyp3Title: 'Срочность и статусы как сигналы приоритета',
      hyp3Text:
        'Если статус перевозки показывает и её текущее состояние, и срочность, пользователь быстрее определяет, какие перевозки требуют внимания в первую очередь.',
      hyp3M1: 'Время определения приоритетной перевозки',
      hyp3M2: 'Количество ошибок при выборе перевозки, требующей внимания',
      hyp3M3: 'Время определения следующего действия после открытия списка перевозок',
      hyp4Title: 'Все перевозки на одном экране',
      hyp4Text:
        'Если номера всех перевозок видны на одном экране и между ними можно быстро переключаться, работать с несколькими перевозками проще — без возврата к общему списку и потери контекста.',
      hyp4M1: 'Время переключения между перевозками',
      hyp4M2: 'Количество действий для перехода от одной перевозки к другой',
      hyp4M3: 'Количество возвратов к общему списку',
      hyp4M4:
        'Успешное прохождение сценария, требующего последовательной работы с несколькими перевозками',
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
      case2DocTitle: 'Симулятор производственной линии — Земфира Нургалеева',
      case2DocDescription:
        'Кейс «Симулятор производственной линии» — B2B-интерфейс симуляции производственных линий, дизайн: Земфира Нургалеева.',
      case2Eyebrow: 'UX/UI-дизайн',
      case2Title: 'Симулятор производственной линии',
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
      c2s1Shot1Alt: 'Экран исходных данных: панель загруженных файлов и редактируемая таблица артикулов и тарифов',
      c2s1Shot2Alt: 'Экран настройки расчёта: выбор лимитирующей станции, длительность смены и ставки оплаты труда',
      c2s1Shot3Alt: 'Дашборд результатов симуляции: KPI-карточки, диаграмма пропускной способности станций с красным узким местом и таблица показателей',
      c2s1Shot4Alt: 'Экран сценариев улучшений: сравнение базового сценария с альтернативами и выделенная рекомендация',
      c2s2Title: 'Три решения, которые сформировали продуктовый опыт',
      c2d1Label: 'Решение 01',
      c2d1Title: 'Редактирование там, где видны данные',
      c2d1Text:
        'Настройка производственной линии содержит много взаимозависимых значений. Я использовала инлайн-редактирование, чтобы менять данные прямо в контексте, не открывая отдельные диалоги.',
      c2d1Alt: 'Дашборд результатов: KPI-карточки, диаграмма пропускной способности станций, панель утилизации и структура затрат смены; узкое место выделено красным',
      c2d2Label: 'Решение 02',
      c2d2Title: 'Сократить путь от действия до результата',
      c2d2TextA: 'Модель создана для быстрых экспериментов, поэтому процесс построен вокруг автоматического пересчёта.',
      c2d2TextB: 'Каждое изменение сразу обновляет KPI, индикаторы узких мест и графики.',
      c2d2Alt: 'Детализация узкого места: шкалы утилизации станций, структура затрат смены и карточка узкого места со 100% утилизацией',
      c2d3Label: 'Решение 03',
      c2d3Title: 'Сделать узкое место видимым',
      c2d3Text:
        'Узкое место — ключевой результат модели: станция с минимальной производительностью определяет мощность всей линии. Я показала его одновременно на трёх уровнях — в таблице, KPI и графике, — превратив в визуальный якорь, а не значение внутри расчёта.',
      c2d3Alt: 'Таблица операций со шкалами утилизации и красными строками узкого места, ниже — таблица вспомогательных операций',
      c2s2Shot1Alt: 'Экран операций: таблицы основных и вспомогательных операций, строки узкого места выделены красным',
      c2s2Shot2Alt: 'Экран настройки расчёта: выбор лимитирующей станции, длительность смены и ставки оплаты труда',
      c2s3Title: 'Результат должен подсказывать, что делать дальше',
      c2s3MediaAlt: 'Экран сравнения сценариев: таблица сценариев улучшений и выделенная рекомендация',
      c2s3ResultTitle: 'Продуктовый результат',
      c2r1Name: 'Демо запущено',
      c2r1Text: 'Симулятор производственной линии спроектирован, разработан и выпущен в виде рабочего демо.',
      c2r2Name: 'Узкие места стали видимыми',
      c2r2Text:
        'Узкое место производства сделано наглядным визуальным элементом интерфейса: пользователь сразу видит ограничивающую станцию и её влияние.',
      c2r3Name: 'Данные стали основой для решений',
      c2r3Text:
        'Большие объёмы взаимозависимых производственных данных структурированы в понятные таблицы, KPI и визуализации.',
      c2r4Name: 'Предсказуемые дальнейшие действия',
      c2ConstraintsText:
        'Продукт разрабатывался как демо/MVP, поэтому часть расчётных и оптимизационных механик упрощена. При этом интерфейс должен был поддерживать реалистичные сценарии работы: большие редактируемые таблицы, импорт из Excel, валидацию и автоматический пересчёт.',

      /* ----- case study: Martin Exam (projects/martin-exam.html) ----- */
      case3DocTitle: 'Martin Exam — Земфира Нургалеева',
      case3DocDescription:
        'Кейс «Martin Exam» — мобильное приложение с ИИ для самостоятельной подготовки к экзаменам, дизайн: Земфира Нургалеева.',
      c3Tag: 'EdTech · ИИ · Мобильное приложение',
      c3Duration: '2026 — в разработке',
      c3Title: 'Martin Exam',
      c3Lead: 'Подготовка к экзаменам с ИИ для самостоятельного обучения',
      c3Desc:
        'Martin Exam — сервис с ИИ для школьников, которые готовятся к экзаменам самостоятельно. Приложение помогает изучать материал, выполнять задания по учебникам, проверять знания и повторять сложные темы без постоянной помощи учителя.',
      c3HeroAlt1: 'Главный экран Martin Exam: план на день и список уроков с датами',
      c3HeroAlt2: 'Экран курса со списком уроков и их статусом прохождения',
      c3HeroAlt3: 'Экран заданий с фильтрами по датам и карточками заданий с дедлайнами',
      c3RoleLabel: 'UX',
      c3Role1: 'Продуктовый дизайнер · UX/UI',
      c3Role2: 'Дизайн-система',
      c3TypeLabel: 'Тип продукта',
      c3Type1: 'EdTech',
      c3Type2: 'ИИ · мобильное приложение',
      c3StatusLabel: 'Статус',
      c3Status1: 'В тестировании',
      c3Status2: 'Итерация',
      c3GoalTitle: 'Цель проекта',
      c3GoalText:
        'Создать мобильное приложение, которое позволяет школьнику самостоятельно готовиться к экзаменам и последовательно проходить путь от изучения материала до проверки и повторения знаний.',
      c3Stage1: 'Изучение',
      c3Stage2: 'Практика',
      c3Stage3: 'Проверка',
      c3Stage4: 'Повторение',
      c3BenchText:
        'Я провела бенчмаркинг прямых и косвенных конкурентов, проанализировала отзывы пользователей, содержание экзаменов и типы вопросов.',
      c3Bench1: 'Прямые конкуренты',
      c3Bench2: 'Косвенные конкуренты',
      c3Bench3: 'Отзывы пользователей',
      c3Bench4: 'Содержание экзаменов',
      c3Bench5: 'Типы вопросов',
      c3HypText1:
        'На основе исследования сформировала первые продуктовые гипотезы: как связать подготовку с учебными материалами, какие форматы заданий использовать, как организовать повторение слабых тем и какую роль может играть игровая механика.',
      c3HypText2:
        'Гипотезы были заложены в первые версии сервиса и проверяются на реальных пользователях. Результаты тестирования используются для итерации сценариев и принятия следующих продуктовых решений.',
      c3ProcessLabel: 'Процесс на гипотезах',
      c3Proc1: 'Исследование',
      c3Proc2: 'Гипотезы',
      c3Proc3: 'Версии продукта',
      c3Proc4: 'Тестирование',
      c3Proc5: 'Итерация',
      c3D1Title: 'Информационная архитектура и основные сценарии',
      c3D1Text:
        'Спроектировала структуру приложения и основные сценарии самостоятельной подготовки: изучение теории, выполнение заданий, проверку знаний, повторение слабых тем и работу с учебными материалами.',
      c3D1Alt1: 'Экран курса: карточки уроков со статусами прохождения',
      c3D1Alt2: 'Экран теории: текст урока и кнопка продолжения',
      c3D1Alt3: 'Экран квиза: вопрос с вариантами ответа',
      c3D1Alt4: 'Экран квиза: вопрос с вариантами ответа',
      c3D2Title: 'Форматы учебных заданий',
      c3D2Text:
        'Разработала разные типы заданий и состояния интерфейса для практики, теории и экзамена — с учётом специфики реальных форматов экзаменов.',
      c3D3Title: 'Учебные материалы',
      c3D3Text:
        'Спроектировала сценарий подготовки на основе загруженных учебников и других материалов, чтобы задания были связаны с тем, что школьник реально изучает.',
      c3D4Title: 'Повторение и ошибки',
      c3D4Text:
        'Выстроила сценарии, в которых результаты заданий влияют на последующее повторение сложных тем и дополнительные тренировки.',
      c3D5Title: 'Геймификация',
      c3D5Text:
        'Добавила простую систему вознаграждений: за выполнение заданий начисляются лутбоксы. Игровая механика служит дополнительной мотивацией заниматься регулярно, не превращаясь в отдельную функцию продукта.',
      c3D6Title: 'Дизайн-система',
      c3D6Text:
        'Создала дизайн-систему приложения: компоненты, варианты, состояния и переиспользуемые UI-паттерны, которые поддерживают целостное развитие продукта и масштабирование интерфейса.',
      c3TestingTitle: 'Тестирование',
      c3Stat1Label: 'школьников',
      c3Stat2Label: 'лет',
      c3TestingText:
        'Первые версии сервиса тестируются на группе из 7 школьников в возрасте 6-13 лет. Тестирование помогает проверять понятность сценариев, взаимодействие с заданиями и реакцию пользователей на различные механики продукта.',
      c3Finding1:
        'Тестирование проверяет понятность сценариев и взаимодействие с заданиями в реальных условиях использования.',
      c3Finding2:
        'Реакция пользователей на механики продукта фиксируется и используется для следующих итераций.',
      c3Finding3: 'Результаты тестирования определяют приоритеты в развитии продуктовых сценариев.',
      c3IterationTitle: 'Итерация продукта',
      c3IterationText:
        'Результаты тестирования используются для итерации сценариев и принятия следующих продуктовых решений.',
      c3It1: 'Тест',
      c3It2: 'Наблюдение',
      c3It3: 'Выводы',
      c3It4: 'Итерация',
      c3ConstraintsText:
        'Сервис доступен пользователям, у которых есть собственный доступ к API используемой ИИ-модели.',
      lightboxLabel: 'Просмотр иллюстрации',
      lightboxClose: 'Закрыть',
      backToTopAria: 'Наверх'
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

    /* data-i18n-html — same contract, but swaps innerHTML for strings
       that mix regular and bold runs (<strong>). Only STRINGS values
       (authored below) ever land here, never user input. */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
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

  /* Size the image to the largest rectangle its aspect ratio allows
     inside the overlay's content box — small sources (solution-card
     thumbnails) scale up, large ones scale down. The element box must
     equal the painted bitmap, or the CSS border-radius and box-shadow
     land on the letterbox instead of the image (object-fit: contain
     alone cannot guarantee that). Runs on open, on load (the src swap
     may still be decoding) and on window resize. */
  function fit() {
    var nw = image.naturalWidth;
    var nh = image.naturalHeight;
    if (!nw || !nh) return; /* src not decoded yet — the CSS clamp holds */

    var styles = getComputedStyle(lightbox);
    var availW = lightbox.clientWidth
      - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    var availH = lightbox.clientHeight
      - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
    var scale = Math.min(availW / nw, availH / nh);

    image.style.width = Math.round(nw * scale) + 'px';
    image.style.height = Math.round(nh * scale) + 'px';
  }

  image.addEventListener('load', fit);
  window.addEventListener('resize', fit);

  function open(trigger) {
    image.src = trigger.currentSrc || trigger.src;
    image.alt = trigger.alt;
    lastTrigger = trigger;
    fit();
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
    img.addEventListener('click', function (event) {
      /* an image may sit inside a link (e.g. the solution-card thumbs):
         zooming in must not also fire the link's anchor jump */
      event.preventDefault();
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

/* ============================================================
   Back-to-top button (all pages)
   The floating button is revealed only while the footer is on
   screen: an IntersectionObserver on .footer toggles
   .to-top--visible. Clicking scrolls to the very top of the page —
   smoothness comes from the global html { scroll-behavior } (which
   already honours prefers-reduced-motion), so no behavior is forced.
   ============================================================ */
(function () {
  'use strict';

  var button = document.querySelector('.to-top');
  var footer = document.querySelector('.footer');
  if (!button || !footer) return;

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var entry = entries[entries.length - 1];
      button.classList.toggle('to-top--visible', entry.isIntersecting);
    }).observe(footer);
  } else {
    button.classList.add('to-top--visible'); /* ancient browser: keep it always available */
  }

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0 }); /* behavior "auto" defers to the CSS scroll-behavior */
  });
})();
