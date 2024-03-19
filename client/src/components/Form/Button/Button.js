import { useRef } from 'react';
import './index.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Button = (props) => {

    const buttonRef = useRef();

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".button_overlay", { width: "calc(100% + 4px)" }) }, buttonRef);
        return () => hoverCtx.revert();

    }, []);

    const buttonHover = ({ currentTarget }) => {

        const overlay = currentTarget.parentNode.querySelector(".button_overlay");
        gsap.to(overlay, { duration: 0.3, width: 0 })

    }

    const reverseButton = ({ currentTarget }) => {

        const overlay = currentTarget.parentNode.querySelector(".button_overlay");
        gsap.to(overlay, { duration: 0.3, width: "calc(100% + 4px" })

    }

    return (
        <div ref={buttonRef} className="flex row center general_button">

            <div className="flex center border_background">

                <span className="button_overlay"></span>

            </div>

            <button onMouseEnter={buttonHover} onMouseLeave={reverseButton}>{props.text}</button>

        </div>
    )

}

export default Button;