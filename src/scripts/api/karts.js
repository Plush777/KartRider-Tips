import axios from 'axios';

export const fetchKarts = async () => {
    const { data } = await axios.get('http://localhost:8000/api/kart/');

    return data;
}