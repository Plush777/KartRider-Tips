import styled from "styled-components";
import Image from "next/image";

const LogoDiv = styled.div`
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

const LogoInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
`

const StartButton = styled.button`
    max-width: 100px;
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

export default function CenterStart ({ children, clickFn }) {
    return(
        <LogoDiv>
            <LogoInnerDiv>
                {children}
                <Image src="/ico-kart-logo-black.svg" 
                width={409} height={91} priority alt="카트라이더 팁스 로고"/>
                <StartButton onClick={clickFn} type="button">시작하기</StartButton>
            </LogoInnerDiv>
        </LogoDiv>
    )
}