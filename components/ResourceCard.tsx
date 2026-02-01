
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Resource } from '../types';

interface ResourceCardProps {
  item: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ item }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const title = isEn && item.titleEn ? item.titleEn : item.title;
  const desc = isEn && item.descEn ? item.descEn : item.desc;

  const getTagStyles = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article': return "bg-blue-600/20 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case 'video': return "bg-purple-600/20 text-purple-600 dark:text-purple-400 border-purple-500/30";
      case 'book': return "bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case 'guide': return "bg-orange-600/20 text-orange-600 dark:text-orange-400 border-orange-500/30";
      case 'ai': return "bg-rose-600/20 text-rose-600 dark:text-rose-400 border-rose-500/30";
      case 'testing':
      case 'usability': return "bg-blue-600/20 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case 'behavioral': return "bg-purple-600/20 text-purple-600 dark:text-purple-400 border-purple-500/30";
      case 'design': return "bg-orange-600/20 text-orange-600 dark:text-orange-400 border-orange-500/30";
      default: return "bg-slate-200 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600/50";
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group bg-card transition-all duration-300">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none group-hover:bg-blue-500/10 dark:group-hover:bg-white/10 transition"></div>

      {item.subcategory && (
        <div className="inline-block text-[10px] font-bold px-3 py-1 rounded-lg mb-4 bg-slate-200/50 dark:bg-slate-700/30 text-slate-600 dark:text-slate-400 border border-slate-300/50 dark:border-slate-600/30 w-max">
          {item.subcategory}
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 rounded-xl text-2xl border border-slate-200 dark:border-slate-700/50">
          {item.icon}
        </div>
        <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border ${getTagStyles(item.type)}`}>
          {item.type}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all text-center flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-900/20 relative overflow-hidden"
      >
        {t('resource.link')}
        <span className={i18n.dir() === 'rtl' ? 'rotate-180' : ''}>↗</span>
        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:left-full"></div>
      </a>
    </div>
  );
};

export default ResourceCard;
