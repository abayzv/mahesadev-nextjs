import axios from 'axios';

const baseURL = "https://mahesadev-nextjs.vercel.app/api"

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