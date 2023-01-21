import React from 'react';
import styled from 'styled-components';
import logoWhite from '../svg/ico-kart-logo-white.svg';

const VisualCenterWrap = styled.div`
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

const Vtitle = styled.h2`
    font-size: 48px;
    font-family: 'tmon';
    color: #fff;
`

const VlogoArea = styled.div`
    margin-top: 55px;
`

const VDescArea = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
`

const VDescBold = styled.strong`
    font-size: 18px;
    font-family: 'Noto Sans B';
    color: #fff;
`

const VDescRegular = styled.p`
    font-size: 14px;
    font-family: 'Noto Sans';
    color: #fff;
`

const VisualCenter = () => {
    return ( 
        <VisualCenterWrap>
            <Vtitle>카트라이더를 기억하고,<br/>기록하는 공간</Vtitle>
            <VlogoArea>
                <img src={logoWhite} alt="카트라이더 아카이브 로고" />
            </VlogoArea>
            <VDescArea>
                <VDescBold>No limits, all drift!</VDescBold>
                <VDescRegular>끝이 아닌 새로운 시작 카트라이더: 드리프트</VDescRegular>
            </VDescArea>
        </VisualCenterWrap>
     );
}

export default VisualCenter;