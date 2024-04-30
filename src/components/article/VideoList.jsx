import ChzzkLive from 'components/article/ChzzkLive';
import RecentYoutube from 'components/article/RecentYoutube';
import RecommendYoutube from 'components/article/RecommendYotube';
import RecentNews from 'components/article/RecentNews';
import Ranking from 'components/article/Ranking';
import Season from 'components/article/Season';
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    align-items: center;
    column-gap: 60px;
    margin-bottom: var(--section-gap);
    row-gap: 0;

    ${({ theme }) => theme.tablet`
        flex-direction: column;
        column-gap: 0;
        row-gap: var(--section-gap);
        margin-bottom: calc(var(--section-gap) - 103px);
    `};
`

const VideoList = () => {
    return ( 
        <>
            <Container>
                <Ranking/>
                <Season/>
            </Container>
            <ChzzkLive sectionName="chzzk"/>
            <RecentYoutube sectionName="recentYoutube"/>
            <RecommendYoutube sectionName="recommendYoutube"/>
            <RecentNews sectionName="recentNews"/>
        </>
    );
}

export default VideoList;