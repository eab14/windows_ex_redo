import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import mewOpponentGif from '../images/opponent/mew.gif';
import mewOpponentImg from '../images/opponent/mew.png';

import mewGif from '../images/trainer/mew.gif';
import mewImg from '../images/trainer/mew.png';

const Screen = () => {

    const opponentRef = useRef();
    const trainerRef = useRef();
    const trainerStatsRef = useRef();

    const animateTrainerIntro = useCallback(() => {

        const trainerTime = setTimeout(() => {

            trainerRef.current.src = mewImg;
            trainerRef.current.style.width = "272px";
            trainerRef.current.style.height = "272px";
            trainerRef.current.style.bottom = "-14px";

            gsap.to(trainerRef.current, { delay: 0.3, y: 7, yoyo: true, repeat: -1, duration: 0.5 })
            gsap.to(trainerStatsRef.current, { delay: 0.8, y: 4, yoyo: true, repeat: -1, duration: 0.5 })

            clearTimeout(trainerTime);

        }, 2100)

    }, [])

    const animateOpponentIntro = useCallback(() => {

        const opponentTime = setTimeout(() => {

            opponentRef.current.src = mewOpponentImg;
            opponentRef.current.style.width = "180px";
            opponentRef.current.style.height = "180px";
            opponentRef.current.style.top = "-14px";

            clearTimeout(opponentTime);

        }, 3600)

    }, [])

    useEffect(() => {

        animateTrainerIntro();
        animateOpponentIntro();

    }, [ animateTrainerIntro, animateOpponentIntro ])

    return (
    
        <div className="flex battle_screen_spacer">

            <div className="flex opponent_spacer">
                <img ref={opponentRef} src={mewOpponentGif} alt="mew opponent animation"></img>
            </div>

            <div className="flex row trainer_spacer">
                <div className="flex center trainer_img_spacer">
                    <img ref={trainerRef} src={mewGif} alt="mew trainer animation"></img>
                </div>
                <div ref={trainerStatsRef} className="flex trainer_stats_overlay">
                    <div className="flex col trainer_stats"></div>
                </div>
            </div>

        </div>
        
    )
    
}

export default Screen;