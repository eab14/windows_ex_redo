import { useWindowsEX } from "../../../context/WindowContext";
import Login from "./Login";
import Register from "./Register";

const Account = () => {

    const { account } = useWindowsEX();

    return (

        <>
            { (account === "login") && <Login /> }
            { (account === "register") && <Register /> }
        </>

    )

}

export default Account;