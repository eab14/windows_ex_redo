import { useWindowsEX } from "../../../context/WindowContext";
import Login from "./Login";
import Register from "./Register";
import Panel from "./Panel";
import { useAuth } from "../../../context/AuthContext";

const Account = () => {

    const { account } = useWindowsEX();
    const { user } = useAuth();

    return (

        <>
            { (account === "login" && !user) && <Login /> }
            { (account === "register" && !user ) && <Register /> }
            { (account === "panel" || user) && <Panel /> }
        </>

    )

}

export default Account;