import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
};

export default LanguageSelector;