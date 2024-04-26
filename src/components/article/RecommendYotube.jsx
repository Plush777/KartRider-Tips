import RecommendYoutubeList from 'components/article/RecommendYoutubeList';
import VideoState from 'components/article/VideoState';
import * as Mainstyled from 'components/style/common/Area.style';
import { useQuery } from "@tanstack/react-query";
import MainTitle from 'components/article/MainTitle';
import { fetchVideoLists } from 'scripts/api/youtubeVideo';

const RecommendYoutube = () => {
    const videoIds = [
        'Noi6KtdyZOQ&t=5s',
        'KX5dAdwy1Xg&t=1s',
        'l3Zz5vDik3E',
        'WcM4R22Z7lE&t=2s',
        'Dw0hqjbV0W4&t=3s',
        'P2211wKunWc&t=51s'
    ];

    const { 
        data: youtubeVideo, 
        isLoading: youtubeVideoLoading,
        isError: youtubeVideoError
     } = useQuery({
        queryKey: ["youtubeVideoLists"],
        queryFn: () => fetchVideoLists(videoIds)
    });

    const sortedVideo = youtubeVideo && youtubeVideo.sort((a,b) => {
        return new Date(b[0].snippet.publishedAt) - new Date(a[0].snippet.publishedAt);
    });
 
    return(
        <Mainstyled.MainComponentBox>
            <MainTitle
                lottieName="fire"
                lottieSrc="https://lottie.host/862b671f-196b-44e4-8938-d84207e24c95/Kqu1b4vslr.lottie"
                title="KARTRIDER TIPS의 추천 영상들을 만나보세요"
                marginBottom="20px"
            />
            
            <Mainstyled.MainInner minHeight="var(--mainHeightWide)">
                {youtubeVideoError && <VideoState type='error'/>}
                
                {
                    youtubeVideoLoading ? 
                    <VideoState type='loading'/> 
                    : 
                    <RecommendYoutubeList data={sortedVideo} loading={youtubeVideoLoading}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default RecommendYoutube;