import React from "react";
import './UpdateModal.css';
import { useLanguage } from '../languageSelector/LanguageContext';

function UpdateModal({ isOpen, onClose, selecteduser, setselecteduser, onConfirm }) {

    const { translate } = useLanguage(); 
    if (!isOpen) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setselecteduser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-con">
                    <h5>{translate('Update Employee')}</h5>
                    <div>
                        <form>
                            <label>{translate('EmployeeID')}</label>
                            <input
                                type="text"
                                name="EmployeeID" 
                                value={selecteduser.EmployeeID}
                                onChange={handleChange}
                            />
                            <label>{translate('FirstName')}</label>
                            <input
                                type="text"
                                name="FirstName" 
                                value={selecteduser.FirstName}
                                onChange={handleChange} 
                            />
                            <label>{translate('LastName')}</label>
                            <input
                                type="text"
                                name="LastName" 
                                value={selecteduser.LastName}
                                onChange={handleChange} 
                            />
                            <label>{translate('Position')}</label>
                            <input
                                type="text"
                                name="Position" 
                                value={selecteduser.Position}
                                onChange={handleChange} 
                            />
                            <div className="modal-actions">
                                <button 
                                    type="button" 
                                    className="btn btn-danger mx-2" 
                                    onClick={() => onConfirm(selecteduser?.id)}
                                >
                                    {translate("Update")}
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={onClose}
                                >
                                    {translate("Cancel")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateModal;
