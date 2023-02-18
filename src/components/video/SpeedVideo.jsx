import * as Exstyled from 'components/style/components/sub/ex.style';

const SpeedVideo = props => {
    const exHide = () => {
        props.setIsExShow(false);
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
                        <Exstyled.Video>
                            <source src='/video/video-mode-speed.mp4' type='video/mp4'/>
                        </Exstyled.Video>
                    </Exstyled.VideoBox>
            </Exstyled.VideoBox>
        </Exstyled.VideoWrap>
     );
}

export default SpeedVideo;