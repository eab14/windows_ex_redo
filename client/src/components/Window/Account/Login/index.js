import { useRef } from 'react';
import './index.css';

import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Login = () => {

    const userRef = useRef();
    const passRef = useRef();
    const buttonRef = useRef();

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".button_overlay", { width: "100%" }) }, buttonRef);
        return () => hoverCtx.revert();

    }, []);

    const focusHandler = ({ currentTarget }) => {

        const b_l = currentTarget.parentNode.querySelector(".border_top_left");
        const b_r = currentTarget.parentNode.querySelector(".border_top_right");
        const p_h = currentTarget.parentNode.querySelector(".login_input_placeholder");
    
        const len = p_h.offsetWidth;
    
        gsap.to(b_l, { width: 0, ease:Power1.easeInOut, duration: 0.3 })
        gsap.to(b_r, { width: `calc(100% - ${len + 8}px`, ease:Power1.easeInOut, duration: 0.3 })
        gsap.to(p_h, { delay: 0.1, y: -18, color: "#19ac5b", ease:Power1.easeInOut, duration: 0.3})
    
    }

    const blurHandler = ({ currentTarget }) => {

        const b_l = currentTarget.parentNode.querySelector(".border_top_left");
        const b_r = currentTarget.parentNode.querySelector(".border_top_right");
        const p_h = currentTarget.parentNode.querySelector(".login_input_placeholder");
    
        if (currentTarget.value === "") {
    
            gsap.to(b_l, { delay: 0.089, width: "50%", ease:Power1.easeInOut, duration: 0.3 })
            gsap.to(b_r, { delay: 0.089, width: "50%", ease:Power1.easeInOut, duration: 0.3 })
            gsap.to(p_h, { y: 0, color: "#f4f4f4", ease:Power1.easeInOut, duration: 0.3 })
    
        }
    
    }

    const buttonHover = ({ currentTarget }) => {

        const overlay = currentTarget.parentNode.querySelector(".border_background");
        const borders = overlay.querySelectorAll(".button_overlay");
    
        gsap.to(borders[0], { duration: 0.14, width: 0 })
        gsap.to(borders[1], { delay: 0.14, duration: 0.14, width: 0 })
        gsap.to(borders[2], { duration: 0.14, width: 0 })
        gsap.to(borders[3], { delay: 0.14, duration: 0.14, width: 0 })

    }

    const reverseButton = ({ currentTarget }) => {

        const overlay = currentTarget.parentNode.querySelector(".border_background");
        const borders = overlay.querySelectorAll(".button_overlay");

        gsap.to(borders[0], { duration: 0.14, delay: 0.14, width: "calc(50% + 2px)" })
        gsap.to(borders[1], { duration: 0.14, width: "calc(50% + 2px)" })
        gsap.to(borders[2], { duration: 0.14, delay: 0.14, width: "calc(50% + 2px)" })
        gsap.to(borders[3], { duration: 0.14, width: "calc(50% + 2px)" })

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

                <div className="flex row center">

                    <div ref={buttonRef} className="flex row center login_button">

                        <div className="flex center border_background">

                            <span className="button_overlay"></span>
                            <span className="button_overlay"></span>
                            <span className="button_overlay"></span>
                            <span className="button_overlay"></span>

                        </div>

                        <button onMouseEnter={buttonHover} onMouseLeave={reverseButton}>Login</button>

                    </div>

                </div>

            </form>

        </div>

    );

}

export default Login;