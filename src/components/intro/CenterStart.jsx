import Image from "next/image";
import * as I from "style/intro/Intro.style";

export default function CenterStart ({ children, clickFn }) {
    return(
        <I.LogoDiv>
            <I.LogoInnerDiv>
                {children}
                <Image src="/ico-kart-logo-black.svg" 
                width={409} height={91} priority alt="카트라이더 팁스 로고"/>
                <I.StartButton onClick={clickFn} type="button">시작하기</I.StartButton>
            </I.LogoInnerDiv>
        </I.LogoDiv>
    )
}