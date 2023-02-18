import styled from "styled-components";
import mixins from 'components/style/mixins';

export const VideoWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    ${mixins.whFull};
    background-color: rgba(0, 0, 0, 0.8);
`

export const VideoBox = styled.div`
    position: relative;
    ${mixins.whFull};
`

export const BtnArea = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 1000;
`

export const Btn = styled.button.attrs({type: 'button'})`
    width: 40px;
    height: 40px;
    background: url('/images/common/ico-close.svg') no-repeat center;
    background-size: 40px;
`

export const Video = styled.video.attrs({
    controls: true,
    muted: true,
    playsInline: true
})`
    ${mixins.posCenter};
    width: 70%;
    border-radius: 6px;
`