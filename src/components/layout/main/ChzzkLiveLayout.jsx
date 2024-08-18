import ChzzkLiveList from 'components/live/ChzzkLiveList';
import VideoState from 'components/state/VideoState';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import * as M from 'style/components/main/Main.style';
import * as B from 'style/common/Button.style';
import * as Cz from 'style/components/main/ChzzkLive.style';
import { useInfiniteQuery } from "@tanstack/react-query";
import useImageTransition from 'hooks/useImageTransition';
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import SCrefresh from 'svg/ico-refresh.svg';
import MainTitle from 'components/title/MainTitle';
import { useState } from 'react';
import { fetchChzzkLiveLists } from 'scripts/api/chzzkLive';
import { format } from 'date-fns';
import { M500, Min768 } from 'components/config/MediaQuery';
import { lottieSrc, mainTitle, message } from 'const';

export default function ChzzkLiveLayout ({ sectionName }) {
    let [click, setClick] = useState(false);

    const clickMoreButton = () => {
        setClick(true);
    }

    const { 
        data: chzzk, 
        isLoading: chzzkLoading, 
        fetchNextPage: chzzkFetchNextPage, 
        hasNextPage: chzzkHasNextPage, 
        isFetchingNextPage: chzzkFetchingNextPage,
        isError: chzzkError,
        refetch: chzzkRefetch,
        isRefetching: chzzkRefetching,
        isFetched: chzzkFetched,
        dataUpdatedAt: chzzkUpdatedAt,
    } = useInfiniteQuery({
        queryKey: ["chzzkLists"],
        queryFn: fetchChzzkLiveLists,
        initialPageParam: 0,
        staleTime: 0,
        refetchInterval: 1000 * 60 * 5, // 5분
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 0 ? undefined : allPages.length;
        }
    });

    const { isShow } = useImageTransition(chzzkLoading, 300);

    // console.log(chzzk);

    const renderMoreButton = () => {
        if (chzzk) {
            if (chzzk.pages[0].length < 3) return;
            if (chzzkHasNextPage && !chzzkRefetching) {
                return (
                    <B.BtnWrap className={!chzzkLoading && !chzzkFetchingNextPage && isShow}>
                        <B.BtnArea styleProp={'outline'}>
                            <B.Button 
                                typeProp={'default'} 
                                hasProp={'icon'} 
                                type='button' 
                                onClick={
                                () => {
                                    chzzkFetchNextPage();
                                    clickMoreButton();
                                }
                            }>
                                <span>더보기</span>
                                <SCarrowDown width="20px" height="20px"/>
                            </B.Button>
                        </B.BtnArea>
                    </B.BtnWrap>
                )
            }
            
        }
    }

    const renderEmpty = () => {
        if (chzzk) {
            if (chzzk.pages[0].length === 0 && !chzzkRefetching) {
                return <VideoState type='empty' emptyText={message.empty}/>
            }
        }
    }

    const renderLiveList = () => {
        if (chzzkLoading || chzzkRefetching) {
            return <VideoState type='loading'/>
        } 

        if (chzzk) {
            if (!chzzkLoading || !chzzkRefetching && chzzk.pages[0].length > 0) {
                return <ChzzkLiveList data={chzzk} loading={chzzkLoading}/>
            }
        }
    }

    const disabledCondition = chzzkLoading || chzzkError || chzzk && chzzk.pages[0].length === 0 ? true : false;
    const formattedUpdatedAt = format(new Date(chzzkUpdatedAt),'yyyy-MM-dd HH:mm:ss');
    const noDataCondition = click == true && chzzk && !chzzkHasNextPage;
   
    return(
        <M.MainComponentBox data-section-name={sectionName}>
            <MainTitle 
                lottieName="live"
                lottieSrc={lottieSrc.live}
                title={mainTitle.live}
                marginBottom="20px"
                right={
                    <Cz.RightGroup>
                        {chzzkFetched && <Cz.LastUpdate>{`마지막 업데이트: ${formattedUpdatedAt}`}</Cz.LastUpdate>}
                        <Cz.RefetchButton 
                            type="button" 
                            disabled={disabledCondition} 
                            onClick={chzzkRefetch}>
                            <SCrefresh width="30px" height="30px" fill="var(--text1)"/>
                            <Min768>
                                <span className="hidden">새로고침</span> 
                            </Min768>
                            <M500>
                                <span>새로고침</span>
                            </M500>
                        </Cz.RefetchButton>
                    </Cz.RightGroup>
                }
            />
           
            <M.MainInner minHeight="var(--mainHeightDefault)">
                {chzzkError && <VideoState type='error'/>}
               
                {renderLiveList()}

                {chzzkFetchingNextPage && <LoadingSpinner/>}

                {renderEmpty()}

                {noDataCondition && <Cz.LoadText>{message.noData}</Cz.LoadText>}

                {renderMoreButton()}
            </M.MainInner>
        </M.MainComponentBox>
    )
}