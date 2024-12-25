import axios from 'axios';

import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://volunteer-management-server-theta.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
    //interseptors
    axiosSecure.interceptors.response.use(
        res => {

            return res;
        },
        async error => {

            if (error.response.status === 401 || error.response.status === 403) {
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure; // Return the customized axios instance
};

export default useAxiosSecure;
