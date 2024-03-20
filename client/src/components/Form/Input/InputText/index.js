import './index.css';

import { gsap, Power1 } from 'gsap';

const InputText = (props) => {

    const focusHandler = ({ currentTarget }) => {

        const b_l = currentTarget.parentNode.querySelector(".border_top_left");
        const b_r = currentTarget.parentNode.querySelector(".border_top_right");
        const p_h = currentTarget.parentNode.querySelector(".general_input_placeholder");
    
        const len = p_h.offsetWidth;
    
        gsap.to(b_l, { width: 0, ease:Power1.easeInOut, duration: 0.3 })
        gsap.to(b_r, { width: `calc(100% - ${len + 8}px`, ease:Power1.easeInOut, duration: 0.3 })
        gsap.to(p_h, { delay: 0.1, y: -18, color: "#19ac5b", ease:Power1.easeInOut, duration: 0.3})
    
    }

    const blurHandler = ({ currentTarget }) => {

        const b_l = currentTarget.parentNode.querySelector(".border_top_left");
        const b_r = currentTarget.parentNode.querySelector(".border_top_right");
        const p_h = currentTarget.parentNode.querySelector(".general_input_placeholder");
    
        if (currentTarget.value === "") {
    
            gsap.to(b_l, { delay: 0.089, width: "50%", ease:Power1.easeInOut, duration: 0.3 })
            gsap.to(b_r, { delay: 0.089, width: "50%", ease:Power1.easeInOut, duration: 0.3 })
            gsap.to(p_h, { y: 0, color: "#f4f4f4", ease:Power1.easeInOut, duration: 0.3 })
    
        }
    
    }

    const handleChange = (event) => (props.onChange) && props.onChange(event.target.value);

    return (
        <div className="flex row center general_input">

            <span className="border_overlay">

                <span className="border border_top_left"></span>
                <span className="border border_top_right"></span>

            </span>

            <p className="general_input_placeholder">{props.placeholder}</p>

            <input type={props.type} onBlur={blurHandler} onFocus={focusHandler} onChange={handleChange}/>

        </div>
    )

}

export default InputText;