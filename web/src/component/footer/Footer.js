import React from 'react';
import './Footer.css'; 
import { useLanguage } from '../languageSelector/LanguageContext';

const Footer = () => {

    const { translate } = useLanguage(); 

    return (
        <footer className="footer">
            <p>&copy; {translate("2024 Abuzar All rights reserved.")}</p>
        </footer>
    );
};

export default Footer;
