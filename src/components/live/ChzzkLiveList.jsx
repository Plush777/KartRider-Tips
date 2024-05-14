"use client";

import * as Mainstyled from 'components/style/common/Area.style';
import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import VideoInfo from 'components/video/VideoInfo';
import Adult from 'components/live/Adult';
import { decode } from 'html-entities';

export default function ChzzkLiveList ({ data, loading }) {
    const { isShow } = useImageTransition(loading, 1);
    const baseLink = 'https://chzzk.naver.com/live/';

    return(
        <Mainstyled.MainComponentGroup display="grid" gtc="repeat(3, 1fr)" rg="60px">
            {data && data.pages.map((pageItem) => {
                return pageItem.map((element, elementIndex) => {

                    const { channelId, channelName } = element.channel;
                    let { liveTitle, liveImageUrl, openDate } = element.live;
                    const liveLink = `${baseLink}${channelId}`;

                    liveImageUrl = liveImageUrl?.replace('{type}', '1080');

                    return(
                        <Mainstyled.MainComponentItem key={elementIndex}>
                            <Mainstyled.MainComponentLink className={isShow} href={liveLink} target="_blank" rel="noopener noreferrer">
                                <Mainstyled.MainComponentThumbnailWrapper>
                                    <VideoInfo/>
                                    <Mainstyled.MainComponentThumbnail>
                                        {
                                            liveImageUrl ?
                                            <Image priority="high" src={liveImageUrl} alt={liveTitle} width={409} height={230}/>
                                            :
                                            <Adult/>
                                        }
                                    </Mainstyled.MainComponentThumbnail>    
                                </Mainstyled.MainComponentThumbnailWrapper>
    
                                <Mainstyled.MainComponentHead>
                                    <Mainstyled.MainComponentHeadTitle>{decode(liveTitle)}</Mainstyled.MainComponentHeadTitle>
                                </Mainstyled.MainComponentHead>
    
                                <Mainstyled.MainComponentBottom>
                                    <Mainstyled.MainComponentBottomDescription>By&nbsp;{channelName}</Mainstyled.MainComponentBottomDescription>
                                    <Mainstyled.MainComponentBottomDescription as="time">{openDate}</Mainstyled.MainComponentBottomDescription>
                                </Mainstyled.MainComponentBottom>
                            </Mainstyled.MainComponentLink>
                        </Mainstyled.MainComponentItem>
                    )
                })
            })}
        </Mainstyled.MainComponentGroup>
    )
}