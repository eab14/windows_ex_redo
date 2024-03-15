import './index.css';
import './test.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Test from './Account/Test';
import Calendar from './Calendar';

const Window = (props) => {

  return (

    <div className="window flex col">

        <div className="flex row window_header">

            <span className="flex"></span>

            <h2>{props.selected}</h2>

            <div className="flex row window_utilities">

                <div className="flex center icon min"><FontAwesomeIcon icon={faMinus} /></div>
                <div className="flex center icon max"><FontAwesomeIcon icon={faWindowMaximize} /></div> 
                <div className="flex center icon close"><FontAwesomeIcon icon={faXmark} /></div>

            </div>

        </div>

        <div className="flex col window_content">

            { props.selected === "Account" && <Test /> }
            { props.selected === "Calendar" && <Calendar /> }

        </div>

    </div>

  );

}

export default Window;
