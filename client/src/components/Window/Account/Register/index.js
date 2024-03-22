import '../index.css';

import { useState } from 'react';

import Button from '../../../Form/Button';
import InputText from '../../../Form/Input/InputText';
import InputCheckBox from '../../../Form/Input/InputCheckBox';

import { useWindowsEX } from '../../../../context/WindowContext';
import { useAuth } from '../../../../context/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Register = () => {

    const [ terms, setTerms ] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirm, setConfirm ] = useState('');

    const { setAccount } = useWindowsEX();
    const { register } = useAuth();

    const registerSubmit = async () => {

        if ((password === confirm) && (password.length > 0) && terms) {

            try { await register(email, password); }
            catch (error) { console.error('Register failed:', error); }

        }

        else if (!terms) console.log("Terms is not accepted...");
        else if (!password === confirm || password.length <= 0) console.log("Password mistake...");

    }

    const handleLogin = () => setAccount("login");

    const handleEmailChange = (value) => setEmail(value);
    const handlePasswordChange = (value) => setPassword(value);
    const handleConfirmChange = (value) => setConfirm(value);
    const handleTermsChange = (status) => setTerms(status);

    return (

        <div className="login_spacer flex col center">

            <form>

                <div className="login_logo_spacer flex center row">

                    <div className="login_logo_main flex center">

                        <span className="diamond diamond_large"></span>
                        <span className="diamond diamond_large"></span>
                        <span className="diamond diamond_small"></span>
                        <span className="diamond diamond_small"></span>

                    </div>

                </div>

                <InputText type="email" placeholder="Email" onChange={handleEmailChange} />

                <InputText type="password" placeholder="Password" onChange={handlePasswordChange} />

                <InputText type="password" placeholder="Confirm Password" onChange={handleConfirmChange} />

                <div className="flex center row register_terms">

                    <InputCheckBox id="terms_check" checked={terms} onChange={handleTermsChange} />

                    <p>Agree to Terms of Service</p>

                </div>

                <div className="flex row center">

                    <Button text="Submit" onClick={registerSubmit} />

                </div>

            </form>

            <div id="page_change_account" className="flex center" onClick={handleLogin}>
                <p className="flex center">Login</p>
                <span><FontAwesomeIcon icon={faRightFromBracket} /></span>
            </div>

        </div>

    );

}

export default Register;