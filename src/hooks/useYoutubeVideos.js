import { useEffect, useState } from 'react';
import axios from 'axios';

const useYoutubeVideos = () => {

    const [videos, setVideos] = useState([]);
    const [videoError, setVideoError] = useState();
    const [videoIsLoading, setVideoIsLoading] = useState(true);
    const [videoIds] = useState([
        'DtnAsdTSNXY',
        'KX5dAdwy1Xg&t=1s',
        'PlELSGybTAU&t=80s',
        'WcM4R22Z7lE&t=2s',
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
                setVideoIsLoading(false);
            } catch (error) {
                setVideoError(error);
                setVideoIsLoading(false);
                console.error(error);
            }
        };

        fetchVideos();
    }, [videoIds]);

    return { videos, videoError, videoIsLoading }
}

export default useYoutubeVideos;