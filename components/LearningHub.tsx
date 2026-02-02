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
    GraduationCap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { courseCatalog, categoryMeta, levelMeta } from '../data/courseCatalog';
import { roadmapCatalog, roadmapMeta } from '../data/roadmapCatalog';

const LearningHub = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<'curriculum' | 'roadmap'>('curriculum');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [expandedCards, setExpandedCards] = useState({});
    const [isVibing, setIsVibing] = useState(false);
    const [vibeText, setVibeText] = useState('مبسوطين يا ولاد؟');

    // Get unique categories based on active tab
    const categories = activeTab === 'curriculum'
        ? ['All', ...new Set(courseCatalog.map(c => c.category))]
        : ['All', ...new Set(roadmapCatalog.map(c => c.category))];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

    // Get roadmap categories
    const roadmapCategories = ['All', ...new Set(roadmapCatalog.map(c => c.category))];

    // Filter courses
    const filteredCourses = useMemo(() => {
        return courseCatalog.filter(course => {
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
        return roadmapCatalog.filter(item => {
            const matchesSearch =
                item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Group by category
    const groupedCourses = useMemo(() => {
        const groups: Record<string, typeof courseCatalog> = {};
        filteredCourses.forEach(course => {
            if (!groups[course.category]) {
                groups[course.category] = [];
            }
            groups[course.category].push(course);
        });
        return groups;
    }, [filteredCourses]);

    // Group roadmap by category
    const groupedRoadmap = useMemo(() => {
        const groups: Record<string, typeof roadmapCatalog> = {};
        filteredRoadmap.forEach(item => {
            if (!groups[item.category]) {
                groups[item.category] = [];
            }
            groups[item.category].push(item);
        });
        return groups;
    }, [filteredRoadmap]);

    const toggleCard = (id) => {
        setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleVibeCheck = () => {
        setIsVibing(true);
        setVibeText('أيوه كده! 🎉');
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.8, x: 0.9 },
            colors: ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b']
        });
        setTimeout(() => {
            setIsVibing(false);
            setVibeText('مبسوطين يا ولاد؟');
        }, 3000);
    };

    const getResourceIcon = (type) => {
        switch (type) {
            case 'Video': return <Video className="w-4 h-4" />;
            case 'Article': return <FileText className="w-4 h-4" />;
            default: return <BookOpen className="w-4 h-4" />;
        }
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
                                onClick={() => { setActiveTab('roadmap'); setSelectedCategory('All'); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'roadmap'
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                <Rocket className="w-4 h-4" />
                                🚀 Product Roadmap
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
                    <div className="flex md:hidden items-center gap-2 mt-4">
                        <button
                            onClick={() => { setActiveTab('curriculum'); setSelectedCategory('All'); }}
                            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'curriculum'
                                ? 'bg-purple-600 text-white'
                                : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            <GraduationCap className="w-4 h-4" />
                            Curriculum
                        </button>
                        <button
                            onClick={() => { setActiveTab('roadmap'); setSelectedCategory('All'); }}
                            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'roadmap'
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                : theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            <Rocket className="w-4 h-4" />
                            Roadmap
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {activeTab === 'curriculum' ? (
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
                    ) : (
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

                    {/* Search Bar */}
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
                </div>
            </section>

            {/* Filters */}
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
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                            ? activeTab === 'roadmap'
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                            : theme === 'dark'
                                                ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                    >
                                        {cat === 'All' ? 'All Categories' : activeTab === 'roadmap'
                                            ? `${roadmapMeta[cat]?.icon || ''} ${cat}`
                                            : `${categoryMeta[cat]?.icon || ''} ${cat}`}
                                    </button>
                                ))}
                            </div>

                            {/* Level Pills - Only show for curriculum */}
                            {activeTab === 'curriculum' && (
                                <div className="flex flex-wrap gap-2 ml-auto">
                                    {levels.map(level => (
                                        <button
                                            key={level}
                                            onClick={() => setSelectedLevel(level)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${selectedLevel === level
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                                                : theme === 'dark'
                                                    ? 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                                }`}
                                        >
                                            {level === 'All' ? 'All Levels' : `${levelMeta[level]?.icon || ''} ${level}`}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Grid */}
            <main className="px-4 pb-24">
                <div className="max-w-7xl mx-auto">
                    {activeTab === 'curriculum' ? (
                        // Curriculum Content
                        Object.keys(groupedCourses).length === 0 ? (
                            <div className="text-center py-20">
                                <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                    No courses found. Try a different search! 🔍
                                </p>
                            </div>
                        ) : (
                            Object.entries(groupedCourses).map(([category, courses]) => (
                                <div key={category} className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${categoryMeta[category]?.color || 'from-gray-500 to-gray-600'} flex items-center justify-center text-2xl shadow-lg`}>
                                            {categoryMeta[category]?.icon || '📚'}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{category}</h3>
                                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {courses.length} {courses.length === 1 ? 'topic' : 'topics'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {courses.map(course => (
                                            <div
                                                key={course.id}
                                                className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${theme === 'dark'
                                                    ? 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
                                                    : 'bg-white border-slate-200 hover:border-purple-300'
                                                    }`}
                                            >
                                                <div className={`h-2 bg-gradient-to-r ${categoryMeta[course.category]?.color || 'from-gray-500 to-gray-600'}`} />
                                                <div className="p-5">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelMeta[course.level]?.color || ''}`}>
                                                            {levelMeta[course.level]?.icon} {course.level}
                                                        </span>
                                                        <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                            {course.id.toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-bold mb-2">{course.topic}</h4>
                                                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                                        {course.description}
                                                    </p>
                                                    <button
                                                        onClick={() => toggleCard(course.id)}
                                                        className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition-colors ${theme === 'dark'
                                                            ? 'bg-slate-700/50 hover:bg-slate-700 text-slate-300'
                                                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                                            }`}
                                                    >
                                                        <span className="text-sm font-medium">
                                                            {course.resources.length} Resources {course.books.length > 0 && `· ${course.books.length} Book`}
                                                        </span>
                                                        {expandedCards[course.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                    </button>
                                                    {expandedCards[course.id] && (
                                                        <div className="mt-4 space-y-3">
                                                            {course.resources.map((res, idx) => (
                                                                <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer"
                                                                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors group ${theme === 'dark'
                                                                        ? 'bg-slate-700/30 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'}`}
                                                                >
                                                                    <div className={`p-2 rounded-lg ${res.type === 'Video' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                                                        {getResourceIcon(res.type)}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm font-medium truncate">{res.title}</p>
                                                                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{res.label}</p>
                                                                    </div>
                                                                    <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`} />
                                                                </a>
                                                            ))}
                                                            {course.books.length > 0 && (
                                                                <div className={`pt-3 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
                                                                    <p className={`text-xs font-medium mb-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>📚 Recommended Reading</p>
                                                                    {course.books.map((book, idx) => (
                                                                        <a key={idx} href={book.url} target="_blank" rel="noopener noreferrer"
                                                                            className={`flex items-center justify-between p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'}`}
                                                                        >
                                                                            <div>
                                                                                <p className="text-sm font-medium">{book.title}</p>
                                                                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>by {book.author}</p>
                                                                            </div>
                                                                            <BookOpen className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} />
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )
                    ) : (
                        // Roadmap Content
                        Object.keys(groupedRoadmap).length === 0 ? (
                            <div className="text-center py-20">
                                <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                    No resources found. Try a different search! 🔍
                                </p>
                            </div>
                        ) : (
                            Object.entries(groupedRoadmap).map(([category, items]) => (
                                <div key={category} className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${roadmapMeta[category]?.color || 'from-amber-500 to-orange-600'} flex items-center justify-center text-2xl shadow-lg`}>
                                            {roadmapMeta[category]?.icon || '🚀'}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{category}</h3>
                                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {items.length} {items.length === 1 ? 'topic' : 'topics'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {items.map(item => (
                                            <div
                                                key={item.id}
                                                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl ${theme === 'dark'
                                                    ? 'bg-slate-800/50 border-amber-500/30 hover:border-amber-500/60'
                                                    : 'bg-white border-amber-300 hover:border-amber-500'
                                                    }`}
                                            >
                                                <div className={`h-2 bg-gradient-to-r ${roadmapMeta[item.category]?.color || 'from-amber-500 to-orange-600'}`} />
                                                <div className="p-5">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                                            ⭐ Strategy
                                                        </span>
                                                        <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                                                            {item.id.toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-bold mb-2">{item.topic}</h4>
                                                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                                        {item.description}
                                                    </p>
                                                    <button
                                                        onClick={() => toggleCard(item.id)}
                                                        className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition-colors ${theme === 'dark'
                                                            ? 'bg-amber-900/20 hover:bg-amber-900/30 text-amber-300'
                                                            : 'bg-amber-50 hover:bg-amber-100 text-amber-700'
                                                            }`}
                                                    >
                                                        <span className="text-sm font-medium">
                                                            {item.resources.length} Resources
                                                        </span>
                                                        {expandedCards[item.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                    </button>
                                                    {expandedCards[item.id] && (
                                                        <div className="mt-4 space-y-3">
                                                            {item.resources.map((res, idx) => (
                                                                <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer"
                                                                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors group ${theme === 'dark'
                                                                        ? 'bg-slate-700/30 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'}`}
                                                                >
                                                                    <div className={`p-2 rounded-lg ${res.type === 'Video' ? 'bg-red-500/10 text-red-500' : res.type === 'Book' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                                                        {getResourceIcon(res.type)}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm font-medium truncate">{res.title}</p>
                                                                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{res.label}</p>
                                                                    </div>
                                                                    <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`} />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className={`py-8 text-center border-t transition-colors ${theme === 'dark' ? 'border-white/5 text-slate-500 bg-slate-950' : 'border-slate-200 text-slate-400 bg-white'
                }`}>
                <p className="flex items-center justify-center gap-2 text-sm font-medium">
                    صنعت بحب <span className="text-red-500 animate-pulse">❤️</span> من أجلكم ، معتصم
                </p>
            </footer>

            {/* Vibe Check FAB */}
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

export default LearningHub;
