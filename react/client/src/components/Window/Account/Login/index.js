import { useRef } from 'react';
import './index.css';
import gsap from 'gsap';

const Login = () => {

    const userRef = useRef();
    const passRef = useRef();

    const focusHandler = ({ currentTarget }) => {

        const b_l = currentTarget.parentNode.querySelector(".border_top_left");
        const b_r = currentTarget.parentNode.querySelector(".border_top_right");
        const p_h = currentTarget.parentNode.querySelector(".login_input_placeholder");
    
        const len = p_h.offsetWidth;
    
        gsap.to(b_l, 0.3, { width: 0 })
        gsap.to(b_r, 0.3, { width: `calc(100% - ${len + 8}px` })
        // gsap.to(p_h, 0.3, { delay: 0.1, y: -18, color: "#19ac5b" })
        gsap.to(p_h, 0.3, { delay: 0.1, y: -18, color: "#19ac5b" })
    
    }

    const blurHandler = ({ currentTarget }) => {

        const b_l = currentTarget.parentNode.querySelector(".border_top_left");
        const b_r = currentTarget.parentNode.querySelector(".border_top_right");
        const p_h = currentTarget.parentNode.querySelector(".login_input_placeholder");
    
        if (currentTarget.value === "") {
    
            gsap.to(b_l, 0.3, { delay: 0.089, width: "50%" })
            gsap.to(b_r, 0.3, { delay: 0.089, width: "50%" })
            // gsap.to(p_h, 0.3, { delay: 0.1, y: -18, color: "#19ac5b" })
            gsap.to(p_h, 0.3, { y: 0, color: "#d4d4d4" })
    
        }
    
    }

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

                <div className="flex row center login_input">

                    <span className="border_overlay">

                        <span className="border border_top_left"></span>
                        <span className="border border_top_right"></span>

                    </span>

                    <p className="login_input_placeholder">Username</p>

                    <input ref={userRef} type="text" onBlur={blurHandler} onFocus={focusHandler} />
                </div>

                <div className="flex row center login_input">

                    <span className="border_overlay">

                        <span className="border border_top_left"></span>
                        <span className="border border_top_right"></span>

                    </span>

                    <p className="login_input_placeholder">Password</p>

                    <input ref={passRef} type="password" onBlur={blurHandler} onFocus={focusHandler} />

                </div>

                <div className="flex row center login_button">

                    <button>Login</button>

                </div>

            </form>

        </div>

    );

}

export default Login;