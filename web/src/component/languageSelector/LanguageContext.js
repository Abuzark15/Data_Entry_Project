import React, { createContext, useContext, useState } from 'react';
import en from '../locale/en.json';
import ar from '../locale/ar.json';

const LanguageContext = createContext();

const translations = { en, ar };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    setLanguage(lng);
    document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  };

  const translate = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
