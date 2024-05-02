import RecommendYoutubeList from 'components/article/RecommendYoutubeList';
import VideoState from 'components/article/VideoState';
import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';

const RecommendYoutube = ({ sectionName, data, isLoading, isError }) => {
    const sortedVideo = data && data.sort((a,b) => {
        return new Date(b[0].snippet.publishedAt) - new Date(a[0].snippet.publishedAt);
    });
 
    return(
        <Mainstyled.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="fire"
                lottieSrc="https://lottie.host/862b671f-196b-44e4-8938-d84207e24c95/Kqu1b4vslr.lottie"
                title="KARTRIDER TIPS의 추천 영상들을 만나보세요"
                marginBottom="20px"
            />
            
            <Mainstyled.MainInner minHeight="var(--mainHeightWide)">
                {isError && <VideoState type='error'/>}
                
                {
                    isLoading ? 
                    <VideoState type='loading'/> 
                    : 
                    <RecommendYoutubeList data={sortedVideo} isLoading={isLoading}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default RecommendYoutube;