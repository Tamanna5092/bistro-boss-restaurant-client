import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePaymentHistory = () => {
    const axiousSecure = useAxiosSecure()
    const { user } = useAuth()
    const {data: payments = [], refetch} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async() => {
            const res = await axiousSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return [payments, refetch]
};

export default usePaymentHistory;