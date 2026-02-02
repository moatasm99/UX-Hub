
import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
    Search,
    Sun,
    Moon,
    BookOpen,
    Video,
    FileText,
    Layout,
    PenTool,
    Sparkles,
    Monitor,
    Users,
    MousePointer2,
    BarChart3,
    Coffee
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// AI Chat Panel removed for cleaner static site

// --- Data Structure ---
const RESOURCES = [
    // PART 1: RESEARCH
    {
        category: 'Research',
        title: 'The Mom Test',
        type: 'Book',
        icon: <BookOpen className="w-5 h-5" />,
        desc: 'How to talk to customers & learn if your business is a good idea when everyone is lying to you.',
        link: 'https://www.momtestbook.com/'
    },
    {
        category: 'Research',
        title: 'Agile vs Lean UX',
        type: 'Video',
        icon: <Video className="w-5 h-5" />,
        desc: 'Simple explanation from NN/g about the difference between both in modern workflows.',
        link: 'https://www.nngroup.com/videos/lean-ux/'
    },
    {
        category: 'Research',
        title: 'User Interviews Guide',
        type: 'Article',
        icon: <FileText className="w-5 h-5" />,
        desc: 'Comprehensive guide to conducting user interviews, asking right questions, and avoiding bias.',
        link: 'https://www.nngroup.com/articles/user-interviews/'
    },
    {
        category: 'Research',
        title: 'Quant vs Qual',
        type: 'Article',
        icon: <BarChart3 className="w-5 h-5" />,
        desc: 'When to use numbers vs when to look for deep insights.',
        link: 'https://www.nngroup.com/articles/quant-vs-qual/'
    },

    // PART 2: STRATEGY
    {
        category: 'Strategy',
        title: 'Jobs to be Done',
        type: 'Video',
        icon: <Video className="w-5 h-5" />,
        desc: 'Understanding real user motivations (Famous Milkshake example).',
        link: 'https://www.youtube.com/watch?v=sfGtw2C95Ms'
    },
    {
        category: 'Strategy',
        title: 'Demographics vs Psychographics',
        type: 'Article',
        icon: <Users className="w-5 h-5" />,
        desc: 'Why behavior matters much more than age/gender in experience design.',
        link: 'https://www.nngroup.com/articles/psychographics-vs-demographics/'
    },
    {
        category: 'Strategy',
        title: 'The User Is Not Everyone',
        type: 'Article',
        icon: <FileText className="w-5 h-5" />,
        desc: 'Prioritizing audience and why you cannot design for everyone at once.',
        link: 'https://uxplanet.org/the-user-is-not-everyone-8c4f7b5e3f4f'
    },
    {
        category: 'Strategy',
        title: 'Personas 101',
        type: 'Article',
        icon: <Users className="w-5 h-5" />,
        desc: 'NN/g guide to building data-driven user personas.',
        link: 'https://www.nngroup.com/articles/persona/'
    },
    {
        category: 'Strategy',
        title: 'Empathy Mapping',
        type: 'Article',
        icon: <Layout className="w-5 h-5" />,
        desc: 'Mapping user feelings, thoughts, and actions to understand them deeply.',
        link: 'https://www.nngroup.com/articles/empathy-mapping/'
    },

    // PART 3: IA & STRUCTURE
    {
        category: 'IA',
        title: 'Card Sorting 101',
        type: 'Guide',
        icon: <Layout className="w-5 h-5" />,
        desc: 'Method to organize content based on user mental models using open/closed sorting.',
        link: 'https://www.optimalworkshop.com/learn/101s/card-sorting/'
    },
    {
        category: 'IA',
        title: 'IA Basics',
        type: 'Video',
        icon: <Video className="w-5 h-5" />,
        desc: 'Beginners guide from Flux Academy to build strong site structure foundations.',
        link: 'https://www.youtube.com/watch?v=Ij4WquL4wc4'
    },
    {
        category: 'IA',
        title: 'Top Tasks',
        type: 'Article',
        icon: <FileText className="w-5 h-5" />,
        desc: 'Gerry McGovern model for prioritizing what really matters to users.',
        link: 'https://gerrymcgovern.com/top-tasks-a-how-to-guide/'
    },
    {
        category: 'IA',
        title: 'Sitemaps',
        type: 'Article',
        icon: <Layout className="w-5 h-5" />,
        desc: 'Explanation of symbols, structures, and how to build pro sitemaps.',
        link: 'https://uxdesign.cc/how-to-create-a-ux-sitemap-a-simple-guideline-8786c16f85c1'
    },
    {
        category: 'IA',
        title: 'Tree Testing',
        type: 'Guide',
        icon: <Layout className="w-5 h-5" />,
        desc: 'How to test Navigation systems without any visual design.',
        link: 'https://maze.co/guides/tree-testing/'
    },

    // PART 4: TOOLS
    {
        category: 'Tools',
        subGroup: 'AI',
        title: 'ChatGPT',
        type: 'AI',
        icon: <Sparkles className="w-5 h-5" />,
        desc: 'Summarizing interviews, generating scenarios, and brainstorming.',
        link: 'https://chat.openai.com'
    },
    {
        category: 'Tools',
        subGroup: 'AI',
        title: 'Claude',
        type: 'AI',
        icon: <Sparkles className="w-5 h-5" />,
        desc: 'Advanced reasoning and analysis for user feedback.',
        link: 'https://claude.ai'
    },
    {
        category: 'Tools',
        subGroup: 'AI',
        title: 'Otter.ai',
        type: 'AI',
        icon: <Video className="w-5 h-5" />,
        desc: 'AI meeting notes and instant interview transcription.',
        link: 'https://otter.ai'
    },
    {
        category: 'Tools',
        subGroup: 'AI',
        title: 'RealEye',
        type: 'AI',
        icon: <Monitor className="w-5 h-5" />,
        desc: 'Predictive heatmaps and attention analysis using webcam.',
        link: 'https://realeye.io'
    },
    {
        category: 'Tools',
        subGroup: 'AI',
        title: 'Dovetail',
        type: 'AI',
        icon: <FileText className="w-5 h-5" />,
        desc: 'AI-powered research repository to discover patterns.',
        link: 'https://dovetailapp.com'
    },
    {
        category: 'Tools',
        subGroup: 'AI',
        title: 'Khroma',
        type: 'AI',
        icon: <PenTool className="w-5 h-5" />,
        desc: 'AI tool generates infinite color palettes for UI designers.',
        link: 'https://khroma.co'
    },
    {
        category: 'Tools',
        subGroup: 'Core',
        title: 'Optimal Workshop',
        type: 'Core',
        icon: <Layout className="w-5 h-5" />,
        desc: 'Industry standard for Card Sorting and Tree Testing.',
        link: 'https://optimalworkshop.com'
    },
    {
        category: 'Tools',
        subGroup: 'Core',
        title: 'Lyssna',
        type: 'Core',
        icon: <MousePointer2 className="w-5 h-5" />,
        desc: 'Famous for 5-second tests and first-click tests.',
        link: 'https://lyssna.com'
    },
    {
        category: 'Tools',
        subGroup: 'Core',
        title: 'Maze',
        type: 'Core',
        icon: <Monitor className="w-5 h-5" />,
        desc: 'Rapid prototype testing to validate ideas before coding.',
        link: 'https://maze.co'
    },
    {
        category: 'Tools',
        subGroup: 'Core',
        title: 'Google Forms',
        type: 'Core',
        icon: <FileText className="w-5 h-5" />,
        desc: 'Simple and free surveys for quick data collection.',
        link: 'https://forms.google.com'
    },
    {
        category: 'Tools',
        subGroup: 'Design',
        title: 'Figma',
        type: 'Design',
        icon: <PenTool className="w-5 h-5" />,
        desc: 'The ultimate tool for interface design and interactive collaboration.',
        link: 'https://figma.com'
    },
    {
        category: 'Tools',
        subGroup: 'Design',
        title: 'Hotjar',
        type: 'Design',
        icon: <Monitor className="w-5 h-5" />,
        desc: 'Visualize user behavior via heatmaps and session recordings.',
        link: 'https://hotjar.com'
    },
    {
        category: 'Tools',
        subGroup: 'Design',
        title: 'Microsoft Clarity',
        type: 'Design',
        icon: <Monitor className="w-5 h-5" />,
        desc: 'Free heatmaps and session recording tool.',
        link: 'https://clarity.microsoft.com'
    },
    {
        category: 'Tools',
        subGroup: 'Design',
        title: 'Miro',
        type: 'Design',
        icon: <Layout className="w-5 h-5" />,
        desc: 'Infinite workspace for journey maps and brainstorming.',
        link: 'https://miro.com'
    }
];

