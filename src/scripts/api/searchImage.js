import axios from 'axios';
import XMLParser from 'react-xml-parser';

export const fetchSearchImage = async (gameNames, pageSize) => {
    const requests = gameNames.map(async (item) => {
        console.log(item);
        const url = `/api/v1/search/image.xml?`;
        
        try {
            const res = await axios.get(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/xml',
                    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET
                },
                params: {
                    query: `${item}+드리프트`,
                    display: pageSize,
                    start: 1,
                    sort: 'sim'
                }
            });

            const data = res.data;
            const xml = new XMLParser().parseFromString(data);
            const parseData = xml.children[0].children.filter((item) => item.name === 'item');
            const spreadData = parseData.map((item) => item.children);
            const result = spreadData.map((item) => {
                const obj = {};

                item.forEach((item) => {
                    obj[item.name] = item.value;
                });

                return obj;
            });

            console.log(result);
            return result;
        } catch (error) {
            console.error(`Error fetching data for ${item}:`, error);
            return null;
        }
    });

    const results = await Promise.all(requests);
    return results.flat();
};