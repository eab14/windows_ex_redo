import './index.css';
import { gsap } from 'gsap';

import Loading from "../../Loading";
import { useCallback, useRef, useEffect } from 'react';

const Terminal = () => {

    const blinkRef = useRef(null);
    const textRef = useRef(null);

    const blink = useCallback(() => {

        const text = "Coming soon... ;)";

        let i = 0;
    
        const intervalId = setInterval(() => {

            if (i < text.length) { textRef.current.textContent += text[i]; i++; } 
            else clearInterval(intervalId);

        }, 250);

        gsap.to(blinkRef.current, { duration: 0.14, opacity: 0, yoyo: true, repeat: -1 })

    }, [])

    useEffect(() => blink(), [ blink ])

    return (
        <div className="flex center test test_1">
            <div className="flex row wrap terminal_example">
                <p ref={textRef}></p>
                <span ref={blinkRef} className="flex indicator"></span>
            </div>
            
            <Loading />
            
        </div>
    )

}

export default Terminal;