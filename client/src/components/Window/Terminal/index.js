import './index.css';
import { gsap } from 'gsap';

// import Loading from "../../Loading";

import { useCallback, useRef, useEffect, useState } from 'react';

import { useAuth } from '../../../context/AuthContext';
import { useWindowsEX } from '../../../context/WindowContext';
import TerminalLine from './TerminalLine';

const Terminal = () => {

    const { user, login, logout } = useAuth();
    const { openWindow, closeWindow, terminal, setTerminal } = useWindowsEX();

    const [ dir, setDir ] = useState("");

    const blinkRef = useRef(null);
    const inputRef = useRef(null);
    const userRef = useRef(null);

    const windowRef = useRef(null);

    const removeAt = (email) => email.replace(/@(.*)$/, '');

    const upperCaseThese = (array) => {

        let str = array.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return str.join(' ');

    }

    const resizeInput = ({ currentTarget }) => {
        
        const adjust = windowRef.current.offsetWidth - (userRef.current.offsetWidth + 34);
        currentTarget.style.width = (currentTarget.value.length * 7.2 < adjust) ? `${(currentTarget.value.length * 7.2) + "px"}` : `${adjust}px`;

    }
    
    const focusInput = useCallback(() => inputRef.current.focus(), []);

    // likely need to be external...
    const processCommand = (value) => {

        const dValues = [ "music", "videos", "photos" ]
        const wValues = [ "calculator", "calendar", "password-generator", "weather", "easter-egg" ];
        const aValues = [ "login", "logout" ]
        let commands = value.split(' ');

        const line = <TerminalLine type="command" name={user ? `${removeAt(user)}` + dir : "guest" + dir} command={value} />;
        
        setTerminal(prevState => [ line, ...prevState ]);

        switch (commands[0]) {

            case "open":

                (wValues.includes(commands[1])) && openWindow(upperCaseThese(commands[1].split('-')));
                break;

            case "close":

                (wValues.includes(commands[1])) && closeWindow(upperCaseThese(commands[1].split('-')));
                break;

            case "account":

                ((aValues.includes(commands[1]) && commands[2] && commands[3])) && login(commands[2], commands[3]);
                (commands[1] === "logout") && logout();
                break;

            case "cd":
                (dValues.includes(commands[1]) && dir === "") && setDir(`/${commands[1]}`);
                (commands[1] === ".." || commands[1] === "/" || commands[1] === "../") && setDir("");
                break;

            case "ls":
                console.log("test");
                break;

            case "clear":
                setTerminal([]);
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

    const blink = useCallback(() => gsap.to(blinkRef.current, { duration: 0.14, opacity: 0, yoyo: true, repeat: -1 }), [])

    useEffect(() => { 
        
        blink();
        focusInput();

    }, [ blink, focusInput ])

    return (
        <div ref={windowRef} className="flex col terminal_spacer" onClick={focusInput}>

            <div className="flex col terminal_display">

                { terminal }

            </div>

            <div className="flex row wrap terminal_input">
                <p ref={userRef} className="flex terminal_user">{ user ? `${removeAt(user)}` + dir : "guest" + dir }<span>$</span></p>
                <input type="text" ref={inputRef} onChange={resizeInput} onKeyDown={enterCommand} />
                <span ref={blinkRef} className="flex indicator"></span>
            </div>
            
        </div>
    )

}

export default Terminal;