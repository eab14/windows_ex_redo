import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Logo = () => {

    const logoRef = useRef(null);
    const [ clicked, setClicked ] = useState(false);

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".diamond", { scale: 1 }) }, logoRef);
        return () => hoverCtx.revert();

    }, []);

    const logoHover = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);

        gsap.to(q(".diamond:nth-child(1)"), { scale: 1.05, background: "#6b957e", duration: 0.3 });
        gsap.to(q([ ".diamond:nth-child(3)", ".diamond:nth-child(4)" ]), { delay: 0.15, scale: 1.1, background: "#19ac5b", duration: 0.3 });
        gsap.to(q(".diamond:nth-child(2)"), { delay: 0.3, scale: 1.05, background: "#6b957e", duration: 0.3 });

    };
    const logoExit = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);

        gsap.to(q(".diamond:nth-child(1)"), { scale: 1, background: "#19ac5b", duration: 0.3 });
        gsap.to(q([ ".diamond:nth-child(3)", ".diamond:nth-child(4)" ]), { delay: 0.15, scale: 1, background: "#6b957e", duration: 0.3 });
        gsap.to(q(".diamond:nth-child(2)"), { delay: 0.3, scale: 1, background: "#19ac5b", duration: 0.3 });

    };

    const navHandler = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);

        const li = document.querySelectorAll('.nav_text');

        if (!clicked) {

            gsap.to("nav", { minWidth: 200, duration: 0.3 });
            gsap.to(q(".logo_indicator"), { opacity: 0, duration: 0.2 });
            gsap.to(q(".logo_indicator"), { delay: 0.2, opacity: 1, background: "#19ac5b", duration: 0.2 });
            gsap.to(q(".logo_text"), { delay: 0.1, width: "calc(100% - 60px)", duration: 0.3 });
            gsap.to(q(".logo_text p"), { delay: 0.15, left: "-19px", opacity: 1, duration: 0.3 });


            // Bug :: Animation is staggering (ironically needs stagger)
            let variation = 0.07;

            for (let i = 0; i < li.length; i++) {

                let nav_p = li[i].querySelector('p');

                gsap.to(li[i], { width: "calc(100% - 60px)", duration: 0.3 })
                gsap.to(nav_p, { delay: variation, left: "-19px", opacity: 1, duration: 0.3 })

                variation += 0.07;

            }

            setClicked(true);

        }

        else {

            gsap.to("nav", { minWidth: 60, duration: 0.3 });
            gsap.to(q(".logo_indicator"), { opacity: 0, duration: 0.2 });
            gsap.to(q(".logo_indicator"), { delay: 0.2, opacity: 1, background: "#6b957e", duration: 0.2 });
            gsap.to(q(".logo_text"), { width: 0, duration: 0.3 });
            gsap.to(q(".logo_text p"), { left: "-30px", opacity: 0, duration: 0.3 });

            for (let i = 0; i < li.length; i++) {

                let nav_p = li[i].querySelector('p');
                gsap.to(li[i], 0.3, { width: 0 })
                gsap.to(nav_p, 0.2, { left: "-30px", opacity: 0 })
    
            }

            setClicked(false);

        }

    }

    return (
        <div className="logo_spacer flex center row" ref={logoRef} onClick={navHandler} onMouseEnter={logoHover} onMouseLeave={logoExit}>

            <div className="logo_expand_spacer flex row">

                <div className="logo_main flex center">

                    <span className="diamond diamond_large"></span>
                    <span className="diamond diamond_large"></span>
                    <span className="diamond diamond_small"></span>
                    <span className="diamond diamond_small"></span>

                </div>

                <div className="logo_text flex center">

                    <p>Windows<strong>EX</strong></p>

                </div>
            </div>

            {
                (clicked) ?

                    <span className="flex center logo_indicator"><FontAwesomeIcon icon={faChevronLeft} /></span> :
                    <span className="flex center logo_indicator"><FontAwesomeIcon icon={faChevronRight} /></span>

            }
            

        </div>
    );

}

export default Logo;