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

            {/* Course Header - Wide Row Layout */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className={`cursor-pointer w-full p-5 ${theme === 'dark' ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'} transition-colors duration-200`}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">

                    {/* LEFT: Icon & Main Info */}
                    <div className="flex items-start md:items-center gap-4 flex-1">
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.badgeColor} flex items-center justify-center text-2xl shadow-md shrink-0`}>
                            {course.icon}
                        </div>

                        {/* Title & Badge */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`hidden md:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeStyle.bg} ${badgeStyle.text}`}>
                                    {course.badge}
                                </span>
                                {completedModules.size > 0 && (
                                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                        <Trophy className="w-3 h-3" /> {Math.round(progressPercent)}%
                                    </span>
                                )}
                            </div>
                            <h3 className={`text-lg md:text-xl font-bold truncate pr-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                {course.title}
                            </h3>
                            <p className={`text-sm line-clamp-1 md:line-clamp-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                {course.description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Metadata & Action */}
                    <div className="flex items-center justify-between md:justify-end gap-3 md:gap-6 w-full md:w-auto mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-none border-dashed border-slate-200 dark:border-slate-800">
                        {/* Stats */}
                        <div className="flex items-center gap-4 text-xs font-medium opacity-80">
                            <span className={`flex items-center gap-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                <Clock className="w-3.5 h-3.5" />
                                {course.totalHours}
                            </span>
                            <span className={`flex items-center gap-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                <Layers className="w-3.5 h-3.5" />
                                {course.modules.length} Modules
                            </span>
                        </div>

                        {/* Chevron Trigger */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-purple-500 text-white rotate-180' : (theme === 'dark' ? 'bg-slate-800 text-slate-400 hover:text-purple-400' : 'bg-slate-100 text-slate-500 hover:text-purple-600')}`}>
                            <ChevronDown className="w-5 h-5" />
                        </div>
                    </div>

                </div>

                {/* Progress Bar (Visible at bottom of card if started) */}
                {completedModules.size > 0 && (
                    <div className="mt-4 md:mt-0 absolute bottom-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800">
                        <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                    </div>
                )}
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
