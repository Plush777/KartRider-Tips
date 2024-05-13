"use client";

import styled from "styled-components";
import { useRef, useState } from "react";
import CenterStart from "components/article/CenterStart";
import HeaderBackground from "components/article/HeaderBackground";

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
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

    &.active {
        display: grid;
    }
`

const Video = styled.video`
    width: 100vw;
    height: 100vh;

    ${props => props.clickIntro && `
        margin-top: -80px;
    `}
`

const Intro = ({ setIntro }) => {
    const [click, setClick] = useState(false);
    const videoRef = useRef(null);
    const isSession = sessionStorage.getItem('intro');

    const handleClick = () => {
        setClick(true);
        sessionStorage.setItem('intro', 'true');

        if (!isSession) {
            if (videoRef.current) {
                videoRef.current.play();
            }

            let timer = setTimeout(() => {
                setIntro(true);
            }, 5500);
    
            return () => clearTimeout(timer);
        }
    }

    return (
        <Wrap> 
            <HeaderBackground hiddenText="넥슨 홈페이지 바로가기" />

            <CenterStart clickFn={handleClick}>
                <Video autoPlay muted loop>
                    <source src="/mobile-intro.mp4" type="video/mp4" />
                </Video>
            </CenterStart>

            <Contents className={click == true ? 'active' : ''}>
                <Video clickIntro ref={videoRef}>
                    <source src="/intro.mp4" type="video/mp4" />
                </Video>
            </Contents>
        </Wrap>
    )
}


export default Intro;