import { createContext, useContext, useState, useReducer } from "react";
import Window from "../components/Window";

const WindowContext = createContext();

export const useWindowsEX = () => useContext(WindowContext);

const initialState = { windows : [
    { window: <Window key="Terminal" selected="Terminal" />, status: "max" },
    { window: <Window key="Account" selected="Account" />, status: "min" },
    { window: <Window key="Files" selected="Files" />, status: "min" },
    { window: <Window key="Messages" selected="Messages" />, status: "min" },
] }

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_WINDOWS': return { ...state, windows: action.payload };
        default: return state;

    }

}

export const WindowProvider = ({ children }) => {


    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { windows } = state;

    // const [ music, setMusic ] = useState({ paused: true });
    const [ date, setDate ] = useState(new Date());
    const [ account, setAccount ] = useState("login");
    const [ weather, setWeather ] = useState(null);
    const [ utilities, setUtilities ] = useState(false);
    const [ terminal, setTerminal ] = useState([]);

    const openWindow = (str, file = null) => {

        if (!windows.find(w => w.window.props.selected === str))
            dispatch({ type: 'SET_WINDOWS', payload: [ ...windows, { window: <Window key={str} selected={str} file={file}/>, status: "max" } ] });

        else if (windows.find(w => w.window.props.selected === str)) {

            const updated =  windows.map(w => {
                if (w.window.props.selected === str) return { ...w, status: "max" }
                else return w;
            })

            dispatch({ type: 'SET_WINDOWS', payload: updated });

        }

    }

    const minWindow = (str) => {

        const updated =  windows.map(w => {
            if (w.window.props.selected === str) return { ...w, status: "min" }
            else return w;
        })
        
        dispatch({ type: 'SET_WINDOWS', payload: updated });

    }

    const closeWindow = (str) => dispatch({ type: 'SET_WINDOWS', payload: windows.filter(w => w.window.props.selected !== str) });

    const context = {
        windows,
        openWindow,
        minWindow,
        closeWindow,
        date, 
        setDate,
        account,
        setAccount,
        weather, 
        setWeather,
        utilities, 
        setUtilities,
        terminal,
        setTerminal
    }

    return (
        <WindowContext.Provider value={context}>
            { children }
        </WindowContext.Provider>
    )

}