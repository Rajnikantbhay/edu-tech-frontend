// AuthProvider.jsx
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [name, setName] = useState('');

    const checkSession = async () => {
        try {
            const response = await axios.get('https://edu-tech-api.onrender.com/api/verify-token', {
                withCredentials: true,
            });
            if (response.status === 200) {
                setIsAuthenticated(true);
                setName(response.data.decoded.name)
                 // User is authenticated
            } else if (response.status === 401) {
                setIsAuthenticated(false); // User is not authenticated
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkSession(); // Initial mount check
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkSession, name}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
