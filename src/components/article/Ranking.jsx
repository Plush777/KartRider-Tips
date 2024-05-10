import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';
import RankingList from 'components/article/RankingList';
import VideoState from 'components/article/VideoState';

const Ranking = ({ data, isLoading, isError }) => {
    return(
        <Mainstyled.ContainerBox>
            <MainTitle 
                lottieName="rank"
                lottieSrc="https://lottie.host/12db531d-fd6b-4862-bfff-1bb67edaa450/c2R4fIsZlR.lottie"
                title="현재 우리 게임 순위는?"
                marginBottom="20px"
            />
           
            <Mainstyled.MainInner name="ranking" minHeight="var(--mainHeightDefault)">
                {isError && <VideoState type='error' styleClassName='item3'/>}
                {
                    isLoading ? 
                    <VideoState type='loading' styleClassName='item3'/> 
                    :
                    <RankingList data={data} isLoading={isLoading}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.ContainerBox>
    )
}

export default Ranking;