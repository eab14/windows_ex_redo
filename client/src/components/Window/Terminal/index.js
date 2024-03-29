import './index.css';
import { gsap } from 'gsap';

// import Loading from "../../Loading";
import Window from '..';

import { useCallback, useRef, useEffect } from 'react';

import { useAuth } from '../../../context/AuthContext';
import { useWindowsEX } from '../../../context/WindowContext';

const Terminal = () => {

    const { user } = useAuth();
    const { windows, setWindows, setStatus } = useWindowsEX();

    const blinkRef = useRef(null);
    const inputRef = useRef(null);
    const userRef = useRef(null);

    const windowRef = useRef(null);

    const removeAt = (email) => email.replace(/@(.*)$/, '');

    const resizeInput = ({ currentTarget }) => {
        
        const adjust = windowRef.current.offsetWidth - (userRef.current.offsetWidth + 34);
        currentTarget.style.width = (currentTarget.value.length * 7.2 < adjust) ? `${(currentTarget.value.length * 7.2) + "px"}` : `${adjust}px`;

    }
    const focusInput = useCallback(() => inputRef.current.focus(), []);

    // likely need to be external...
    const processCommand = (value) => {

        const wValues = [ "calculator", "calendar", "password-generator", "weather" ];
        let commands = value.split(' ');

        switch (commands[0]) {

            case "open":

                if (wValues.includes(commands[1])) {

                    const command = commands[1].split('-');
                    let windowName = command.map(word => word.charAt(0).toUpperCase() + word.slice(1));
                    windowName = windowName.join(' ');

                    if (!windows.find(window => window.props.selected === windowName)) {

                        const w = <Window key={windowName} selected={windowName} />;
                        const s = [windowName, "max"];

                        setWindows(prevWindows => [ ...prevWindows, w ]);
                        setStatus(prevStatus => [ ...prevStatus, s ]);

                    }

                }
                
                break;

            default:
                return "Invalid...";

        }

    }

    const enterCommand = (e) => { 
        
        if (e.key === 'Enter') {

            processCommand(inputRef.current.value);
            inputRef.current.value = "";
            inputRef.current.style.width = 0;

        }

    }

    const blink = useCallback(() => {

        // const text = "Coming soon... ;)";

        // let i = 0;
    
        // const blinkInt = setInterval(() => {

        //     let verify;

        //     if (windowRef.current) verify = (window.getComputedStyle(windowRef.current).getPropertyValue("display"))
        //     else verify = "none";

        //     if (i < text.length && verify !== "none") { inputRef.current.textContent += text[i]; i++; } 
        //     else clearInterval(blinkInt);

        // }, 250);

        gsap.to(blinkRef.current, { duration: 0.14, opacity: 0, yoyo: true, repeat: -1 })

    }, [])

    useEffect(() => { 
        
        blink();
        focusInput();

    }, [ blink, focusInput ])

    return (
        <div ref={windowRef} className="flex center terminal_spacer">

            <div className="flex col test_options">
                <p className="terminal_green">Options:</p>
                <p>- - -</p>
                <p>open <span className="terminal_gg">{"<Window>"}</span></p>
                <p>- - -</p>
                <p className="terminal_green">Available windows: </p>
                <p>- - -</p>
                <p>calculator | caldendar | password-generator | weather</p>
            </div>

            <div className="flex row terminal_display">

            </div>

            <div className="flex row wrap terminal_input">
                <p ref={userRef} className="flex terminal_user">{ user ? `${removeAt(user)}` : "guest" }<span>$</span></p>
                <input type="text" ref={inputRef} onChange={resizeInput} onKeyDown={enterCommand} />
                <span ref={blinkRef} className="flex indicator" onClick={focusInput}></span>
            </div>
            
        </div>
    )

}

export default Terminal;