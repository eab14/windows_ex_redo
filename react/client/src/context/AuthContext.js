import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [ client, setClient ] = useState(null);
    // const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get('/api/clients/verify', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => setClient(response.data.email))
                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                });

        }

    }, []);

    const login = async (email, password) => {

        try {

            const response = await axios.post('/api/login', { email, password });
            const token = response.data.access_token;
            localStorage.setItem('token', token);
            setClient(email);

        } 
        
        catch (error) { console.error('Login failed:', error.response.data.message); }

    };

    const logout = async () => {

        localStorage.removeItem('token');
        setClient(null);

    }

    const context = {
        client,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )

}