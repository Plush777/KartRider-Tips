import styled from "styled-components";
import mixins from '../../mixins';

export const ContentWrap = styled.main`
    position: relative;
`

export const MainBoxWrap = styled.div`
    padding: 105px 0;
    width: 1300px;
    margin: 0 auto;
`

export const MainBoxList = styled.ul`
    ${mixins.aic}
    gap: 20px;
    flex-wrap: wrap;
`

export const MainBoxItems = styled.li`
    position: relative;
    z-index: 10;
    width: 49.2%;
    height: 310px;
    border-radius: 12px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: ${({theme}) => theme.colors.fff};
    ${mixins.bgOption}
    transition: .3s ease-in-out;

    &.mode{background-image: url('/images/bg/bg-box-01.webp');}
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
        background-color: ${({theme}) => theme.colors.rgbaBlack};
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

    &:hover:not(.disabled){
        transform: translateY(-5px);
    }
`

export const MainBoxInner = styled.div`
    padding: 40px;
    height: inherit;
`

export const TxtBox = styled.div`
    position: relative;
    ${mixins.fcol}
    z-index: 10;
    height: 100%;
`

export const Title = styled.h3`
    font-size: ${({theme}) => theme.fontSizes.f30};
    color: #fff;
    margin-bottom: 12px;
`

export const Desc = styled.p`
    font-size: ${({theme}) => theme.fontSizes.f18};
    color: #fff;
`