import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user, loading} = useAuth()
    const axiousSecure = useAxiosSecure()

    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading ,
        queryFn: async () => {
            const res = await axiousSecure.get(`/users/admin/${user?.email}`)
            console.log('data --->', res.data)
            return res.data.admin;
        }
    })
    return [ isAdmin, isAdminLoading ]
};

export default useAdmin;