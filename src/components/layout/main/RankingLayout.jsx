import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import RankingList from 'components/ranking/RankingList';
import VideoState from 'components/state/VideoState';
import { lottieSrc, mainTitle } from 'cons';
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGameData } from 'scripts/api/ranking';

export default function RankingLayout () {
    const {
        data: ranking, 
        isLoading: rankingIsLoading, 
        isError: rankingIsError, 
        fetchNextPage: rankingFetchNextPage, 
        hasNextPage: rankingHasNextPage, 
        isFetchingNextPage: rankingFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["rankingLists"],
        queryFn: fetchGameData,
        initialPageParam: 1,
        staleTime: 1000 * 60 * 60 * 24, // 24시간
        gcTime: 1000 * 60 * 60 * 24 * 5, // 5일
        retry: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 0 ? undefined : allPages.length;
        }
    });

    console.log(ranking);

    return(
        <M.ContainerBox>
            <MainTitle 
                lottieName="rank"
                lottieSrc={lottieSrc.rank}
                title={mainTitle.rank}
                marginBottom="20px"
            />
            <M.MainInner name="ranking" minHeight="var(--main-scroll-height)">
                {rankingIsError && <VideoState type='error'/>}
                {
                    rankingIsLoading ? 
                    <VideoState type='loading' styleClassName='ranking'/> 
                    :
                    <RankingList 
                        ranking={ranking} 
                        rankingFetchNextPage={rankingFetchNextPage}
                        rankingHasNextPage={rankingHasNextPage}
                        rankingFetchingNextPage={rankingFetchingNextPage}
                    />
                }
            </M.MainInner>
        </M.ContainerBox>
    )
}