import './index.css';
import './test.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

const Window = () => {

  return (

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Account</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><FontAwesomeIcon icon={faMinus} /></div>
                <div class="flex center icon max"><FontAwesomeIcon icon={faWindowMaximize} /></div> 
                <div class="flex center icon close"><FontAwesomeIcon icon={faXmark} /></div>

            </div>

        </div>

        <div class="flex col window_content">


            <div class="test_1"></div>

        </div>

    </div>

  );

}

export default Window;
