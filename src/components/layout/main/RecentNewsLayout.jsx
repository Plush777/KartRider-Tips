import * as M from 'style/components/main/Main.style';
import RecentNewsList from 'components/recentNews/RecentNewsList';
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

    const renderRecentNewsList = () => {
        if (isLoading && !isError) return <LoadingSpinner type="news"/>;
        if (isError) return <VideoState type='error'/>;
        if (!isLoading && !isError) return (
            <RecentNewsList tabIndex={tabIndex} data={loadData}/>
        )
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

            <M.MainInner name="news">
                {renderRecentNewsList()}
            </M.MainInner>
        </M.MainComponentBox>
    )
}