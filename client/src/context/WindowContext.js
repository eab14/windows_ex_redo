import { createContext, useContext, useEffect, useState } from "react";
import Window from "../components/Window";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    const [ windows, setWindows ] = useState([ 
        <Window key="Files" selected="Files" />,
        <Window key="Account" selected="Account" />,
        <Window key="Messages" selected="Messages" />,
    ]);

    const [ status, setStatus ] = useState([])
    // const [ music, setMusic ] = useState({ paused: true });
    const [ date, setDate ] = useState(new Date())
    const [ account, setAccount ] = useState("login")
    const [ weather, setWeather ] = useState({ laoded: false })

    useEffect(() => {

        let array = [ 
            [ "Files", "max" ],
            [ "Account", "min" ],
            [ "Messages", "max" ],
        ];
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
        setDate,
        account,
        setAccount,
        weather, 
        setWeather
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}