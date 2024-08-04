import axios from 'axios';

export const fetchRanking = async () => {
    const { data } = await axios.get('http://localhost:8000/api/ranking');

    return data;
}

export const fetchGameImage = async (gameName) => {
    const { data } = await axios.get(`http://localhost:8000/api/game/image/${gameName}`);

    return {
        src: data.src,
        alt: data.alt
    }
}