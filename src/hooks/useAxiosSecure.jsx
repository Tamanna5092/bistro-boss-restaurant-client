import axios from 'axios';
import React from 'react';

export const axiousSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
     return axiousSecure
};

export default useAxiosSecure;