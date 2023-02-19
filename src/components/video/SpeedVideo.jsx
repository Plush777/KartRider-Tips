import * as Exstyled from 'components/style/components/sub/ex.style';
import speedVideo from 'components/video/files/video-mode-speed.mp4';

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
                        <span className="hidden">닫기</span>
                    </Exstyled.Btn>
                </Exstyled.BtnArea>
                <Exstyled.VideoBox>
                        <Exstyled.Video poster='/images/thumbnail/img-speed-video-thumbnail.png'>
                            <source src={speedVideo} type='video/mp4'/>
                        </Exstyled.Video>
                    </Exstyled.VideoBox>
            </Exstyled.VideoBox>
        </Exstyled.VideoWrap>
     );
}

export default SpeedVideo;