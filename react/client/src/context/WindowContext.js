import { createContext, useContext, useEffect, useState } from "react";
import Window from "../components/Window";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    const [ windows, setWindows ] = useState([ <Window key="1" selected="Account" />, <Window key="2" selected="Calendar" />, <Window key="3" selected="Music" /> ]);
    const [ status, setStatus ] = useState([])
    // const [ music, setMusic ] = useState({ paused: true });

    useEffect(() => {

        let array = [ [ "Account", "min" ], [ "Calendar", "max" ], [ "Music", "max" ] ];
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
        sortWindows
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}