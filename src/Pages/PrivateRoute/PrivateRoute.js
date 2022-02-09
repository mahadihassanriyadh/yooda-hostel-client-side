import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';




const PrivateRoute = ({ children, ...rest }) => {
    console.log(999999999999)
    const { user, isLoading } = useFirebase()
    console.log(user)
    const location = useLocation();
    if (isLoading) { return <CircularProgress /> }

    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} />
};

export default PrivateRoute;