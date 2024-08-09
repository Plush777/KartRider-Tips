import axios from 'axios';

export const pageSize = 5;

export const fetchGameData = async ({ pageParam }) => {
    const start = pageParam;

    const response = await axios.get(`http://localhost:8000/api/games?page=${start}&size=${pageSize}`);

    return response.data;
}