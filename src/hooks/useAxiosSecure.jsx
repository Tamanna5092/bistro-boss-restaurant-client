import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiousSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()


    // interceptors to add token in the request header
    axiousSecure.interceptors.request.use(function (config){
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        // console.log('request config --->', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error){
        // Do something with request error
        return Promise.reject(error)
    })

    // interceptors 401 error and status
    axiousSecure.interceptors.response.use(function (response){
        return response
    }, async (error) => {
        const status = error.response.status
        // console.error('interceptors error in the intercepor', status)
        // if the error is 401 or 403, log out the user and navigate to signin page
        if(status === 401 || status === 403){
            await logOut()
            navigate('/signIn')
        }
        return Promise.reject(error)
    })

     return axiousSecure
};

export default useAxiosSecure;