import { useEffect, useState } from 'react';
import axios from 'axios';

const useYoutubeVideos = () => {

    const [videos, setVideos] = useState([]);
    const [videoIds] = useState([
        'p8cn-0vpd4k&t=1',
        '1hys9xKxUbo&t=1s',
        'pVmspvQ4nrU&t=2s',
        'dkZLY6uP_Hs&t=918s',
        'KX5dAdwy1Xg&t=1s',
        'WcM4R22Z7lE&t=2s',
        'PlELSGybTAU&t=80s',
        'Dw0hqjbV0W4&t=3s',
        'P2211wKunWc&t=51s'
    ]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoUrls = videoIds.map(id => `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.NEXT_PUBLIC_GOOGLE_YOUTUBE}`);
                const responses = await Promise.all(videoUrls.map(url => axios.get(url)));
                const videos = responses.map(response => response.data.items);
                setVideos(videos);

            } catch (error) {

                console.error(error);
            }
        };

        fetchVideos();
    }, [videoIds]);

    return videos;
}

export default useYoutubeVideos;