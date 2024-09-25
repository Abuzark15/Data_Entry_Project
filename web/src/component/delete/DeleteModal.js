import React from 'react';
import './DeleteModal.css'; 

import { useLanguage } from '../languageSelector/LanguageContext';

const DeleteModal = ({ isOpen, onClose, onConfirm, message }) => {
    const { translate } = useLanguage(); 
    if (!isOpen) return null;

    
    return (
        <div className="modal-overlay ">
            <div className="modal-con">
                <h5>{translate('Confirmation')}</h5>
                <p>{message}</p>
                <div className="modal-actions ">
                    <button className="btn btn-danger mx-2" onClick={onConfirm}>
                       {translate(' Delete')}
                    </button>
                    <button className="btn btn-secondary" onClick={onClose}>
                        {translate('Cancel')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
