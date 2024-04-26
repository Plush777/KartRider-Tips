import axios from 'axios';

export const fetchRanking = async () => {
    const { data } = await axios.get('/krtp/ranking');

    return data;
}