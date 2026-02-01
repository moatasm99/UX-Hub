
import { Resource } from './types';

export const RESOURCES: Resource[] = [
  // ========== PART 1: RESEARCH ==========
  {
    cat: 'research',
    icon: '📚',
    title: 'اختبار الماما (The Mom Test)',
    titleEn: 'The Mom Test',
    type: 'book',
    desc: 'ازاي تتكلم مع العملاء وتعرف لو فكرة مشروعك فعلاً كويسة ولا لأ من غير ما يجاملوك.',
    descEn: 'How to talk to customers & learn if your business is a good idea when everyone is lying to you.',
    link: 'https://www.momtestbook.com/'
  },
  {
    cat: 'research',
    icon: '🎬',
    title: 'Agile vs Lean UX',
    titleEn: 'Agile vs Lean UX',
    type: 'video',
    desc: 'شرح مبسط من NN/g عن الفرق بين الاتنين في بيئة العمل الحديثة.',
    descEn: 'Simple explanation from NN/g about the difference between both in modern workflows.',
    link: 'https://www.nngroup.com/videos/lean-ux/'
  },
  {
    cat: 'research',
    icon: '📝',
    title: 'دليل مقابلات المستخدمين',
    titleEn: 'User Interviews Guide',
    type: 'article',
    desc: 'الدليل الشامل لإجراء مقابلات المستخدمين وطرح الأسئلة الصحيحة وتجنب الانحياز.',
    descEn: 'Comprehensive guide to conducting user interviews, asking right questions, and avoiding bias.',
    link: 'https://www.nngroup.com/articles/user-interviews/'
  },
  {
    cat: 'research',
    icon: '📝',
    title: 'البحث الكمي vs الكيفي',
    titleEn: 'Quant vs Qual Research',
    type: 'article',
    desc: 'إمتى تستخدم الأرقام وإمتى تدور على الأسباب العميقة (Insights).',
    descEn: 'When to use numbers vs when to look for deep insights.',
    link: 'https://www.nngroup.com/articles/quant-vs-qual/'
  },
  {
    cat: 'research',
    icon: '📋',
    title: 'مقياس ليكرت (Likert Scale)',
    titleEn: 'Likert Scale',
    type: 'guide',
    desc: 'ازاي تصمم استبيانات بتقييمات دقيقة وواضحة للمستخدمين.',
    descEn: 'How to design questionnaires with accurate and clear ratings.',
    link: 'https://www.surveymonkey.com/mp/likert-scale/'
  },
  {
    cat: 'research',
    icon: '🎬',
    title: 'كيفية إجراء مقابلات المستخدمين',
    titleEn: 'How to Conduct User Interviews',
    type: 'video',
    desc: 'فيديو تطبيقي لقواعد تجنب الانحياز واستخدام الصمت بذكاء.',
    descEn: 'Applied video on avoiding bias and using silence intelligently.',
    link: 'https://www.youtube.com/watch?v=Qq3OiHQ-HCU'
  },
  {
    cat: 'research',
    icon: '📝',
    title: 'استبيانات بحثية أفضل',
    titleEn: 'Better Research Surveys',
    type: 'article',
    desc: 'كيفية كتابة أسئلة استطلاع فعالة تحصل على رؤى حقيقية.',
    descEn: 'How to write effective survey questions to get real insights.',
    link: 'https://www.nngroup.com/articles/better-usability-tasks/'
  },
  {
    cat: 'research',
    icon: '📝',
    title: 'ما هو بحث المستخدم؟',
    titleEn: 'What is User Research?',
    type: 'article',
    desc: 'شرح شامل لسبب كون البحث هو حجر الأساس لأي تصميم ناجح.',
    descEn: 'Comprehensive explanation why research is the foundation of any successful design.',
    link: 'https://www.interaction-design.org/literature/topics/user-research'
  },

  // ========== PART 2: STRATEGY ==========
  {
    cat: 'strategy',
    icon: '🎬',
    title: 'المهام المطلوب إنجازها (JTBD)',
    titleEn: 'Jobs To Be Done (JTBD)',
    type: 'video',
    desc: 'فهم دوافع المستخدمين الحقيقية (مثال الـ Milkshake الشهير).',
    descEn: 'Understanding real user motivations (Famous Milkshake example).',
    link: 'https://www.youtube.com/watch?v=sfGtw2C95Ms'
  },
  {
    cat: 'strategy',
    icon: '📝',
    title: 'الديموغرافية vs السيكوغرافية',
    titleEn: 'Demographics vs Psychographics',
    type: 'article',
    desc: 'ليه السلوك أهم بكتير من السن والنوع في تصميم التجربة.',
    descEn: 'Why behavior matters much more than age/gender in experience design.',
    link: 'https://www.nngroup.com/articles/psychographics-vs-demographics/'
  },
  {
    cat: 'strategy',
    icon: '📝',
    title: 'المستخدم ليس الجميع',
    titleEn: 'The User is Not Everyone',
    type: 'article',
    desc: 'تحديد أولويات الجمهور وسبب عدم قدرتك على التصميم للجميع في وقت واحد.',
    descEn: 'Prioritizing audience and why you cannot design for everyone at once.',
    link: 'https://uxplanet.org/the-user-is-not-everyone-8c4f7b5e3f4f'
  },
  {
    cat: 'strategy',
    icon: '📝',
    title: 'أشخاص المستخدمين (Personas) 101',
    titleEn: 'Personas 101',
    type: 'article',
    desc: 'دليل NN/g لبناء شخصيات مستخدمين معتمدة على بيانات حقيقية.',
    descEn: 'NN/g guide to building data-driven user personas.',
    link: 'https://www.nngroup.com/articles/persona/'
  },
  {
    cat: 'strategy',
    icon: '📝',
    title: 'خريطة التعاطف (Empathy Map)',
    titleEn: 'Empathy Map',
    type: 'article',
    desc: 'رسم خريطة لمشاعر وأفكار وأفعال المستخدم لفهمه بعمق.',
    descEn: 'Mapping user feelings, thoughts, and actions to understand them deeply.',
    link: 'https://www.nngroup.com/articles/empathy-mapping/'
  },
  {
    cat: 'strategy',
    icon: '📋',
    title: 'طيف الشخصية (Persona Spectrum)',
    titleEn: 'Persona Spectrum',
    type: 'guide',
    desc: 'دليل مايكروسوفت للتصميم الشامل المعتمد على السياق والاحتياجات المؤقتة.',
    descEn: 'Microsoft Inclusive Design guide based on context and temporary needs.',
    link: 'https://www.microsoft.com/design/inclusive/'
  },
  {
    cat: 'strategy',
    icon: '📝',
    title: 'التصميم للشخصية الأساسية',
    titleEn: 'Designing for Primary Persona',
    type: 'article',
    desc: 'كيفية التركيز على شخصية أساسية واحدة لإرضاء الجميع بالتصميم.',
    descEn: 'How to focus on one primary persona to satisfy everyone.',
    link: 'https://www.smashingmagazine.com/2014/08/a-closer-look-at-personas-part-1/'
  },
  {
    cat: 'strategy',
    icon: '📝',
    title: 'مخططات الألفة (Affinity Diagrams)',
    titleEn: 'Affinity Diagrams',
    type: 'article',
    desc: 'كيفية تجميع الأفكار وتنظيم بيانات البحث الضخمة.',
    descEn: 'How to cluster ideas and organize massive research data.',
    link: 'https://www.interaction-design.org/literature/article/affinity-diagrams-learn-how-to-cluster-and-bundle-ideas-and-facts'
  },
  {
    cat: 'strategy',
    icon: '🎬',
    title: 'ورشة عمل خريطة رحلة العميل',
    titleEn: 'Customer Journey Map Workshop',
    type: 'video',
    desc: 'فيديو عملي من Miro لإنشاء خرائط رحلة فعالة.',
    descEn: 'Practical video from Miro to create effective journey maps.',
    link: 'https://www.youtube.com/watch?v=2W13ext26kQ'
  },
  {
    cat: 'strategy',
    icon: '📋',
    title: 'تحديد الجمهور المستهدف',
    titleEn: 'Target Audience Definition',
    type: 'guide',
    desc: 'دليل هبسبوت العملي حول الفرق بين الجمهور المستهدف وشخصية المشتري.',
    descEn: 'HubSpot practical guide on the difference between target audience and buyer persona.',
    link: 'https://blog.hubspot.com/marketing/target-audience'
  },

  // ========== PART 3: IA & STRUCTURE ==========
  {
    cat: 'ia',
    icon: '📋',
    title: 'فرز البطاقات (Card Sorting)',
    titleEn: 'Card Sorting',
    type: 'guide',
    desc: 'طريقة ترتيب المحتوى وتنظيمه حسب عقلية المستخدم باستخدام الفرز المفتوح والمغلق.',
    descEn: 'Method to organize content based on user mental models using open/closed sorting.',
    link: 'https://www.optimalworkshop.com/learn/101s/card-sorting/'
  },
  {
    cat: 'ia',
    icon: '🎬',
    title: 'أساسيات هندسة المعلومات',
    titleEn: 'IA Basics',
    type: 'video',
    desc: 'دليل المبتدئين من Flux Academy لبناء أسس هيكلية قوية للمواقع.',
    descEn: 'Beginners guide from Flux Academy to build strong site structure foundations.',
    link: 'https://www.youtube.com/watch?v=Ij4WquL4wc4'
  },
  {
    cat: 'ia',
    icon: '📝',
    title: 'إدارة المهام العليا (Top Tasks)',
    titleEn: 'Top Tasks Management',
    type: 'article',
    desc: 'نموذج جيري مكجفرن لتحديد الأولويات والتركيز على ما يهم المستخدم فعلاً.',
    descEn: 'Gerry McGovern model for prioritizing what really matters to users.',
    link: 'https://gerrymcgovern.com/top-tasks-a-how-to-guide/'
  },
  {
    cat: 'ia',
    icon: '📝',
    title: 'دليل خرائط المواقع (Sitemaps)',
    titleEn: 'Sitemaps Guide',
    type: 'article',
    desc: 'شرح الرموز والهياكل وكيفية بناء خريطة موقع احترافية.',
    descEn: 'Explanation of symbols, structures, and how to build pro sitemaps.',
    link: 'https://uxdesign.cc/how-to-create-a-ux-sitemap-a-simple-guideline-8786c16f85c1'
  },
  {
    cat: 'ia',
    icon: '📋',
    title: 'اختبار الشجرة (Tree Testing)',
    titleEn: 'Tree Testing',
    type: 'guide',
    desc: 'ازاي تختبر نظام التنقل (Navigation) من غير ما تعمل أي تصميم بصري.',
    descEn: 'How to test Navigation systems without any visual design.',
    link: 'https://maze.co/guides/tree-testing/'
  },
  {
    cat: 'ia',
    icon: '📝',
    title: 'الفرق بين IA والتنقل (Navigation)',
    titleEn: 'IA vs Navigation',
    type: 'article',
    desc: 'مقال يوضح المفاهيم الخاطئة بين هندسة المعلومات وأنظمة التنقل.',
    descEn: 'Article clarifying misconceptions between Information Architecture and Navigation.',
    link: 'https://www.uxbooth.com/articles/complete-beginners-guide-to-information-architecture/'
  },

  // ========== TOOLS: AI ==========
  {
    cat: 'tools',
    subcategory: '🤖 مساعدي بحث AI',
    icon: '🤖',
    title: 'ChatGPT & Claude',
    titleEn: 'ChatGPT & Claude',
    type: 'ai',
    desc: 'تلخيص المقابلات، توليد السيناريوهات، والعصف الذهني.',
    descEn: 'Summarizing interviews, generating scenarios, and brainstorming.',
    link: 'https://chat.openai.com'
  },
  {
    cat: 'tools',
    subcategory: '🤖 مساعدي بحث AI',
    icon: '🎙️',
    title: 'Otter.ai',
    titleEn: 'Otter.ai',
    type: 'transcription',
    desc: 'ملاحظات اجتماعات AI وتحويل صوت المقابلات لنصوص فورية.',
    descEn: 'AI meeting notes and instant interview transcription.',
    link: 'https://otter.ai'
  },
  {
    cat: 'tools',
    subcategory: '🤖 مساعدي بحث AI',
    icon: '👁️',
    title: 'RealEye',
    titleEn: 'RealEye',
    type: 'ai',
    desc: 'خرائط حرارية تنبؤية وتحليل الانتباه باستخدام كاميرا الويب.',
    descEn: 'Predictive heatmaps and attention analysis using webcam.',
    link: 'https://realeye.io'
  },
  {
    cat: 'tools',
    subcategory: '🤖 مساعدي بحث AI',
    icon: '🔍',
    title: 'Dovetail',
    titleEn: 'Dovetail',
    type: 'analysis',
    desc: 'مخزن بيانات بحثية مدعوم بالذكاء الاصطناعي لاكتشاف الأنماط.',
    descEn: 'AI-powered research repository to discover patterns.',
    link: 'https://dovetailapp.com'
  },
  {
    cat: 'tools',
    subcategory: '🤖 مساعدي بحث AI',
    icon: '🎨',
    title: 'Khroma',
    titleEn: 'Khroma',
    type: 'ai',
    desc: 'أداة AI لتوليد باليتات ألوان لا نهائية لمصممي الـ UI.',
    descEn: 'AI tool generates infinite color palettes for UI designers.',
    link: 'https://khroma.co'
  },

  // ========== TOOLS: CORE ==========
  {
    cat: 'tools',
    subcategory: '🛠️ أدوات بحث أساسية',
    icon: '🔧',
    title: 'Optimal Workshop',
    titleEn: 'Optimal Workshop',
    type: 'testing',
    desc: 'الأداة المعيارية في الصناعة لفرز البطاقات واختبار الشجرة.',
    descEn: 'Industry standard for Card Sorting and Tree Testing.',
    link: 'https://optimalworkshop.com'
  },
  {
    cat: 'tools',
    subcategory: '🛠️ أدوات بحث أساسية',
    icon: '⚡',
    title: 'Lyssna',
    titleEn: 'Lyssna',
    type: 'usability',
    desc: 'مشهورة باختبارات الـ 5 ثواني واختبارات النقرة الأولى.',
    descEn: 'Famous for 5-second tests and first-click tests.',
    link: 'https://lyssna.com'
  },
  {
    cat: 'tools',
    subcategory: '🛠️ أدوات بحث أساسية',
    icon: '🧪',
    title: 'Maze',
    titleEn: 'Maze',
    type: 'validation',
    desc: 'اختبار سريع للنماذج الأولية للتحقق من الأفكار قبل البرمجة.',
    descEn: 'Rapid prototype testing to validate ideas before coding.',
    link: 'https://maze.co'
  },
  {
    cat: 'tools',
    subcategory: '🎨 تصميم وسلوك',
    icon: '✨',
    title: 'Figma & FigJam',
    titleEn: 'Figma & FigJam',
    type: 'design',
    desc: 'الأداة النهائية لتصميم الواجهات والعمل الجماعي التفاعلي.',
    descEn: 'The ultimate tool for interface design and interactive collaboration.',
    link: 'https://figma.com'
  },
  {
    cat: 'tools',
    subcategory: '🎨 تصميم وسلوك',
    icon: '🔥',
    title: 'Hotjar',
    titleEn: 'Hotjar',
    type: 'behavioral',
    desc: 'رؤية سلوك المستخدمين عبر الخرائط الحرارية وتسجيل الجلسات.',
    descEn: 'Visualize user behavior via heatmaps and session recordings.',
    link: 'https://hotjar.com'
  },
  {
    cat: 'tools',
    subcategory: '🎨 تصميم وسلوك',
    icon: '🖼️',
    title: 'Miro',
    titleEn: 'Miro',
    type: 'whiteboard',
    desc: 'مساحة عمل لا نهائية لخرائط الرحلة والعصف الذهني.',
    descEn: 'Infinite workspace for journey maps and brainstorming.',
    link: 'https://miro.com'
  }
];
