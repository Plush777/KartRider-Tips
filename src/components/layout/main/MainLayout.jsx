import ChzzkLiveLayout from 'components/layout/main/ChzzkLiveLayout'; 
import RecentYoutubeLayout from 'components/layout/main/RecentYoutubeLayout';
import RecommendLayout from 'components/layout/main/RecommendLayout';
import RecentNewsLayout from 'components/layout/main/RecentNewsLayout';
import RankingLayout from 'components/layout/main/RankingLayout';
import SeasonLayout from 'components/layout/main/SeasonLayout';
import styled from "styled-components";
import { useQueries } from '@tanstack/react-query';
import { fetchRanking } from 'scripts/api/ranking';
import { fetchVideoLists } from 'scripts/api/youtubeVideo';
import { fetchNews, fetchArticles } from 'scripts/api/news';
import { videoIds } from 'data/recommend';

const Container = styled.section`
    display: flex;
    column-gap: 60px;
    margin-bottom: var(--section-gap);
    row-gap: 0;

    ${({ theme }) => theme.tablet`
        flex-direction: column;
        column-gap: 0;
        row-gap: var(--section-gap);
        margin-bottom: calc(var(--section-gap) / 2 + 20px);
    `};

    ${({ theme }) => theme.mobile`
        row-gap: calc(var(--section-gap) / 2 + 20px);
    `};

    ${({ theme }) => theme.small`
        margin-bottom: calc(var(--section-gap) / 2);
        row-gap: calc(var(--section-gap) / 2);
    `};
`

export default function MainLayout() {
    const queryResults = useQueries({
        queries: [
            {
                queryKey: ["rankingLists"],
                queryFn: fetchRanking,
                staleTime: 1000 * 60 * 60 * 24, // 24시간
                gcTime: 1000 * 60 * 60 * 24 * 5, // 5일
                retry: 1
            },
            {
                queryKey: ["youtubeVideoLists"],
                queryFn: () => fetchVideoLists(videoIds),
                staleTime: Infinity,
                gcTime: Infinity,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                retry: 1
            },
            { 
                queryKey: ["newsLists"],
                queryFn: async () => {
                    const news = await fetchNews();
                    const devArticles = await fetchArticles('/krtp/article/dev',0,4);
                    const updateArticles = await fetchArticles('/krtp/article/update',0,4);
    
                    return {
                        news,
                        devArticles,
                        updateArticles
                    }
                },
                staleTime: 1000 * 60 * 10, // 10분
                gcTime: 1000 * 60 * 20, // 20분
            }
        ]
    });

    const [
        { data: ranking, isLoading: rankingIsLoading, isError: rankingIsError },
        { data: youtubeVideo, isLoading: youtubeVideoIsLoading, isError: youtubeVideoIsError },
        { data: newsData, isLoading: newsIsLoading, isError: newsIsError }
    ] = queryResults;
   
    return ( 
        <>
            <Container>
                <RankingLayout 
                    data={ranking} 
                    isLoading={rankingIsLoading} 
                    isError={rankingIsError}
                />
                <SeasonLayout/>
            </Container>

            <ChzzkLiveLayout sectionName="chzzk"/>

            <RecentYoutubeLayout sectionName="recentYoutube"/>

            <RecommendLayout
                data={youtubeVideo} 
                isLoading={youtubeVideoIsLoading} 
                isError={youtubeVideoIsError}  
                sectionName="recommendYoutube"
            />

            <RecentNewsLayout
                data={newsData}
                isLoading={newsIsLoading}
                isError={newsIsError}
                sectionName="recentNews"
            />
        </>
    );
}