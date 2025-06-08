import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiouPublic = () => {
    return axiosPublic
};

export default useAxiouPublic;