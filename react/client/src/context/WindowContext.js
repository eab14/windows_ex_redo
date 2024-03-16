import { createContext, useContext, useEffect, useState } from "react";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    const [ windows, setWindows ] = useState([ "Account", "Calendar", "Music" ]);
    const [ status, setStatus ] = useState([])

    useEffect(() => {

        let array = [ [ "Account", "min" ], [ "Calendar", "max" ], [ "Music", "max" ] ];
        sortWindows(array);
        setStatus(array);

    }, [])

    const sortWindows = (array) => {

        array.sort((a, b) => {

          if (a[1] === "max" && b[1] === "max") return 0;
          if (a[1] === "max") return -1;
          if (b[1] === "max") return 1;

          return 0;

        });

        const sortedWindows = array.map(([name, _]) => name);
        setWindows(sortedWindows);
      
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