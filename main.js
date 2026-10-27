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
      svc2: 'B2B, SaaS & Educational Products',
      heroContact: 'Contact me',
      svc3: 'User Flows & Information Architecture',
      svc4: 'Design Systems & UI Libraries',
      svc5: 'Prototyping & Interaction Design',
      projectsLink: 'Projects',
      previousProject: 'Previous Project',
      nextProject: 'Next Project',
      projectNavigationAria: 'Project navigation',
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
      card4Title: 'Martin Exam — Product Growth',
      card4Desc: 'Improving engagement through gamification and learning experiences.',
      card4Alt: 'Martin Exam product growth project preview',
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
      aboutQuote: '“I love designing systems.<br>I’m curious, pragmatic and thorough.”',
      aboutIntro:
        'I am a Product UX/UI designer focused on complex digital products and design systems, with 2 years of commercial experience.',
      aboutList:
        '<p>— analyze requirements and constraints</p><p>— build user scenarios and information architecture</p><p>— design interfaces and states</p><p>— build prototypes</p><p>— design and develop design systems</p><p>— work with typography, tokens and structure</p><p>— think about scalability and product maintenance</p><p>— simplify complex user journeys</p>',
      aboutBody1:
        'My work often involves products with a lot of logic: customer portals, verification services, tables, forms and many states. In projects like these I pay special attention to structure and consistency, so the interface stays manageable as it grows.',
      aboutBody2:
        'Before design, I worked as a Chinese-language translator and in international trade. It is experience far removed from design, but exactly this background lets me structure large volumes of information, notice details and get up to speed in unfamiliar domains.',
      aboutBody3:
        "I am currently in my second year of a Graphic Design bachelor's programme, working on commercial digital products in parallel.",
      aboutBody4: 'I work with Figma and its products, Affinity, and know the basics of HTML/CSS. I actively use AI agents; this website was built by AI agents.',
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
        'Twinity is a B2B product for simulating production lines. The MVP had already been launched and the product was in use. The next stage was to further develop the product and explore new use cases based on conversations with potential users.',
      case2Goal:
        'Identify valuable user needs and translate them into new product capabilities and use cases that could be integrated into the existing product.',
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
      c2s2Title: 'Outcome',
      c2d1Label: 'Decision 01',
      c2d1Title: 'Edit where you see the data',
      c2d1Text:
        'Production-line configuration contains many interdependent values. I used inline editing so users could modify data directly in context instead of opening separate dialogs.',
      c2d1Alt: 'Editable contractor resources and weekly production plan tables',
      c2d2Label: 'Decision 02',
      c2d2Title: 'Shorten the distance between action and result',
      c2d2TextA:
        'Because the model is intended for rapid experimentation, the workflow was designed around automatic recalculation.',
      c2d2TextB: 'Every change triggers an immediate update across KPIs, bottleneck indicators and charts.',
      c2d2Alt: 'Results dashboard with throughput chart, station utilisation and shift cost breakdown',
      c2d3Label: 'Decision 03',
      c2d3Title: 'Make the bottleneck visible',
      c2d3Text:
        'The bottleneck is a key output of the model: the station with the lowest throughput determines the production capacity. I surfaced it at three levels simultaneously — table, KPI and chart — so it becomes a visual anchor rather than a value hidden inside a calculation.',
      c2d3Alt: 'Bottleneck detail with utilisation bars, cost structure and bottleneck KPI',
      c2s2Shot1Alt: 'Operations view with the main and auxiliary operations tables and bottleneck rows highlighted in red',
      c2s2Shot2Alt: 'Calculation settings screen with the limiting station selector, shift duration and labour rates',
      c2s3Title: 'The result should explain what to do next',
      c2s3MediaAlt: 'Scenario comparison screen with a table of improvement scenarios and the recommended option highlighted',
      c2s3ResultTitle: 'Product Outcome',
      c2r1Name: 'Demo launched',
      c2r1Text:
        'Instead of building a new MVP, I designed new product capabilities for an already functioning platform.',
      c2r2Name: 'Bottlenecks became visible',
      c2r2Text:
        'One of the resulting scenarios enables users to analyze a production line, identify its bottleneck, and understand its impact on output, production time, and costs.',
      c2r3Name: 'Production data became actionable',
      c2r3Text: 'The work provided a foundation for discussing and developing further product scenarios.',
      c2r4Name: 'Predictable next actions',
      c2ConstraintsText:
        'The product was developed as a demo/MVP, so some calculation and optimisation mechanics were simplified. The interface still had to support realistic workflows, including large editable tables, Excel import, validation and automatic recalculation.',
      c2RoleItem1: 'Analyzed the tasks and needs of potential users',
      c2RoleItem2: 'Formed product hypotheses',
      c2RoleItem3: 'Explored and developed possible product models',
      c2RoleItem4: 'Translated hypotheses into concrete user scenarios',
      c2RoleItem5: 'Designed UX/UI for new product capabilities',
      c2ApproachTitle: 'Approach',
      c2Approach1:
        'Based on conversations with potential users, I worked with the team to form hypotheses about which problems the product could solve and which product models could provide value.',
      c2Approach2:
        'We then explored several possible directions for extending the product to understand how they could work in practice and which scenarios should be reflected in the interface.',
      c2Approach3:
        'One of the explored models focused on production line analysis. The scenario was built around identifying the bottleneck and evaluating its impact on key production metrics, including output per shift, production time, cost, and cost structure.',
      c2TeamTitle: 'What our team did',
      c2Team1: 'Formed hypotheses about new product directions',
      c2Team2: 'Explored possible product models and use cases',
      c2Team3: 'Designed a production line simulation scenario',
      c2Team4: 'Defined how key production metrics should be presented',
      c2Team5: 'Designed UX/UI and key interface states',
      c2Team6: 'Integrated the new scenario into the logic of the existing product',
      c2ComparisonLead:
        'Made improvement scenarios easy to compare, helping users understand the expected impact of each change and choose the most effective option.',
      c2Constraint1:
        'The hypotheses were formed through conversations with potential users and required further validation with real users',
      c2Constraint2:
        'This case focuses on one of the explored product models rather than all possible directions for product development.',
      c2Constraint3:
        'The scenario was developed using simulated production data rather than data from real production environments.',




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
      c3D1Alt1: 'Student profile screen',
      c3D1Alt2: 'Student profile editing screen',
      c3D1Alt3: 'Weekly study tasks screen',
      c3D1Alt4: 'Empty tasks screen',
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
      c4VideoProblem2: 'The homepage is intentionally focused on one priority scenario: quickly starting a task. Moving videos higher could compete with the main learning flow.',
      c4ExperimentTitle: 'Experiment structure',
      c4CompareBehavior: 'Compare behavior',
      c4AltResult: 'Task results with a contextual video recommendation',
      c4AltFloating: 'Home screen with the floating Martin video entry point',
      c4AltVideoLibrary: 'Video lesson library reached from the recommendation',
      case4DocTitle: 'Martin Exam — Product Growth — Zemfira Nurgaleeva',
      case4DocDescription: 'Martin Exam case study: product growth through gamification and learning experiences.',
      c4Tag: 'EdTech · AI · Mobile', c4Duration: '2026 — Ongoing',
      c4Title: 'Martin Exam — Product Growth & Learning Experience',
      c4Lead: 'Product Designer · UX/UI · EdTech · AI-powered exam preparation · Mobile',
      c4Desc: 'Martin Exam is an AI-powered service for school students preparing independently for exams. The app helps students study material, complete textbook-based tasks, check their knowledge, and review difficult topics without constant teacher assistance.',
      c4HeroAlt1: 'Martin Exam mobile app mockup', c4HeroAlt2: 'Martin Exam mobile app mockup',
      c4ContextLabel: 'Context', c4ContextTitle: 'What it is',
      c4ContextText: 'Martin Exam is an existing AI-powered exam preparation service for school students. At this stage, my task was not to create a product from scratch, but to identify growth opportunities based on real user behavior and testing new product solutions.',
      c4GamificationTitle: 'Gamification', c4ProblemLabel: 'Problem',
      c4ProblemText: 'During testing with school students, it became clear that some loot boxes and rewards did not generate enough interest. When a reward is not perceived as valuable, additional motivation to complete tasks decreases.',
      c4HypothesisLabel: 'Hypothesis', c4HypothesisText: 'If we add more competition and interaction between users, the game mechanic will become more engaging and motivation to continue learning will increase.',
      c4ValidateLabel: 'How to validate', c4ValidateText: 'Compare user groups using behavioral metrics such as return frequency, number of completed tasks, session duration, and interaction with the gamification mechanics.',
      c4DoneLabel: 'What was done', c4DoneText: 'Redesigned the loot box mechanic around competition and social interaction. The reward became not only something the user receives, but also part of an interaction between users.',
      c4Flow1Title: 'Interaction flow 1', c4Flow1Text: 'The social loot box mechanic turns a solitary reward into a shared interaction — users can send a «thief» to a friend’s collection, and the friend must complete a quick task to defend their loot. This creates a reason to return to the app even outside planned study sessions.',
      c4Step1a: 'Collection', c4Step2a: 'Choose a friend', c4Step3a: 'Send a thief', c4Step4a: 'Loot at risk!',
      c4AnimationSender: 'sent by Katya',
      c4AnimationMessage: 'A squirrel is running to steal your card!',
      c4ToggleAnimation: 'Pause or resume animation',
      c4AltCollection: 'Awards collection screen', c4AltFriends: 'Friends list', c4AltThief: 'Thief selection screen', c4AltWarning: 'Loot warning screen',
      c4Flow2Title: 'Interaction flow 2', c4Flow2Text1: 'Students can earn cards by completing tasks or earn feathers as an in-app currency to purchase cards. They can then send collected cards as gifts to friends.',
      c4Flow2Text2: 'Once a card is gifted, the student can earn it again by completing more tasks, creating a repeatable loop between learning, collecting, and social interaction.',
      c4Step1b: 'Complete tasks', c4Step2b: 'Collect or purchase cards', c4Step3b: 'Gift a card to a friend', c4Step4b: 'Earn another card!',
      c4AltTask: 'Completed task screen', c4AltAwards: 'Rewards page', c4AltGift: 'Sending a gift', c4AltGiftSent: 'Gift sent confirmation',
      c4GamifyValidateTitle: 'How to validate',
      c4GamifyValidateText1: 'The hypothesis can be evaluated through task completion, card collection and gifting activity, repeat engagement with the mechanic, and return sessions.',
      c4GamifyValidateText2: 'The goal is to understand whether social gifting creates additional motivation to learn, rather than simply increasing interaction with rewards.',
      c4VideoTitle: 'Video as an additional entry point to learning',
      c4VideoProblem: 'The app contains video lessons that help students understand difficult topics, but the video section is placed below the main content and users rarely reach it.',
      c4VideoHypothesis: 'If we add subtle entry points to video without changing the priority of the main scenario, video views will increase without negatively affecting task completion.',
      c4ConceptsTitle: 'Two solution concepts', c4ConceptA: 'Contextual recommendation',
      c4ConceptAText: 'After completing a task or test, the user receives a recommendation to watch a short video lesson related to the topic.',
      c4ConceptB: 'Floating entry point', c4ConceptBText: 'A small floating Martin element appears on the homepage and recommends a relevant video lesson.',
      c4AltConceptA: 'Contextual video recommendation', c4AltConceptB: 'Floating video entry point',
      c4ABTitle: 'A/B test', c4ABText: 'Both solutions can be tested using an A/B test. Users are split into two equal groups and exposed to different entry points for the same content.',
      c4AllUsers: 'All users', c4AfterTask: 'After task / test completion', c4OnHome: 'On homepage, always available',
      c4MetricsTitle: 'Metrics framework', c4PrimaryMetric: 'Primary metric', c4VideoViews: 'Video views',
      c4VideoViewsText: 'Unique video starts attributed to the entry point in each variant', c4Guardrail: 'Guardrail metrics',
      c4TaskCompletion: 'Task completion rate', c4TaskCompletionText: 'Ensure the main flow is not disrupted', c4TaskStarts: 'Task starts',
      c4TaskStartsText: 'Monitor intent to begin a learning session', c4ReturnSessions: 'Return sessions',
      c4ReturnSessionsText: 'Track whether engagement is sustained',
      c4Note: 'Note: The goal is not only to increase video views, but to make sure the additional video entry point does not negatively affect the main learning flow.',
      c4ConclusionTitle: 'The decision is based on behavior, not preference',
      c4ConclusionText: 'Both concepts solve the same problem from different moments in the user journey. Instead of choosing one based only on visual preference, the two approaches can be tested against the same product goal and compared using behavioral data.',
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
      svc2: 'B2B, SaaS и образовательные продукты',
      heroContact: 'Связаться со мной',
      svc3: 'Пользовательские сценарии и информационная архитектура',
      svc4: 'Дизайн-системы и UI-библиотеки',
      svc5: 'Прототипирование и интерактивные сценарии',
      projectsLink: 'Проекты',
      previousProject: 'Предыдущий проект',
      nextProject: 'Следующий проект',
      projectNavigationAria: 'Навигация по проектам',
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
      card4Title: 'Martin Exam — Product Growth',
      card4Desc: 'Повышение вовлечённости с помощью геймификации и улучшения учебного опыта.',
      card4Alt: 'Превью проекта о развитии Martin Exam',
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
      aboutQuote: '“Я люблю проектировать системы.<br>Я любознательна, прагматична и дотошна”',
      aboutIntro:
        'Я — Product UX/UI-дизайнер с фокусом на сложные цифровые продукты и дизайн-системы, у меня 2 года коммерческого опыта.',
      aboutList:
        '<p>— разбираю требования и ограничения</p><p>— строю пользовательские сценарии и информационную архитектуру</p><p>— проектирую интерфейсы и состояния</p><p>— собираю прототипы</p><p>— проектирую и развиваю дизайн-системы</p><p>— работаю с типографикой, токенами и структурой</p><p>— думаю про масштабируемость и поддержку продукта</p><p>— упрощаю сложные пользовательские пути</p>',
      aboutBody1:
        'Часто мои задачи связаны с продуктами, в которых много логики: личные кабинеты, сервисы с верификацией, таблицы, формы и много состояний. В таких проектах я уделяю особое внимание структуре и консистентности, чтобы интерфейс оставался управляемым при росте.',
      aboutBody2:
        'До дизайна я работала переводчиком с китайского языка и в международной торговле. Это довольно далёкий от дизайна опыт, но именно благодаря этому опыту я могу структурировать большой объём информации, замечать детали и разбираться в незнакомой предметной области.',
      aboutBody3:
        'Сейчас я учусь на 2 курсе бакалавриата по направлению «Графический дизайн» и параллельно работаю над коммерческими цифровыми продуктами.',
      aboutBody4: 'Знаю Figma и ее продукты, Affinity, основы HTML/CSS, активно использую ИИ-агенты, данный сайт сверстан ИИ-агентами.',
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
        'Twinity — B2B-продукт для симуляции производственных линий. MVP уже был запущен, и продукт использовался. Следующим этапом стало развитие продукта и поиск новых сценариев использования на основе разговоров с потенциальными пользователями.',
      case2Goal:
        'Выявить значимые потребности пользователей и перевести их в новые возможности и сценарии использования, которые можно встроить в существующий продукт.',
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
      c2s2Title: 'Результат',
      c2d1Label: 'Решение 01',
      c2d1Title: 'Редактирование там, где видны данные',
      c2d1Text:
        'Настройка производственной линии содержит много взаимозависимых значений. Я использовала инлайн-редактирование, чтобы менять данные прямо в контексте, не открывая отдельные диалоги.',
      c2d1Alt: 'Редактируемые таблицы ресурсов контрагентов и недельного производственного плана',
      c2d2Label: 'Решение 02',
      c2d2Title: 'Сократить путь от действия до результата',
      c2d2TextA: 'Модель создана для быстрых экспериментов, поэтому процесс построен вокруг автоматического пересчёта.',
      c2d2TextB: 'Каждое изменение сразу обновляет KPI, индикаторы узких мест и графики.',
      c2d2Alt: 'Дашборд с графиком пропускной способности, загрузкой станций и структурой затрат смены',
      c2d3Label: 'Решение 03',
      c2d3Title: 'Сделать узкое место видимым',
      c2d3Text:
        'Узкое место — ключевой результат модели: станция с минимальной производительностью определяет мощность всей линии. Я показала его одновременно на трёх уровнях — в таблице, KPI и графике, — превратив в визуальный якорь, а не значение внутри расчёта.',
      c2d3Alt: 'Детальный вид узкого места: загрузка станций, структура затрат и ключевой показатель',
      c2s2Shot1Alt: 'Экран операций: таблицы основных и вспомогательных операций, строки узкого места выделены красным',
      c2s2Shot2Alt: 'Экран настройки расчёта: выбор лимитирующей станции, длительность смены и ставки оплаты труда',
      c2s3Title: 'Результат должен подсказывать, что делать дальше',
      c2s3MediaAlt: 'Экран сравнения сценариев: таблица сценариев улучшений и выделенная рекомендация',
      c2s3ResultTitle: 'Продуктовый результат',
      c2r1Name: 'Демо запущено',
      c2r1Text: 'Вместо создания нового MVP я спроектировала новые возможности для уже работающей платформы.',
      c2r2Name: 'Узкие места стали видимыми',
      c2r2Text:
        'Один из полученных сценариев позволяет анализировать производственную линию, находить её узкое место и понимать его влияние на выпуск, время производства и затраты.',
      c2r3Name: 'Данные стали основой для решений',
      c2r3Text: 'Работа стала основой для обсуждения и развития дальнейших продуктовых сценариев.',
      c2r4Name: 'Предсказуемые дальнейшие действия',
      c2ConstraintsText:
        'Продукт разрабатывался как демо/MVP, поэтому часть расчётных и оптимизационных механик упрощена. При этом интерфейс должен был поддерживать реалистичные сценарии работы: большие редактируемые таблицы, импорт из Excel, валидацию и автоматический пересчёт.',
      c2RoleItem1: 'Проанализировала задачи и потребности потенциальных пользователей',
      c2RoleItem2: 'Сформировала продуктовые гипотезы',
      c2RoleItem3: 'Исследовала и проработала возможные продуктовые модели',
      c2RoleItem4: 'Перевела гипотезы в конкретные пользовательские сценарии',
      c2RoleItem5: 'Спроектировала UX/UI новых возможностей продукта',
      c2ApproachTitle: 'Подход',
      c2Approach1:
        'На основе разговоров с потенциальными пользователями мы с командой сформировали гипотезы о том, какие задачи может решать продукт и какие продуктовые модели могут быть полезны.',
      c2Approach2:
        'Затем мы исследовали несколько возможных направлений развития продукта, чтобы понять, как они могут работать на практике и какие сценарии нужно отразить в интерфейсе.',
      c2Approach3:
        'Одна из исследованных моделей была посвящена анализу производственной линии. Сценарий строился вокруг поиска узкого места и оценки его влияния на ключевые показатели: выпуск за смену, время производства, себестоимость и структуру затрат.',
      c2TeamTitle: 'Что сделала наша команда',
      c2Team1: 'Сформировали гипотезы о новых направлениях продукта',
      c2Team2: 'Исследовали возможные продуктовые модели и сценарии использования',
      c2Team3: 'Спроектировали сценарий симуляции производственной линии',
      c2Team4: 'Определили способ представления ключевых производственных показателей',
      c2Team5: 'Спроектировали UX/UI и ключевые состояния интерфейса',
      c2Team6: 'Встроили новый сценарий в логику существующего продукта',
      c2ComparisonLead:
        'Сделала сценарии улучшения удобными для сравнения, чтобы пользователи могли понять ожидаемый эффект каждого изменения и выбрать наиболее эффективный вариант.',
      c2Constraint1:
        'Гипотезы были сформированы на основе разговоров с потенциальными пользователями и требовали дальнейшей проверки на реальных пользователях',
      c2Constraint2:
        'Кейс посвящён одной из исследованных продуктовых моделей, а не всем возможным направлениям развития продукта.',
      c2Constraint3:
        'Сценарий был разработан на смоделированных производственных данных, а не на данных реальных производств.',




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
      c3D1Alt1: 'Экран профиля ученика',
      c3D1Alt2: 'Редактирование профиля ученика',
      c3D1Alt3: 'Задания на неделю',
      c3D1Alt4: 'Пустой список заданий',
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
      c4VideoProblem2: 'Главная страница намеренно сосредоточена на одном приоритетном сценарии: быстро начать задание. Если поднять видео выше, оно может конкурировать с основным учебным сценарием.',
      c4ExperimentTitle: 'Структура эксперимента',
      c4CompareBehavior: 'Сравнить поведение',
      c4AltResult: 'Результаты задания с контекстной рекомендацией видео',
      c4AltFloating: 'Главный экран с плавающим входом в видеоурок через Martin',
      c4AltVideoLibrary: 'Библиотека видеоуроков, открытая из рекомендации',
      case4DocTitle: 'Martin Exam — Product Growth — Земфира Нургалеева',
      case4DocDescription: 'Кейс Martin Exam: развитие продукта через геймификацию и улучшение учебного опыта.',
      c4Tag: 'EdTech · ИИ · Мобильное приложение', c4Duration: '2026 — в разработке',
      c4Title: 'Martin Exam — развитие продукта и учебного опыта',
      c4Lead: 'Продуктовый дизайнер · UX/UI · EdTech · Подготовка к экзаменам с ИИ · Мобильное приложение',
      c4Desc: 'Martin Exam — сервис с ИИ для школьников, которые готовятся к экзаменам самостоятельно. Приложение помогает изучать материал, выполнять задания по учебникам, проверять знания и повторять сложные темы без постоянной помощи учителя.',
      c4HeroAlt1: 'Макет мобильного приложения Martin Exam', c4HeroAlt2: 'Макет мобильного приложения Martin Exam',
      c4ContextLabel: 'Контекст', c4ContextTitle: 'О продукте',
      c4ContextText: 'Martin Exam — существующий сервис с ИИ для подготовки школьников к экзаменам. На этом этапе моей задачей было не создавать продукт с нуля, а находить возможности для роста на основе поведения пользователей и проверки новых продуктовых решений.',
      c4GamificationTitle: 'Геймификация', c4ProblemLabel: 'Проблема',
      c4ProblemText: 'Во время тестирования со школьниками стало понятно, что некоторые лутбоксы и награды не вызывают достаточного интереса. Если награда не воспринимается как ценная, дополнительная мотивация выполнять задания снижается.',
      c4HypothesisLabel: 'Гипотеза', c4HypothesisText: 'Если добавить больше соревнования и взаимодействия между пользователями, игровая механика станет интереснее, а мотивация продолжать обучение вырастет.',
      c4ValidateLabel: 'Как проверить', c4ValidateText: 'Сравнить группы пользователей по поведенческим метрикам: частоте возвращений, количеству выполненных заданий, длительности сессий и взаимодействию с механиками геймификации.',
      c4DoneLabel: 'Что было сделано', c4DoneText: 'Переработала механику лутбоксов, добавив соревнование и социальное взаимодействие. Награда стала не только тем, что получает пользователь, но и частью общения между пользователями.',
      c4Flow1Title: 'Сценарий взаимодействия 1', c4Flow1Text: 'Социальная механика лутбоксов превращает одиночную награду в совместное взаимодействие: пользователь может отправить «воришку» в коллекцию друга, а другу нужно выполнить короткое задание, чтобы защитить добычу. Это создаёт повод вернуться в приложение вне запланированных занятий.',
      c4Step1a: 'Коллекция', c4Step2a: 'Выбрать друга', c4Step3a: 'Отправить воришку', c4Step4a: 'Добыча под угрозой!',
      c4AnimationSender: 'отправлено Катей',
      c4AnimationMessage: 'Белка бежит украсть твою карточку!',
      c4ToggleAnimation: 'Приостановить или продолжить анимацию',
      c4AltCollection: 'Экран коллекции наград', c4AltFriends: 'Список друзей', c4AltThief: 'Выбор воришки', c4AltWarning: 'Предупреждение об угрозе коллекции',
      c4Flow2Title: 'Сценарий взаимодействия 2', c4Flow2Text1: 'Ученики могут получать карточки за выполнение заданий или покупать их за перья — внутриигровую валюту. Собранные карточки можно отправлять друзьям в подарок.',
      c4Flow2Text2: 'После отправки карточки ученик может получить её снова, выполняя новые задания. Так создаётся повторяемый цикл обучения, коллекционирования и социального взаимодействия.',
      c4Step1b: 'Выполнить задания', c4Step2b: 'Собрать или купить карточки', c4Step3b: 'Подарить карточку другу', c4Step4b: 'Получить ещё одну карточку!',
      c4AltTask: 'Экран выполненного задания', c4AltAwards: 'Страница наград', c4AltGift: 'Отправка подарка', c4AltGiftSent: 'Подтверждение отправки подарка',
      c4GamifyValidateTitle: 'Как проверить',
      c4GamifyValidateText1: 'Гипотезу можно оценить по выполнению заданий, сбору и отправке карточек, повторному взаимодействию с механикой и возвращениям в приложение.',
      c4GamifyValidateText2: 'Важно понять, мотивируют ли социальные подарки учиться, а не просто увеличивают взаимодействие с наградами.',
      c4VideoTitle: 'Видео как дополнительный вход в обучение',
      c4VideoProblem: 'В приложении есть видеоуроки, которые помогают разобраться в сложных темах, но раздел с видео расположен ниже основного контента, и пользователи редко до него доходят.',
      c4VideoHypothesis: 'Если добавить ненавязчивые точки входа в видео, не меняя приоритет основного сценария, просмотры видео вырастут без негативного влияния на выполнение заданий.',
      c4ConceptsTitle: 'Два варианта решения', c4ConceptA: 'Контекстная рекомендация',
      c4ConceptAText: 'После выполнения задания или теста пользователь получает рекомендацию посмотреть короткий видеоурок по теме.',
      c4ConceptB: 'Плавающая точка входа', c4ConceptBText: 'На главной появляется небольшой плавающий элемент Martin с рекомендацией подходящего видеоурока.',
      c4AltConceptA: 'Контекстная рекомендация видео', c4AltConceptB: 'Плавающий вход в видеоурок',
      c4ABTitle: 'A/B-тест', c4ABText: 'Оба решения можно проверить с помощью A/B-теста. Пользователи делятся на две равные группы и видят разные точки входа к одному и тому же контенту.',
      c4AllUsers: 'Все пользователи', c4AfterTask: 'После задания или теста', c4OnHome: 'На главной, доступно всегда',
      c4MetricsTitle: 'Система метрик', c4PrimaryMetric: 'Основная метрика', c4VideoViews: 'Просмотры видео',
      c4VideoViewsText: 'Уникальные запуски видео, связанные с точкой входа в каждом варианте', c4Guardrail: 'Защитные метрики',
      c4TaskCompletion: 'Доля выполненных заданий', c4TaskCompletionText: 'Убедиться, что основной сценарий не нарушен', c4TaskStarts: 'Начало заданий',
      c4TaskStartsText: 'Отслеживать намерение начать учебную сессию', c4ReturnSessions: 'Повторные сессии',
      c4ReturnSessionsText: 'Проверять, сохраняется ли вовлечённость',
      c4Note: 'Важно не только увеличить просмотры видео, но и убедиться, что дополнительная точка входа не мешает основному учебному сценарию.',
      c4ConclusionTitle: 'Решение принимается по поведению, а не предпочтениям',
      c4ConclusionText: 'Оба решения закрывают одну проблему в разные моменты пользовательского пути. Вместо выбора по визуальным предпочтениям оба подхода можно проверить относительно одной продуктовой цели и сравнить по поведенческим данным.',
      lightboxLabel: 'Просмотр иллюстрации',
      lightboxClose: 'Закрыть',
      backToTopAria: 'Наверх'
    }
  };

  /* Label of the switch button per current language (= the other language). */
  var SWITCH_LABEL = { en: 'Русский язык', ru: 'English' };

  var STORAGE_KEY = 'lang';

  /* Keep short Russian function words with the following word. Work on
     text nodes, including adjacent inline runs, never on serialized HTML.
     Restore only our changes before switching languages. */
  var typographyChanges = [];
  var russianShortWord = /(?<![\p{L}\p{N}_-])(а|и|в|к|о|с|у|во|ко|со|об|обо|от|до|из|за|на|по|не|ни|но|да|или|без|для|над|под|при|про|из-за|из-под) (?=[«„“"(]*[\p{L}\p{N}])/giu;
  var textBoundary = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|BR|BUTTON|DD|DIV|DL|DT|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HR|LI|MAIN|NAV|OL|P|SECTION|TABLE|TD|TH|TR|UL)$/;
  var skipTypography = /^(SCRIPT|STYLE|NOSCRIPT|PRE|CODE|KBD|SAMP|TEXTAREA|INPUT|SELECT|SVG|MATH)$/;

  function restoreTypography() {
    typographyChanges.forEach(function (change) {
      if (change.node.nodeValue === change.formatted) change.node.nodeValue = change.original;
    });
    typographyChanges = [];
  }

  function applyRussianTypography(root) {
    var nodes = [];
    function flush() {
      var text = nodes.map(function (node) { return node.nodeValue; }).join('');
      var positions = [];
      russianShortWord.lastIndex = 0;
      var match;
      while ((match = russianShortWord.exec(text))) {
        positions.push(match.index + match[0].length - 1);
      }
      var offset = 0;
      nodes.forEach(function (node) {
        var original = node.nodeValue;
        var chars = original.split('');
        positions.forEach(function (position) {
          if (position >= offset && position < offset + original.length) chars[position - offset] = '\u00a0';
        });
        var formatted = chars.join('');
        if (formatted !== original) {
          typographyChanges.push({ node: node, original: original, formatted: formatted });
          node.nodeValue = formatted;
        }
        offset += original.length;
      });
      nodes = [];
    }
    function visit(node) {
      if (node.nodeType === 3) { nodes.push(node); return; }
      if (node.nodeType !== 1) return;
      if (skipTypography.test(node.tagName) || node.matches('[lang]:not([lang="ru"]), [contenteditable], [data-typography="off"]')) {
        flush();
        return;
      }
      var boundary = textBoundary.test(node.tagName);
      if (boundary) flush();
      node.childNodes.forEach(visit);
      if (boundary) flush();
    }
    visit(root);
    flush();
  }

  function applyLang(lang) {
    if (!STRINGS[lang]) lang = 'en';
    var dict = STRINGS[lang];
    restoreTypography();

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

    if (lang === 'ru') applyRussianTypography(document.body);

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
