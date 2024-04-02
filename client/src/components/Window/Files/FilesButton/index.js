import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faMusic, faImage, faVideo, faUpload } from "@fortawesome/free-solid-svg-icons";

import { useRef } from 'react';

import { gsap, Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const FilesButton = (props) => {

    const linkRef = useRef(null);

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".files_nav_accent", { right: "-4px" }) }, linkRef);
        return () => hoverCtx.revert();

    }, []);

    const clickHandler = (e) => {

        (props.onClick) && props.onClick(e);

        const li = document.querySelectorAll('.files_link');

        for (let i = 0; i < li.length; i++) {

            let accent = li[i].querySelector('.files_nav_accent');
            accent.classList.remove("selected");
            accent.style.right = "-4px";

        }

        const accent = e.currentTarget.querySelector('.files_nav_accent');
        accent.classList.add("selected");

    }

    const enterHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".files_nav_accent"), { right: "0px", ease:Power1.easeInOut, duration: 0.3 });

    }

    const leaveHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".files_nav_accent"), { right: "-4px", ease:Power1.easeInOut, duration: 0.3 });

    }

    return (
        <div ref={linkRef} onMouseEnter={enterHandler} onMouseLeave={leaveHandler} onClick={clickHandler} className={props.type === "sub" ? "files_link files_sub flex center row" : "files_link flex center row"}>

            <span className="flex center">
                { props.text === "All Files" && <FontAwesomeIcon icon={faFolderOpen} /> }
                { props.text === "Music" && <FontAwesomeIcon icon={faMusic} /> }
                { props.text === "Photos" && <FontAwesomeIcon icon={faVideo} /> }
                { props.text === "Videos" && <FontAwesomeIcon icon={faImage} /> }
                { props.text === "Upload" && <FontAwesomeIcon icon={faUpload} /> }
            </span>

            <li className="flex files_link_text">{props.text}</li>
            <div className={props.selected ? "files_nav_accent selected" : "files_nav_accent"}></div>
        </div>
    )

}

export default FilesButton;