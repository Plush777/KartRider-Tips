import styled from "styled-components";

export const SubVisualWrap = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 50px;
`

export const SubViusalInner = styled.div`
    position: relative;
    height: 100%;
    background-image: url('../images/bg/bg-sub-visual-mode.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        z-index: 0;
    }
`

export const SubVisualTitleArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export const SubVisualTitle = styled.h2`
    font-size: 62px;
    color: #fff;
`