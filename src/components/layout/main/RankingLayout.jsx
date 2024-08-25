import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import RankingList from 'components/ranking/RankingList';
import VideoState from 'components/state/VideoState';
import RankingSkeleton from "components/layout/skeleton/Ranking";
import { lottieSrc, mainTitle } from 'const';
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGameData, fetchGameImages } from 'scripts/api/ranking';

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
        staleTime: 900000, // 15분
        gcTime: 1800000, // 30분
        getNextPageParam: (lastPage, pages) => {
            console.log(lastPage.nextCursor);
            return lastPage.nextCursor;
        },
    });

    const {
        data: images, 
        isError: imagesIsError, 
        fetchNextPage: imagesFetchNextPage, 
    } = useInfiniteQuery({
        queryKey: ["imagesLists"],
        queryFn: fetchGameImages,
        initialPageParam: 1,
        staleTime: 24 * 60 * 60 * 1000, // 24시간
        cacheTime: 7 * 24 * 60 * 60 * 1000, // 7일
        getNextPageParam: (lastPage, pages) => {
            console.log(lastPage.nextCursor);
            return lastPage.nextCursor;
        },
        enabled: !!ranking
    });

    // console.log(ranking);
    console.log(images);

    const renderRankLingList = () => {
        if (rankingIsLoading && !rankingIsError) return <RankingSkeleton />;
        if (rankingIsError) return <VideoState type='error'/>;
        if (!rankingIsLoading && !rankingIsError) return (
            <RankingList 
                ranking={ranking} 
                rankingFetchNextPage={rankingFetchNextPage}
                rankingHasNextPage={rankingHasNextPage}
                rankingFetchingNextPage={rankingFetchingNextPage}
                images={images}
                imagesFetchNextPage={imagesFetchNextPage}
                imageIsError={imagesIsError}
            />
        )
    }

    return(
        <M.ContainerBox>
            <MainTitle 
                lottieName="rank"
                lottieSrc={lottieSrc.rank}
                title={mainTitle.rank}
                marginBottom="20px"
            />
            <M.MainInner name="ranking">
                {renderRankLingList()}
            </M.MainInner>
        </M.ContainerBox>
    )
}