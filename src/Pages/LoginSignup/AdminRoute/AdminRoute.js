import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';



const AdminRoute = ({children, ...rest}) => {
    const { user, admin, isLoading } = useFirebase();
    const location = useLocation();
    

    if (isLoading || !admin) {
        console.log(isLoading)
        console.log(user.email, admin)
        return <CircularProgress color="success" />
    }

    if (user.email && admin) {
        console.log(isLoading)
        console.log(user.email, admin)
        return children;
    }
    return <Navigate to="/" state={{from: location}} />
};

export default AdminRoute;