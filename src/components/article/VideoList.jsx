import ChzzkLive from 'components/article/ChzzkLive';
import RecentYoutube from 'components/article/RecentYoutube';
import RecommendYoutube from 'components/article/RecommendYotube';
import RecentNews from 'components/article/RecentNews';
import Ranking from 'components/article/Ranking';
import Season from 'components/article/Season';
import styled from "styled-components";
import { useState } from 'react';
import { useQueries } from '@tanstack/react-query';
import { fetchRanking } from 'scripts/api/ranking';
import { fetchRecentLists } from 'scripts/api/rssYoutube';
import { fetchVideoLists } from 'scripts/api/youtubeVideo';
import { fetchNews, fetchArticles } from 'scripts/api/news';
import { keyArray, getRandomKey } from 'data/recent';
import { videoIds } from 'data/recommend';

const Container = styled.section`
    display: flex;
    align-items: center;
    column-gap: 60px;
    margin-bottom: var(--section-gap);
    row-gap: 0;

    ${({ theme }) => theme.tablet`
        flex-direction: column;
        column-gap: 0;
        row-gap: var(--section-gap);
        margin-bottom: calc(var(--section-gap) - 103px);
    `};
`

const VideoList = () => {
    let [selectKey, setSelectKey] = useState(getRandomKey(keyArray));

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
                queryKey: ["youtubeRecentLists", selectKey],
                queryFn: () => fetchRecentLists(selectKey),
                staleTime: 1000 * 60 * 5, // 5분
                gcTime: 1000 * 60 * 10, // 10분
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
        { data: recent, isLoading: recentIsLoading, isError: recentIsError },
        { data: youtubeVideo, isLoading: youtubeVideoIsLoading, isError: youtubeVideoIsError },
        { data: newsData, isLoading: newsIsLoading, isError: newsIsError }
    ] = queryResults;
   
    return ( 
        <>
            <Container>
                <Ranking 
                    data={ranking} 
                    isLoading={rankingIsLoading} 
                    isError={rankingIsError}
                />
                <Season/>
            </Container>

            <ChzzkLive sectionName="chzzk"/>

            <RecentYoutube 
                data={recent}
                isLoading={recentIsLoading}
                isError={recentIsError}
                selectKey={selectKey}
                setSelectKey={setSelectKey}
                sectionName="recentYoutube"
            />
            <RecommendYoutube 
                data={youtubeVideo} 
                isLoading={youtubeVideoIsLoading} 
                isError={youtubeVideoIsError}  
                sectionName="recommendYoutube"
            />
            <RecentNews
                data={newsData}
                isLoading={newsIsLoading}
                isError={newsIsError}
                sectionName="recentNews"
            />
        </>
    );
}

export default VideoList;