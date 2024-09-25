import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Login.css'
import { toast } from "react-toastify";
import LanguageSelector from "./component/languageSelector/LanguageSelector";
import { useLanguage } from '../src/component/languageSelector/LanguageContext';

function Login() {

const [username, setUserName] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const { translate } = useLanguage(); 
const handleLogin = async() =>{
    try {
        const response = await axios.post('http://localhost:4001/api/auth/login', {
            username,
            password,
        });

        if (response.status === 200) {
            navigate('/home'); 
            toast.success(translate('SignIn Admin Successfully'));
        }
     
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message);
        } else {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }
}

    return (
        <>
   
        <div className=" modal-overlay  main-div">
    
            <div className="modal-con second-div">
                
                <h4>{translate('loginTitle')}</h4>
                <div className="form-div">
                    <form className="form-container">
                        <input
                        type="text"
                        placeholder={translate('usernamePlaceholder')}
                        className="input-1"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                        type="password"
                        placeholder={translate('passwordPlaceholder')}
                        className="input-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="modal-actions">
                            <button
                            type="button"
                            className="btn btn-primary mx-2"
                            onClick={handleLogin}
                            >
                                {translate('signinButton')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <LanguageSelector/>
        </div>
        </>
        
    )
}

export default Login;