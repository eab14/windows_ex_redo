import { createContext, useContext, useEffect, useState } from "react";
import Window from "../components/Window";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {

    // This will get more complicated shortly...
    // { window: <Window key="Account" selected="Account" />, name: "Account", size: "max", loggedIn: false, status: "login" }

    const [ windows, setWindows ] = useState([
        <Window key="Terminal" selected="Terminal" />,
        <Window key="Account" selected="Account" />,
        <Window key="Files" selected="Files" />,
        <Window key="Messages" selected="Messages" />
    ]);

    const [ status, setStatus ] = useState([]);
    // const [ music, setMusic ] = useState({ paused: true });
    const [ date, setDate ] = useState(new Date());
    const [ account, setAccount ] = useState("login");
    const [ weather, setWeather ] = useState(null);
    const [ utilities, setUtilities ] = useState(false);

    useEffect(() => {

        let array = [
            [ "Terminal", "max" ],
            [ "Account", "min" ],
            [ "Files", "min" ],
            [ "Messages", "min" ]
        ];
        // sortWindows(array);
        setStatus(array);

    }, [])

    const openWindow = (str) => {

        if (!windows.find(window => window.props.selected === str)) {

            const w = <Window key={str} selected={str} />;
            const s = [str, "max"];

            setWindows(prevWindows => [ ...prevWindows, w ]);
            setStatus(prevStatus => [ ...prevStatus, s ]);

        }

        else if (windows.find(window => window.props.selected === str)) {

            setStatus(prev => {

                const updated = prev.map(([name, current]) => name === str ? [name, "max"] : [name, current]);
                return updated;
      
            });

        }

    }

    const closeWindow = (str) => {

        setStatus(prevStatus => prevStatus.filter(([name]) => name !== str));
		setWindows(prevWindows => prevWindows.filter(window => window.props.selected !== str));

    }

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
        openWindow,
        closeWindow,
        sortWindows,
        date, 
        setDate,
        account,
        setAccount,
        weather, 
        setWeather,
        utilities, 
        setUtilities
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}