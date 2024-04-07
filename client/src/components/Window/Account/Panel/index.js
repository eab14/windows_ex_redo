import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from "../../../../context/AuthContext";
import Login from "../Login";

const Panel = (props) => {

    const { user, logout } = useAuth();

    return (

        <div>
    
        { user ? 
        
        
            <div className="flex row account_panel_spacer">

                <div className="flex row logout_button" onClick={logout}>
                    <p>Logout</p>
                    <span><FontAwesomeIcon icon={faRightFromBracket} /></span>
                </div>

                <div className="flex col account_panel_nav">

                    <div className="flex col account_nav_avatar"></div>

                    <div className="flex row account_nav_line">
                        <span></span>
                        <h3 className="flex">E-mail</h3>
                    </div>

                    <div className="flex row account_nav_line">
                        <span></span>
                        <h3 className="flex">Password</h3>
                    </div>

                    <div className="flex row account_nav_line">
                        <span></span>
                        <h3 className="flex">Location</h3>
                    </div>

                </div>

                <div className="flex account_nav_divider"></div>

                <div className="flex col account_panel_content">

                    <div className="flex row account_panel_header">
                        <span></span>
                        <p>Full Name</p>
                    </div>

                    <div className="flex row account_content_line">
                        <p>{user}</p>
                        <span></span>
                        <i><FontAwesomeIcon icon={faPenToSquare} /></i>
                    </div>

                    <div className="flex row account_content_line">
                        <p>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</p>
                        <span></span>
                        <i><FontAwesomeIcon icon={faPenToSquare} /></i>
                    </div>

                    <div className="flex row account_content_line">
                        <p>Toronto, CA</p>
                        <span></span>
                        <i><FontAwesomeIcon icon={faPenToSquare} /></i>
                    </div>

                </div>
            
            </div>
        
            : 
            
            <Login /> 
        
        }

        </div>
        
        
    )

}

export default Panel;