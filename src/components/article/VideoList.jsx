'use client';

import useYoutubeVideos from 'hooks/useYoutubeVideos';
import useGetNews from 'hooks/useGetNews';
import useRssYoutube from 'hooks/useRssYoutube';
import useWindowScroll from 'hooks/useWindowScroll';
import * as Videostyled from 'components/style/layout/VideoList.style';
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";
import thinkingLottie from 'lottie/thinking.json';
import fireLottie from 'lottie/fire.json';
import newsLottie from 'lottie/news.json';
import parse from 'html-react-parser';
import Select from 'components/mobile/Select';
import VideoState from 'components/article/VideoState';
import { useEffect } from 'react';
import { M768 } from 'components/style/mobile/MediaQuery';

const VideoList = () => {
    const { videos, videoError, videoIsLoading, fetchVideos } = useYoutubeVideos();
    const { items, date, title, newsIsLoading , newsError, fetchNews } = useGetNews();
    const { rssItems, rssIsLoading, dateOnlyArray, rssError, fetchData } = useRssYoutube();
    const { handleScroll } = useWindowScroll();
    const { t } = useTranslation();

    const videoList = videos.map(item => {
        const snippet = item[0].snippet;
        const id = item[0].id;
        const dateSlice = snippet.publishedAt.slice(0,10); 
        
        return {
            snippet,
            dateSlice,
            id
        }
    });

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    useEffect(() => {
        handleScroll(); 
    }, []);

    return ( 
        <>
            <Videostyled.Box>
                <Videostyled.Title>
                    <Videostyled.TitleBox>
                        <div className='lottieWrapper thinking'>
                            <Lottie animationData={thinkingLottie}/>
                        </div>
                        <span className='text'>{t(`video.group1.txt1`)}</span>
                    </Videostyled.TitleBox>
                    
                    <Select type="pc" width="190px" height="36px" padding="0 12px" border="1px solid var(--mobileSelectStroke)"
                    radius="4px" color="var(--mobileSelectText)" fontSize="0.875rem"/>
                </Videostyled.Title>
                {rssError && <VideoState type='error'/>}
                
                {rssIsLoading ? 
                    <VideoState type="loading"/>
                    : 
                    <Videostyled.Group display="flex">
                        {rssItems.map((item,index) => {
                            return(
                                <Videostyled.Item key={index} flex="1">
                                    <Videostyled.Link href={item.link} target="_blank" rel="noopener noreferrer">
                                        <Videostyled.Thumbnail>
                                            <Videostyled.Img src={item.thumbnail} alt={item.title} aspectRatio="5.339/3"/>
                                        </Videostyled.Thumbnail>

                                        <Videostyled.Head>
                                            <Videostyled.HeadTitle>{item.title}</Videostyled.HeadTitle>
                                        </Videostyled.Head>

                                        <Videostyled.Bottom>
                                            <Videostyled.BottomDescription>By&nbsp;{item.author}</Videostyled.BottomDescription>
                                            <Videostyled.BottomDescription>{dateOnlyArray[index]}</Videostyled.BottomDescription>
                                        </Videostyled.Bottom>
                                    </Videostyled.Link>
                                </Videostyled.Item>
                            )
                        })}
                    </Videostyled.Group>
                }
            </Videostyled.Box>

            <Videostyled.Box>
                <Videostyled.Title>
                    <Videostyled.TitleBox>
                        <div className='lottieWrapper fire'>
                            <Lottie animationData={fireLottie}/>
                        </div>
                        <span className='text'>{t(`video.group1.txt2`)}</span>
                    </Videostyled.TitleBox>
                </Videostyled.Title>

                <Videostyled.Group display="grid" gtc="repeat(3, 1fr)" rg="60px" as={videoError ? 'div' : 'ul'}>
                    {videoError && <VideoState type='error' padding="17.903% 0"/>}

                    {videoIsLoading ?
                        <VideoState type='loading' padding="17.903% 0"/>
                        :
                        <>
                            {videoList.map((item,index) => {
                                const snippet = item.snippet;
                                const dateSlice = item.dateSlice; 
                                const id = item.id;

                                return(
                                    <Videostyled.Item key={index}>
                                        <Videostyled.Link href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                                            <Videostyled.Thumbnail>
                                                <Videostyled.Img src={snippet.thumbnails.high.url} alt={snippet.title} aspectRatio="5.339/3"/>
                                            </Videostyled.Thumbnail>

                                            <Videostyled.Head>
                                                <Videostyled.HeadTitle>{snippet.title}</Videostyled.HeadTitle>
                                            </Videostyled.Head>

                                            <Videostyled.Bottom>
                                                <Videostyled.BottomDescription>By&nbsp;{snippet.channelTitle}</Videostyled.BottomDescription>
                                                <Videostyled.BottomDescription>{dateSlice}</Videostyled.BottomDescription>
                                            </Videostyled.Bottom>
                                        </Videostyled.Link>
                                    </Videostyled.Item>
                                )
                            })}
                        </>
                    }
                </Videostyled.Group>
            </Videostyled.Box>

            <Videostyled.Box>
                <Videostyled.Title>
                    <Videostyled.TitleBox>
                        <div className='lottieWrapper news'>
                            <Lottie animationData={newsLottie}/>
                        </div>
                        <span className='text'>{t(`video.group1.txt3`)}</span>
                    </Videostyled.TitleBox>
                </Videostyled.Title>

                <Videostyled.ArticleWrap>
                    <Videostyled.ArticleList as={newsError ? 'div' : 'ul'}>

                        {newsError && <VideoState type='error' padding="12.54% 0"/>}

                        {newsIsLoading ?
                            <VideoState type='loading' padding="12.54% 0"/>
                            :
                            <>  
                                {items.map((item,index) => {
                                    return(
                                        <li key={index}>
                                            <Videostyled.ArticleLink href={item.link} target='_blank' rel="noopener noreferrer">
                                                <Videostyled.nameDivision>
                                                    <Videostyled.InnerDivision>
                                                        <Videostyled.ArticleCategory>News</Videostyled.ArticleCategory>
                                                        <M768>
                                                            <Videostyled.ArticleDate>{date[index]}</Videostyled.ArticleDate>
                                                        </M768>
                                                    </Videostyled.InnerDivision>
                                                    
                                                    <div className="eps type01">
                                                        <Videostyled.ArticleTitle>{parse(title[index])}</Videostyled.ArticleTitle>
                                                    </div>
                                                </Videostyled.nameDivision>
                                                
                                                <Videostyled.ArticleDate mobileDisplay>{date[index]}</Videostyled.ArticleDate>
                                            </Videostyled.ArticleLink>
                                        </li>
                                    )
                                })}
                            </>
                        }
                    </Videostyled.ArticleList>
                </Videostyled.ArticleWrap>
            </Videostyled.Box>
        </>
    );
}

export default VideoList;