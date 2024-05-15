"use client";

import { useRef, useState } from "react";
import CenterStart from "components/intro/CenterStart";
import HeaderBackground from "components/intro/HeaderBackground";
import * as I from "style/intro/Intro.style";

export default function Intro ({ setIntro }) {
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
        <I.Wrap> 
            <HeaderBackground hiddenText="넥슨 홈페이지 바로가기" />

            <CenterStart clickFn={handleClick}>
                <I.Video autoPlay muted loop>
                    <source src="/mobile-intro.mp4" type="video/mp4" />
                </I.Video>
            </CenterStart>

            <I.Contents className={click == true ? 'active' : ''}>
                <I.Video clickIntro ref={videoRef}>
                    <source src="/intro.mp4" type="video/mp4" />
                </I.Video>
            </I.Contents>
        </I.Wrap>
    )
}