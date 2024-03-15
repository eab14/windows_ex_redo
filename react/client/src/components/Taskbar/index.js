import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Taskbar = () => {

    return (

        <div id="taskbar_spacer" className="flex row">

            <div id="taskbar_prev" className="flex center taskbar_util">
                <span><FontAwesomeIcon icon={faChevronLeft} /></span>
            </div>

            <div id="taskbar_placer" className="flex row">

            </div>

            <div id="taskbar_next" className="flex center taskbar_util">
                <span><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>

        </div>

    );

}

export default Taskbar;