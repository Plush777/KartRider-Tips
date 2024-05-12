"use client";

import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { M1024 } from "components/style/mobile/MediaQuery";
import { Min1024 } from "components/style/mobile/MediaQuery";

const Wrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--main-background);
    z-index: 9999;
`

const Contents = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    height: 100%;
    animation: fadeIn 1.5s ease-in-out;
    z-index: 10;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #fff;
    }
`

const Video = styled.video`
    width: 100vw;
    height: 100vh;
`

const ImageBox = styled.div`
    position: relative;
    z-index: 1;

    img{
        width: 100%;
        height: calc(100% - 60px);
        object-fit: contain;
        object-position: center -1px;
    }
`

const ImageInner = styled.div`
    position: relative;
    width: 992px;
    margin: 60px auto;
`

const StartButton = styled.button`
    position: absolute;
    right: 0;
    top: 136px;
    width: 250px;
    height: 148px;
    background-color: transparent;
`

const IntroBackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/common/img-facelift.jpg') no-repeat center;
    background-size: cover;
`

const HeaderBackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: url('/images/common/img-nexon-header.png') no-repeat center;
    z-index: 10;
`

const MobileLogoDiv = styled.div`
    position: static;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        object-fit: cover;
        opacity: 0.85;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(255,255,255,0.35);
    }

    ${({ theme }) => theme.tablet`
        img{
            width: 382px;
            height: 85px;
        }
    `};

    ${({ theme }) => theme.mobile`
        img{
            width: 247px;
            height: 55px;
        }
    `};
`

const MobileLogoInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
`

const HeaderLinkDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 60px;
    margin-left: -7.5px;
    background-color: transparent;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }
`

const MobileStartButton = styled.button`
    max-width: 80px;
    margin: 0 auto;
    height: 36px;
    padding: 0 16px;
    border-radius: 8px;
    font-size: 1rem;
    color: #fff;
    background-color: #0094ff;

    ${({ theme }) => theme.mobile`
        height: 32px;
        padding: 0 12px;
        font-size: 0.875rem;
    `};
`

const Intro = ({ setIntro }) => {
    const [click, setClick] = useState(false);
    const isSession = sessionStorage.getItem('intro');

    const handleClick = () => {
        setClick(true);
        sessionStorage.setItem('intro', 'true');

        if (!isSession) {
            let timer = setTimeout(() => {
                setIntro(true);
            }, 5500);
    
            return () => clearTimeout(timer);
        }
    }

    return (
        <Wrap> 
            <Min1024>
                <IntroBackgroundDiv/>
                <HeaderBackgroundDiv>
                    <HeaderLinkDiv>
                        <a href="https://www.nexon.com/Home/Game" target="_blank" rel="noreferrer">
                            <span className="hidden">넥슨 홈페이지 바로가기</span>
                        </a>
                    </HeaderLinkDiv>
                </HeaderBackgroundDiv>
                <ImageBox>
                    <ImageInner>
                        <Image priority="high" src="/images/common/img-kart-screenshot.png" alt="" width={1903} height={964} />
                        <StartButton onClick={handleClick} type="button">
                            <span className="hidden">게임시작</span>
                        </StartButton>
                    </ImageInner>
                </ImageBox>
            </Min1024>

            <M1024>
                <MobileLogoDiv>
                    <MobileLogoInnerDiv>
                        <Video autoPlay muted loop>
                            <source src="/mobile-intro.mp4" type="video/mp4" />
                        </Video>
                        <Image src="/ico-kart-logo-black.svg" 
                        width={409} height={91} priority alt="카트라이더 팁스 로고"/>
                        <MobileStartButton onClick={handleClick} type="button">바로가기</MobileStartButton>
                    </MobileLogoInnerDiv>
                </MobileLogoDiv>
            </M1024>

            {click &&
                <Contents>
                    <Video poster="/intro-thumbnail.png" autoPlay>
                        <source src="/intro.mp4" type="video/mp4" />
                    </Video>
                </Contents>
            }
        </Wrap>
    )
}


export default Intro;