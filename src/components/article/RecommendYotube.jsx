import RecommendYoutubeList from 'components/article/RecommendYoutubeList';
import VideoState from 'components/article/VideoState';
import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';
import { lottieSrc, mainTitle } from 'const';

const RecommendYoutube = ({ sectionName, data, isLoading, isError }) => {
    const sortedVideo = data && data.sort((a,b) => {
        return new Date(b[0].snippet.publishedAt) - new Date(a[0].snippet.publishedAt);
    });
 
    return(
        <Mainstyled.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="fire"
                lottieSrc={lottieSrc.recommend}
                title={mainTitle.recommend}
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