import * as Mainstyled from 'components/style/common/Area.style';
import '@dotlottie/player-component';
import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import { decode } from 'html-entities';

const RecommendYoutubeList = ({ data, isLoading }) => {
    const videoList = data && data.map(item => {
        const snippet = item[0].snippet;
        const id = item[0].id;
        const dateSlice = snippet.publishedAt.slice(0,10); 

        return {
            snippet,
            dateSlice,
            id
        }
    });

    const { isShow } = useImageTransition(isLoading, 1);

    return(
        <Mainstyled.MainComponentGroup display="grid" gtc="repeat(3, 1fr)" rg="60px">
            {data && videoList.map((item,index) => {
                const snippet = item.snippet;
                const dateSlice = item.dateSlice; 
                const id = item.id;

                return(
                    <Mainstyled.MainComponentItem key={index}>
                        <Mainstyled.MainComponentLink className={isShow}
                        href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                            <Mainstyled.MainComponentThumbnail>
                                <Image priority="high" width={409} height={230} src={snippet.thumbnails.high.url} alt={snippet.title}/>
                            </Mainstyled.MainComponentThumbnail>

                            <Mainstyled.MainComponentHead>
                                <Mainstyled.MainComponentHeadTitle>{decode(snippet.title)}</Mainstyled.MainComponentHeadTitle>
                            </Mainstyled.MainComponentHead>

                            <Mainstyled.MainComponentBottom>
                                <Mainstyled.MainComponentBottomDescription>By&nbsp;{snippet.channelTitle}</Mainstyled.MainComponentBottomDescription>
                                <Mainstyled.MainComponentBottomDescription as="time">{dateSlice}</Mainstyled.MainComponentBottomDescription>
                            </Mainstyled.MainComponentBottom>
                        </Mainstyled.MainComponentLink>
                    </Mainstyled.MainComponentItem>
                )
            })}
        </Mainstyled.MainComponentGroup>
    )
}

export default RecommendYoutubeList;