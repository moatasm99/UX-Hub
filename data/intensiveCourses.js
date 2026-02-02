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
    }
];

// Badge metadata for styling
export const badgeMeta = {
    "Foundation": { color: "from-emerald-500 to-teal-600", icon: "🎓", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
    "Methodology": { color: "from-violet-500 to-purple-600", icon: "💡", text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-100 dark:bg-violet-900/30" },
    "Core": { color: "from-blue-500 to-indigo-600", icon: "📐", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
    "Advanced": { color: "from-purple-500 to-fuchsia-600", icon: "🚀", text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
    "Specialist": { color: "from-amber-500 to-orange-600", icon: "⭐", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
    "Capstone": { color: "from-rose-500 to-pink-600", icon: "🏆", text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/30" }
};

