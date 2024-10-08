import RecommendYoutubeList from 'components/recommend/RecommendYoutubeList';
import VideoState from 'components/state/VideoState';
import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import { lottieSrc, mainTitle } from 'const';
import CardSkeleton from 'components/layout/skeleton/Card';

export default function RecommendLayout ({ sectionName, data, isLoading, isError }) {
    const sortedVideo = data && data.sort((a,b) => {
        return new Date(b[0].snippet.publishedAt) - new Date(a[0].snippet.publishedAt);
    });
 
    return(
        <M.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="fire"
                lottieSrc={lottieSrc.recommend}
                title={mainTitle.recommend}
                marginBottom="20px"
            />
            
            <M.MainInner name="recommend">
                {isError && <VideoState type='error'/>}
                
                {
                    isLoading ? 
                    <CardSkeleton length={6}/>
                    : 
                    <RecommendYoutubeList data={sortedVideo} isLoading={isLoading}/>
                }
            </M.MainInner>
        </M.MainComponentBox>
    )
}