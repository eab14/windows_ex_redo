import { createContext, useContext, useReducer, useCallback } from "react";
import axios from 'axios';

const DatabaseContext = createContext();

export const useDB = () => useContext(DatabaseContext);

const initialState = { users: null, files: null, messages: null, notes: null }

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_USERS': return { ...state, users: action.payload };
        case 'SET_FILES': return { ...state, files: action.payload };
        case 'SET_MESSAGES': return { ...state, messages: action.payload };
        case 'SET_NOTES': return { ...state, notes: action.payload };
        default: return state;

    }

}

export const DatabaseProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { users, files, messages, notes } = state;

    const get = useCallback( async (url, type) => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
                .then(response => dispatch({ type, payload: response.data })) 
                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                });

        }

    }, [])

    const remove = useCallback(async (url) => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.delete(url, { headers: { Authorization: `Bearer ${token}` } })
                .then(response => console.log(response.data)) 
                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                });

        }

    }, [])

    const context = {
        users,
        files,
        messages,
        notes,
        get,
        remove
    }

    return (
        <DatabaseContext.Provider value={context}>
            { children }
        </DatabaseContext.Provider>
    )

}