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
    }
];

// Badge metadata for styling
export const badgeMeta = {
    "Foundation": { color: "from-emerald-500 to-teal-600", icon: "🎓", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
    "Core": { color: "from-blue-500 to-indigo-600", icon: "💡", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
    "Advanced": { color: "from-purple-500 to-violet-600", icon: "🚀", text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
    "Specialist": { color: "from-amber-500 to-orange-600", icon: "⭐", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30" },
    "Capstone": { color: "from-rose-500 to-pink-600", icon: "🏆", text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/30" }
};
