import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://dev-desk-que-3-bw.herokuapp.com/api',
        headers: {
            authorization: token
        }
    })
}