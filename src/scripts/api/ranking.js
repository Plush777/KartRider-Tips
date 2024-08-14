import axios from 'axios';

export const fetchGameData = async ({ pageParam }) => {
    const start = pageParam;
    const response = await axios.get(`http://localhost:8000/api/games?cursor=${start}`);

    return response.data;
}