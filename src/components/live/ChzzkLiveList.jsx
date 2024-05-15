"use client";

import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import VideoInfo from 'components/video/VideoInfo';
import Adult from 'components/live/Adult';
import { decode } from 'html-entities';
import * as Tit from 'style/title/Title.style';
import * as C from 'style/main/Card.style';

export default function ChzzkLiveList ({ data, loading }) {
    const { isShow } = useImageTransition(loading, 1);
    const baseLink = 'https://chzzk.naver.com/live/';

    return(
        <C.Group display="grid" gtc="repeat(3, 1fr)" rg="60px">
            {data && data.pages.map((pageItem) => {
                return pageItem.map((element, elementIndex) => {

                    const { channelId, channelName } = element.channel;
                    let { liveTitle, liveImageUrl, openDate } = element.live;
                    const liveLink = `${baseLink}${channelId}`;

                    liveImageUrl = liveImageUrl?.replace('{type}', '1080');

                    return(
                        <C.Item key={elementIndex}>
                            <C.Link className={isShow} href={liveLink} target="_blank" rel="noopener noreferrer">
                                <C.ThumbnailWrapper>
                                    <VideoInfo/>
                                    <C.Thumbnail>
                                        {
                                            liveImageUrl ?
                                            <Image priority="high" src={liveImageUrl} alt={liveTitle} width={409} height={230}/>
                                            :
                                            <Adult/>
                                        }
                                    </C.Thumbnail>    
                                </C.ThumbnailWrapper>
    
                                <C.Head>
                                    <Tit.HeadTitle>{decode(liveTitle)}</Tit.HeadTitle>
                                </C.Head>
    
                                <C.Bottom>
                                    <C.BottomDescription>By&nbsp;{channelName}</C.BottomDescription>
                                    <C.BottomDescription as="time">{openDate}</C.BottomDescription>
                                </C.Bottom>
                            </C.Link>
                        </C.Item>
                    )
                })
            })}
        </C.Group>
    )
}