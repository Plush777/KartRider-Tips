import { useState } from 'react';
import RecentYoutubeList from 'components/article/RecentYoutubeList';
import VideoState from 'components/article/VideoState';
import * as Mainstyled from 'components/style/common/Area.style';
import { useQuery } from "@tanstack/react-query";
import Select from 'components/common/Select';
import MainTitle from 'components/article/MainTitle';
import { fetchRecentLists } from 'scripts/api/rssYoutube';

const RecentYoutube = () => {
    let [selectKey, setSelectKey] = useState('UCJDEss5wA1ddrCBC40giO8A');

    const { 
        data: recent, 
        isLoading: recentLoading,
        isError: recentError
     } = useQuery({
        queryKey: ["youtubeRecentLists", selectKey],
        queryFn: () => fetchRecentLists(selectKey),
    });

    return(
        <Mainstyled.MainComponentBox>
            <MainTitle
                lottieName="youtube"
                lottieSrc="https://lottie.host/0fa9e3a2-0b2c-45f6-a151-86b61f917e9a/WTN6JyfSj7.lottie"
                title="최근 유튜브 영상들을 만나보세요"
                marginBottom="20px"
                right={<Select data="channels" selectKey={selectKey} setSelectKey={setSelectKey} width="190px" height="36px" />}
            />
            
            <Mainstyled.MainInner minHeight="var(--mainHeightDefault)">
                {recentError && <VideoState type='error' styleClassName='item3'/>}

                {
                    recentLoading ? 
                    <VideoState type='loading' styleClassName='item3'/> 
                    : 
                    <RecentYoutubeList data={recent} recentLoading={recentLoading} selectKey={selectKey} setSelectKey={setSelectKey}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default RecentYoutube;