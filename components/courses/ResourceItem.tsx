import React from 'react';
import { Video, FileText, ExternalLink, Clock, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface Resource {
    type: 'Video' | 'Article';
    title: string;
    url: string;
    duration?: string;
    source?: string;
}

interface ResourceItemProps {
    resource: Resource;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ resource }) => {
    const { theme } = useTheme();
    const isVideo = resource.type === 'Video';

    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                    ? 'bg-slate-800/50 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
        >
            {/* Icon */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${isVideo
                    ? 'bg-gradient-to-br from-red-500 to-rose-600 text-white'
                    : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                }`}>
                {isVideo ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isVideo ? 'text-red-500' : 'text-blue-500'
                        }`}>
                        {isVideo ? '📺 Video' : '📄 Article'}
                    </span>
                    {resource.duration && (
                        <span className={`text-xs flex items-center gap-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                            }`}>
                            <Clock className="w-3 h-3" />
                            {resource.duration}
                        </span>
                    )}
                    {resource.source && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${theme === 'dark' ? 'bg-slate-700 text-slate-400' : 'bg-slate-100 text-slate-500'
                            }`}>
                            {resource.source}
                        </span>
                    )}
                </div>
                <p className={`font-medium truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                    {resource.title}
                </p>
            </div>

            {/* External Link Icon */}
            <ExternalLink className={`w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`} />
        </a>
    );
};

export default ResourceItem;
