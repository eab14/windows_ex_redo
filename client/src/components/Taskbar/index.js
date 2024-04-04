import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useWindowsEX } from '../../context/WindowContext';

const Taskbar = () => {

    const { windows } = useWindowsEX();

    const array = windows.filter(w => w.status === "min");
    
    return (

        <div id="taskbar_spacer" className="flex row">

            <div id="taskbar_prev" className="flex center taskbar_util">
                <span><FontAwesomeIcon icon={faChevronLeft} /></span>
            </div>

            <div id="taskbar_placer" className="flex row">

                { array.map(w => w.window) }

            </div>

            <div id="taskbar_next" className="flex center taskbar_util">
                <span><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>

        </div>

    );

}

export default Taskbar;