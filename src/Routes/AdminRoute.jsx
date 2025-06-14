import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-center loading-lg text-warning"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/'} state={{ from: location }} replace={true}></Navigate>
};

export default AdminRoute;