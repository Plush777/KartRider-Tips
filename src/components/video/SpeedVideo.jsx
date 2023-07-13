import * as Exstyled from 'components/style/components/sub/ex.style';
import useOnClickOutside from 'hooks/useOnClickOutside';
import SCclose from 'svg/ico-close.svg';
import { useRef , useEffect } from 'react';
import * as Substyled from 'components/style/common/Area.style';
import { useSelector , useDispatch } from 'react-redux';
import { setOutside } from 'redux/store/store';

const SpeedVideo = ({ setIsExShow , openScroll }) => {

    const dispatch = useDispatch();
    const ref = useRef();
    let outsideData = useSelector(state => state.outside);

    const exHide = () => {
        setIsExShow(false);
        openScroll();
    }

    useEffect(() => {
        if(outsideData === true){ //outsideData가 true이면 dimmed와 함께 숨겨짐.
            dispatch(setOutside(false));
            setIsExShow(false);
        }
    },[outsideData,dispatch,setIsExShow]);

    useOnClickOutside(ref,exHide);

    return ( 
        <>
            <Exstyled.VideoWrap>
                <Exstyled.VideoBox>
                    <Exstyled.BtnArea>
                        <Exstyled.Btn onClick={exHide}>
                            <SCclose width="40px" height="40px" fill="#fff"/>
                            <span className="hidden">닫기</span>
                        </Exstyled.Btn>
                    </Exstyled.BtnArea>
                    <Exstyled.VideoDiv>
                        <Exstyled.Video poster='/images/thumbnail/img-speed-video-thumbnail.png'>
                            <source src="/videos/video-mode-speed.mp4" type='video/mp4'/>
                        </Exstyled.Video>
                    </Exstyled.VideoDiv>
                </Exstyled.VideoBox>
            </Exstyled.VideoWrap>

            {outsideData === false && <Substyled.DimmedHidden ref={ref}/>}
        </>
     );
}

export default SpeedVideo;