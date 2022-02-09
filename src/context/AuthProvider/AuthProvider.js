import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


// null is the default value
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;