import './index.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect, useCallback } from 'react';

gsap.registerPlugin(useGSAP);

const Loading = (props) => {

    const loadRef = useRef();

    useGSAP(() => { 

        let hoverCtx = gsap.context(() => { gsap.to(".diamond", { scale: 1, x: 0, y: 0 }) }, loadRef);
        return () => hoverCtx.revert();

    }, []);

    const animateLoading = useCallback(() => {

        const loading_logo = loadRef.current.querySelector('.loading_main');
        const loading_text = loadRef.current.querySelector('.loading_text');

        let tl = gsap.timeline({ paused: true, });

        const diamonds = loading_logo.querySelectorAll('.diamond');
        const dots = loading_text.querySelectorAll('span');
        
        tl.to(diamonds[0], { delay: 0.3, x: -14, scale: 1, background: "#19ac5b", duration: 0.3 }, 0)
        tl.to(diamonds[1], { delay: 0.3, x: 14, scale: 1, background: "#19ac5b", duration: 0.3 }, 0)
        tl.to(diamonds[2], { delay: 0.3, x: -8, y: 9, background: "#6b957e", scale: 1, duration: 0.3 }, 0)
        tl.to(diamonds[3], { delay: 0.3, x: 8, y: -9, background: "#6b957e", scale: 1, duration: 0.3 }, 0)

        tl.to(loading_text, { delay: 0.4, opacity: 1, duration: 0.5 }, 0);

        tl.fromTo(diamonds[0], { scale: 1, background: "#19ac5b" }, { delay: 0.5, scale: 1.1, background: "#6b957e", duration: 0.5, repeat: -1, repeatDelay: 1.2, yoyo: true }, 0);
        tl.fromTo(diamonds[2], { scale: 1, background: "#6b957e" }, { delay: 0.7, scale: 1.1, background: "#19ac5b", duration: 0.5, repeat: -1, repeatDelay: 1.2, yoyo: true }, 0)
        tl.fromTo(diamonds[3], { scale: 1, background: "#6b957e" }, { delay: 0.9, scale: 1.1, background: "#19ac5b", duration: 0.5, repeat: -1, repeatDelay: 1.2, yoyo: true }, 0)
        tl.fromTo(diamonds[1], { scale: 1, background: "#19ac5b" }, { delay: 1.1, scale: 1.1, background: "#6b957e", duration: 0.5, repeat: -1, repeatDelay: 1.2, yoyo: true }, 0)

        tl.fromTo(dots[0], { opacity: 0 }, { delay: 0.5, opacity: 1, repeat: -1, repeatDelay: 1.35, duration: 0.3, yoyo: true }, 0)
        tl.fromTo(dots[1], { opacity: 0 }, { delay: 0.8, opacity: 1, repeat: -1, repeatDelay: 1.35, duration: 0.3, yoyo: true }, 0)
        tl.fromTo(dots[2], { opacity: 0 }, { delay: 1.1, opacity: 1, repeat: -1, repeatDelay: 1.35, duration: 0.3, yoyo: true }, 0)

        tl.play();

    }, []);

    useEffect(() => animateLoading(), [ animateLoading ])

    return (
        
        <div ref={loadRef} className="flex center col loading_spacer">

                <div className="loading_main flex center">

                    <span className="diamond diamond_large"></span>
                    <span className="diamond diamond_large"></span>
                    <span className="diamond diamond_small"></span>
                    <span className="diamond diamond_small"></span>

                </div>

                <div className="flex center loading_text">
                    <h3 className={props.text_color === "black" ? "black" : "white"}>Loading<span className={props.text_color === "black" ? "black" : "white"}>.</span><span>.</span><span>.</span></h3>
                </div>

        </div>

    );

}

export default Loading;