import { useWindowsEX } from "../../../context/WindowContext";
import Login from "./Login";
import Register from "./Register";
import Panel from "./Panel";

const Account = () => {

    const { account } = useWindowsEX();

    return (

        <>
            { (account === "login") && <Login /> }
            { (account === "register") && <Register /> }
            { (account === "panel") && <Panel /> }
        </>

    )

}

export default Account;