import '../index.css';

import { useState } from 'react';

import Button from '../../../Form/Button';
import InputText from '../../../Form/Input/InputText';
import InputCheckBox from '../../../Form/Input/InputCheckBox';

import { useWindowsEX } from '../../../../context/WindowContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Register = () => {

    const [ terms, setTerms ] = useState(false);
    const handleTermsChange = (status) => setTerms(status);

    const { setAccount } = useWindowsEX();
    const handleLogin = () => setAccount("login")

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

                <InputText type="email" placeholder="Email" />

                <InputText type="password" placeholder="Password" />

                <InputText type="password" placeholder="Confirm Password" />

                <div className="flex center row register_terms">

                    <InputCheckBox id="terms_check" checked={terms} onChange={handleTermsChange} />

                    <p>Agree to Terms of Service</p>

                </div>

                <div className="flex row center">

                    <Button text="Submit" />

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