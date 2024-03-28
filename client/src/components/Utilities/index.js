import './index.css';

import { useWindowsEX } from '../../context/WindowContext';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import UtilsButton from './UtilsButton';

const Utilities = () => {

    const utilsRef = useRef();

    const { utilities } = useWindowsEX();

    const array = [ "Calculator", "Calendar", "Password Generator", "Weather" ];

    useEffect(() => {

        if (utilities) {
            
            let q = gsap.utils.selector(utilsRef.current);
            gsap.to(q("span"), { delay: 0.3, opacity: 1, duration: 0.3 });
            gsap.to(q(".divider"), { delay: 0.3, opacity: 0.5, duration: 0.3 });

        }

    }, [ utilities ])

    return (
        
        <div ref={utilsRef} className="flex col utils_spacer">

            { utilities ?  
            
                array.map((button, index) => <UtilsButton key={index} icon={button} />)
                
                :
                
                null
            
            }

        </div>
        
    )

}

export default Utilities;