import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import RankingList from 'components/ranking/RankingList';
import VideoState from 'components/state/VideoState';
import { lottieSrc, mainTitle } from 'const';

export default function RankingLayout ({ data, isLoading, isError }) {
    return(
        <M.ContainerBox>
            <MainTitle 
                lottieName="rank"
                lottieSrc={lottieSrc.rank}
                title={mainTitle.rank}
                marginBottom="20px"
            />
            <M.MainInner name="ranking" minHeight="var(--main-scroll-height)">
                {isError && <VideoState type='error'/>}
                {
                    isLoading ? 
                    <VideoState type='loading' styleClassName='ranking'/> 
                    :
                    <RankingList data={data} isLoading={isLoading}/>
                }
            </M.MainInner>
        </M.ContainerBox>
    )
}