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

    const enterHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".accent"), 0.3, { width: 4, ease:Power1.easeInOut });

    }

    const leaveHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".accent"), 0.3, { width: 0, ease:Power1.easeInOut });

    }

    return (

        <li className="flex center row" ref={linkRef} onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>

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

                <div className="nav_text flex center"><p>{props.text}</p></div>

            </div>
            
            <span className="accent"></span>
                
        </li>
        
    );

}

export default NavButton;