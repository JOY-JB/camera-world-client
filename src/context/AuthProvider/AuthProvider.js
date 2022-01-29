import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

// this is context api component
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;