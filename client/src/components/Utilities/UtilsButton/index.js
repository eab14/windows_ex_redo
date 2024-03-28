import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalculator, faCloud, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

import { useWindowsEX } from '../../../context/WindowContext';

import Window from '../../Window';

const UtilsButton = (props) => {

    const { windows, setWindows, setStatus } = useWindowsEX();

    const clickHandler = () => {

        if (!windows.find(window => window.props.selected === props.icon)) {

            if (props.text !== "Github" && props.text !== "Utilities") {

                const w = <Window key={props.icon} selected={props.icon} />;
                const s = [props.icon, "max"];

                setWindows(prevWindows => [ ...prevWindows, w ]);
                setStatus(prevStatus => [ ...prevStatus, s ]);

            }

        }

    }

    return (

        <div className="flex center col utils_button" onClick={clickHandler} >

            { props.icon === "Calculator" && <span className="flex center"><FontAwesomeIcon icon={faCalculator} /></span> }
            { props.icon === "Calendar" && <span className="flex center"><FontAwesomeIcon icon={faCalendar} /></span> }
            { props.icon === "Password Generator" && <span className="flex center"><FontAwesomeIcon icon={faShieldHalved} /></span> }
            { props.icon === "Weather" && <span className="flex center"><FontAwesomeIcon icon={faCloud} /></span> }

            { props.icon !== "Weather" && <div className="flex divider"></div> }
            
        </div>
    
    )

}

export default UtilsButton;