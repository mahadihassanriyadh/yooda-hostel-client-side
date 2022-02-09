import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';




const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase()
    const location = useLocation();
    if (isLoading) {
        console.log(isLoading)
        return <CircularProgress color="success" />
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} />
};

export default PrivateRoute;