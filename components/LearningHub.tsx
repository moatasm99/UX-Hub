import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
    Search,
    Sun,
    Moon,
    ExternalLink,
    BookOpen,
    Video,
    FileText,
    ChevronDown,
    ChevronUp,
    Filter,
    Sparkles,
    Rocket,
    GraduationCap,
    BookMarked
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { courseCatalog, categoryMeta, levelMeta } from '../data/courseCatalog';
import { roadmapCatalog, roadmapMeta } from '../data/roadmapCatalog';
import { intensiveCourses } from '../data/intensiveCourses';
import CourseContainer from './courses/CourseContainer';
import CourseRoadmap from './CourseRoadmap';
import CreatorSection from './CreatorSection';

interface Course {
    id: string;
    category: string;
    topic: string;
    description: string;
    level: string;
    resources: { type: string; title: string; url: string; label?: string }[];
}

interface RoadmapItem {
    id: string;
    category: string;
    topic: string;
    description: string;
    resources: { type: string; title: string; url: string; label?: string }[];
}

const LearningHub = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<'curriculum' | 'roadmap' | 'intensive'>('intensive');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
    const [isVibing, setIsVibing] = useState(false);
    const [vibeText, setVibeText] = useState('مبسوطين يا ولاد؟');

    // Get unique categories based on active tab
    const categories = activeTab === 'curriculum'
        ? ['All', ...new Set(courseCatalog.map((c: Course) => c.category))]
        : activeTab === 'roadmap'
            ? ['All', ...new Set(roadmapCatalog.map((c: RoadmapItem) => c.category))]
            : [];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

    // Filter courses
    const filteredCourses = useMemo(() => {
        return courseCatalog.filter((course: Course) => {
            const matchesSearch =
                course.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
            return matchesSearch && matchesCategory && matchesLevel;
        });
    }, [searchQuery, selectedCategory, selectedLevel]);

    // Filter roadmap
    const filteredRoadmap = useMemo(() => {
        return roadmapCatalog.filter((item: RoadmapItem) => {
            const matchesSearch =
                item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Group by category
    const groupedCourses = useMemo(() => {
        const groups: Record<string, Course[]> = {};
        filteredCourses.forEach((course: Course) => {
            if (!groups[course.category]) {
                groups[course.category] = [];
            }
            groups[course.category].push(course);
        });
        return groups;
    }, [filteredCourses]);

    // Group roadmap by category
    const groupedRoadmap = useMemo(() => {
        const groups: Record<string, RoadmapItem[]> = {};
        filteredRoadmap.forEach((item: RoadmapItem) => {
            if (!groups[item.category]) {
                groups[item.category] = [];
            }
            groups[item.category].push(item);
        });
        return groups;
    }, [filteredRoadmap]);

    const toggleCard = (id: string) => {
        setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const getResourceIcon = (type: string) => {
        switch (type) {
            case 'Video': return <Video className="w-4 h-4" />;
            case 'Article': return <FileText className="w-4 h-4" />;
            case 'Book': return <BookOpen className="w-4 h-4" />;
            default: return <ExternalLink className="w-4 h-4" />;
        }
    };

    const handleVibeCheck = () => {
        setIsVibing(true);
        setVibeText('أيوه كده! 🎉');
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.8 }
        });

        setTimeout(() => {
            setIsVibing(false);
            setVibeText('مبسوطين يا ولاد؟');
        }, 3000);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark'
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900'
            }`}>

            {/* Header */}
            <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${theme === 'dark' ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-slate-200'
                }`}>
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                U
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    UX Learning Hub
                                </h1>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                    Your path to UX mastery
                                </p>
                            </div>
                        </div>

                        {/* Tab Navigation */}
                        <div className="hidden md:flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                            <button
                                onClick={() => { setActiveTab('curriculum'); setSelectedCategory('All'); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'curriculum'
                                    ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600 dark:text-purple-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                <GraduationCap className="w-4 h-4" />
                                Core Curriculum
                            </button>
                            <button
                                onClick={() => { setActiveTab('intensive'); setSelectedCategory('All'); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'intensive'
                                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                <BookMarked className="w-4 h-4" />
                                📚 Intensive Courses
                            </button>
                            <button
                                onClick={() => { setActiveTab('roadmap'); setSelectedCategory('All'); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'roadmap'
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                <Rocket className="w-4 h-4" />
                                🚀 Roadmap
                            </button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-3 rounded-xl transition-all duration-300 ${theme === 'dark'
                                ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Mobile Tab Navigation */}
                    <div className="flex md:hidden items-center gap-2 mt-4 overflow-x-auto">
                        <button
                            onClick={() => { setActiveTab('curriculum'); setSelectedCategory('All'); }}
                            className={`flex-shrink-0 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'curriculum'
                                ? 'bg-purple-600 text-white'
                                : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            <GraduationCap className="w-3 h-3" />
                            Resources
                        </button>
                        <button
                            onClick={() => { setActiveTab('intensive'); setSelectedCategory('All'); }}
                            className={`flex-shrink-0 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'intensive'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                                : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            <BookMarked className="w-3 h-3" />
                            Courses
                        </button>
                        <button
                            onClick={() => { setActiveTab('roadmap'); setSelectedCategory('All'); }}
                            className={`flex-shrink-0 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'roadmap'
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            <Rocket className="w-3 h-3" />
                            Roadmap
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {activeTab === 'curriculum' && (
                        <>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
                                <Sparkles className="w-4 h-4 text-purple-500" />
                                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
                                    Curated for ITI UX Students
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                                    Master UX/UI Design
                                </span>
                            </h2>
                            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                A comprehensive curriculum covering Research, Design, Testing, Business, and AI tools.
                            </p>
                        </>
                    )}
                    {activeTab === 'intensive' && (
                        <>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6">
                                <BookMarked className="w-4 h-4 text-emerald-500" />
                                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}`}>
                                    9-Month ITI Professional Diploma
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                    📚 Intensive Courses
                                </span>
                            </h2>
                            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                Deep-dive courses with Video lectures, Articles, and Mandatory Tasks (V.A.T. Model).
                            </p>
                        </>
                    )}
                    {activeTab === 'roadmap' && (
                        <>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-6">
                                <Rocket className="w-4 h-4 text-amber-500" />
                                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'}`}>
                                    Advanced Product Strategy Track
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                    🚀 Product Roadmap
                                </span>
                            </h2>
                            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                Strategic product resources: Vision, Launch, Analytics, and Research methods.
                            </p>
                        </>
                    )}

                    {/* Search Bar - only show for curriculum and roadmap */}
                    {activeTab !== 'intensive' && (
                        <div className="relative max-w-xl mx-auto">
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`} />
                            <input
                                type="text"
                                placeholder={activeTab === 'curriculum' ? "Search topics, resources..." : "Search product resources..."}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none text-lg ${theme === 'dark'
                                    ? 'bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white placeholder-slate-500'
                                    : 'bg-white border-slate-200 focus:border-purple-500 text-slate-900 placeholder-slate-400'
                                    }`}
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Filters - only show for curriculum and roadmap */}
            {activeTab !== 'intensive' && (
                <section className="px-4 pb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white shadow-sm'}`}>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Filter className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`} />
                                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Filter by:
                                    </span>
                                </div>

                                {/* Category Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                                ? activeTab === 'roadmap'
                                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                                : theme === 'dark'
                                                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                {/* Level Filter - only for curriculum */}
                                {activeTab === 'curriculum' && (
                                    <div className="flex items-center gap-2 ml-auto">
                                        <span className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>|</span>
                                        <div className="flex flex-wrap gap-2">
                                            {levels.slice(0, 4).map(level => (
                                                <button
                                                    key={level}
                                                    onClick={() => setSelectedLevel(level)}
                                                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${selectedLevel === level
                                                        ? 'bg-purple-600 text-white'
                                                        : theme === 'dark'
                                                            ? 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                                        }`}
                                                >
                                                    {level}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content */}
            <main className="px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Intensive Courses Tab */}
                    {activeTab === 'intensive' && (
                        <div className="space-y-8">
                            <CreatorSection />
                            <div className={`text-center py-6 px-6 rounded-2xl mb-8 border transition-all ${theme === 'dark'
                                ? 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/30'
                                : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'}`}>
                                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    🎓 The ITI 4-Month Video Curriculum
                                </h3>
                                <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Follow the tracks in order. Each module includes <span className="text-red-500 font-bold">Video</span> + <span className="text-blue-500 font-bold">Article</span> + <span className="text-amber-500 font-bold">Task</span> (V.A.T Model).
                                </p>
                            </div>

                            <CourseRoadmap />
                        </div>
                    )}

                    {/* Curriculum Tab */}
                    {activeTab === 'curriculum' && (
                        <div className="space-y-12">
                            {filteredCourses.length === 0 ? (
                                <div className={`text-center py-16 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                    <p className="text-lg">No courses found matching your criteria.</p>
                                </div>
                            ) : (
                                Object.entries(groupedCourses).map(([category, courses]) => (
                                    <div key={category} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{categoryMeta[category]?.icon || '📚'}</span>
                                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                {category}
                                            </h3>
                                            <span className={`text-sm px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
                                                {(courses as Course[]).length} topics
                                            </span>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            {(courses as Course[]).map((course) => (
                                                <div
                                                    key={course.id}
                                                    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${theme === 'dark'
                                                        ? 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
                                                        : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-lg'
                                                        }`}
                                                >
                                                    <div
                                                        onClick={() => toggleCard(course.id)}
                                                        className={`p-5 cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}
                                                    >
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelMeta[course.level]?.bg} ${levelMeta[course.level]?.text}`}>
                                                                        {course.level}
                                                                    </span>
                                                                </div>
                                                                <h4 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                                    {course.topic}
                                                                </h4>
                                                                <p className={`text-sm line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                                                    {course.description}
                                                                </p>
                                                            </div>
                                                            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                                                {expandedCards[course.id]
                                                                    ? <ChevronUp className="w-5 h-5" />
                                                                    : <ChevronDown className="w-5 h-5" />
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {expandedCards[course.id] && (
                                                        <div className={`px-5 pb-5 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-100'}`}>
                                                            <div className="pt-4 space-y-2">
                                                                {course.resources.map((resource, idx) => (
                                                                    <a
                                                                        key={idx}
                                                                        href={resource.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${theme === 'dark'
                                                                            ? 'bg-slate-700/50 hover:bg-slate-700'
                                                                            : 'bg-slate-50 hover:bg-slate-100'
                                                                            }`}
                                                                    >
                                                                        <div className={`p-2 rounded-lg ${resource.type === 'Video' ? 'bg-red-500/10 text-red-500' : resource.type === 'Article' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
                                                                            {getResourceIcon(resource.type)}
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <p className={`text-sm font-medium truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                                                {resource.title}
                                                                            </p>
                                                                            <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                                                {resource.type} • {resource.label || 'Resource'}
                                                                            </p>
                                                                        </div>
                                                                        <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`} />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Roadmap Tab */}
                    {activeTab === 'roadmap' && (
                        <div className="space-y-12">
                            {filteredRoadmap.length === 0 ? (
                                <div className={`text-center py-16 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                    <p className="text-lg">No roadmap items found matching your criteria.</p>
                                </div>
                            ) : (
                                Object.entries(groupedRoadmap).map(([category, items]) => (
                                    <div key={category} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{roadmapMeta[category]?.icon || '🎯'}</span>
                                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                {category}
                                            </h3>
                                            <span className={`text-sm px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                                                {(items as RoadmapItem[]).length} topics
                                            </span>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            {(items as RoadmapItem[]).map((item) => (
                                                <div
                                                    key={item.id}
                                                    className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${theme === 'dark'
                                                        ? 'bg-slate-800/50 border-amber-500/30 hover:border-amber-500/60'
                                                        : 'bg-white border-amber-300 hover:border-amber-500'
                                                        }`}
                                                >
                                                    <div
                                                        onClick={() => toggleCard(item.id)}
                                                        className={`p-5 cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-amber-50'}`}
                                                    >
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="flex-1">
                                                                <h4 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                                    {item.topic}
                                                                </h4>
                                                                <p className={`text-sm line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
                                                                {expandedCards[item.id]
                                                                    ? <ChevronUp className="w-5 h-5 text-amber-500" />
                                                                    : <ChevronDown className="w-5 h-5 text-amber-500" />
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {expandedCards[item.id] && (
                                                        <div className={`px-5 pb-5 border-t ${theme === 'dark' ? 'border-amber-500/20' : 'border-amber-200'}`}>
                                                            <div className="pt-4 space-y-2">
                                                                {item.resources.map((resource, idx) => (
                                                                    <a
                                                                        key={idx}
                                                                        href={resource.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${theme === 'dark'
                                                                            ? 'bg-slate-700/50 hover:bg-slate-700'
                                                                            : 'bg-amber-50 hover:bg-amber-100'
                                                                            }`}
                                                                    >
                                                                        <div className={`p-2 rounded-lg ${resource.type === 'Video' ? 'bg-red-500/10 text-red-500' : resource.type === 'Article' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
                                                                            {getResourceIcon(resource.type)}
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <p className={`text-sm font-medium truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                                                {resource.title}
                                                                            </p>
                                                                            <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                                                {resource.type} • {resource.label || 'Resource'}
                                                                            </p>
                                                                        </div>
                                                                        <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`} />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className={`border-t py-8 px-4 ${theme === 'dark' ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                        Built with 💜 for ITI UX/UI Design Students
                    </p>
                </div>
            </footer>

            {/* Vibe Check FAB */}
            <button
                onClick={handleVibeCheck}
                className={`fixed bottom-6 right-6 px-6 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-110 ${isVibing
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-bounce'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-500/30'
                    }`}
            >
                <span className="flex items-center gap-2">
                    {isVibing ? '🎊' : '✨'}
                    <span className="font-arabic">{vibeText}</span>
                </span>
            </button>
        </div>
    );
};

export default LearningHub;
