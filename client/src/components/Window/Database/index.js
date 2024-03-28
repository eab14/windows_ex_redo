import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

import Loading from '../../Loading';

const Database = () => {

    const clickExpand = ({ currentTarget }) => {

        const w = currentTarget.parentNode.parentNode;
        w.style.width = "720px";
        w.style.height = "400px";

    };

    const clickCompress = ({ currentTarget }) => {

        const w = currentTarget.parentNode.parentNode;
        w.style.width = "520px";
        w.style.height = "320px";

    };

    return (
        <div className="flex center test test_5">
            <div className="flex col utilities">
                <span className="flex center util expand" onClick={clickExpand}><FontAwesomeIcon icon={faExpand} /></span>
                <span className="flex center util compress" onClick={clickCompress}><FontAwesomeIcon icon={faCompress} /></span>
            </div>
            
            <Loading />

        </div>
    )
  
}

export default Database;