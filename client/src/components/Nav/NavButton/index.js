import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTableList, faComment, faFolder, faGear, faScrewdriverWrench, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useRef } from 'react';

import { gsap, Power1 } from 'gsap';
import { useWindowsEX } from '../../../context/WindowContext';

import Utilities from '../Utilities';

const NavButton = (props) => {

    const { openWindow, setUtilities } = useWindowsEX();

    const linkRef = useRef(null);

    const clickHandler = ({ currentTarget }) => {

        if (props.text !== "Github" && props.text !== "Utilities") {

            const li = currentTarget.parentNode.querySelectorAll('nav li');

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

            openWindow(props.text);

        }
        

    }

    const utilOpen = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".utils_spacer"), { border: "1px solid var(--color_grey)", duration: 0 });
        gsap.to(q(".utils_spacer"), { width: 54, height: 152, borderRadius: "0 7px 7px 0", background: "#424242", ease:Power1.easeInOut, duration: 0.3 });
        setUtilities(true);

    }

    const enterHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        (props.text !== "Utilities") && gsap.to(q(".accent"), { width: 4, ease:Power1.easeInOut, duration: 0.3 });
        (props.text === "Utilities") && gsap.to(q(".utils_spacer"), { width: 5, ease:Power1.easeInOut, duration: 0.3 });

    }

    const leaveHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);

        (props.text !== "Utilities") && gsap.to(q(".accent"), { width: 0, ease:Power1.easeInOut, duration: 0.3 });

        if (props.text === "Utilities") { 
            
            gsap.to(q(".utils_spacer"), { border: "none", duration: 0 });
            gsap.to(q(".utils_spacer"), { borderLeft: "1px solid var(--color_grey)", duration: 0 });
            gsap.to(q(".utils_spacer"), { width: 0, height: 30, borderRadius: "0 3px 3px 0", background: "#6b957e", ease:Power1.easeInOut, duration: 0.3 });
            setUtilities(false);

        }

    }

    return (

        <>

            { (props.type === "footer" && props.text !== "Github") && <div className="flex divider"></div>}

            <li className="flex center row" ref={linkRef} onClick={props.text !== "Utilities" ? clickHandler : utilOpen } onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>

                <div className="nav_expand_spacer flex row">

                    <span className={props.text === "Github" ? "nav_icon flex center github_link" : "nav_icon flex center"}>
                        
                        { props.text === "Account" && <FontAwesomeIcon icon={faUser} /> }
                        { props.text === "Messages" && <FontAwesomeIcon icon={faComment} /> }
                        { props.text === "Database" && <FontAwesomeIcon icon={faTableList} /> }
                        { props.text === "Github" && <FontAwesomeIcon icon={faGithub} /> }
                        { props.text === "Files" && <FontAwesomeIcon icon={faFolder} /> }
                        { props.text === "Settings" && <FontAwesomeIcon icon={faGear} /> }
                        { props.text === "Utilities" && <FontAwesomeIcon icon={faScrewdriverWrench} />}
                        { props.text === "Terminal" && <FontAwesomeIcon icon={faTerminal} /> }
                        
                            
                    </span>

                    <div className="nav_text flex center">

                    { props.text === "Terminal" ? <p className="text_selected">{props.text}</p> : <p>{props.text}</p> }
                        
                    </div>

                </div>
                {

                    (props.text !== "Utilities")

                        ?

                        (props.text === "Terminal") ? <span className="accent accent_selected"></span> : <span className="accent"></span>

                        :

                        <Utilities />

                }
                
                
                    
            </li>

            { props.type === "nav" && <div className="flex divider"></div>}

        </>
        
    );

}

export default NavButton;