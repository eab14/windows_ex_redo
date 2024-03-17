import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {

    const clickExpand = ({ currentTarget }) => {

        const w = currentTarget.parentNode.parentNode;
        w.style.width = "630px";
        w.style.height = "340px";

    };

    const clickCompress = ({ currentTarget }) => {

        const w = currentTarget.parentNode.parentNode;
        w.style.width = "420px";
        w.style.height = "270px";

    };

    return (
        <div className="flex center test test_5">
            <div className="flex col utilities">
                <span className="flex center util expand" onClick={clickExpand}><FontAwesomeIcon icon={faExpand} /></span>
                <span className="flex center util compress" onClick={clickCompress}><FontAwesomeIcon icon={faCompress} /></span>
            </div>
            Settings utility will go here...
        </div>
    )

}

export default Settings;