import * as M from 'style/components/main/Main.style';
import RecentNewsList from 'components/recentNews/RecentNewsLis';
import VideoState from 'components/state/VideoState';
import MainTitle from 'components/title/MainTitle';
import Tab from 'components/common/Tab';
import { lottieSrc, mainTitle } from 'const';
import { tabArray } from 'data/news';
import useTab from 'hooks/useTab';
import LoadingSpinner from 'components/loading/LoadingSpinner';

export default function RecentNewsLayout ({ sectionName, data, isLoading, isError }) {
    const { tabIndex, setTabIndex, loadData, setLoadData } = useTab(data, callback);

    function callback() {
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
    }

    return(
        <M.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="news"
                lottieSrc={lottieSrc.news}
                title={mainTitle.news}
                marginBottom="40px"
            />

            <Tab indicator={true} tabIndex={tabIndex} setTabIndex={setTabIndex} data={tabArray} styleProps="main"/>

            <M.MainInner minHeight="var(--mainHeightNews)">
                {isError && <VideoState type='error'/>}

                {
                    isLoading ?
                    <LoadingSpinner type="news"/> : <RecentNewsList tabIndex={tabIndex} data={loadData}/>
                }
            </M.MainInner>
        </M.MainComponentBox>
    )
}