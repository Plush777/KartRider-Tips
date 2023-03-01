import styled from "styled-components";
import mixins from 'components/style/mixins';

export const ContentWrap = styled.div`
    position: relative;
`

export const MainBoxWrap = styled.div`
    padding: 105px 16px;
    ${mixins.inner}

    ${({ theme }) => theme.laptop`
        padding: 70px 16px;
    `}

    ${({ theme }) => theme.tablet`
        padding: 36px 16px;
    `}
`

export const MainBoxList = styled.ul`
    ${mixins.aic}
    gap: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 1200px){
        gap: 16px;
    }

    ${({ theme }) => theme.laptop`
        flex-direction: column;
        gap: 10px;
    `}
`

export const MainBoxItems = styled.li`
    position: relative;
    z-index: 10;
    width: calc(100% / 2 - 20px);
    height: 310px;
    border-radius: 12px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.fff};
    ${mixins.bgOption}
    transition: .3s ease-in-out;

    &.mode{background-image: url("/images/bg/bg-box-01.webp");}
    &.cartBody{background-image: url('/images/bg/bg-box-02.webp');}
    &.character{background-image: url('/images/bg/bg-box-03.webp');}
    &.track{background-image: url('/images/bg/bg-box-04.webp');}
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        ${mixins.whFull}
        z-index: 0;
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.rgbaBlack};
    }

    &.disabled{
        background-blend-mode: luminosity;
        >a{
            cursor: default;
            pointer-events: none;
        }

        &::after{
            background-color: transparent;
        }
    }

    >a{
        ${mixins.fcol}
        height: 100%;
    }

    @media (hover: hover) {
        &:hover:not(.disabled){
            transform: translateY(-5px);
        }
    }

    @media screen and (max-width: 1200px){
        height: 270px;
    }

    ${({ theme }) => theme.laptop`
        width: 100%;
        height: 260px;
        background-size: cover;
    `}

    ${({ theme }) => theme.mobile`
        height: 200px;
    `}
`

export const MainBoxInner = styled.div`
    padding: 40px;
    height: inherit;

    @media screen and (max-width: 1200px){
        padding: 30px;
    }
`

export const TxtBox = styled.div`
    position: relative;
    ${mixins.fcol}
    z-index: 10;
    height: 100%;
`

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.f30};
    color: #fff;
    margin-bottom: 12px;
    font-weight: 600;

    @media screen and (max-width: 1200px){
        font-size: 1.625rem;
    }

    ${({ theme }) => theme.mobile`
        font-size: ${({ theme }) => theme.fontSizes.f20};
    `}
`

export const Desc = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.f18};
    color: #fff;

    @media screen and (max-width: 1200px){
        font-size: 1rem;
    }

    ${({ theme }) => theme.mobile`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `}
`