import { useLanguage } from '../languageSelector/LanguageContext';

function CreateModal({createemployee, setcreateemployee, onClose, isopen, onCreate}){

    const { translate } = useLanguage(); 
if(!isopen) {
    return null;
}


const handleChange = (e) => {
    const { name, value } = e.target;
    setcreateemployee(prevState => ({
        ...prevState,
        [name]: value
    }));
};


const handleCreateClick = (e) => {
    e.preventDefault(); 
    onCreate();
};
    return (
        <>
       <div className="modal-overlay">
                <div className="modal-con">
                    <h5>{translate('Register Employee')}</h5>
                    <div>
                        <form>
                            <label>{translate('EmployeeID')}</label>
                            <input
                                type="text"
                                placeholder={translate("EmployeeID")}
                                name="EmployeeID" 
                                value={createemployee.EmployeeID}
                                onChange={handleChange}
                            />
                            <label>{translate("FirstName")}</label>
                            <input
                                type="text"
                                 placeholder={translate("LastName")}
                                name="FirstName" 
                                value={createemployee.FirstName}
                                onChange={handleChange} 
                            />
                            <label>{translate('LastName')}</label>
                            <input
                                type="text"
                                placeholder={translate("LastName")}
                                name="LastName" 
                                value={createemployee.LastName}
                                onChange={handleChange} 
                            />
                            <label>{translate("Position")}</label>
                            <input
                                type="text"
                                placeholder={translate("Position")}
                                name="Position" 
                                value={createemployee.Position}
                                onChange={handleChange} 
                            />
                            <div className="modal-actions">
                                <button 
                                    type="button" 
                                    className="btn btn-danger mx-2" 
                                    onClick={handleCreateClick}
                                >
                                    {translate('Create')}
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

export default CreateModal;