import React, { useState, useEffect, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(true);
    const [ user, setUser ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if(user) {
                navigate('/Chats');
            }
        });
    }, [user, navigate]);

    return (
        <div>
            <AuthContext.Provider value={user}>
             {!loading && [children]}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;
