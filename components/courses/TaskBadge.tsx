import React from 'react';
import { ClipboardCheck, FileCheck, AlertCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface Task {
    title: string;
    description: string;
    deliverable: string;
}

interface TaskBadgeProps {
    task: Task;
}

const TaskBadge: React.FC<TaskBadgeProps> = ({ task }) => {
    const { theme } = useTheme();

    return (
        <div className={`relative overflow-hidden rounded-xl border-2 border-dashed transition-all ${theme === 'dark'
                ? 'bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/40'
                : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-400'
            }`}>
            {/* Header Badge */}
            <div className={`flex items-center gap-2 px-4 py-2 border-b ${theme === 'dark' ? 'border-amber-500/20 bg-amber-900/30' : 'border-amber-200 bg-amber-100'
                }`}>
                <ClipboardCheck className={`w-4 h-4 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'
                    }`} />
                <span className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-amber-400' : 'text-amber-700'
                    }`}>
                    🛠️ Mandatory Task
                </span>
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-medium ${theme === 'dark' ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-200 text-amber-800'
                    }`}>
                    Required
                </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <h4 className={`font-bold text-lg ${theme === 'dark' ? 'text-amber-300' : 'text-amber-800'
                    }`}>
                    {task.title}
                </h4>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                    {task.description}
                </p>

                {/* Deliverable */}
                <div className={`flex items-center gap-2 pt-2 border-t ${theme === 'dark' ? 'border-amber-500/20' : 'border-amber-200'
                    }`}>
                    <FileCheck className={`w-4 h-4 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                        }`} />
                    <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        Deliverable:
                    </span>
                    <span className={`text-xs font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                        }`}>
                        {task.deliverable}
                    </span>
                </div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute top-2 right-[-20px] w-16 text-center text-xs font-bold py-1 transform rotate-45 ${theme === 'dark' ? 'bg-amber-500 text-amber-900' : 'bg-amber-400 text-white'
                    }`}>
                    DO IT
                </div>
            </div>
        </div>
    );
};

export default TaskBadge;
