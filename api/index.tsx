import axios from 'axios';

<<<<<<< HEAD
const baseURL = "https://mahesadev-nextjs.vercel.app/api"
=======
const baseURL = 'https://dummyapi.io/data/v1/';
>>>>>>> main

// axios base url config
const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'app-id' : '6469766e9f6e8f74e29dfca1'
    },
});

const fetchDatas = async (url: string) => {
    const res = await api.get(url);
    const datas = await res.data;

    return datas;
}

export {
    fetchDatas
}