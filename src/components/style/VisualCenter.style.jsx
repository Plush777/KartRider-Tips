import styled from "styled-components";

export const VisualCenterWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 1010;
`

export const Vtitle = styled.h2`
    font-size: 48px;
    font-family: 'tmon';
    color: #fff;
`

export const VlogoArea = styled.div`
    margin-top: 55px;
`

export const VDescArea = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
`

export const VDescBold = styled.strong`
    font-size: 18px;
    font-family: 'Noto Sans B';
    color: #fff;
`

export const VDescRegular = styled.p`
    font-size: 14px;
    font-family: 'Noto Sans';
    color: #fff;
`