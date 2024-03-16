import { createContext, useContext, useEffect, useState } from "react";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    const [ windows, setWindows ] = useState([ "Account", "Calendar" ]);
    const [ status, setStatus ] = useState([])

    useEffect(() => {

        let array = [ [ "Account", "min" ], [ "Calendar", "max" ] ];
        setStatus(array);

    }, [])

    const context = {
        windows,
        setWindows,
        status,
        setStatus
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}