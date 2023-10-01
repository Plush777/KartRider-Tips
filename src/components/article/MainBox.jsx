'use client';

import * as MainBoxstyled from 'components/style/components/main/MainBox.style';
import VideoList from 'components/article/VideoList';

const MainBox = () => {
    return (  
        <MainBoxstyled.ContentWrap>
            <MainBoxstyled.MainBoxWrap>
                <VideoList />
            </MainBoxstyled.MainBoxWrap>    
        </MainBoxstyled.ContentWrap>
    );
}

export default MainBox;