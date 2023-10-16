import { useEffect, useState, useCallback } from 'react';
import XMLParser from 'react-xml-parser';
import axios from 'axios';
import { format } from 'date-fns';

const useGetNews = () => {

    const [items, setItems] = useState([]);
    const [newsIsLoading, setNewsIsLoading] = useState(true);
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [newsError, setNewsError] = useState(false);

    const fetchNews = useCallback(async () => {
        try {
            const url = `/api/v1/search/news.xml?`
            const res = await axios.get(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/xml',
                    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_Secret
                },
                params: {
                    query: '카트라이더+드리프트',
                    display: 4,
                    start: 1,
                    sort: 'sim'
                }
            });

            const data = res.data;
            const xml = new XMLParser().parseFromString(data);
            // console.log(xml);
            const parseData = xml.children[0].children.filter((item) => item.name === 'item');
            const spreadData = parseData.map((item) => item.children);
            const result = spreadData.map((item) => {
                const obj = {};

                item.forEach((item) => {
                    obj[item.name] = item.value;
                });

                return obj;
            });

            //date 포맷을 yyyy.MM.dd로 변경
            const pubDate = result.map(item => {
                const date = item.pubDate;
                const dateValue = new Date(date);
                const formattedDate = format(dateValue, "yyyy.MM.dd");

                return formattedDate;
            });

            // title에 있는 b태그 제거
            const titleReplace = result.map(item => {
                const string = item.title.replace(/&lt;b&gt;|&lt;\/b&gt;/g, '');

                return string;
            });

            setItems(result);
            setDate(pubDate);
            setTitle(titleReplace);
            setNewsIsLoading(false);
        } catch (error) {
            setNewsIsLoading(false);
            setNewsError(true);
            console.log(error);
        }
    }, []);

    return { items, date, title, newsIsLoading, newsError, fetchNews };
}

export default useGetNews;