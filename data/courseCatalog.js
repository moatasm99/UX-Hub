export const courseCatalog = [
    {
        id: "ux-01", category: "UX Core", level: "Beginner",
        topic: "Intro to UX Design",
        description: "Solving problems using the human-centered design methodology.",
        resources: [
            { type: "Article", title: "The Definition of User Experience (UX)", url: "https://www.nngroup.com/articles/definition-user-experience/" },
            { type: "Video", title: "What is UX (Not)? - NNgroup", url: "https://www.youtube.com/watch?v=DTr3naujzqs" }
        ],
        books: [{"title":"Change by Design","author":"Tim Brown","url":"#"}]
    },
    {
        id: "ux-02", category: "UX Core", level: "Intermediate",
        topic: "Design Thinking Process",
        description: "Mastering interviews, observations, and empathy mapping.",
        resources: [
            { type: "Article", title: "Design Thinking 101", url: "https://www.nngroup.com/articles/design-thinking/" },
            { type: "Video", title: "Design Thinking 101 - NNgroup", url: "https://www.youtube.com/watch?v=6lmvCqvmjfE" }
        ],
        books: [{"title":"Just Enough Research","author":"Erika Hall","url":"#"}]
    },
    {
        id: "ux-03", category: "UX Core", level: "All Levels",
        topic: "User Research & Interviews",
        description: "New updated curriculum module.",
        resources: [
            { type: "Article", title: "User Interviews 101", url: "https://www.nngroup.com/articles/user-interviews/" },
            { type: "Video", title: "Understanding through User Interviews", url: "https://www.youtube.com/watch?v=bcfqmx2hnUQ" }
        ],
        books: []
    },
    {
        id: "ux-04", category: "UX Core", level: "Intermediate",
        topic: "Information Architecture",
        description: "Designing the experience with words and clear language.",
        resources: [
            { type: "Article", title: "IA vs. Sitemaps: The Difference", url: "https://www.nngroup.com/articles/information-architecture-sitemaps/" },
            { type: "Video", title: "Information Architecture: 3 Key Models", url: "https://www.youtube.com/watch?v=v39z0JPeIc8" }
        ],
        books: [{"title":"Microcopy: The Complete Guide","author":"Kinneret Yifrah","url":"#"}]
    },
    {
        id: "ux-05", category: "UX Core", level: "All Levels",
        topic: "Usability Testing Mastery",
        description: "New updated curriculum module.",
        resources: [
            { type: "Article", title: "Usability Testing 101", url: "https://www.nngroup.com/articles/usability-101-introduction-to-usability/" },
            { type: "Video", title: "Usability Test Facilitation: Mistakes to Avoid", url: "https://www.youtube.com/watch?v=LKaCtvvhbcg" }
        ],
        books: []
    },
    {
        id: "ui-01", category: "UI Design", level: "Beginner",
        topic: "Visual Design Principles",
        description: "Typography, Grid Systems, Color Theory, and Hierarchy.",
        resources: [
            { type: "Article", title: "Visual Design Principles for the Web", url: "https://www.nngroup.com/articles/visual-design-principles/" },
            { type: "Video", title: "Figma for Beginners: Explore Ideas", url: "https://www.youtube.com/watch?v=dXQ7IHkTiMM" }
        ],
        books: [{"title":"The Shape of Design","author":"Frank Chimero","url":"https://shapeofdesignbook.com/"}]
    },
    {
        id: "ui-02", category: "UI Design", level: "Advanced",
        topic: "Design Systems Architecture",
        description: "Building scalable design languages (Atomic Design).",
        resources: [
            { type: "Article", title: "Design Systems 101", url: "https://www.nngroup.com/articles/design-systems-101/" },
            { type: "Video", title: "The Future of Design Systems (Figma)", url: "https://www.youtube.com/watch?v=N2NwII5mAU4" }
        ],
        books: [{"title":"Atomic Design","author":"Brad Frost","url":"https://atomicdesign.bradfrost.com/"}]
    },
    {
        id: "ui-03", category: "UX Core", level: "All Levels",
        topic: "Responsive Web Design",
        description: "New updated curriculum module.",
        resources: [
            { type: "Article", title: "Responsive Web Design: Definition", url: "https://www.nngroup.com/articles/responsive-web-design-definition/" },
            { type: "Video", title: "Chrome DevTools for Responsive Design", url: "https://www.youtube.com/watch?v=3z_bM9eXjKs" }
        ],
        books: []
    },
    {
        id: "ui-04", category: "UI Design", level: "Intermediate",
        topic: "Accessibility (A11y)",
        description: "Collaborating with developers and delivering clean assets.",
        resources: [
            { type: "Article", title: "Usability & Accessibility: The Difference", url: "https://www.nngroup.com/articles/usability-vs-accessibility/" },
            { type: "Video", title: "How to Conduct Usability Studies for Accessibility", url: "https://www.youtube.com/watch?v=2T6X7jXjZ3w" }
        ],
        books: [{"title":"Pixel Perfect Precision","author":"Ustwo","url":"https://www.ustwo.com/blog/pixel-perfect-precision-handbook-3/"}]
    },
    {
        id: "test-01", category: "Testing", level: "Intermediate",
        topic: "Top Tasks Analysis (Strategy)",
        description: "Identifying the 5% of tasks that bring 25% of the value.",
        resources: [
            { type: "Article", title: "Getting Started with Top Tasks", url: "https://alistapart.com/article/getting-started-with-top-tasks/", label: "A List Apart" },
            { type: "Video", title: "Card Sorting for IA", url: "https://www.youtube.com/watch?v=qT_1O2O_Sbs", label: "NNGroup" },
            { type: "Article", title: "Tree Testing Validation", url: "https://www.nngroup.com/articles/tree-testing/", label: "NNGroup" }
        ],
        books: []
    },
    {
        id: "test-02", category: "Testing", level: "Beginner",
        topic: "Rapid Testing (5-Second & First Click)",
        description: "Guerrilla methods to test clarity and navigation in seconds.",
        resources: [
            { type: "Article", title: "The 5-Second Test Guide", url: "https://usabilityhub.com/guides/five-second-testing", label: "UsabilityHub" },
            { type: "Article", title: "First Click Testing (87% Rule)", url: "https://measuringu.com/first-click/", label: "MeasuringU" },
            { type: "Video", title: "Guerrilla Usability Testing", url: "https://www.youtube.com/watch?v=0ylnzM95sZE", label: "Google Ventures" }
        ],
        books: []
    },
    {
        id: "test-03", category: "Testing", level: "Advanced",
        topic: "Lean & Remote Usability Testing",
        description: "Conducting tests with zero budget using remote tools.",
        resources: [
            { type: "Video", title: "DIY Usability Testing", url: "https://www.youtube.com/watch?v=1UefsA5a6kA", label: "Steve Krug" },
            { type: "Article", title: "Unmoderated User Testing Tools", url: "https://www.nngroup.com/articles/unmoderated-user-testing-tools/", label: "NNGroup" }
        ],
        books: [{"title":"Rocket Surgery Made Easy","author":"Steve Krug","url":"https://sensible.com/rocket-surgery-made-easy/"}]
    },
    {
        id: "test-04", category: "Testing", level: "Intermediate",
        topic: "Surveys & Quantitative Insight",
        description: "Using data and surveys (Pollfish/Analytics) to validate designs.",
        resources: [
            { type: "Article", title: "The One-Question Survey", url: "https://www.hotjar.com/blog/poll-questions/", label: "Hotjar" },
            { type: "Video", title: "Google Analytics for UX", url: "https://www.youtube.com/watch?v=zn7nO-D3f-k", label: "NNGroup" }
        ],
        books: []
    },
    {
        id: "adv-01", category: "UX Core", level: "All Levels",
        topic: "Design-Dev Handoff",
        description: "New updated curriculum module.",
        resources: [
            { type: "Article", title: "Design Handoff Guide", url: "https://www.interaction-design.org/literature/article/how-to-ensure-a-smooth-design-handoff" },
            { type: "Video", title: "Figma Developer Handoff Masterclass", url: "https://www.youtube.com/watch?v=EoS30ZEJZ5s" }
        ],
        books: []
    },
    {
        id: "adv-02", category: "UX Core", level: "All Levels",
        topic: "Agile for UX",
        description: "New updated curriculum module.",
        resources: [
            { type: "Article", title: "Agile UX: The Complete Guide", url: "https://www.nngroup.com/articles/agile-ux-study-guide/" },
            { type: "Video", title: "Agile UX & Sprints (NNgroup)", url: "https://www.youtube.com/watch?v=5y7H1jZ3w_I" }
        ],
        books: []
    },
    {
        id: "adv-03", category: "UX Core", level: "All Levels",
        topic: "AI for UX Designers",
        description: "New updated curriculum module.",
        resources: [
            { type: "Article", title: "AI for UX: Getting Started", url: "https://www.nngroup.com/articles/ai-ux-getting-started/" },
            { type: "Video", title: "AI for UX Analysis (NNgroup)", url: "https://www.youtube.com/watch?v=DM-DVExbkUE" }
        ],
        books: []
    },
    {
        id: "biz-01", category: "Business", level: "All Levels",
        topic: "Freelancing Fundamentals",
        description: "How to price your work, find clients, and write contracts.",
        resources: [
            { type: "Video", title: "How to Start Freelancing", url: "https://www.youtube.com/watch?v=rKxWfO0-hpo", label: "The Futur" },
            { type: "Video", title: "Pricing Design Work", url: "https://www.youtube.com/watch?v=RKC_6lZqLgI", label: "Chris Do" },
            { type: "Article", title: "Freelancing Legal Basics", url: "https://www.interaction-design.org/literature/article/freelancing-101-how-to-protect-yourself-legally", label: "IxDF" }
        ],
        books: [{"title":"The Win Without Pitching Manifesto","author":"Blair Enns","url":"#"}]
    },
    {
        id: "biz-02", category: "Business", level: "Advanced",
        topic: "Presentation & Communication",
        description: "Articulating design decisions to stakeholders.",
        resources: [
            { type: "Article", title: "Presenting Design Work", url: "https://www.nngroup.com/articles/presenting-design-work/", label: "NNGroup" },
            { type: "Video", title: "Articulating Design Decisions", url: "https://www.youtube.com/watch?v=M5QjT4Th6Mw", label: "Tom Greever" }
        ],
        books: [{"title":"Articulating Design Decisions","author":"Tom Greever","url":"#"}]
    },
    {
        id: "biz-03", category: "Business", level: "Advanced",
        topic: "ROI of UX (Business Value)",
        description: "Measuring design impact on revenue and conversion.",
        resources: [
            { type: "Video", title: "The ROI of User Experience", url: "https://www.youtube.com/watch?v=O94kYXFNU_A", label: "NNGroup" },
            { type: "Article", title: "UX KPIs and Metrics", url: "https://www.interaction-design.org/literature/article/ux-kpis-and-metrics-measuring-the-user-experience", label: "IxDF" }
        ],
        books: []
    },
    {
        id: "sup-01", category: "Supporting", level: "All Levels",
        topic: "Gen AI & Prompt Engineering",
        description: "Leveraging AI to speed up research and ideation.",
        resources: [
            { type: "Video", title: "Intro to Gen AI for Designers", url: "https://www.youtube.com/watch?v=_QeW_8Y0hNM", label: "NNGroup" },
            { type: "Article", title: "Prompt Engineering Guide", url: "https://learning.promptingguide.ai/", label: "PromptingGuide" }
        ],
        books: [{"title":"Google PAIR AI Guide","author":"Google","url":"https://pair.withgoogle.com/"}]
    },
    {
        id: "sup-02", category: "Supporting", level: "Intermediate",
        topic: "Gamification & Engagement",
        description: "Using game mechanics to increase user retention.",
        resources: [
            { type: "Video", title: "Gamification vs Game Design", url: "https://www.youtube.com/watch?v=v5Qjuegtiyc", label: "NNGroup" },
            { type: "Article", title: "The Octalysis Framework", url: "https://yukaichou.com/gamification-examples/octalysis-complete-gamification-framework/", label: "Yu-kai Chou" }
        ],
        books: [{"title":"Hooked","author":"Nir Eyal","url":"#"}]
    },
    {
        id: "sup-03", category: "Business", level: "All Levels",
        topic: "Career Prep (CV & Portfolio)",
        description: "Structuring your case studies and acing the interview.",
        resources: [
            { type: "Article", title: "How to write a Case Study", url: "https://www.interaction-design.org/literature/article/how-to-write-a-ux-case-study", label: "IxDF" },
            { type: "Video", title: "Portfolio Review Errors", url: "https://www.youtube.com/watch?v=HuQc6Z2JqXk", label: "The Futur" },
            { type: "Article", title: "The Whiteboard Challenge", url: "https://uxdesign.cc/crushing-the-product-design-whiteboard-challenge-c0f5a50b4c0d", label: "UX Collective" }
        ],
        books: [{"title":"Bestfolios","author":"Inspiration","url":"https://www.bestfolios.com/portfolios"}]
    }
];

