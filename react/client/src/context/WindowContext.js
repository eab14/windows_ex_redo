import { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    const [ windows, setWindows ] = useState([ "Account", "Calendar" ]);

    const context = {
        windows,
        setWindows
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}