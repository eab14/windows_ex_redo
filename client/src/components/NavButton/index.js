import Window from '../Window';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTableList, faComment, faFolder, faGear, faVideo, faCalendar, faMusic, faImages, faCalculator, faSun, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useRef } from 'react';

import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useWindowsEX } from '../../context/WindowContext';

gsap.registerPlugin(useGSAP);

const NavButton = (props) => {

    const { windows, setStatus, setWindows } = useWindowsEX();

    const linkRef = useRef(null);

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".accent", { width: 0 }) }, linkRef);
        return () => hoverCtx.revert();

    }, []);

    const clickHandler = ({ currentTarget }) => {

        const li = document.querySelectorAll('nav li');

        if (props.text !== "Github" && props.text !== "Utilities") {

            for (let i = 0; i < li.length; i++) {

                let accent = li[i].querySelector('.accent');
                let icon = li[i].querySelector('.nav_icon');
                let nav_text = li[i].querySelector('.nav_text p');

                accent.classList.remove("accent_selected");
                accent.style.width = 0;
                icon.classList.remove("selected");
                nav_text.classList.remove("text_selected");

            }

            const selected_accent = currentTarget.querySelector('.accent');
            const selected_icon = currentTarget.querySelector('.nav_icon');
            const selected_text = currentTarget.querySelector('.nav_text p');

            selected_accent.classList.add("accent_selected");
            selected_icon.classList.add("selected");
            selected_text.classList.add("text_selected");

        }

        if (!windows.find(window => window.props.selected === props.text)) {

            if (props.text !== "Github" && props.text !== "Utilities") {

                const w = <Window key={props.text} selected={props.text} />;
                const s = [props.text, "max"];

                setWindows(prevWindows => [ ...prevWindows, w ]);
                setStatus(prevStatus => [ ...prevStatus, s ]);

            }

        }
        

    }

    const enterHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".accent"), { width: 4, ease:Power1.easeInOut, duration: 0.3 });

    }

    const leaveHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".accent"), { width: 0, ease:Power1.easeInOut, duration: 0.3 });

    }

    return (

        <>

            { (props.type === "footer" && props.text !== "Github") && <div className="flex divider"></div>}

            <li className="flex center row" ref={linkRef} onClick={clickHandler} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>

                <div className="nav_expand_spacer flex row">

                    <span className={props.text === "Github" ? "nav_icon flex center github_link" : "nav_icon flex center"}>
                        
                        { props.text === "Account" && <FontAwesomeIcon icon={faUser} /> }
                        { props.text === "Messages" && <FontAwesomeIcon icon={faComment} /> }
                        { props.text === "Database" && <FontAwesomeIcon icon={faTableList} /> }
                        { props.text === "Github" && <FontAwesomeIcon icon={faGithub} /> }
                        { props.text === "Files" && <FontAwesomeIcon icon={faFolder} /> }
                        { props.text === "Settings" && <FontAwesomeIcon icon={faGear} /> }
                        { props.text === "Utilities" && <FontAwesomeIcon icon={faScrewdriverWrench} />}
                        { props.text === "Music" && <FontAwesomeIcon icon={faMusic} /> }
                        { props.text === "Calendar" && <FontAwesomeIcon icon={faCalendar} /> }
                        { props.text === "Video" && <FontAwesomeIcon icon={faVideo} /> }
                        { props.text === "Gallery" && <FontAwesomeIcon icon={faImages} /> }
                        { props.text === "Calculator" && <FontAwesomeIcon icon={faCalculator} /> }
                        { props.text === "Weather" && <FontAwesomeIcon icon={faSun}/> }
                        
                            
                    </span>

                    <div className="nav_text flex center">

                    { props.text === "Account" ? <p className="text_selected">{props.text}</p> : <p>{props.text}</p> }
                        
                    </div>

                </div>
                
                { props.text === "Account" ? <span className="accent accent_selected"></span> : <span className="accent"></span> }
                    
            </li>

            { props.type === "nav" && <div className="flex divider"></div>}

        </>
        
    );

}

export default NavButton;