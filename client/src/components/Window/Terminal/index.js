import './index.css';
import { gsap } from 'gsap';

// import Loading from "../../Loading";
import { useCallback, useRef, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const Terminal = () => {

    const { user } = useAuth();

    const blinkRef = useRef(null);
    const textRef = useRef(null);
    const windowRef = useRef(null);

    const removeAt = (email) => email.replace(/@(.*)$/, '');

    const blink = useCallback(() => {

        const text = "Coming soon... ;)";

        let i = 0;
    
        const blinkInt = setInterval(() => {

            let verify;

            if (windowRef.current) verify = (window.getComputedStyle(windowRef.current).getPropertyValue("display"))
            else verify = "none";

            if (i < text.length && verify !== "none") { textRef.current.textContent += text[i]; i++; } 
            else clearInterval(blinkInt);

        }, 250);

        gsap.to(blinkRef.current, { duration: 0.14, opacity: 0, yoyo: true, repeat: -1 })

    }, [])

    useEffect(() => blink(), [ blink ])

    return (
        <div ref={windowRef} className="flex center test test_1">

            <div class="flex col test_options">
                <p className="terminal_green">Prospective options:</p>
                <p>- - -</p>
                <p>open <span className="terminal_gg">{"<Window>"}</span></p>
                <p>close <span className="terminal_gg">{"<Window>"}</span></p>
                <p>min <span className="terminal_gg">{"<Window>"}</span></p>
                <p>account login <span className="terminal_gg">{"--username --password"}</span></p>
                <p>account create <span className="terminal_gg">{"--email --password --confirm"}</span></p>
                <p>ls <span className="terminal_gg">{"<Database Files>"}</span></p>
                <p>cd <span className="terminal_gg">{"<Database Collection>"}</span></p>
                <p>delete --f <span className="terminal_gg">{"<File>"}</span></p>
                <p>open --f <span className="terminal_gg">{"<File>"}</span></p>
            </div>

            <div className="flex row wrap terminal_example">
                <p className="flex terminal_user">{ user ? `${removeAt(user)}` : "guest" }<span>$</span></p>
                <p ref={textRef}></p>
                <span ref={blinkRef} className="flex indicator"></span>
            </div>
            
        </div>
    )

}

export default Terminal;