const CATEGORIES = ['All', 'Research', 'Strategy', 'IA', 'Tools'];

const ResourceHub: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [vibeText, setVibeText] = useState('مبسوطين يا ولاد؟ 😄');
    const [isVibing, setIsVibing] = useState(false);

    // --- Filtering Logic ---
    const filteredResources = useMemo(() => {
        return RESOURCES.filter(item => {
            const matchesCat = filter === 'All' || item.category === filter;
            const term = search.toLowerCase();
            const matchesSearch = item.title.toLowerCase().includes(term) ||
                item.desc.toLowerCase().includes(term);
            return matchesCat && matchesSearch;
        });
    }, [filter, search]);

    // --- Vibe Check Logic ---
    const handleVibeCheck = () => {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.8, x: 0.9 }, // Bottom right origin
            colors: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']
        });

        setVibeText('يارب دايماً! ❤️');
        setIsVibing(true);

        setTimeout(() => {
            setVibeText('مبسوطين يا ولاد؟ 😄');
            setIsVibing(false);
        }, 3000);
    };

    // --- Helper: Dynamic Badge Colors ---
    const getBadgeColor = (type: string) => {
        const base = type.toLowerCase();
        switch (base) {
            case 'video': return 'bg-purple-100/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
            case 'book': return 'bg-emerald-100/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
            case 'article': return 'bg-blue-100/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
            case 'ai': return 'bg-rose-100/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
            case 'design': return 'bg-orange-100/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
            default: return 'bg-slate-100/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 font-sans ${theme === 'dark' ? 'bg-[#0f172a] text-[#f1f5f9]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>

            {/* Background Ambience (Subtle) */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 transition-colors duration-700 ${theme === 'dark' ? 'bg-blue-900/40' : 'bg-blue-200/40'}`}></div>
                <div className={`absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 transition-colors duration-700 ${theme === 'dark' ? 'bg-purple-900/40' : 'bg-purple-200/40'}`}></div>
            </div>

            {/* --- Header --- */}
            <header className="relative pt-10 pb-6 container mx-auto px-4 max-w-6xl flex flex-col items-center z-10">

                {/* Toggle Theme */}
                <button
                    onClick={toggleTheme}
                    className={`absolute top-10 right-4 p-3 rounded-full transition-all duration-300 border backdrop-blur-md ${theme === 'dark'
                        ? 'bg-slate-800/40 border-white/10 text-yellow-400 hover:bg-white/10'
                        : 'bg-white border-slate-200 text-slate-600 hover:shadow-md'
                        }`}
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>

                {/* Title */}
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold tracking-wider mb-4 border border-blue-500/20 uppercase">
                    Learning Path
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 leading-tight">
                    UX Design Course
                </h1>
                <p className={`text-lg md:text-xl text-center max-w-2xl font-medium ${theme === 'dark' ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                    Curated resources for modern designers, from research to shiny UI tools.
                </p>
            </header>

            {/* --- Controls: Search & Tabs --- */}
            <div className="container mx-auto px-4 max-w-6xl relative z-10 mb-12">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/5 backdrop-blur-sm p-2 rounded-3xl">

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 p-1">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                                    : theme === 'dark'
                                        ? 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        : 'text-slate-600 hover:bg-slate-200/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80 group">
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={`w-full pl-10 pr-4 py-3 rounded-2xl border outline-none transition-all duration-300 ${theme === 'dark'
                                ? 'bg-slate-800/50 border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:bg-slate-800'
                                : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:shadow-md'
                                }`}
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                </div>
            </div>

            {/* --- Grid Content --- */}
            <main className="container mx-auto px-4 max-w-6xl pb-32 relative z-0">
                {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative flex flex-col p-6 rounded-3xl transition-all duration-300 border ${theme === 'dark'
                                    ? 'bg-slate-800/60 backdrop-blur-md border-white/5 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20'
                                    : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200'
                                    }`}
                            >
                                {/* Sub-Group Tag if exists */}
                                {item.subGroup && (
                                    <span className={`absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider opacity-60`}>
                                        {item.subGroup}
                                    </span>
                                )}

                                {/* header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-3xl transition-colors ${theme === 'dark' ? 'bg-slate-700/50 text-white' : 'bg-slate-50 text-slate-700'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase border mb-1 ${getBadgeColor(item.type)}`}>
                                            {item.type}
                                        </span>
                                        <h3 className={`font-bold text-lg leading-tight group-hover:text-blue-500 transition-colors ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                                            }`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Body */}
                                <p className={`text-sm leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                    }`}>
                                    {item.desc}
                                </p>

                                {/* Footer / CTA */}
                                <div className={`mt-auto pt-4 border-t w-full flex items-center justify-between text-sm font-semibold transition-colors ${theme === 'dark' ? 'border-white/5 text-slate-500 group-hover:text-blue-400' : 'border-slate-100 text-slate-400 group-hover:text-blue-600'
                                    }`}>
                                    <span>Explore Resource</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className={`text-center py-20 rounded-3xl border-2 border-dashed ${theme === 'dark' ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
                        }`}>
                        <div className="text-6xl mb-4">🤔</div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                            حد فاهم حاجة؟
                        </h3>
                        <p className="text-slate-500">جرب ابحث بكلمة تانية!</p>
                    </div>
                )}
            </main>

            {/* --- Footer --- */}
            <footer className={`py-8 text-center border-t transition-colors ${theme === 'dark' ? 'border-white/5 text-slate-500 bg-[#0b1120]' : 'border-slate-200 text-slate-400 bg-white'
                }`}>
                <p className="flex items-center justify-center gap-2 text-sm font-medium">
                    صنعت بحب <span className="text-red-500 animate-pulse">❤️</span> من أجلكم ، معتصم
                </p>
            </footer>

            {/* AI Chat Panel removed */}

            {/* --- Vibe Check FAB --- */}
            <button
                onClick={handleVibeCheck}
                className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${isVibing
                    ? 'bg-green-500 text-white shadow-green-900/30'
                    : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-rose-500/40'
                    }`}
            >
                <span className="text-xl">{isVibing ? '✨' : '🎈'}</span>
                <span className="font-bold whitespace-nowrap hidden md:inline-block">
                    {vibeText}
                </span>
            </button>

        </div>
    );
};

export default ResourceHub;
