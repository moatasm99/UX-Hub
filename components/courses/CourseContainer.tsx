import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Layers, Trophy, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ModuleAccordion from './ModuleAccordion';
import { badgeMeta } from '../../data/intensiveCourses';

interface Resource {
    type: 'Video' | 'Article';
    title: string;
    url: string;
    duration?: string;
    source?: string;
}

interface Task {
    title: string;
    description: string;
    deliverable: string;
}

interface Module {
    day: string;
    title: string;
    summary: string;
    duration: string;
    resources: Resource[];
    task: Task;
}

interface Course {
    id: string;
    title: string;
    badge: string;
    badgeColor: string;
    totalHours: string;
    totalDays: number;
    description: string;
    icon: string;
    modules: Module[];
}

interface CourseContainerProps {
    course: Course;
}

const CourseContainer: React.FC<CourseContainerProps> = ({ course }) => {
    const { theme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const [completedModules, setCompletedModules] = useState<Set<number>>(new Set());

    const toggleModuleComplete = (index: number) => {
        setCompletedModules(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const progressPercent = (completedModules.size / course.modules.length) * 100;
    const badgeStyle = badgeMeta[course.badge as keyof typeof badgeMeta] || badgeMeta.Foundation;

    return (
        <div className={`rounded-3xl border-2 overflow-hidden transition-all duration-500 ${isExpanded
                ? theme === 'dark'
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20'
                    : 'border-purple-400 shadow-2xl shadow-purple-200'
                : theme === 'dark'
                    ? 'border-slate-700 hover:border-slate-600'
                    : 'border-slate-200 hover:border-slate-300'
            } ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>

            {/* Course Header */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className={`cursor-pointer p-6 md:p-8 ${theme === 'dark' ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
                    } transition-colors`}
            >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    {/* Course Icon & Badge */}
                    <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${course.badgeColor} flex items-center justify-center text-3xl md:text-4xl shadow-lg`}>
                            {course.icon}
                        </div>
                        <div className="md:hidden">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${badgeStyle.bg} ${badgeStyle.text}`}>
                                {badgeStyle.icon} {course.badge}
                            </span>
                        </div>
                    </div>

                    {/* Course Info */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${badgeStyle.bg} ${badgeStyle.text}`}>
                                {badgeStyle.icon} {course.badge}
                            </span>
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                            {course.title}
                        </h3>
                        <p className={`text-sm md:text-base mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                            {course.description}
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                <Clock className="w-4 h-4" />
                                {course.totalHours}
                            </span>
                            <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                <Layers className="w-4 h-4" />
                                {course.totalDays} Days
                            </span>
                            <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                <BookOpen className="w-4 h-4" />
                                {course.modules.reduce((acc, m) => acc + m.resources.length, 0)} Resources
                            </span>
                            {completedModules.size > 0 && (
                                <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                                    <Trophy className="w-4 h-4" />
                                    {completedModules.size}/{course.modules.length} Complete
                                </span>
                            )}
                        </div>

                        {/* Progress Bar */}
                        {completedModules.size > 0 && (
                            <div className="mt-4">
                                <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'
                                    }`}>
                                    <div
                                        className="h-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-500"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Expand Button */}
                    <div className={`flex items-center justify-center p-3 rounded-xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
                        }`}>
                        {isExpanded ? (
                            <ChevronUp className={`w-6 h-6 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                                }`} />
                        ) : (
                            <ChevronDown className={`w-6 h-6 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                                }`} />
                        )}
                    </div>
                </div>
            </div>

            {/* Expanded Course Content */}
            {isExpanded && (
                <div className={`border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
                    }`}>
                    {/* Course Overview Banner */}
                    <div className={`px-6 md:px-8 py-4 ${theme === 'dark'
                            ? 'bg-gradient-to-r from-purple-900/30 to-violet-900/30'
                            : 'bg-gradient-to-r from-purple-50 to-violet-50'
                        }`}>
                        <div className="flex items-center justify-between">
                            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                                }`}>
                                📚 Course Modules ({course.modules.length} Days)
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                Each module follows the <span className="font-bold">V.A.T.</span> Model
                            </p>
                        </div>
                    </div>

                    {/* Module List */}
                    <div className="p-6 md:p-8 space-y-4">
                        {course.modules.map((module, index) => (
                            <ModuleAccordion
                                key={index}
                                module={module}
                                index={index}
                                isCompleted={completedModules.has(index)}
                                onToggleComplete={() => toggleModuleComplete(index)}
                            />
                        ))}
                    </div>

                    {/* Course Completion Banner */}
                    {completedModules.size === course.modules.length && (
                        <div className={`mx-6 md:mx-8 mb-6 md:mb-8 p-6 rounded-2xl text-center ${theme === 'dark'
                                ? 'bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-500/30'
                                : 'bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200'
                            }`}>
                            <div className="text-4xl mb-2">🎉</div>
                            <h4 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                                }`}>
                                Course Complete!
                            </h4>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                You've completed all modules. Ready for the next course?
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CourseContainer;
