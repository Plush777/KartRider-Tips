import * as MainBoxstyled from 'components/style/components/main/MainBox.style';
import VideoList from 'components/article/VideoList';

const MainBox = ({ themeMode }) => {
    return (  
        <MainBoxstyled.ContentWrap>
            <MainBoxstyled.MainBoxWrap>
                <VideoList themeMode={themeMode}/>
            </MainBoxstyled.MainBoxWrap>    
        </MainBoxstyled.ContentWrap>
    );
}

export default MainBox;