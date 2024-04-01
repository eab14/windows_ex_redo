import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import { useWindowsEX } from "./WindowContext";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const initialState = { user: null, files: null }

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_USER': return { ...state, user: action.payload };
        case 'SET_FILES': return { ...state, files: action.payload };
        default: return state;

    }

}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { user, files } = state;
    const { setAccount } = useWindowsEX();

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get('/api/users/verify', { headers: { Authorization: `Bearer ${token}` } })

                .then(async response => {

                    dispatch({ type: 'SET_USER', payload: response.data.email }); 
                    await getFiles();

                })

                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                    dispatch({ type: 'SET_USER', payload: null });
                });

        }

    }, []);

    const login = async (email, password) => {

        try {

            const response = await axios.post('/api/users/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);

            dispatch({ type: 'SET_USER', payload: response.data.email });
            setAccount("panel");
            await getFiles();
            

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

    const getFiles = async () => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get('/api/users/files', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => dispatch({ type: 'SET_FILES', payload: response.data }))
                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                    dispatch({ type: 'SET_FILES', payload: null });
                });

        }

    }

    const logout = async () => {

        localStorage.removeItem('token');
        dispatch({ type: 'SET_USER', payload: null });

    }

    const context = {
        user,
        login,
        register,
        logout,
        files,
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )

}