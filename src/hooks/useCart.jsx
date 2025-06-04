import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const axiousSecure = useAxiosSecure()
    const {user} = useAuth()
     const {refetch, data: cart = []} = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
        const res = await axiousSecure.get(`/carts?email=${user?.email}`);
        return res.data;
    }
     })
     return [cart, refetch]
};

export default useCart;