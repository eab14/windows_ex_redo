import { useAuth } from "../../../../context/AuthContext";
import Button from "../../../Form/Button";
import Login from "../Login";

const Panel = () => {

    const { user, logout } = useAuth();

    return (

        <div>
    
        { user ? 
        
        
            <div class="flex center test_1">

                <Button onClick={logout} text="Logout" />
            
            </div>
        
            : <Login /> 
        
        }

        </div>
        
        
    )

}

export default Panel;