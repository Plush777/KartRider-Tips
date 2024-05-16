import * as M from 'style/components/main/Main.style';
import RecentNewsList from 'components/recentNews/RecentNewsList';
import VideoState from 'components/state/VideoState';
import MainTitle from 'components/title/MainTitle';
import Tab from 'components/common/Tab';
import { useEffect, useState } from 'react';
import { lottieSrc, mainTitle } from 'const';
import { tabArray } from 'data/news';

export default function RecentNewsLayout ({ sectionName, data, isLoading, isError }) {
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

    return(
        <M.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="news"
                lottieSrc={lottieSrc.news}
                title={mainTitle.news}
                marginBottom="40px"
            />

            <Tab tabIndex={tabIndex} setTabIndex={setTabIndex} data={tabArray} marginBottom="15px"/>

            <M.MainInner borderBottom minHeight="var(--mainHeightNews)">
                {isError && <VideoState type='error'/>}

                {
                    isLoading ?
                    <VideoState type='loading' height="660px"/> : <RecentNewsList tabIndex={tabIndex} data={loadData}/>
                }
            </M.MainInner>
        </M.MainComponentBox>
    )
}