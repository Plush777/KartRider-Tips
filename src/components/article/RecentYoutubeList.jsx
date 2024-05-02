"use client";

import * as Mainstyled from 'components/style/common/Area.style';
import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import { decode } from 'html-entities';

const RecentYoutubeList = ({ data, isLoading }) => {
    const recentList = data && data.slice(0, 3);
    const apiDate = data && recentList.map((item) => (item.pubDate));
    /*
        Cannot read property 'split' of undefined
        => https://okky.kr/questions/876611
    */
    const dateOnlyArray = data && apiDate.map(dateString => {
        const dateParts = (dateString || "").split(" ");
        return dateParts[0]; // 날짜 부분만 추출
    });
    const { isShow } = useImageTransition(isLoading, 1);

    return(
        <Mainstyled.MainComponentGroup display="flex">
            {data && recentList.map((list, index) => {
                return(
                    <Mainstyled.MainComponentItem key={index}>
                        <Mainstyled.MainComponentLink className={isShow} href={list.link} target="_blank" rel="noopener noreferrer">
                            <Mainstyled.MainComponentThumbnail>
                                <Image priority="high" width={409} height={230} src={list.thumbnail} alt={list.title}/>
                            </Mainstyled.MainComponentThumbnail>

                            <Mainstyled.MainComponentHead>
                                <Mainstyled.MainComponentHeadTitle>{decode(list.title)}</Mainstyled.MainComponentHeadTitle>
                            </Mainstyled.MainComponentHead>

                            <Mainstyled.MainComponentBottom>
                                <Mainstyled.MainComponentBottomDescription>By&nbsp;{list.author}</Mainstyled.MainComponentBottomDescription>
                                <Mainstyled.MainComponentBottomDescription as="time">{dateOnlyArray[index]}</Mainstyled.MainComponentBottomDescription>
                            </Mainstyled.MainComponentBottom>
                        </Mainstyled.MainComponentLink>
                    </Mainstyled.MainComponentItem>
                )
            })}
        </Mainstyled.MainComponentGroup>
    )
}

export default RecentYoutubeList