import '../index.css';

import { useState } from 'react';

import Button from '../../../Form/Button';
import InputText from '../../../Form/Input/InputText';
import { useWindowsEX } from '../../../../context/WindowContext';
import { useAuth } from '../../../../context/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const { login } = useAuth();
    const { setAccount } = useWindowsEX();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => setAccount("register")

    const handleUsernameChange = (value) => setUsername(value);
    const handlePasswordChange = (value) => setPassword(value);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try { await login(username, password) } 
        catch (error) { console.error('Login failed:', error); }

    };

    return (

        <div className="login_spacer flex col center">

            <div className="flex row"></div>

            <form onSubmit={handleSubmit}>

                <div className="login_logo_spacer flex center row">

                    <div className="login_logo_main flex center">

                        <span className="diamond diamond_large"></span>
                        <span className="diamond diamond_large"></span>
                        <span className="diamond diamond_small"></span>
                        <span className="diamond diamond_small"></span>

                    </div>

                </div>

                <InputText type="text" placeholder="Username" onChange={handleUsernameChange}/>

                <InputText type="password" placeholder="Password" onChange={handlePasswordChange}/>

                <div className="flex row center">

                    <Button text="Login" type="submit" />

                </div>

            </form>

            <div id="page_change_account" className="flex center" onClick={handleRegister}>
                <p className="flex center">Register</p>
                <span><FontAwesomeIcon icon={faRightFromBracket} /></span>
            </div>

        </div>

    );

}

export default Login;