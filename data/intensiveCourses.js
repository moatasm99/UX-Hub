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
    },
    {
        id: "test-01",
        title: "Usability Testing Mastery",
        badge: "Expert",
        badgeColor: "from-amber-500 to-orange-600",
        totalHours: "60 Hours",
        totalDays: 4,
        description: "The complete validation toolkit: From Guerrilla Testing to Heuristic Evaluation and Formal Reporting.",
        icon: "🧪",
        modules: [
            // PART 1: FOUNDATIONS & PLANNING
            {
                day: "Day 1",
                title: "1. Usability vs. Utility",
                summary: "It's not enough to work (Utility); it must be easy to use (Usability).",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Utility vs Usability Explained", url: "https://www.youtube.com/watch?v=1UefsA5a6kA", duration: "10 min" },
                    { type: "Article", title: "Introduction to Usability", url: "https://www.nngroup.com/articles/usability-101-introduction-to-usability/", source: "NN/g" }
                ],
                task: {
                    title: "Critique",
                    description: "Find a product that has high Utility (solves a problem) but low Usability (hard to use). Write a 1-paragraph critique.",
                    deliverable: "Product Critique"
                }
            },
            {
                day: "Day 1",
                title: "2. User Testing vs. Usability Testing",
                summary: "Validating the 'Idea' vs Validating the 'Interface'.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "User Testing vs Usability Testing", url: "https://www.nngroup.com/articles/usability-testing-vs-user-testing/", source: "NN/g" },
                    { type: "Video", title: "The Difference Explained", url: "https://www.youtube.com/watch?v=0ylnzM95sZE", duration: "5 min" }
                ],
                task: {
                    title: "Test Goals",
                    description: "Scenario: You are building a new fitness app. Write 1 question for 'User Testing' and 1 task for 'Usability Testing'.",
                    deliverable: "Testing Goals Definition"
                }
            },
            {
                day: "Day 1",
                title: "3. Writing the Test Plan",
                summary: "Defining Scope, Objectives, Schedule, and Metrics.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Usability Test Plan Template", url: "https://www.nngroup.com/articles/usability-test-plan/", source: "NN/g" },
                    { type: "Video", title: "How to Plan a Usability Test", url: "https://www.youtube.com/watch?v=XQZ3Z3Z3Z3Z", duration: "10 min" }
                ],
                task: {
                    title: "Test Plan Draft",
                    description: "Draft a 1-Page Test Plan for testing the 'Checkout Flow' of Amazon. Define the Goal and 3 Success Metrics.",
                    deliverable: "1-Page Test Plan"
                }
            },
            {
                day: "Day 1",
                title: "4. Scenarios & Tasks",
                summary: "Writing realistic scenarios without 'Leading' the user.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Writing Usability Tasks", url: "https://www.youtube.com/watch?v=6Bw-6j2a6z4", duration: "8 min" },
                    { type: "Article", title: "Task Scenarios for Usability Testing", url: "https://www.nngroup.com/articles/task-scenarios-usability-testing/", source: "NN/g" }
                ],
                task: {
                    title: "Task Rewrite",
                    description: "Rewrite this bad task: 'Click the red button to buy'. Convert it into a realistic Scenario (e.g., 'You want to purchase...').",
                    deliverable: "Rewritten Scenario"
                }
            },
            {
                day: "Day 1",
                title: "5. Recruiting & Screening",
                summary: "Finding the right participants and filtering them.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Recruiting for Usability Testing", url: "https://www.nngroup.com/articles/recruiting-users/", source: "NN/g" },
                    { type: "Video", title: "How to Recruit Users", url: "https://www.youtube.com/watch?v=XZ3Z3Z3Z3Z3", duration: "10 min" }
                ],
                task: {
                    title: "Screener Design",
                    description: "Write a 'Screener' to find users for a 'Dog Walking App'. Ensure you filter out people who don't own dogs.",
                    deliverable: "Screener Questionnaire"
                }
            },
            // PART 2: GUERRILLA & RAPID METHODS
            {
                day: "Day 2",
                title: "6. The 'No Budget' Mindset",
                summary: "Paul Boag's philosophy: Testing with anyone is better than no one.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Guerilla Usability Testing", url: "https://www.youtube.com/watch?v=0ylnzM95sZE", duration: "5 min" },
                    { type: "Article", title: "The Art of Guerrilla Testing", url: "https://www.smashingmagazine.com/2014/06/the-art-of-guerrilla-usability-testing/", source: "Smashing Mag" }
                ],
                task: {
                    title: "Coffee Shop Test",
                    description: "Go to a coffee shop (or ask a family member). Ask them to perform 1 simple task on your phone. Record friction points.",
                    deliverable: "Test Notes"
                }
            },
            {
                day: "Day 2",
                title: "7. The 5-Second Test",
                summary: "Testing the 'First Impression' and clarity of value proposition.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Running 5-Second Tests", url: "https://www.youtube.com/watch?v=0ylnzM95sZE", duration: "5 min" },
                    { type: "Article", title: "5-Second Test Guide", url: "https://usabilityhub.com/guides/five-second-testing", source: "UsabilityHub" }
                ],
                task: {
                    title: "5-Second Impression",
                    description: "Show a landing page to a friend for 5 seconds. Hide it. Ask: 'What does this company do?' and 'What can you do here?'",
                    deliverable: "Impression Notes"
                }
            },
            {
                day: "Day 2",
                title: "8. Top Tasks Analysis",
                summary: "Identifying the critical 5% of tasks that matter most (Gerry McGovern).",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Top Tasks Management", url: "https://alistapart.com/article/getting-started-with-top-tasks/", source: "A List Apart" },
                    { type: "Video", title: "Gerry McGovern on Top Tasks", url: "https://www.youtube.com/watch?v=qT_1O2O_Sbs", duration: "10 min" }
                ],
                task: {
                    title: "Top Tasks Vote",
                    description: "List 20 potential features for a Banking App. Ask 3 people to pick their 'Top 5'. Identify the overlap.",
                    deliverable: "Top Tasks List"
                }
            },
            // PART 3: HEURISTIC EVALUATION
            {
                day: "Day 3",
                title: "9. Heuristics 1-3: System Status & Control",
                summary: "Visibility of System Status, Match between System & Real World, User Control.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Heuristics 1-3 Explained", url: "https://www.youtube.com/watch?v=hWc0d0g6Z68", duration: "12 min" },
                    { type: "Article", title: "10 Usability Heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", source: "NN/g" }
                ],
                task: {
                    title: "Heuristic Check 1-3",
                    description: "Audit Gmail's 'Undo Send' feature. Which Heuristic does it support? Write a 1-sentence justification.",
                    deliverable: "Heuristic Analysis Part 1"
                }
            },
            {
                day: "Day 3",
                title: "10. Heuristics 4-6: Consistency & Errors",
                summary: "Consistency & Standards, Error Prevention, Recognition rather than Recall.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Heuristics 4-6 Explained", url: "https://www.youtube.com/watch?v=hWc0d0g6Z68", duration: "12 min" },
                    { type: "Article", title: "Error Prevention Strategies", url: "https://www.nngroup.com/articles/slips/", source: "NN/g" }
                ],
                task: {
                    title: "Heuristic Check 4-6",
                    description: "Find a form that validates input *before* you click submit (e.g., password strength). Explain how it prevents errors.",
                    deliverable: "Heuristic Analysis Part 2"
                }
            },
            {
                day: "Day 3",
                title: "11. Heuristics 7-10: Aesthetics & Help",
                summary: "Flexibility, Minimalist Design, Error Recovery, Help & Documentation.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Heuristics 7-10 Explained", url: "https://www.youtube.com/watch?v=hWc0d0g6Z68", duration: "12 min" },
                    { type: "Article", title: "Aesthetic and Minimalist Design", url: "https://www.nngroup.com/articles/aesthetic-minimalist-design/", source: "NN/g" }
                ],
                task: {
                    title: "Heuristic Check 7-10",
                    description: "Compare the Google Homepage to Yahoo. How does Google apply 'Minimalist Design'? List 3 distractions removed.",
                    deliverable: "Heuristic Analysis Part 3"
                }
            },
            {
                day: "Day 3",
                title: "12. Conducting a Heuristic Review",
                summary: "How to perform a systematic audit using the 10 rules.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "How to Conduct a Heuristic Evaluation", url: "https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/", source: "NN/g" },
                    { type: "Video", title: "Heuristic Evaluation Demo", url: "https://www.youtube.com/watch?v=5y2g7h5y5y5", duration: "15 min" }
                ],
                task: {
                    title: "Mini-Audit",
                    description: "Perform a 'Mini-Audit' on a flight booking site. Identify 3 violations of Nielsen's Heuristics and name them.",
                    deliverable: "Audit Report"
                }
            },
            // PART 4: MODERATION & REPORTING
            {
                day: "Day 4",
                title: "13. Moderating the Session",
                summary: "The art of silence and 'Think Aloud'.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Moderating Usability Tests", url: "https://www.youtube.com/watch?v=6Bw-6j2a6z4", duration: "10 min" },
                    { type: "Article", title: "Talking with Participants", url: "https://www.nngroup.com/articles/talking-to-users/", source: "NN/g" }
                ],
                task: {
                    title: "Moderation Roleplay",
                    description: "Roleplay: Moderate a 5-minute session with a friend. Practice speaking only when absolutely necessary.",
                    deliverable: "Self-Reflection Notes"
                }
            },
            {
                day: "Day 4",
                title: "14. Analyzing Findings (Rainbow Sheet)",
                summary: "Organizing data and assigning Severity Scores.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Analyzing Usability Data", url: "https://www.youtube.com/watch?v=O94kYXFNU_A", duration: "10 min" },
                    { type: "Article", title: "Rating Severity of Problems", url: "https://www.nngroup.com/articles/rating-severity-usability-problems/", source: "NN/g" }
                ],
                task: {
                    title: "Rainbow Spreadsheet",
                    description: "Create a 'Rainbow Spreadsheet' for your session. Log 5 observations and rate their severity (1 = Cosmetic, 4 = Catastrophe).",
                    deliverable: "Rainbow Sheet"
                }
            },
            {
                day: "Day 4",
                title: "15. The Usability Report",
                summary: "Writing an Executive Summary and actionable recommendations.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Usability Test Reports", url: "https://www.nngroup.com/articles/usability-test-reports/", source: "NN/g" },
                    { type: "Video", title: "Presenting Findings", url: "https://www.youtube.com/watch?v=M5QjT4Th6Mw", duration: "12 min" }
                ],
                task: {
                    title: "Key Findings",
                    description: "Write the 'Key Findings' slide for your report. Highlight the top 3 issues that need immediate fixing.",
                    deliverable: "Key Findings Slide"
                }
            },
            {
                day: "Day 4",
                title: "16. Evaluating Navigation",
                summary: "Auditing Primary vs Secondary Nav and Layout width.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Navigation IA Tests", url: "https://www.nngroup.com/articles/navigation-ia-tests/", source: "NN/g" },
                    { type: "Video", title: "Evaluating Navigation", url: "https://www.youtube.com/watch?v=qT_1O2O_Sbs", duration: "10 min" }
                ],
                task: {
                    title: "Menu Audit",
                    description: "Audit a mega-menu (e.g., Amazon). Is the hierarchy clear? Does the 'Logo' link to home?",
                    deliverable: "Audit Notes"
                }
            },
            {
                day: "Day 4",
                title: "17. Remote & Unmoderated Testing",
                summary: "Using tools like Maze for asynchronous testing.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Remote Usability Testing", url: "https://www.youtube.com/watch?v=7X8X8X8X8X8", duration: "8 min" },
                    { type: "Article", title: "Unmoderated User Testing Guide", url: "https://www.nngroup.com/articles/unmoderated-user-testing/", source: "NN/g" }
                ],
                task: {
                    title: "Remote Test Setup",
                    description: "Set up a free test on Maze/Useberry. Create one mission and share the link.",
                    deliverable: "Test Link"
                }
            },
            {
                day: "Day 4",
                title: "18. Course Wrap-up & Project",
                summary: "Applying everything to a final case study.",
                duration: "4 Hours",
                resources: [
                    { type: "Article", title: "Writing a Usability Case Study", url: "https://uxdesign.cc/how-to-write-a-usability-testing-case-study-6587c6c40608", source: "UX Collective" },
                    { type: "Video", title: "Portfolio Case Study Review", url: "https://www.youtube.com/watch?v=v=v=v=v", duration: "15 min" }
                ],
                task: {
                    title: "Final Case Study",
                    description: "Final Project: Compile a full Usability Report (Plan + Script + findings + Recommendations) for a product of your choice.",
                    deliverable: "Full Usability Report"
                }
            }
        ]
    },
    {
        id: "data-01",
        title: "UX Analytics & Tracking",
        badge: "Data Driven",
        badgeColor: "from-cyan-500 to-blue-600",
        totalHours: "15 Hours",
        totalDays: 2,
        description: "Moving beyond 'Gut Feeling'. Mastering GA4, Hotjar, and Measuring Success.",
        icon: "📊",
        modules: [
            // PART 1: METRICS & FRAMEWORKS
            {
                day: "Day 1",
                title: "1. Vanity vs. Actionable Metrics",
                summary: "Why 'Page Views' don't matter, and what actually drives decisions.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Vanity Metrics vs Actionable Metrics", url: "https://www.youtube.com/watch?v=yYJ4hL9jX_o", duration: "8 min" },
                    { type: "Article", title: "The Guide to Product Metrics", url: "https://mixpanel.com/blog/product-metrics/", source: "Mixpanel" }
                ],
                task: {
                    title: "Metric Audit",
                    description: "Audit: Look at a dashboard (or imagine one). Identify 1 'Vanity Metric' to ignore and 1 'Actionable Metric' to track.",
                    deliverable: "Audit Notes"
                }
            },
            {
                day: "Day 1",
                title: "2. The Google HEART Framework",
                summary: "Happiness, Engagement, Adoption, Retention, Task Success.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Google's HEART Framework", url: "https://www.dtelepathy.com/blog/design/ux-metrics-heart-method", source: "D.Telepathy" },
                    { type: "Video", title: "HEART Framework Explained", url: "https://www.youtube.com/watch?v=L4NWDxL3Z-M", duration: "10 min" }
                ],
                task: {
                    title: "HEART Application",
                    description: "Apply HEART: Define 1 Goal, 1 Signal, and 1 Metric for the 'Engagement' category of a Music Streaming App.",
                    deliverable: "HEART Table"
                }
            },
            {
                day: "Day 1",
                title: "3. KPIs & ROI of Design",
                summary: "Translating UX improvements into Business Value ($$$).",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "The ROI of User Experience", url: "https://www.youtube.com/watch?v=O94kYXFNU_A", duration: "12 min" },
                    { type: "Article", title: "Calculating ROI of UX", url: "https://www.nngroup.com/articles/roi-ux/", source: "NN/g" }
                ],
                task: {
                    title: "ROI Calculation",
                    description: "Calculation: If a UX fix increases conversion by 1% and the site makes $1M/year, how much extra revenue did you generate?",
                    deliverable: "ROI Calculation"
                }
            },
            // PART 2: BEHAVIORAL ANALYTICS
            {
                day: "Day 2",
                title: "4. Heatmaps Analysis",
                summary: "Click, Move, and Scroll maps. Seeing where users actually look.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "How to Analyze Heatmaps", url: "https://www.youtube.com/watch?v=7X8X8X8X8X8", duration: "8 min" },
                    { type: "Article", title: "8 Heatmap Case Studies", url: "https://www.hotjar.com/heatmaps/examples/", source: "Hotjar" }
                ],
                task: {
                    title: "Heatmap Analysis",
                    description: "Analysis: Look at a sample 'Scroll Map'. If only 20% of users reach the footer, where should you move the 'Contact Us' button?",
                    deliverable: "Analysis Note"
                }
            },
            {
                day: "Day 2",
                title: "5. Session Recordings",
                summary: "Watching users interact with your product like a movie.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Watching Session Recordings", url: "https://www.youtube.com/watch?v=4J4X4X4X4X4", duration: "10 min" },
                    { type: "Article", title: "How to Analyze Recordings", url: "https://www.hotjar.com/session-recordings/", source: "Hotjar" }
                ],
                task: {
                    title: "Recording Observation",
                    description: "Observation: Watch 3 session recordings (use a demo account if needed). Identify one 'Rage Click' moment where the user got frustrated.",
                    deliverable: "Observation Log"
                }
            },
            // PART 3: QUANTITATIVE TOOLS (GA4)
            {
                day: "Day 2",
                title: "6. Google Analytics 4 (GA4) Basics",
                summary: "Users, Sessions, Events, and Conversions.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "GA4 for UX Designers", url: "https://www.youtube.com/watch?v=zn7nO-D3f-k", duration: "15 min" },
                    { type: "Article", title: "GA4 Guide for Designers", url: "https://uxdesign.cc/google-analytics-4-for-ux-designers-123456", source: "UX Collective" }
                ],
                task: {
                    title: "GA4 Definitions",
                    description: "Definitions: Explain the difference between a 'User' and a 'Session' in 1 sentence each.",
                    deliverable: "Definitions"
                }
            },
            {
                day: "Day 2",
                title: "7. Conversion Funnels",
                summary: "Visualizing drop-off rates step-by-step.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Funnel Analysis Explained", url: "https://www.youtube.com/watch?v=ReM1uqmVfP0", duration: "10 min" },
                    { type: "Article", title: "Funnels in UX Design", url: "https://www.nngroup.com/articles/funnel-visualization/", source: "NN/g" }
                ],
                task: {
                    title: "Funnel Sketch",
                    description: "Draw a Funnel: Sketch the 'Checkout Funnel' (Cart -> Address -> Payment -> Success). Estimate the % drop-off at each step.",
                    deliverable: "Funnel Diagram"
                }
            },
            {
                day: "Day 2",
                title: "8. A/B Testing Fundamentals",
                summary: "Validating design changes with statistical significance.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "A/B Testing Guide", url: "https://www.optimizely.com/optimization-glossary/ab-testing/", source: "Optimizely" },
                    { type: "Video", title: "When to use A/B Testing", url: "https://www.youtube.com/watch?v=0ZNdDoHKDdQ", duration: "8 min" }
                ],
                task: {
                    title: "A/B Hypothesis",
                    description: "Hypothesis: Write an A/B Test Hypothesis (e.g., 'Changing the button color from Gray to Green will increase clicks by 10%').",
                    deliverable: "Test Hypothesis"
                }
            }
        ]
    },
    {
        id: "write-01",
        title: "UX Writing Mastery",
        badge: "Communication",
        badgeColor: "from-pink-500 to-rose-600",
        totalHours: "15 Hours",
        totalDays: 3,
        description: "The art of guiding users with words. From Microcopy to Voice & Tone.",
        icon: "✍️",
        modules: [
            // PART 1: FOUNDATIONS & PSYCHOLOGY
            {
                day: "Day 1",
                title: "1. What is UX Writing?",
                summary: "Defining the role: It's not just 'Content', it's 'Design'.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "What is UX Writing? (CareerFoundry)", url: "https://www.youtube.com/watch?v=cM5K8K3dOys", duration: "10 min" },
                    { type: "Article", title: "UX Writing Study Guide (NNGroup)", url: "https://www.nngroup.com/articles/ux-writing-study-guide/", source: "NN/g" }
                ],
                task: {
                    title: "Copy vs Design",
                    description: "Reflection: Look at an app you use. Find one piece of text that 'guides' you (UX Writing) and one that 'sells' to you (Marketing Copy).",
                    deliverable: "Reflection Notes"
                }
            },
            {
                day: "Day 1",
                title: "2. UX Writer vs. Copywriter",
                summary: "The difference between 'Selling' (Persuasion) and 'Guiding' (Clarity).",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Copywriting vs UX Writing (The Futur)", url: "https://www.youtube.com/watch?v=OpX4473_hxo", duration: "8 min" },
                    { type: "Article", title: "UX Writing vs. Copywriting", url: "https://uxplanet.org/ux-writing-vs-copywriting-whats-the-difference-4e1257125712", source: "UX Planet" }
                ],
                task: {
                    title: "Headline Rewrite",
                    description: "Rewrite: Take a marketing headline like 'Buy our amazing tool now!' and rewrite it as a UX interface button label (e.g., 'Get Started').",
                    deliverable: "Rewritten Copy"
                }
            },
            {
                day: "Day 1",
                title: "3. Psychology of Reading (F & Z Patterns)",
                summary: "How users 'Scan' interfaces instead of reading them.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "F-Shaped Pattern for Reading (NNGroup)", url: "https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/", source: "NN/g" },
                    { type: "Video", title: "How Users Read on the Web", url: "https://www.youtube.com/watch?v=KpK2c2Wp5jI", duration: "10 min" }
                ],
                task: {
                    title: "Scan Pattern Audit",
                    description: "Audit: Look at a landing page. Draw the 'Z-Pattern' over it. Are the important texts (Headlines, CTAs) on the path?",
                    deliverable: "Visual Audit"
                }
            },
            // PART 2: THE COMPONENTS
            {
                day: "Day 2",
                title: "4. Voice & Tone",
                summary: "Defining the Brand Persona. Voice is constant; Tone changes with context.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Voice & Tone Strategy", url: "https://www.youtube.com/watch?v=2Tz8YqZ2Z2Z", duration: "10 min" },
                    { type: "Article", title: "The Four Dimensions of Tone of Voice (NNGroup)", url: "https://www.nngroup.com/articles/tone-of-voice-dimensions/", source: "NN/g" }
                ],
                task: {
                    title: "Tone Shift",
                    description: "Scenario: Write a 'Payment Success' message for 2 brands: 1. A Fun Banking App (Playful Tone). 2. A Government Tax Portal (Serious Tone).",
                    deliverable: "Written Messages"
                }
            },
            {
                day: "Day 2",
                title: "5. Writing Clear Buttons (CTAs)",
                summary: "The art of the 'Call to Action'. Being specific and predictable.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "The Art of the Button", url: "https://uxdesign.cc/the-art-of-the-button-4f7f6f7f6f7f", source: "UX Collective" },
                    { type: "Video", title: "Writing Microcopy for Buttons", url: "https://www.youtube.com/watch?v=3sS4sS4sS4s", duration: "5 min" }
                ],
                task: {
                    title: "Button Fix",
                    description: "Fix It: Rename a button labeled 'Submit' on a 'Book a Flight' form. Make it more descriptive (e.g., 'Confirm Booking').",
                    deliverable: "New Button Label"
                }
            },
            {
                day: "Day 2",
                title: "6. Error Messages (The 4 H's)",
                summary: "Making errors Human, Helpful, Humble, and Hesitation-free.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "How to Write Error Messages (NNGroup)", url: "https://www.youtube.com/watch?v=2p_eK-CqW4k", duration: "8 min" },
                    { type: "Article", title: "Error Message Guidelines (NNGroup)", url: "https://www.nngroup.com/articles/error-message-guidelines/", source: "NN/g" }
                ],
                task: {
                    title: "Error Rewrite",
                    description: "Rewrite: 'Error 404: Bad Request'. Rewrite this to be helpful for a user who is lost (e.g., 'We couldn't find that page. Try searching...').",
                    deliverable: "New Error Message"
                }
            },
            {
                day: "Day 2",
                title: "7. Empty States",
                summary: "Turning 'Zero Data' into an opportunity for education or action.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Empty State Best Practices (Toptal)", url: "https://www.toptal.com/designers/ux/empty-state-design-infographic", source: "Toptal" },
                    { type: "Video", title: "Designing Empty States", url: "https://www.youtube.com/watch?v=0k1l0k1l0k1", duration: "5 min" }
                ],
                task: {
                    title: "Empty State Copy",
                    description: "Draft: Write the copy for an Empty 'Favorites' list. Don't just say 'No Favorites'. Encourage the user to add one.",
                    deliverable: "Empty State Text"
                }
            },
            {
                day: "Day 2",
                title: "8. Onboarding Flows",
                summary: "Teaching the user how the product works without boring them.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Mobile App Onboarding (NNGroup)", url: "https://www.nngroup.com/articles/mobile-app-onboarding/", source: "NN/g" },
                    { type: "Video", title: "User Onboarding Deconstructed", url: "https://www.youtube.com/watch?v=5r5r5r5r5r5", duration: "10 min" }
                ],
                task: {
                    title: "Onboarding Storyboard",
                    description: "Storyboard: Write the headlines for a 3-screen onboarding carousel for a 'ToDo App'. Screen 1: Add, Screen 2: Organize, Screen 3: Complete.",
                    deliverable: "Onboarding Headlines"
                }
            },
            {
                day: "Day 2",
                title: "9. Forms & Labels",
                summary: "Reducing friction. Top-aligned labels vs Placeholders.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Placeholders in Form Fields are Harmful (NNGroup)", url: "https://www.nngroup.com/articles/form-design-placeholders/", source: "NN/g" },
                    { type: "Video", title: "Best Practices for Forms (Google Chrome Devs)", url: "https://www.youtube.com/watch?v=i1O1dGiR3Z8", duration: "8 min" }
                ],
                task: {
                    title: "Form Critique",
                    description: "Critique: Find a form that uses 'Placeholders' instead of 'Labels'. Explain why this is bad for accessibility.",
                    deliverable: "Critique Notes"
                }
            },
            // PART 3: ADVANCED & CAREER
            {
                day: "Day 3",
                title: "10. Accessibility & Alt Text",
                summary: "Writing for Screen Readers and inclusivity.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Writing for Web Accessibility", url: "https://www.youtube.com/watch?v=0f0f0f0f0f0", duration: "10 min" },
                    { type: "Article", title: "How to Write Alt Text (HubSpot)", url: "https://blog.hubspot.com/marketing/image-alt-text", source: "HubSpot" }
                ],
                task: {
                    title: "Alt Text Challenge",
                    description: "Write Alt Text: Describe an image of 'A happy woman holding a credit card' for a screen reader user.",
                    deliverable: "Alt Text"
                }
            },
            {
                day: "Day 3",
                title: "11. Localization & RTL",
                summary: "Writing copy that survives translation (English <-> Arabic).",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "International Usability (NNGroup)", url: "https://www.nngroup.com/articles/international-usability/", source: "NN/g" },
                    { type: "Video", title: "Designing for Global Audiences", url: "https://www.youtube.com/watch?v=GlobalVideo", duration: "8 min" }
                ],
                task: {
                    title: "Translation Check",
                    description: "Compare: Find a button in English (e.g., 'Back') and its Arabic translation. Does the meaning change? Is the space sufficient?",
                    deliverable: "Comparison Notes"
                }
            },
            {
                day: "Day 3",
                title: "12. The Portfolio & Case Studies",
                summary: "How to present your writing work to get hired.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "How to Create a UX Writing Portfolio", url: "https://uxwritinghub.com/ux-writing-portfolio/", source: "UX Writing Hub" },
                    { type: "Video", title: "UX Writing Portfolio Review", url: "https://www.youtube.com/watch?v=PortReview", duration: "15 min" }
                ],
                task: {
                    title: "Case Study Title",
                    description: "Draft a Case Study Title: Choose one of your previous tasks (e.g., The Error Message Rewrite). Write a title and a 'Problem Statement' for it.",
                    deliverable: "Case Study Concept"
                }
            }
        ]
    },
    {
        id: "ui-tool-01",
        title: "UI Tools & Prototyping (Figma)",
        badge: "Technical Skills",
        badgeColor: "from-fuchsia-500 to-purple-600",
        totalHours: "45 Hours",
        totalDays: 3,
        description: "Mastering the industry standard. From Constraints and Auto Layout to Advanced Prototyping and Variables.",
        icon: "🎨",
        modules: [
            // PART 1: LAYOUT & RESPONSIVENESS
            {
                day: "Day 1",
                title: "1. Frames vs Groups & Constraints",
                summary: "Why Pros use Frames. Understanding Left/Right/Scale constraints for responsiveness.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Figma 101: Frames vs Groups", url: "https://www.youtube.com/watch?v=jwHgbxNAjMw", duration: "10 min" },
                    { type: "Article", title: "Understanding Constraints", url: "https://help.figma.com/hc/en-us/articles/360039824934-Apply-constraints-to-define-how-layers-resize", source: "Figma Help" }
                ],
                task: {
                    title: "Constraint Practice",
                    description: "Practice: Create a 'Card' component with an image and text. Set constraints so the text stays fixed while the image stretches.",
                    deliverable: "Responsive Card"
                }
            },
            {
                day: "Day 1",
                title: "2. Auto Layout Mastery",
                summary: "The CSS Flexbox of Design. Hug, Fill, Fixed, and Absolute Positioning.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Auto Layout Deep Dive", url: "https://www.youtube.com/watch?v=T_8d24P96zk", duration: "15 min" },
                    { type: "Article", title: "Guide to Auto Layout", url: "https://www.figma.com/best-practices/auto-layout-guide/", source: "Figma Best Practices" }
                ],
                task: {
                    title: "Auto Layout Navbar",
                    description: "Build: Create a responsive 'Navigation Bar' with a Logo (Left) and Links (Right) using Auto Layout 'Space Between' mode.",
                    deliverable: "Responsive Navbar"
                }
            },
            {
                day: "Day 1",
                title: "3. Grids & Layout Systems",
                summary: "Setting up 8pt Grids and 12-Column Bootstrap grids.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Figma Grids Tutorial", url: "https://www.youtube.com/watch?v=zd8gWJ4hWjM", duration: "8 min" },
                    { type: "Article", title: "Everything you need to know about Grids", url: "https://material.io/design/layout/responsive-layout-grid.html", source: "Material Design" }
                ],
                task: {
                    title: "Grid Setup",
                    description: "Setup: Create a Frame (1440px). Add a 12-Column Grid (Margin: 80px, Gutter: 24px) and align a Hero Section to it.",
                    deliverable: "Grid Template"
                }
            },
            // PART 2: COMPONENTS & SYSTEMS
            {
                day: "Day 2",
                title: "4. Components & Instances",
                summary: "The Master/Instance model. Overrides and resetting assets.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Figma Components Guide", url: "https://www.youtube.com/watch?v=k74IrUNaJkE", duration: "10 min" },
                    { type: "Article", title: "Guide to Components", url: "https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma", source: "Figma Help" }
                ],
                task: {
                    title: "Component Creation",
                    description: "Create: Make a 'Master Button'. Create 3 instances on a new page and override the text and color in each.",
                    deliverable: "Button Component"
                }
            },
            {
                day: "Day 2",
                title: "5. Variants & Properties",
                summary: "Managing states (Hover, Active, Disabled) and Boolean toggles.",
                duration: "4 Hours",
                resources: [
                    { type: "Video", title: "Component Properties (Booleans)", url: "https://www.youtube.com/watch?v=iIq8fFvI1Qs", duration: "12 min" },
                    { type: "Article", title: "Variants Best Practices", url: "https://www.figma.com/best-practices/creating-and-organizing-variants/", source: "Figma Best Practices" }
                ],
                task: {
                    title: "Variant System",
                    description: "System: Create a Button Set with Variants (Primary/Secondary) and a Boolean Property to toggle an 'Icon' ON/OFF.",
                    deliverable: "Advanced Button Set"
                }
            },
            {
                day: "Day 2",
                title: "6. Variables (Design Tokens)",
                summary: "The future of Design Systems. Storing Colors, Numbers, and Strings.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Figma Variables Intro", url: "https://www.youtube.com/watch?v=M5Z3Z3Z3Z3Z", duration: "10 min" },
                    { type: "Article", title: "Guide to Variables", url: "https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables", source: "Figma Help" }
                ],
                task: {
                    title: "Design Tokens",
                    description: "Tokens: Create a Local Variable Collection for your Brand Colors. Apply these variables to your buttons instead of raw Hex codes.",
                    deliverable: "Variable Collection"
                }
            },
            // PART 3: PROTOTYPING & HANDOFF
            {
                day: "Day 3",
                title: "7. Prototyping Basics",
                summary: "Connecting screens, Back actions, and Scroll interactions.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Figma Prototyping Basics", url: "https://www.youtube.com/watch?v=1W1W1W1W1W1", duration: "8 min" },
                    { type: "Article", title: "Prototyping Triggers", url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma", source: "Figma Help" }
                ],
                task: {
                    title: "Prototype Flow",
                    description: "Flow: Link a 'Login Page' to a 'Dashboard'. Make the Dashboard content scrollable while keeping the Header fixed.",
                    deliverable: "Clickable Prototype"
                }
            },
            {
                day: "Day 3",
                title: "8. Smart Animate & Micro-interactions",
                summary: "Creating smooth transitions and Interactive Components.",
                duration: "4 Hours",
                resources: [
                    { type: "Video", title: "Smart Animate Magic", url: "https://www.youtube.com/watch?v=9Z9Z9Z9Z9Z9", duration: "12 min" },
                    { type: "Article", title: "Smart Animate Guide", url: "https://www.figma.com/blog/smart-animate/", source: "Figma Blog" }
                ],
                task: {
                    title: "Micro-interaction",
                    description: "Animate: Create a 'Toggle Switch' using Interactive Components. Make it slide smoothly from Left to Right on click.",
                    deliverable: "Animated Toggle"
                }
            },
            {
                day: "Day 3",
                title: "9. Plugins & Efficiency",
                summary: "Workflow boosters: Unsplash, Iconify, Content Reel, and Simulayt.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Top 10 Figma Plugins", url: "https://www.youtube.com/watch?v=PluginsVideo", duration: "10 min" },
                    { type: "Article", title: "Figma Community Resources", url: "https://www.figma.com/community", source: "Figma" }
                ],
                task: {
                    title: "Speed Run",
                    description: "Speed Run: Use 'Unsplash' to fill 5 Avatar circles and 'Content Reel' to fill 5 Names in under 30 seconds.",
                    deliverable: "Populated Design"
                }
            },
            {
                day: "Day 3",
                title: "10. Developer Handoff (Dev Mode)",
                summary: "Preparing files for code. Annotations, Sections, and Exporting.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Figma for Developers", url: "https://www.youtube.com/watch?v=DevModeVideo", duration: "10 min" },
                    { type: "Article", title: "Handoff Best Practices", url: "https://www.figma.com/dev-mode/", source: "Figma" }
                ],
                task: {
                    title: "Handoff Prep",
                    description: "Handoff: Mark a section as 'Ready for Dev'. Use the 'Measurement' tool to annotate the padding between two elements.",
                    deliverable: "CSS Snippet"
                }
            }
        ]
    },
    {
        id: "handoff-01",
        title: "Design-Dev Handoff Process",
        badge: "Collaboration",
        badgeColor: "from-lime-500 to-green-600",
        totalHours: "15 Hours",
        totalDays: 2,
        description: "Stop 'throwing designs over the wall'. Learn to prepare files, annotate behaviors, and speak 'Developer'.",
        icon: "🤝",
        modules: [
            // PART 1: PREPARATION & HYGIENE
            {
                day: "Day 1",
                title: "1. The Handoff Mindset",
                summary: "It's a conversation, not a file transfer. Involving devs early.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Stop Handing Off, Start Collaborating", url: "https://www.youtube.com/watch?v=FjI9q5J2s2s", duration: "10 min" },
                    { type: "Article", title: "The Handoff Guide", url: "https://www.interaction-design.org/literature/article/design-handoff-guide", source: "IxDF" }
                ],
                task: {
                    title: "Intro Message",
                    description: "Scenario: You finished a design. Write a 3-bullet point 'Slack Message' to your developer introducing the feature and asking for a review.",
                    deliverable: "Communication Draft"
                }
            },
            {
                day: "Day 1",
                title: "2. File Hygiene & Organization",
                summary: "Naming layers, removing unused frames, and using Sections.",
                duration: "3 Hours",
                resources: [
                    { type: "Article", title: "Figma File Organization for Handoff", url: "https://www.figma.com/best-practices/file-organization/", source: "Figma Best Practices" },
                    { type: "Video", title: "Preparing Files for Developers", url: "https://www.youtube.com/watch?v=DevModeVideo", duration: "10 min" }
                ],
                task: {
                    title: "File Cleanup",
                    description: "Cleanup: Take a messy Figma file (or create one). Rename all layers (e.g., 'Frame 132' -> 'Hero Section'), delete hidden layers, and group logical sections.",
                    deliverable: "Organized File Screenshot"
                }
            },
            {
                day: "Day 1",
                title: "3. Annotations & Redlining",
                summary: "Explaining 'Behavior', 'States', and 'Edge Cases' that static screens can't show.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "How to Annotate Designs", url: "https://www.youtube.com/watch?v=AnnotateVideo", duration: "8 min" },
                    { type: "Article", title: "The Art of Redlining", url: "https://uxdesign.cc/the-art-of-redlining-55555", source: "UX Collective" }
                ],
                task: {
                    title: "Annotation Practice",
                    description: "Annotate: Use a sticky note plugin in Figma to explain a 'Hover State' and what happens when the user has 'No Internet Connection'.",
                    deliverable: "Annotated Screen"
                }
            },
            // PART 2: TECHNICAL EXECUTION
            {
                day: "Day 2",
                title: "4. Figma Dev Mode & Specs",
                summary: "Using the 'Inspect' panel, Box Model, and copying code (CSS/Swift).",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Mastering Figma Dev Mode", url: "https://www.youtube.com/watch?v=DevModeDeepDive", duration: "15 min" },
                    { type: "Article", title: "Figma for Developers Guide", url: "https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode", source: "Figma Help" }
                ],
                task: {
                    title: "Dev Mode Audit",
                    description: "Inspect: Go to Dev Mode. Copy the CSS for a button's shadow and border-radius. Paste it into a text file to check accuracy.",
                    deliverable: "CSS Snippet Validation"
                }
            },
            {
                day: "Day 2",
                title: "5. Assets & Exporting",
                summary: "SVG vs PNG vs JPG. 1x, 2x, 3x. Handling icons and illustrations.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "The Ultimate Guide to Image Exporting", url: "https://www.smashingmagazine.com/2021/03/image-export-guide-ui-designers/", source: "Smashing Mag" },
                    { type: "Video", title: "Exporting Assets in Figma", url: "https://www.youtube.com/watch?v=ExportVideo", duration: "8 min" }
                ],
                task: {
                    title: "Export Kit",
                    description: "Export Kit: Prepare a folder with: 1. The Logo as SVG. 2. The Hero Image as JPG (Compressed). 3. App Icons as PNG (2x and 3x).",
                    deliverable: "Asset Folder Structure"
                }
            },
            {
                day: "Day 2",
                title: "6. Design QA (VQA)",
                summary: "Reviewing the coded build. Spotting 'Visual Bugs' vs 'Functional Bugs'.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "How to do Design QA", url: "https://www.youtube.com/watch?v=QAVideo", duration: "10 min" },
                    { type: "Article", title: "Design QA Checklist", url: "https://www.nngroup.com/articles/design-qa/", source: "NN/g" }
                ],
                task: {
                    title: "Bug Bash",
                    description: "Bug Bash: Compare a coded website (use any site) to its design (imagine the design). Find 3 'Visual Bugs' (e.g., Wrong font size, Misalignment) and screenshot them.",
                    deliverable: "Bug Report"
                }
            }
        ]
    },
    {
        id: "principle-01",
        title: "Design Concepts & Principles",
        badge: "Theory",
        badgeColor: "from-indigo-400 to-cyan-400",
        totalHours: "30 Hours",
        totalDays: 4,
        description: "The science behind aesthetics. Mastering Balance, Contrast, Hierarchy, and Gestalt Psychology.",
        icon: "🧠",
        modules: [
            // PART 1: COMPOSITION & LAYOUT PRINCIPLES
            {
                day: "Day 1",
                title: "1. Balance & Alignment",
                summary: "Symmetrical vs. Asymmetrical Balance. The stability of the grid.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Balance in Design Explained", url: "https://www.youtube.com/watch?v=K4M05-J5gJ0", duration: "10 min" },
                    { type: "Article", title: "The Principle of Balance", url: "https://www.smashingmagazine.com/2015/06/design-principles-compositional-balance-symmetry-asymmetry/", source: "Smashing Mag" }
                ],
                task: {
                    title: "Analysis",
                    description: "Analysis: Find a movie poster. Draw a line down the middle. Is it Symmetrical or Asymmetrical? Explain how it achieves 'visual weight' balance.",
                    deliverable: "Poster Analysis"
                }
            },
            {
                day: "Day 1",
                title: "2. Negative Space (White Space)",
                summary: "White space is not 'empty'; it's an active design element.",
                duration: "3 Hours",
                resources: [
                    { type: "Article", title: "White Space is Not Your Enemy", url: "https://alistapart.com/article/whitespace/", source: "A List Apart" },
                    { type: "Video", title: "How to use White Space", url: "https://www.youtube.com/watch?v=J3s7f8f8f8f", duration: "8 min" }
                ],
                task: {
                    title: "Redesign",
                    description: "Redesign: Take a cluttered screenshot (e.g., a busy news site). Redesign one section by ONLY adding padding and margins (White Space).",
                    deliverable: "De-cluttered Design"
                }
            },
            {
                day: "Day 2",
                title: "3. Visual Hierarchy & Scale",
                summary: "Guiding the user's eye. Using Size, Color, and Weight to signal importance.",
                duration: "4 Hours",
                resources: [
                    { type: "Video", title: "Visual Hierarchy Basics", url: "https://www.youtube.com/watch?v=6m6m6m6m6m6", duration: "12 min" },
                    { type: "Article", title: "Visual Hierarchy in UI Design", url: "https://www.nngroup.com/articles/visual-hierarchy-ux-definition/", source: "NN/g" }
                ],
                task: {
                    title: "The Squint Test",
                    description: "The Squint Test: Take a screenshot of a landing page. Blur it (squint). Can you still tell what the most important button/headline is?",
                    deliverable: "Blurred Analysis"
                }
            },
            {
                day: "Day 2",
                title: "4. Repetition & Rhythm",
                summary: "Creating consistency and patterns to reduce cognitive load.",
                duration: "3 Hours",
                resources: [
                    { type: "Article", title: "Repetition, Pattern, and Rhythm", url: "https://www.smashingmagazine.com/2015/07/design-principles-dominance-focal-points-hierarchy/", source: "Smashing Mag" },
                    { type: "Video", title: "Rhythm in Design", url: "https://www.youtube.com/watch?v=RhythmVideo", duration: "10 min" }
                ],
                task: {
                    title: "Pattern Audit",
                    description: "Audit: Look at Spotify or Netflix. Identify 3 elements that repeat (e.g., Card styles, Headers). How does this repetition help you browse faster?",
                    deliverable: "Audit Notes"
                }
            },
            // PART 2: PERCEPTUAL PSYCHOLOGY (GESTALT)
            {
                day: "Day 3",
                title: "5. Gestalt: Proximity & Common Region",
                summary: "Things close together are perceived as a group.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Gestalt Principles in UX", url: "https://www.youtube.com/watch?v=be1d-d1d-d1", duration: "10 min" },
                    { type: "Article", title: "Law of Proximity in UX", url: "https://www.nngroup.com/articles/gestalt-proximity/", source: "NN/g" }
                ],
                task: {
                    title: "Fix It",
                    description: "Fix It: Find a form where the label is equidistant between two fields. Fix the 'Proximity' so the label is clearly attached to its input.",
                    deliverable: "Fixed Form"
                }
            },
            {
                day: "Day 3",
                title: "6. Gestalt: Similarity & Continuity",
                summary: "How we perceive lines and similar objects as related.",
                duration: "3 Hours",
                resources: [
                    { type: "Article", title: "Law of Similarity", url: "https://www.interaction-design.org/literature/article/laws-of-proximity-uniform-connectedness-and-continuation-gestalt-principles-2", source: "IxDF" },
                    { type: "Video", title: "Gestalt: Continuity & Closure", url: "https://www.youtube.com/watch?v=Gestalt2", duration: "10 min" }
                ],
                task: {
                    title: "Similarity Design",
                    description: "Design: Create a row of 'Cards'. Make one card look different (Break Similarity) to highlight it as 'Featured'. How does the eye react?",
                    deliverable: "Card Layout"
                }
            },
            {
                day: "Day 4",
                title: "7. The Golden Ratio & Proportion",
                summary: "Using math (1:1.618) to create naturally pleasing layouts.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "Golden Ratio in UI Design", url: "https://www.youtube.com/watch?v=ke4h5h5h5h5", duration: "8 min" },
                    { type: "Article", title: "A Guide to the Golden Ratio", url: "https://www.canva.com/learn/what-is-the-golden-ratio/", source: "Canva" }
                ],
                task: {
                    title: "Layout Practice",
                    description: "Layout: Create a simple 2-column layout in Figma using the Golden Ratio (e.g., Content area is 61.8% width, Sidebar is 38.2%).",
                    deliverable: "Golden Ratio Grid"
                }
            },
            {
                day: "Day 4",
                title: "8. Contrast & Accessibility",
                summary: "Ensuring legibility and meeting WCAG standards.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Contrast and Color Accessibility", url: "https://webaim.org/articles/contrast/", source: "WebAIM" },
                    { type: "Video", title: "Understanding Contrast Ratios", url: "https://www.youtube.com/watch?v=ContrastVideo", duration: "10 min" }
                ],
                task: {
                    title: "Contrast Check",
                    description: "Check: Use a 'Contrast Checker' plugin. Test 3 color combinations (Text on Background). Do they pass WCAG AA?",
                    deliverable: "Contrast Report"
                }
            }
        ]
    },
    {
        id: "visual-01",
        title: "Visual Design Mastery",
        badge: "Aesthetics",
        badgeColor: "from-pink-500 to-red-500",
        totalHours: "30 Hours",
        totalDays: 4,
        description: "Mastering the atoms of UI: Color, Typography, Iconography, and Spacing Systems.",
        icon: "✨",
        modules: [
            // PART 1: COLOR & DEPTH
            {
                day: "Day 1",
                title: "1. Color Theory & HSB Model",
                summary: "Stop guessing colors. Understanding Hue, Saturation, and Brightness.",
                duration: "2 Hours",
                resources: [
                    { type: "Video", title: "HSB Color System Explained", url: "https://www.youtube.com/watch?v=HSBVideo", duration: "10 min" },
                    { type: "Article", title: "Refactoring UI: Color Palette", url: "https://www.refactoringui.com/previews/building-your-color-palette", source: "Refactoring UI" }
                ],
                task: {
                    title: "Palette Creation",
                    description: "Palette: Create a 'Brand Palette' in Figma using HSB. 1 Primary Color, 3 Neutral Grays (Light, Medium, Dark), and 1 Semantic Color (Error Red).",
                    deliverable: "Color Palette"
                }
            },
            {
                day: "Day 1",
                title: "2. The 60-30-10 Rule",
                summary: "Balancing colors: 60% Neutral, 30% Secondary, 10% Accent.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "The 60-30-10 Rule in UI", url: "https://uxplanet.org/60-30-10-rule-in-ui-design-8de797b5354f", source: "UX Planet" },
                    { type: "Video", title: "Applying Color Balance", url: "https://www.youtube.com/watch?v=ColorBalance", duration: "8 min" }
                ],
                task: {
                    title: "Apply Rule",
                    description: "Apply: Take a black & white Wireframe. Color it using the 60-30-10 rule (Backgrounds, Cards, CTAs).",
                    deliverable: "Colored UI"
                }
            },
            {
                day: "Day 1",
                title: "3. Shadows & Elevation (Depth)",
                summary: "Using light sources to create hierarchy. Material Design principles.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Material Design: Elevation", url: "https://m3.material.io/styles/elevation/overview", source: "Material Design" },
                    { type: "Video", title: "Designing Better Shadows", url: "https://www.youtube.com/watch?v=ShadowsVideo", duration: "10 min" }
                ],
                task: {
                    title: "Shadow Styles",
                    description: "Effects: Create 3 Shadow Styles in Figma: 'Low' (Card), 'Medium' (Hover), 'High' (Modal/Dropdown).",
                    deliverable: "Shadow System"
                }
            },
            // PART 2: TYPOGRAPHY & READABILITY
            {
                day: "Day 2",
                title: "4. Typography Anatomy & Selection",
                summary: "Serif vs Sans Serif. Choosing fonts that match the brand personality.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Choosing Fonts for UI", url: "https://www.youtube.com/watch?v=FontsVideo", duration: "10 min" },
                    { type: "Article", title: "Google Fonts Knowledge", url: "https://fonts.google.com/knowledge", source: "Google Fonts" }
                ],
                task: {
                    title: "Font Pairing",
                    description: "Pairing: Choose 2 fonts (Header & Body) for a 'Luxury Hotel' app. Justify why they fit the brand.",
                    deliverable: "Typography Selection"
                }
            },
            {
                day: "Day 2",
                title: "5. Type Scales & Hierarchy",
                summary: "Using a Modular Scale (e.g., Major Third) for mathematical harmony.",
                duration: "3 Hours",
                resources: [
                    { type: "Article", title: "The Type Scale", url: "https://material.io/design/typography/the-type-system.html", source: "Material Design" },
                    { type: "Video", title: "Setting up a Type Scale", url: "https://www.youtube.com/watch?v=TypeScale", duration: "10 min" }
                ],
                task: {
                    title: "Type System",
                    description: "System: Use typescale.com to generate a scale. Set up Figma Text Styles: H1, H2, H3, Body, Caption.",
                    deliverable: "Type Styles"
                }
            },
            {
                day: "Day 2",
                title: "6. Vertical Rhythm & Line Height",
                summary: "The 4-point baseline grid. Why line-height matters for readability.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Baseline Grids in UI", url: "https://medium.com/@obignell/designing-with-a-baseline-grid-55555", source: "Medium" },
                    { type: "Video", title: "Line Height Best Practices", url: "https://www.youtube.com/watch?v=LineHeight", duration: "8 min" }
                ],
                task: {
                    title: "Rhythm Fix",
                    description: "Fix: Take a paragraph of text. Adjust the Line Height to be 150% of the font size (e.g., 16px Font -> 24px Line Height).",
                    deliverable: "Readable Text"
                }
            },
            // PART 3: IMAGERY & SYSTEMS
            {
                day: "Day 3",
                title: "7. Iconography Consistency",
                summary: "Stroke vs Fill. Optical alignment and visual weight of icons.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Material Symbols Guide", url: "https://m3.material.io/styles/icons/designing-icons", source: "Material Design" },
                    { type: "Video", title: "Icon Design Basics", url: "https://www.youtube.com/watch?v=IconVideo", duration: "10 min" }
                ],
                task: {
                    title: "Icon Audit",
                    description: "Audit: Download a set of 5 icons. Check if they have the same Stroke Width and Corner Radius. Unify them if needed.",
                    deliverable: "Unified Icon Set"
                }
            },
            {
                day: "Day 3",
                title: "8. The 8pt Grid System (Spacing)",
                summary: "Using multiples of 8 (8, 16, 24, 32) for padding and margins.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Intro to 8pt Grid", url: "https://spec.fm/specifics/8-pt-grid", source: "Spec.fm" },
                    { type: "Video", title: "Figma Nudge Amount Setup", url: "https://www.youtube.com/watch?v=8ptGrid", duration: "5 min" }
                ],
                task: {
                    title: "Grid Setup",
                    description: "Setup: Change your Figma 'Big Nudge' to 8px. Redesign a Card component ensuring all padding/margins are divisible by 8.",
                    deliverable: "8pt Grid Card"
                }
            },
            {
                day: "Day 4",
                title: "9. Imagery & Art Direction",
                summary: "Choosing photos that tell a story. Vectors vs Rasters.",
                duration: "2 Hours",
                resources: [
                    { type: "Article", title: "Selecting Better Photos", url: "https://www.nngroup.com/articles/photos-as-web-content/", source: "NN/g" },
                    { type: "Video", title: "Working with Images in Figma", url: "https://www.youtube.com/watch?v=ImagesVideo", duration: "10 min" }
                ],
                task: {
                    title: "Hero Composition",
                    description: "Composition: Design a 'Hero Section'. Use a high-quality Unsplash image and overlay text. Ensure the text is readable (use a scrim overlay).",
                    deliverable: "Hero Section"
                }
            },
            {
                day: "Day 4",
                title: "10. Creating a Mini-Style Guide",
                summary: "Documenting your styles for the developer.",
                duration: "3 Hours",
                resources: [
                    { type: "Video", title: "Creating a Style Guide", url: "https://www.youtube.com/watch?v=StyleGuide", duration: "15 min" },
                    { type: "Article", title: "Design System Fundamentals", url: "https://www.invisionapp.com/inside-design/guide-to-design-systems/", source: "InVision" }
                ],
                task: {
                    title: "Final Style Guide",
                    description: "Final Project: Create a single Figma Frame showing your: Color Palette, Typography Scale, Icon Set, and Button Components.",
                    deliverable: "Mini Design System"
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
    "Data Driven": { color: "from-cyan-500 to-blue-600", icon: "📊", text: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-100 dark:bg-cyan-900/30" },
    "Communication": { color: "from-pink-500 to-rose-600", icon: "✍️", text: "text-pink-600 dark:text-pink-400", bg: "bg-pink-100 dark:bg-pink-900/30" },
    "Technical Skills": { color: "from-fuchsia-500 to-purple-600", icon: "🎨", text: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-100 dark:bg-fuchsia-900/30" },
    "Collaboration": { color: "from-lime-500 to-green-600", icon: "🤝", text: "text-lime-600 dark:text-lime-400", bg: "bg-lime-100 dark:bg-lime-900/30" },
    "Theory": { color: "from-indigo-400 to-cyan-400", icon: "🧠", text: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-100 dark:bg-indigo-900/30" },
    "Aesthetics": { color: "from-pink-500 to-red-500", icon: "✨", text: "text-pink-600 dark:text-pink-400", bg: "bg-pink-100 dark:bg-pink-900/30" },
    "Core": { color: "from-blue-500 to-indigo-600", icon: "📐", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
    "Advanced": { color: "from-purple-500 to-fuchsia-600", icon: "🚀", text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
    "Specialist": { color: "from-amber-500 to-orange-600", icon: "⭐", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
    "Capstone": { color: "from-rose-500 to-pink-600", icon: "🏆", text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/30" }
};

