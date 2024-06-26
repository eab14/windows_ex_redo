import { createContext, useContext, useEffect, useReducer, useCallback, useState } from "react";
import axios from 'axios';
import { useWindowsEX } from "./WindowContext";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const initialState = { user: null, files: null, messages: null, notes: null, db_stats: null }

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_USER': return { ...state, user: action.payload };
        case 'SET_FILES': return { ...state, files: action.payload };
        case 'SET_MESSAGES': return { ...state, messages: action.payload };
        case 'SET_NOTES': return { ...state, notes: action.payload };
        case 'SET_DB_STATS': return { ...state, db_stats: action.payload };
        default: return state;

    }

}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { user, files, messages, db_stats } = state;
    const [ admin, setAdmin ] = useState(false);
    const { setAccount } = useWindowsEX();

    const setNull = useCallback(async () => {

        const array = [ 'SET_USER', 'SET_FILES', 'SET_MESSAGES', 'SET_NOTES', 'SET_DB_STATS' ];
        for (let i = 0; i < array.length; i++) dispatch({ type: array[i], payload: null });
        setAdmin(false);

    }, [])

    const get = useCallback( async (url, type) => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
                .then(response => dispatch({ type, payload: response.data })) 
                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                    setNull();
                });

        }

    }, [ setNull ])

    const login = async (email, password) => {

        try {

            const response = await axios.post('/api/users/login', { email, password });
            const token = response.data.token;

            localStorage.setItem('token', token);

            dispatch({ type: 'SET_USER', payload: response.data.email });

            setAdmin(response.data.admin);
            setAccount("panel");

            (admin) && await get('/api/db/stats', 'SET_DB_STATS');
            await get('/api/users/files', 'SET_FILES');
            await get('/api/users/messages', 'SET_MESSAGES');
            await get('/api/users/notes', 'SET_NOTES');
            

        } 
        
        catch (error) { console.error('Login failed :', error.response.data.message); }

    };

    const register = async (email, password) => {

        try {

            await axios.post('/api/users', { email, password });
            await login(email, password);

        }

        catch (error) { console.error('Register failed :', error.response.data.message); }

    }

    const logout = async () => {

        localStorage.removeItem('token');
        setNull();

    }

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get('/api/users/verify', { headers: { Authorization: `Bearer ${token}` } })

                .then(async response => {

                    dispatch({ type: 'SET_USER', payload: response.data.email });
                    setAdmin(response.data.admin);
                    
                    (admin) && await get('/api/db/stats', 'SET_DB_STATS');
                    await get('/api/users/files', 'SET_FILES');
                    await get('/api/users/messages', 'SET_MESSAGES');
                    await get('/api/users/notes', 'SET_NOTES');

                })

                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                    setNull();
                });

        }

    }, [ get, setNull, admin, setAdmin ]);

    const context = {
        user,
        admin,
        login,
        register,
        logout,
        files,
        messages,
        db_stats
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )

}