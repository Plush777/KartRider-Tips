import styled from "styled-components";
import mixins from 'components/style/mixins';

export const VideoWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
    width: 100%;
    height: 101%;
    background-color: rgba(0, 0, 0, 0.8);
`

export const VideoBox = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    ${mixins.fcol};
    justify-content: center;
`

export const VideoDiv = styled.div`
    ${mixins.aic};
`

export const BtnArea = styled.div`
    ${mixins.jcfe}
    width: calc(100% - 35px);
    margin: 0 auto 20px auto;

    ${({ theme }) => theme.tablet`
        
    `};
`

export const Btn = styled.button.attrs({type: 'button'})`
 
`

export const Video = styled.video.attrs({
    controls: true,
    muted: true,
    playsInline: true
})`
    display:block;
    width: calc(100% - 35px);
    border-radius: 6px;
    margin: 0 auto;

    ${({ theme }) => theme.laptopL`
        width: 85%;
    `};

    ${({ theme }) => theme.tablet`
        width: 100%;
        max-width: calc(100vw - 32px);
    `}; 
`