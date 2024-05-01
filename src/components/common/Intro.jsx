"use client";

import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: var(--main-background);
    z-index: 9999;

    img{
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100% - 60px);
        object-fit: contain;
        object-position: center -1px;
    }
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
    width: 100%;
    height: 100%;
    z-index: 1;
`

const StartButton = styled.button`
    position: absolute;
    right: 456px;
    top: 189px;
    width: 250px;
    height: 140px;
    background-color: transparent;
`

const IntroBackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/common/img-facelift.jpg') no-repeat;
    background-size: 100%;
`

const HeaderBackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: url('/images/common/img-nexon-header.png') no-repeat;
    background-size: 100% auto;
    z-index: 10;
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
            <HeaderBackgroundDiv/>
            <IntroBackgroundDiv/>
            <ImageBox>
                <Image priority="high" src="/images/common/img-kart-screenshot.png" alt="" width={1903} height={964} />
                <StartButton onClick={handleClick} type="button">
                    <span className="hidden">게임시작</span>
                </StartButton>
            </ImageBox>

            {click &&
                <Contents>
                    <Video autoPlay>
                        <source src="/intro.mp4" type="video/mp4" />
                    </Video>
                </Contents>
            }
        </Wrap>
    )
}


export default Intro;