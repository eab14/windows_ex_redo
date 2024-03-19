import '../index.css';

import Button from '../../../Form/Button';
import InputText from '../../../Form/Input/InputText';

const Login = () => {

    return (

        <div className="login_spacer flex col center">

            <div className="flex row"></div>

            <form>

                <div className="login_logo_spacer flex center row">

                    <div className="login_logo_main flex center">

                        <span className="diamond diamond_large"></span>
                        <span className="diamond diamond_large"></span>
                        <span className="diamond diamond_small"></span>
                        <span className="diamond diamond_small"></span>

                    </div>

                </div>

                <InputText type="text" placeholder="Username" />

                <InputText type="password" placeholder="Password" />

                <div className="flex row center">

                    <Button text="Login" />

                </div>

            </form>

        </div>

    );

}

export default Login;