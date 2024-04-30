import * as Mainstyled from 'components/style/common/Area.style';
import { useQuery } from "@tanstack/react-query";
import RecentNewsList from 'components/article/RecentNewsList';
import VideoState from 'components/article/VideoState';
import MainTitle from 'components/article/MainTitle';
import Tab from 'components/common/Tab';
import { useEffect, useState } from 'react';
import { fetchNews, fetchArticles } from 'scripts/api/news';

const RecentNews = ({ sectionName }) => {
    let [tabIndex, setTabIndex] = useState(0);
    let [loadData, setLoadData] = useState(undefined);

    const { 
        data: newsData, 
        isLoading: newsLoading,
        isError: newsError
     } = useQuery({
        queryKey: ["newsLists"],
        queryFn: async () => {
            const news = await fetchNews();
            const devArticles = await fetchArticles('/krtp/article/dev',0,4);
            const updateArticles = await fetchArticles('/krtp/article/update',0,4);

            return {
                news,
                devArticles,
                updateArticles
            }
        },
    });

    useEffect(() => {
        if (newsData) {
            if (tabIndex === 0) {
                newsData && newsData.news.sort((a,b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                setLoadData(newsData.news);
            }
            if (tabIndex === 1) setLoadData(newsData.devArticles);
            if (tabIndex === 2) setLoadData(newsData.updateArticles);
        }
    }, [tabIndex, newsData]);

    const tabArray = ['뉴스', '개발자 노트', '업데이트'];

    return(
        <Mainstyled.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="news"
                lottieSrc="https://lottie.host/5d6db238-f903-4c96-bf41-391c2e5de0d7/y8jB0ebnOr.lottie"
                title="최신 소식들을 확인해보세요"
                marginBottom="40px"
            />

            <Tab tabIndex={tabIndex} setTabIndex={setTabIndex} data={tabArray} marginBottom="15px"/>

            <Mainstyled.MainInner borderBottom minHeight="var(--mainHeightNews)">
                {newsError && <VideoState type='error'/>}

                {
                    newsLoading ?
                    <VideoState type='loading' height="660px"/> : <RecentNewsList tabIndex={tabIndex} data={loadData}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default RecentNews;