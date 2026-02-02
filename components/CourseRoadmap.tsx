import React from 'react';
import {
    Brain,
    Eye,
    MessageSquare,
    Code,
    ArrowDown,
    CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { intensiveCourses } from '../data/intensiveCourses';
import CourseContainer from './courses/CourseContainer';

const CourseRoadmap = () => {
    const { theme } = useTheme();

    const sections = [
        {
            title: "Category 1: UX & Strategy Courses",
            subtitle: "The Brain 🧠",
            description: "Master the scientific methodology: Research, Strategy, and Validation.",
            color: "emerald",
            icon: <Brain className="w-6 h-6" />,
            courseIds: ["ux-01", "ux-02", "ux-03", "ia-01", "test-01", "data-01", "agile-01", "ba-ux-01", "ai-design-01", "ai-dt-01"]
        },
        {
            title: "Category 2: UI Design & Tools",
            subtitle: "The Eye 🎨",
            description: "Crafting beautiful, functional, and scalable interfaces.",
            color: "blue",
            icon: <Eye className="w-6 h-6" />,
            courseIds: ["ui-tool-01", "principle-01", "visual-01", "web-01", "mobile-01", "devices-01", "system-01", "adv-tools-01"]
        },
        {
            title: "Category 3: Supporting Skills",
            subtitle: "The Soft Skills 🤝",
            description: "Communication, Handoff, Quality Assurance, and Career growth.",
            color: "violet",
            icon: <MessageSquare className="w-6 h-6" />,
            courseIds: ["write-01", "handoff-01", "eval-01", "portfolio-01"]
        },
        {
            title: "Category 4: Development for Designers",
            subtitle: "The Code 💻",
            description: "Bridging the gap between design and engineering.",
            color: "fuchsia",
            icon: <Code className="w-6 h-6" />,
            courseIds: ["frontend-01"]
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, any> = {
            emerald: {
                bg: theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-50',
                border: theme === 'dark' ? 'border-emerald-500/30' : 'border-emerald-200',
                text: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700',
                iconBg: 'bg-emerald-500',
                line: 'bg-emerald-500/20'
            },
            blue: {
                bg: theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50',
                border: theme === 'dark' ? 'border-blue-500/30' : 'border-blue-200',
                text: theme === 'dark' ? 'text-blue-400' : 'text-blue-700',
                iconBg: 'bg-blue-500',
                line: 'bg-blue-500/20'
            },
            violet: {
                bg: theme === 'dark' ? 'bg-violet-500/10' : 'bg-violet-50',
                border: theme === 'dark' ? 'border-violet-500/30' : 'border-violet-200',
                text: theme === 'dark' ? 'text-violet-400' : 'text-violet-700',
                iconBg: 'bg-violet-500',
                line: 'bg-violet-500/20'
            },
            fuchsia: {
                bg: theme === 'dark' ? 'bg-fuchsia-500/10' : 'bg-fuchsia-50',
                border: theme === 'dark' ? 'border-fuchsia-500/30' : 'border-fuchsia-200',
                text: theme === 'dark' ? 'text-fuchsia-400' : 'text-fuchsia-700',
                iconBg: 'bg-fuchsia-500',
                line: 'bg-fuchsia-500/20'
            }
        };
        return colors[color] || colors.emerald;
    };

    return (
        <div className="space-y-12">
            {sections.map((section, index) => {
                const colors = getColorClasses(section.color);
                const sectionCourses = section.courseIds
                    .map(id => intensiveCourses.find((c: any) => c.id === id))
                    .filter(Boolean);

                return (
                    <div key={index} className="relative">
                        {/* Section Header */}
                        <div className={`flex items-center gap-4 mb-6 pb-4 border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg text-2xl shrink-0 ${colors.iconBg}`}>
                                {section.icon}
                            </div>
                            <div>
                                <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    {section.title}
                                </h2>
                                <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {section.description}
                                </p>
                            </div>
                        </div>

                        {/* List Layout - Vertical Stack */}
                        <div className="flex flex-col space-y-4">
                            {sectionCourses.map((course: any, idx: number) => (
                                <div key={course.id} className="relative pl-0 md:pl-4 transition-all duration-300">
                                    {/* Connecting Line (Desktop) */}
                                    {idx !== sectionCourses.length - 1 && (
                                        <div className={`absolute left-[50%] md:left-[35px] top-full h-4 w-0.5 ${colors.line} hidden md:block`} />
                                    )}

                                    <CourseContainer course={course} />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CourseRoadmap;
