import './index.css';

import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const InputCheckBox = (props) => {

    const checkRef = useRef();

    const labelHandler = useCallback (() => {

        const checkbox = checkRef.current;
        let q = gsap.utils.selector(checkbox.parentNode);

        gsap.to(q("label span"), {
            x: !checkbox.checked ? 18 : 0,
            background: !checkbox.checked ? "linear-gradient(#c23e3e, #7d2828)" : "linear-gradient(#19ac5b, #6b957e)",
            duration: 0.2
        });

        (props.onChange) && props.onChange(checkbox.checked);

    }, [props])

    useEffect(() => labelHandler(), [ labelHandler ])

    return (
        <div className="flex">
            <input className="flex general_check" type="checkbox" ref={checkRef} id={props.id} checked={props.status} onChange={labelHandler} />

            <label className="flex row center general_check_label" htmlFor={props.id}>
                <span className="flex"></span>
            </label>
        </div>
    )

}

export default InputCheckBox;