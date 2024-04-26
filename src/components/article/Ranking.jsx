import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';
import RankingList from 'components/article/RankingList';
import VideoState from 'components/article/VideoState';
import { fetchRanking } from 'scripts/api/ranking';
import { useQuery } from "@tanstack/react-query";
import styled, { css } from "styled-components";

const RankDescription = styled.p`
    margin-top: auto;
    font-size: .8125rem;
    color: var(--videoDesc);
    white-space: nowrap;
`

const Ranking = () => {
    const { 
        data: ranking, 
        isLoading: rankingLoading, 
        isError: rankingError
    } = useQuery({
        queryKey: ["rankingLists"],
        queryFn: fetchRanking,
    });

    // console.log(ranking);

    return(
        <Mainstyled.ContainerBox>
            <MainTitle 
                lottieName="rank"
                lottieSrc="https://lottie.host/12db531d-fd6b-4862-bfff-1bb67edaa450/c2R4fIsZlR.lottie"
                title="현재 우리 게임 순위는?"
                marginBottom="20px"
                right={<RankDescription>출처: 게임메카</RankDescription>}
            />
           
            <Mainstyled.MainInner container="both" minHeight="var(--mainHeightDefault)">
                {rankingError && <VideoState type='error' styleClassName='item3'/>}

                {
                    rankingLoading ? 
                    <VideoState type='loading' styleClassName='item3'/> 
                    :
                    <RankingList data={ranking} loading={rankingLoading}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.ContainerBox>
    )
}

export default Ranking;