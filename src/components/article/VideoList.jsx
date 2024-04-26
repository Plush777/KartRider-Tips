import ChzzkLive from 'components/article/ChzzkLive';
import RecentYoutube from 'components/article/RecentYoutube';
import RecommendYoutube from 'components/article/RecommendYotube';
import RecentNews from 'components/article/RecentNews';
import Ranking from 'components/article/Ranking';
import Season from 'components/article/Season';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    column-gap: 60px;
    margin-bottom: 150px;
`

const VideoList = () => {
    return ( 
        <>
            <Container>
                <Ranking/>
                <Season/>
            </Container>
            <ChzzkLive/>
            <RecentYoutube/>
            <RecommendYoutube/>
            <RecentNews/>
        </>
    );
}

export default VideoList;