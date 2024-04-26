import axios from 'axios';
import XMLParser from 'react-xml-parser';
import { format } from 'date-fns';
import { decode } from 'html-entities';

export const fetchNews = async () => {
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

    const resultMapping = result.map((item, index) => {
        return {
            title: decode(titleReplace[index]),
            link: item.originallink,
            date: pubDate[index]
        }
    });

    return resultMapping;
};

export const fetchArticles = async (url, begin, end) => {
    const { data } = await axios.get(url);
    const myData = data.slice(begin, end);

    return myData;
}