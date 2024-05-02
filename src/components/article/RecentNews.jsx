import * as Mainstyled from 'components/style/common/Area.style';
import RecentNewsList from 'components/article/RecentNewsList';
import VideoState from 'components/article/VideoState';
import MainTitle from 'components/article/MainTitle';
import Tab from 'components/common/Tab';
import { useEffect, useState } from 'react';

const RecentNews = ({ sectionName, data, isLoading, isError }) => {
    let [tabIndex, setTabIndex] = useState(0);
    let [loadData, setLoadData] = useState(undefined);

    useEffect(() => {
        if (data) {
            if (tabIndex === 0) {
                data && data.news.sort((a,b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                setLoadData(data.news);
            }
            if (tabIndex === 1) setLoadData(data.devArticles);
            if (tabIndex === 2) setLoadData(data.updateArticles);
        }
    }, [tabIndex, data]);

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
                {isError && <VideoState type='error'/>}

                {
                    isLoading ?
                    <VideoState type='loading' height="660px"/> : <RecentNewsList tabIndex={tabIndex} data={loadData}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default RecentNews;