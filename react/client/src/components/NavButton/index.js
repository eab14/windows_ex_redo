import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faVideo, faCalendar, faComment, faTableList, faMusic, faGear } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useRef } from 'react';

import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const NavButton = (props) => {

    const linkRef = useRef(null);

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".accent", { width: 0 }) }, linkRef);
        return () => hoverCtx.revert();

    }, []);

    const clickHandler = ({ currentTarget }) => {

        const li = document.querySelectorAll('nav li');

        if (!currentTarget.parentNode.parentNode.classList.contains("nav_footer_spacer")) {

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

            <li className="flex center row" ref={linkRef} onClick={clickHandler} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>

                <div className="nav_expand_spacer flex row">

                    <span className="nav_icon flex center">
                        
                        { props.text === "Home" && <FontAwesomeIcon icon={faHome} /> }
                        { props.text === "Music" && <FontAwesomeIcon icon={faMusic} /> }
                        { props.text === "Database" && <FontAwesomeIcon icon={faTableList} /> }
                        { props.text === "Messages" && <FontAwesomeIcon icon={faComment} /> }
                        { props.text === "Calendar" && <FontAwesomeIcon icon={faCalendar} /> }
                        { props.text === "Account" && <FontAwesomeIcon icon={faUser} /> }
                        { props.text === "Video" && <FontAwesomeIcon icon={faVideo} /> }
                        { props.text === "Settings" && <FontAwesomeIcon icon={faGear} /> }
                        { props.text === "Github" && <FontAwesomeIcon icon={faGithub} /> }
                            
                    </span>

                    <div className="nav_text flex center">

                    { props.text === "Home" ? <p class="text_selected">{props.text}</p> : <p>{props.text}</p> }
                        
                        
                    </div>

                </div>
                
                { props.text === "Home" ? <span className="accent accent_selected"></span> : <span className="accent"></span> }
                    
            </li>

        </>
        
    );

}

export default NavButton;