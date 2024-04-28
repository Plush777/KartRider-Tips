import ChzzkLiveList from 'components/article/ChzzkLiveList';
import VideoState from 'components/article/VideoState';
import LoadingSpinner from 'components/article/LoadingSpinner';
import * as Mainstyled from 'components/style/common/Area.style';
import * as Buttonstyled from 'components/style/common/Button.style';
import { useInfiniteQuery } from "@tanstack/react-query";
import useImageTransition from 'hooks/useImageTransition';
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import SCrefresh from 'svg/ico-refresh.svg';
import MainTitle from 'components/article/MainTitle';
import { useState } from 'react';
import { fetchChzzkLiveLists } from 'scripts/api/chzzkLive';
import styled from 'styled-components';

const Refetch = styled.button`
    display: flex;
    margin-top: auto;
    transition: .3s ease-in-out;

    &[disabled]{
        opacity: 0.6;
        pointer-events: none;
    }
`

const ChzzkLive = () => {
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
    } = useInfiniteQuery({
        queryKey: ["chzzkLists"],
        queryFn: fetchChzzkLiveLists,
        initialPageParam: 0,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
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
                    <Buttonstyled.BtnWrap className={!chzzkLoading && !chzzkFetchingNextPage && isShow}>
                        <Buttonstyled.BtnArea outline>
                            <Buttonstyled.Button hasIcon type='button' minWidth="100px" onClick={
                                () => {
                                    chzzkFetchNextPage();
                                    clickMoreButton();
                                }
                            }>
                                <span>더보기</span>
                                <SCarrowDown width="20px" height="20px"/>
                            </Buttonstyled.Button>
                        </Buttonstyled.BtnArea>
                    </Buttonstyled.BtnWrap>
                )
            }
            
        }
    }

    const renderEmpty = () => {
        if (chzzk) {
            if (chzzk.pages[0].length === 0 && !chzzkRefetching) {
                return <VideoState type='empty' emptyText="이런, 라이브 중인 스트리머가 없네요!"/>
            }
        }
    }

    return(
        <Mainstyled.MainComponentBox>
            <MainTitle 
                lottieName="live"
                lottieSrc="https://lottie.host/27768715-a656-4bae-bc76-e4d7ac8c4992/sYc0G5Y6ST.lottie"
                title="치지직에서 지금 라이브중!"
                marginBottom="20px"
                right={
                    <Refetch type="button" disabled={chzzkRefetching ? true : false} onClick={chzzkRefetch}>
                        <SCrefresh width="30px" height="30px" fill="var(--text1)"/>
                        <span className="hidden">새로고침</span>
                    </Refetch>
                }
            />
           
            <Mainstyled.MainInner minHeight="var(--mainHeightDefault)">
                {chzzkError && <VideoState type='error' styleClassName='item3'/>}
                
                {
                    chzzkLoading || chzzkRefetching ?
                    <VideoState type='loading' styleClassName='item3'/>
                    :
                    <ChzzkLiveList data={chzzk} loading={chzzkLoading}/>
                }

                {chzzkFetchingNextPage && <LoadingSpinner/>}

                {renderEmpty()}

                {click == true && chzzk && !chzzkHasNextPage && <Mainstyled.LoadText>더 이상 데이터가 없어요.</Mainstyled.LoadText>}

                {renderMoreButton()}
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default ChzzkLive;