import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useRssYoutube = () => {
    const [rssItems, setRssItems] = useState([]);
    const [rssIsLoading, setRssIsLoading] = useState(true);
    const [rssError, setRssError] = useState(false);
    const getChannel = localStorage.getItem('channel');

    useEffect(() => {
        if (!getChannel) return localStorage.setItem('channel', 'UCFBGBsvOMA2gbxmnxgotsmw');
    }, [getChannel]);

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${getChannel}`);
            const data = await res.data;
            const items = data.items.slice(0, 3);
            setRssItems(items);
            setRssIsLoading(false);
            // console.log(items);
        } catch (error) {
            setRssError(true);
            setRssIsLoading(false);
            console.log(rssError);
        }
    }, [getChannel]);

    const apiDate = rssItems.map((item) => (item.pubDate));

    const dateOnlyArray = apiDate.map(dateString => {
        const dateParts = dateString.split(" ");
        return dateParts[0]; // 날짜 부분만 추출
    });

    return { rssItems, rssIsLoading, dateOnlyArray, rssError, fetchData, getChannel };
}

export default useRssYoutube;