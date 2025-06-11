import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const axiousSecure = useAxiosSecure()
    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users')
            return res.data;
        }
    })
    return (
        [users, refetch]
    );
};

export default useUser;