// Category metadata for styling
export const categoryMeta = {
    "UX Core": {
        "color": "from-purple-500 to-indigo-600",
        "icon": "🧠",
        "bgLight": "bg-purple-50",
        "bgDark": "bg-purple-900/20"
    },
    "UI Design": {
        "color": "from-pink-500 to-rose-600",
        "icon": "🎨",
        "bgLight": "bg-pink-50",
        "bgDark": "bg-pink-900/20"
    },
    "Testing": {
        "color": "from-emerald-500 to-teal-600",
        "icon": "🧪",
        "bgLight": "bg-emerald-50",
        "bgDark": "bg-emerald-900/20"
    },
    "Business": {
        "color": "from-amber-500 to-orange-600",
        "icon": "💼",
        "bgLight": "bg-amber-50",
        "bgDark": "bg-amber-900/20"
    },
    "Supporting": {
        "color": "from-cyan-500 to-blue-600",
        "icon": "🚀",
        "bgLight": "bg-cyan-50",
        "bgDark": "bg-cyan-900/20"
    }
};

// Level badges
export const levelMeta = {
    "Beginner": {
        "color": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        "icon": "🌱"
    },
    "Intermediate": {
        "color": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        "icon": "🌿"
    },
    "Advanced": {
        "color": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        "icon": "🌳"
    },
    "All Levels": {
        "color": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        "icon": "✨"
    }
};
