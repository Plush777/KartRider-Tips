import axios from 'axios';

export const fetchGameData = async ({ pageParam }) => {
    const start = pageParam;
    const { data } = await axios.get(`http://localhost:8000/api/games/ranking?cursor=${start}`);

    return data;
}

export const fetchGameImages = async ({ pageParam }) => {
    const start = pageParam;
    const { data } = await axios.get(`http://localhost:8000/api/games/images?cursor=${start}`);

    return data;
}