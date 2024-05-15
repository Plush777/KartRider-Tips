import styled from "styled-components";

export const LogoDiv = styled.div`
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

export const LogoInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
`

export const StartButton = styled.button`
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

export const HeaderBackgroundDiv = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: url('/images/common/img-nexon-header.png') no-repeat center;
    z-index: 10;
`

export const HeaderLinkDiv = styled.div`
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

export const Wrap = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--main-background);
    z-index: 9999;
`

export const Contents = styled.section`
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

export const Video = styled.video`
    width: 100vw;
    height: 100vh;

    ${props => props.clickIntro && `
        margin-top: -80px;
    `}
`