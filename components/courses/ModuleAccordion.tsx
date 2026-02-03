import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ResourceItem from './ResourceItem';
import TaskBadge from './TaskBadge';

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

interface ModuleAccordionProps {
    module: Module;
    index: number;
    isCompleted?: boolean;
    onToggleComplete?: () => void;
}

const ModuleAccordion: React.FC<ModuleAccordionProps> = ({
    module,
    index,
    isCompleted = false,
    onToggleComplete
}) => {
    const { theme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(index === 0); // First module starts open

    return (
        <div className={`rounded-3xl border overflow-hidden transition-all duration-300 ${isExpanded
            ? theme === 'dark'
                ? 'border-purple-500/50 shadow-lg shadow-purple-500/10'
                : 'border-purple-300 shadow-lg shadow-purple-100'
            : theme === 'dark'
                ? 'border-slate-700 hover:border-slate-600'
                : 'border-slate-200 hover:border-slate-300'
            } ${theme === 'dark' ? 'bg-slate-800/30' : 'bg-white'}`}>

            {/* Header - Always Visible */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full flex items-center gap-4 p-4 md:p-5 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 rounded-3xl ${theme === 'dark' ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
                    }`}
            >
                {/* Day Badge */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center ${isCompleted
                    ? 'bg-gradient-to-br from-emerald-500 to-green-600'
                    : 'bg-gradient-to-br from-purple-500 to-violet-600'
                    } text-white`}>
                    <span className="text-xs font-medium opacity-80">Day</span>
                    <span className="text-xl font-bold">{index + 1}</span>
                </div>

                {/* Title & Summary */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                            {module.title}
                        </h4>
                        {isCompleted && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        )}
                    </div>
                    <p className={`text-sm line-clamp-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        {module.summary}
                    </p>
                </div>

                {/* Duration & Expand Icon */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`hidden md:flex items-center gap-1 text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                        }`}>
                        <Clock className="w-4 h-4" />
                        {module.duration}
                    </span>
                    <div className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-100'
                        }`}>
                        {isExpanded ? (
                            <ChevronUp className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                                }`} />
                        ) : (
                            <ChevronDown className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                                }`} />
                        )}
                    </div>
                </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && (
                <div className={`border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-100'
                    }`}>
                    <div className="p-4 md:p-6 space-y-6">
                        {/* V.A.T. Labels */}
                        <div className={`flex items-center gap-2 text-xs font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                            }`}>
                            <span className="px-2 py-1 rounded-lg bg-red-500/10 text-red-500">📺 Video</span>
                            <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-500">📄 Article</span>
                            <span className="px-2 py-1 rounded-lg bg-amber-500/10 text-amber-500">🛠️ Task</span>
                            <span className="ml-auto">V.A.T. Model</span>
                        </div>

                        {/* Resources Grid */}
                        <div className="space-y-3">
                            {module.resources.map((resource, idx) => (
                                <ResourceItem key={idx} resource={resource} />
                            ))}
                        </div>

                        {/* Task Section */}
                        <TaskBadge task={module.task} />

                        {/* Mark Complete Button */}
                        <button
                            onClick={onToggleComplete}
                            className={`w-full flex items-center justify-center gap-2 py-3 rounded-3xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${isCompleted
                                ? theme === 'dark'
                                    ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : theme === 'dark'
                                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <CheckCircle2 className="w-5 h-5" />
                            {isCompleted ? 'Completed! ✓' : 'Mark as Complete'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModuleAccordion;
