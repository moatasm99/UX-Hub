// ============================================
// INTENSIVE COURSES DATA (V.A.T. Model)
// Each course follows: Video + Article + Task
// ============================================

export const intensiveCourses = [
    {
        id: "ux-01",
        title: "User Experience: The Beginner's Guide",
        badge: "Foundation",
        badgeColor: "from-emerald-500 to-teal-600",
        totalHours: "60 Hours",
        totalDays: 4,
        description: "The complete foundation of Human-Centered Design, Psychology, and UX History.",
        icon: "🎓",
        modules: [
            {
                day: "Day 1",
                title: "History & Evolution of UX",
                summary: "From Don Norman to the Modern Product Era.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "The History of UX (Don Norman)",
                        url: "https://www.youtube.com/watch?v=9MiF5L_5vpo",
                        duration: "12 min"
                    },
                    {
                        type: "Article",
                        title: "What is User Experience?",
                        url: "https://www.nngroup.com/articles/definition-user-experience/",
                        source: "NN/g"
                    }
                ],
                task: {
                    title: "Observation Log",
                    description: "Identify 3 'Bad UX' examples in your physical environment (e.g., a confusing door handle). Document WHY it failed using the 5 Whys method.",
                    deliverable: "Written Report + Photo Evidence"
                }
            },
            {
                day: "Day 2",
                title: "Psychology & Laws of UX",
                summary: "Understanding how the human brain processes interfaces.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "10 Psychology Laws for Designers",
                        url: "https://www.youtube.com/watch?v=kY7f1qZ2aM8",
                        duration: "18 min"
                    },
                    {
                        type: "Article",
                        title: "Gestalt Principles in UI",
                        url: "https://www.interaction-design.org/literature/topics/gestalt-principles",
                        source: "IxDF"
                    }
                ],
                task: {
                    title: "UI Audit",
                    description: "Take a screenshot of your favorite app (e.g., Spotify). Circle areas where 'Law of Proximity' and 'Fitts Law' are applied.",
                    deliverable: "Annotated Screenshot"
                }
            },
            {
                day: "Day 3",
                title: "Human-Centered Design (HCD)",
                summary: "The philosophy of designing for people first.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "Human-Centered Design Explained",
                        url: "https://www.youtube.com/watch?v=Musdl5g0_zM",
                        duration: "8 min"
                    },
                    {
                        type: "Article",
                        title: "The 4 Principles of HCD",
                        url: "https://www.interaction-design.org/literature/topics/human-centered-design",
                        source: "IxDF"
                    }
                ],
                task: {
                    title: "Empathy Map",
                    description: "Pick a partner and interview them about their last 'Online Shopping' experience. Create a simple Empathy Map (Says, Thinks, Does, Feels).",
                    deliverable: "Empathy Map Canvas"
                }
            },
            {
                day: "Day 4",
                title: "UX Ethics & Accessibility",
                summary: "Designing for everyone and avoiding Dark Patterns.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "Dark Patterns in UX",
                        url: "https://www.youtube.com/watch?v=kxkrdLI6e6M",
                        duration: "15 min"
                    },
                    {
                        type: "Article",
                        title: "Introduction to Web Accessibility",
                        url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
                        source: "W3C WAI"
                    }
                ],
                task: {
                    title: "A11y Check",
                    description: "Use a 'Contrast Checker' tool to test the colors of a popular website. Report if it passes WCAG AA standards.",
                    deliverable: "Accessibility Report"
                }
            }
        ]
    },
    {
        id: "ux-02",
        title: "Design Thinking for Innovation",
        badge: "Methodology",
        badgeColor: "from-violet-500 to-purple-600",
        totalHours: "60 Hours",
        totalDays: 4,
        description: "Mastering the non-linear process of solving complex problems: Empathize, Define, Ideate, Prototype, and Test.",
        icon: "💡",
        modules: [
            {
                day: "Day 1",
                title: "Empathize & Define (The Problem Space)",
                summary: "Understanding users and framing the right problem.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "The 5 Stages of Design Thinking",
                        url: "https://www.youtube.com/watch?v=_r0VX-aU_T8",
                        duration: "10 min",
                        source: "NN/g"
                    },
                    {
                        type: "Article",
                        title: "Stage 2: Define the Problem",
                        url: "https://www.interaction-design.org/literature/article/stage-2-in-the-design-thinking-process-define-the-problem-and-interpret-the-results",
                        source: "IxDF"
                    }
                ],
                task: {
                    title: "Problem Statement",
                    description: "Write a clear 'How Might We' (HMW) question for a daily annoyance (e.g., 'How might we make waking up early less painful?').",
                    deliverable: "Written HMW Statement"
                }
            },
            {
                day: "Day 2",
                title: "Ideation Techniques (The Solution Space)",
                summary: "Breaking mental blocks with Crazy 8s and SCAMPER.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "How to run a Crazy 8s Session",
                        url: "https://www.youtube.com/watch?v=yzFqtFn9E1w",
                        duration: "8 min",
                        source: "AJ&Smart"
                    },
                    {
                        type: "Article",
                        title: "Ideation Techniques Overview",
                        url: "https://www.nngroup.com/articles/ux-ideation/",
                        source: "NN/g"
                    }
                ],
                task: {
                    title: "Crazy 8s Sketch",
                    description: "Fold a paper into 8 sections. Sketch 8 DIFFERENT solutions for your HMW question in exactly 8 minutes. No judgment allowed.",
                    deliverable: "8 Sketches on Paper"
                }
            },
            {
                day: "Day 3",
                title: "Prototyping (Failing Fast)",
                summary: "Moving from abstract ideas to tangible representations.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "Rapid Prototyping Google Way",
                        url: "https://www.youtube.com/watch?v=JMjozqJS44M",
                        duration: "12 min",
                        source: "Google Ventures"
                    },
                    {
                        type: "Article",
                        title: "Paper Prototyping Guide",
                        url: "https://www.smashingmagazine.com/2012/10/the-skeptic-s-guide-to-low-fidelity-prototyping/",
                        source: "Smashing Magazine"
                    }
                ],
                task: {
                    title: "Paper Prototype",
                    description: "Pick your best idea from Day 2. Sketch the main 3 screens on paper. Cut them out or use Marvel App to simulate clicks.",
                    deliverable: "3-Screen Paper Prototype"
                }
            },
            {
                day: "Day 4",
                title: "Testing & Iteration",
                summary: "Gathering feedback to refine the solution.",
                duration: "15 Hours",
                resources: [
                    {
                        type: "Video",
                        title: "Testing with 5 Users",
                        url: "https://www.youtube.com/watch?v=0ylnzM95sZE",
                        duration: "5 min",
                        source: "Google Ventures"
                    },
                    {
                        type: "Article",
                        title: "Usability Testing 101",
                        url: "https://www.nngroup.com/articles/usability-testing-101/",
                        source: "NN/g"
                    }
                ],
                task: {
                    title: "Feedback Grid",
                    description: "Show your paper prototype to 1 friend. Draw a grid with 4 quadrants (+, -, ?, 💡) and fill it with their feedback.",
                    deliverable: "Feedback Grid Canvas"
                }
            }
        ]
    },
    {
        id: "ux-03",
        title: "User Research Methods (Mastery Track)",
        badge: "Expert",
        badgeColor: "from-amber-500 to-orange-600",
        totalHours: "60 Hours",
        totalDays: 3,
        description: "The complete research journey: From Lean Planning to Segmentation, Synthesis, and IA Validation.",
        icon: "🔬",
        modules: [
            // DAY 1: FOUNDATIONS & PLANNING
            {
                day: "Day 1",
                title: "1. The Research Landscape",
                summary: "Understanding the 4 quadrants: Quant vs Qual & Behavioral vs Attitudinal.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "When to use which UX Method", url: "https://www.youtube.com/watch?v=bAqvK29t7z0", duration: "10 min" },
                    { type: "Article", title: "Research Methods Landscape", url: "https://www.nngroup.com/articles/which-ux-research-methods/", source: "NN/g" }
                ],
                task: {
                    title: "Research Landscape Axis",
                    description: "Draw the 'Research Landscape' axis and place 5 distinct methods (e.g., A/B Testing, Interviews) in the correct quadrants.",
                    deliverable: "Diagram on Paper/Digital"
                }
            },
            {
                day: "Day 1",
                title: "2. Lean UX Methodology",
                summary: "The 'Think > Make > Check' cycle. Moving fast and reducing waste.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "What is Lean UX?", url: "https://www.youtube.com/watch?v=Mn5p_aE2nIw", duration: "5 min" },
                    { type: "Article", title: "Lean UX Principles", url: "https://www.interaction-design.org/literature/article/a-simple-introduction-to-lean-ux", source: "IxDF" }
                ],
                task: {
                    title: "Hypothesis Statement",
                    description: "Write a 'Hypothesis Statement' for a feature: 'We believe that [doing this] for [these people] will achieve [this outcome]'",
                    deliverable: "Written Hypothesis"
                }
            },
            {
                day: "Day 1",
                title: "3. The Research Plan & Recruitment",
                summary: "Defining Objectives, Demographics, and Screener Questions.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "The 1-Page Research Plan", url: "https://www.smashingmagazine.com/2012/01/ux-research-plan/", source: "Smashing Mag" },
                    { type: "Video", title: "Writing Screener Questions", url: "https://www.youtube.com/watch?v=XZ3Z3Z3Z3Z3", duration: "10 min" }
                ],
                task: {
                    title: "Research Plan Draft",
                    description: "Draft a Plan: Define the 'Research Goal' for a travel app. Write 3 'Screener Questions' to filter out the wrong participants.",
                    deliverable: "1-Page Research Plan"
                }
            },
            {
                day: "Day 1",
                title: "4. Interviewing Mastery & Bias",
                summary: "Asking open-ended questions and avoiding Confirmation Bias.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "The Mom Test (Avoiding Bias)", url: "https://www.youtube.com/watch?v=H74tN25fEjo", duration: "15 min" },
                    { type: "Article", title: "User Interview Best Practices", url: "https://www.nngroup.com/articles/user-interviews/", source: "NN/g" }
                ],
                task: {
                    title: "Interview Scripting",
                    description: "Scripting: Write 5 Intro questions and 5 Main questions. Ensure zero 'Yes/No' questions in your script.",
                    deliverable: "Interview Script"
                }
            },
            // DAY 2: SYNTHESIS & SEGMENTATION
            {
                day: "Day 2",
                title: "5. Analysis vs. Synthesis",
                summary: "Transforming raw chaotic data into patterns and insights.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "From Data to Insights", url: "https://www.youtube.com/watch?v=UqI7hB5X2s8", duration: "10 min" },
                    { type: "Article", title: "Analysis vs Synthesis in UX", url: "https://www.nngroup.com/articles/analysis-synthesis/", source: "NN/g" }
                ],
                task: {
                    title: "Sentiment Tagging",
                    description: "Review raw notes from a mock interview. Highlight 3 key 'Quotes' and tag them with a sentiment (Positive/Negative).",
                    deliverable: "Tagged Notes"
                }
            },
            {
                day: "Day 2",
                title: "6. Affinity Mapping (Clustering)",
                summary: "Grouping observations to find common themes.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "How to Affinity Map", url: "https://www.youtube.com/watch?v=UqI7hB5X2s8", duration: "8 min" },
                    { type: "Article", title: "Affinity Diagrams Guide", url: "https://www.interaction-design.org/literature/article/affinity-diagrams-learn-how-to-cluster-and-bundle-ideas-and-facts", source: "IxDF" }
                ],
                task: {
                    title: "Affinity Clustering",
                    description: "Activity: Write 20 observations on sticky notes. Group them into 4 distinct themes and give each theme a catchy name.",
                    deliverable: "Affinity Map Photo"
                }
            },
            {
                day: "Day 2",
                title: "7. Needs-Based Segmentation",
                summary: "Beyond Demographics: Grouping users by their needs and behaviors.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Needs-Based Segmentation Guide", url: "https://www.nngroup.com/articles/psychographic-segmentation/", source: "NN/g" },
                    { type: "Video", title: "User Segmentation Strategies", url: "https://www.youtube.com/watch?v=d_kS3x6xX4k", duration: "12 min" }
                ],
                task: {
                    title: "Segment Identification",
                    description: "Identify 2 distinct user segments for a 'Music App' based on NEEDS (e.g., 'The Discovery Seeker' vs 'The Background Listener').",
                    deliverable: "Segment Profiles"
                }
            },
            {
                day: "Day 2",
                title: "8. Prioritizing Audiences",
                summary: "Designing for Impact: Who matters most? (Primary vs Secondary Persona).",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Prioritizing Personas", url: "https://www.nngroup.com/articles/persona-scope/", source: "NN/g" },
                    { type: "Video", title: "Choosing the Primary Persona", url: "https://www.youtube.com/watch?v=XQZ3Z3Z3Z3Z", duration: "10 min" }
                ],
                task: {
                    title: "Persona Prioritization",
                    description: "Select one 'Primary Persona' from your segments. Justify WHY they are the most critical for the business impact.",
                    deliverable: "Written Justification"
                }
            },
            {
                day: "Day 2",
                title: "9. Building The Persona",
                summary: "Creating a detailed archetype: Bio, Goals, Frustrations, and Scenario.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Creating Usability Personas", url: "https://www.youtube.com/watch?v=XQZ3Z3Z3Z3Z", duration: "10 min" },
                    { type: "Article", title: "Personas vs. Jobs-to-be-Done", url: "https://www.nngroup.com/articles/personas-jobs-be-done/", source: "NN/g" }
                ],
                task: {
                    title: "Persona Card",
                    description: "Create a Persona Card for your Primary User. Include a Photo, Bio, 3 Goals, and 3 Frustrations.",
                    deliverable: "Persona Card"
                }
            },
            {
                day: "Day 2",
                title: "10. Empathy Mapping",
                summary: "Says, Thinks, Does, Feels. Deeply understanding the user's emotional state.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Empathy Mapping Guide", url: "https://www.nngroup.com/articles/empathy-mapping/", source: "NN/g" },
                    { type: "Video", title: "Empathy Mapping Tutorial", url: "https://www.youtube.com/watch?v=Q2g-tq7WvF8", duration: "8 min" }
                ],
                task: {
                    title: "Empathy Map",
                    description: "Draw an Empathy Map for your persona during a 'Pain Point' moment. Fill all 4 quadrants.",
                    deliverable: "Empathy Map Canvas"
                }
            },
            {
                day: "Day 2",
                title: "11. Customer Journey Maps (CJM)",
                summary: "Mapping the end-to-end timeline to find Opportunities.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Journey Mapping 101", url: "https://www.nngroup.com/articles/journey-mapping-101/", source: "NN/g" },
                    { type: "Video", title: "Journey Map Workshop", url: "https://www.youtube.com/watch?v=mSxpVRo3BLg", duration: "15 min" }
                ],
                task: {
                    title: "Journey Mapping",
                    description: "Map the 'Current Journey' for your Persona. Identify the lowest emotional point and label it as a 'Critical Opportunity'.",
                    deliverable: "Customer Journey Map"
                }
            },
            // DAY 3: IA & TOOLKIT
            {
                day: "Day 3",
                title: "12. User Flows",
                summary: "Visualizing the step-by-step path and decision points.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "User Flows vs Wireflows", url: "https://www.youtube.com/watch?v=4ow1m1D7uMs", duration: "10 min" },
                    { type: "Article", title: "Flowcharts & Diagrams", url: "https://www.nngroup.com/articles/wireflows/", source: "NN/g" }
                ],
                task: {
                    title: "Flowcharting",
                    description: "Draw a Flowchart for the 'Login -> Forgot Password' process. Include decision diamonds (e.g., 'Is email valid?').",
                    deliverable: "User Flow Diagram"
                }
            },
            {
                day: "Day 3",
                title: "13. Information Architecture (IA)",
                summary: "Organizing content and understanding Mental Models.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "IA Basics & Principles", url: "https://www.iainstitute.org/what-is-ia", source: "IA Institute" },
                    { type: "Video", title: "Understanding IA", url: "https://www.youtube.com/watch?v=qT_1O2O_Sbs", duration: "10 min" }
                ],
                task: {
                    title: "Navigation Audit",
                    description: "Audit the navigation menu of your favorite news site. Is it intuitive? Propose one change to improve findability.",
                    deliverable: "Audit Notes"
                }
            },
            {
                day: "Day 3",
                title: "14. Card Sorting (Open vs Closed)",
                summary: "A method to discover how users categorize information.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Card Sorting Demo", url: "https://www.youtube.com/watch?v=qT_1O2O_Sbs", duration: "10 min" },
                    { type: "Article", title: "Card Sorting Best Practices", url: "https://www.nngroup.com/articles/card-sorting-definition/", source: "NN/g" }
                ],
                task: {
                    title: "Card Sort",
                    description: "Conduct an 'Open Card Sort' with 5 items (e.g., fruit, electronics) with a friend. Document their categories.",
                    deliverable: "Sorting Results"
                }
            },
            {
                day: "Day 3",
                title: "15. Tree Testing",
                summary: "Validating your navigation structure (Reverse Card Sorting).",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Tree Testing 101", url: "https://www.nngroup.com/articles/tree-testing/", source: "NN/g" },
                    { type: "Video", title: "Tree Testing Explained", url: "https://www.youtube.com/watch?v=0ylnzM95sZE", duration: "5 min" }
                ],
                task: {
                    title: "Findability Tasks",
                    description: "Write 3 'Findability Tasks' for a tree test (e.g., 'Where would you click to find the return policy?').",
                    deliverable: "Task List"
                }
            },
            {
                day: "Day 3",
                title: "16. The Researcher's Toolkit",
                summary: "Modern tools: Hotjar, Miro, Otter.ai, and Generative AI.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Hotjar Heatmaps Demo", url: "https://www.youtube.com/watch?v=7X8X8X8X8X8", duration: "8 min" },
                    { type: "Article", title: "Top UX Research Tools", url: "https://www.nngroup.com/articles/ux-research-tools/", source: "NN/g" }
                ],
                task: {
                    title: "Tool Exploration",
                    description: "Sign up for a free Hotjar (or similar) account. Explore the 'Heatmap' demo to see where users click.",
                    deliverable: "Screenshot of Tool"
                }
            },
            {
                day: "Day 3",
                title: "17. Triangulating Data",
                summary: "Combining Quant (Analytics) + Qual (Interviews) for truth.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Triangulation in Research", url: "https://www.nngroup.com/articles/triangulation-better-research-results/", source: "NN/g" },
                    { type: "Video", title: "Mixing Methods", url: "https://www.youtube.com/watch?v=bAqvK29t7z0", duration: "12 min" }
                ],
                task: {
                    title: "Data Triangulation",
                    description: "Find a discrepancy between what users SAY (Interview) and what they DO (Analytics/Observation) in a case study.",
                    deliverable: "Written Observation"
                }
            },
            {
                day: "Day 3",
                title: "18. The Final Presentation",
                summary: "Storytelling with data: Structuring your findings and recommendations.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Presenting UX Work", url: "https://www.smashingmagazine.com/2014/10/giving-better-ux-presentations/", source: "Smashing Mag" },
                    { type: "Video", title: "Articulating Design Decisions", url: "https://www.youtube.com/watch?v=M5QjT4Th6Mw", duration: "15 min" }
                ],
                task: {
                    title: "Final Deck",
                    description: "Compile your Persona, Journey Map, and IA findings into a 5-slide deck. Add a 'Next Steps' slide.",
                    deliverable: "Presentation Deck"
                }
            }
        ]
    }
];

// Badge metadata for styling
export const badgeMeta = {
    "Foundation": { color: "from-emerald-500 to-teal-600", icon: "🎓", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
    "Methodology": { color: "from-violet-500 to-purple-600", icon: "💡", text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-100 dark:bg-violet-900/30" },
    "Deep Dive": { color: "from-blue-600 to-indigo-700", icon: "🔍", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
    "Expert": { color: "from-amber-600 to-orange-700", icon: "⭐", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
    "Core": { color: "from-blue-500 to-indigo-600", icon: "📐", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
    "Advanced": { color: "from-purple-500 to-fuchsia-600", icon: "🚀", text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
    "Specialist": { color: "from-amber-500 to-orange-600", icon: "⭐", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
    "Capstone": { color: "from-rose-500 to-pink-600", icon: "🏆", text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/30" }
};

