
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('ar') ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        document.dir = i18n.dir();
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition font-bold"
        >
            {i18n.language.startsWith('ar') ? 'English' : 'العربية'}
        </button>
    );
};

export default LanguageSwitcher;
