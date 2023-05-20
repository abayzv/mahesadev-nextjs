import axios from 'axios';

// baseURL if develepment use http://localhost:3000/api, if production use env variable
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : process.env.API_URL;

// axios base url config
const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
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