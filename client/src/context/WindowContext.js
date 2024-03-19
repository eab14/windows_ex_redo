import { createContext, useContext, useEffect, useState } from "react";
import Window from "../components/Window";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    const [ windows, setWindows ] = useState([ <Window key="Calculator" selected="Calculator" />, <Window key="Calendar" selected="Calendar" />, <Window key="Music" selected="Music" />, <Window key="Account" selected="Account" />, <Window key="Register" selected="Register" /> ]);
    const [ status, setStatus ] = useState([])
    // const [ music, setMusic ] = useState({ paused: true });
    const [ date, setDate ] = useState(new Date())

    useEffect(() => {

        let array = [ [ "Calculator", "min" ], [ "Calendar", "min" ], [ "Music", "min" ], [ "Account", "max" ], [ "Register", "max" ] ];
        // sortWindows(array);
        setStatus(array);

    }, [])

    const sortWindows = (array) => {

        array.sort((a, b) => {

            if (a[1] === "max" && b[1] === "max") return 0;
            if (a[1] === "max") return -1;
            if (b[1] === "max") return 1;

            return 0;

        });
      
        return array;

    };

    const context = {
        windows,
        setWindows,
        status,
        setStatus,
        sortWindows,
        date, 
        setDate
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}