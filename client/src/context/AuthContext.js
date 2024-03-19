import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    // const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            axios.get('/api/users/verify', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => setUser(response.data.email))
                .catch(error => {
                    console.error('Token invalid');
                    localStorage.removeItem('token');
                });

        }

    }, []);

    const login = async (email, password) => {

        try {

            const response = await axios.post('/api/users/login', { email, password });
            const token = response.data.access_token;
            localStorage.setItem('token', token);
            setUser(email);

        } 
        
        catch (error) { console.error('Login failed:', error.response.data.message); }

    };

    const logout = async () => {

        localStorage.removeItem('token');
        setUser(null);

    }

    const context = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )

}