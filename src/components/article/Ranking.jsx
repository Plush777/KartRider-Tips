import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';
import RankingList from 'components/article/RankingList';
import VideoState from 'components/article/VideoState';
import { lottieSrc, mainTitle } from 'const';

const Ranking = ({ data, isLoading, isError }) => {
    return(
        <Mainstyled.ContainerBox>
            <MainTitle 
                lottieName="rank"
                lottieSrc={lottieSrc.rank}
                title={mainTitle.rank}
                marginBottom="20px"
            />
           
            <Mainstyled.MainInner name="ranking" minHeight="var(--main-scroll-height)">
                {isError && <VideoState type='error'/>}
                {
                    isLoading ? 
                    <VideoState type='loading' styleClassName='ranking'/> 
                    :
                    <RankingList data={data} isLoading={isLoading}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.ContainerBox>
    )
}

export default Ranking;