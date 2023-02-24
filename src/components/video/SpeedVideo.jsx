import * as Exstyled from 'components/style/components/sub/ex.style';
import speedVideo from 'components/video/files/video-mode-speed.mp4';
import { ReactComponent as SCclose } from 'static/svg/ico-close.svg';

const SpeedVideo = props => {
    const exHide = () => {
        props.setIsExShow(false);
        props.openScroll();
    }

    return ( 
        <Exstyled.VideoWrap>
            <Exstyled.VideoBox>
                <Exstyled.BtnArea>
                    <Exstyled.Btn onClick={exHide}>
                        <SCclose width="40px" height="40px"/>
                        <span className="hidden">닫기</span>
                    </Exstyled.Btn>
                </Exstyled.BtnArea>
                <Exstyled.VideoDiv>
                        <Exstyled.Video poster='/images/thumbnail/img-speed-video-thumbnail.png'>
                            <source src={speedVideo} type='video/mp4'/>
                        </Exstyled.Video>
                    </Exstyled.VideoDiv>
            </Exstyled.VideoBox>
        </Exstyled.VideoWrap>
     );
}

export default SpeedVideo;