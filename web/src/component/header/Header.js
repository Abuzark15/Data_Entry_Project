import React, { useState } from 'react';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../languageSelector/LanguageContext';



const Header = ({ onSearch ,onCancle, onAddClick,onLogout}) => {

    const [searchTerm, setSearchTerm] = useState('');


    const { translate } = useLanguage(); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm); 
    };

    const henadleSearchCnacle = () =>{
        
        setSearchTerm('');
        onCancle();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-style shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{translate('Employee Directory')}</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={translate("Search by any...")}
                               value={searchTerm}
                               onChange={handleSearchChange}
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="button" title='Search'
                            onClick={handleSearchClick}>
                                <i className="bi bi-search"></i>
                            </button>
                            <button className="btn btn-danger" type="button" title='cancle Search'
                              onClick={henadleSearchCnacle}>
                              <i className="bi bi-x-circle"></i>
                              </button>
                              <button 
                                 className="btn btn-sm btn-success" 
                                 title="Add Employee"
                                 onClick={onAddClick} 
                                     >
                                 <FontAwesomeIcon icon={faPlus} />
                                 </button>
                                
            
            <button 
                className="btn btn-sm btn-secondary " 
                title="Sign Out"
                onClick={onLogout} 
            >
                <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
       

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
