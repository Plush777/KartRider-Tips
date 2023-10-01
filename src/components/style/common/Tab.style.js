import styled from "styled-components";
import mixins from 'components/style/mixins';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TabWrap = styled.div`
    width: 100%;
    height: 80px;
    background-color: var(--tabGroupBg);
    transition: background .3s ease-in-out;

    ${({ theme }) => theme.tablet`
        height: 60px;
    `};
`

export const TabWrapInner = styled.div`
    position: relative;
    ${mixins.aic}
    ${mixins.inner}
    column-gap: 20px;
    height: 100%;
    padding: 15px 16px;

    ${({ theme }) => theme.small`
        padding: 15px 10px;
    `};
`

export const TabInfo = styled.div`
    ${mixins.aic};
    height: 50px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid var(--infoStroke);
    background-color: var(--infoBg);
    transition: .3s ease-in-out;

    svg{
        overflow: visible;
        width: 20px;

        path{
            fill: var(--infoSvg);

            &[d="M7.874 15.207 12.073 11 7.873 6.793 9.167 5.5l5.5 5.5-5.5 5.5-1.293-1.293Z"]{
                fill: #fff;
            }
        }

        rect{
            fill: var(--infoRect);
            transition: fill .3s ease-in-out;
        }
    }

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const TabInfoTxt = styled.span`
    ${mixins.fc}
    width: 100%;
    ${mixins.font('nexonLv1Gothic', 'var(--infoText)')}
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.f14};
    margin-left: 10px;
    margin-right: 10px;
    white-space: nowrap;

    ${({ theme }) => theme.tablet`
        width: auto;
        font-size: ${({ theme }) => theme.fontSizes.f12};
        margin-left: 3px;
    `};
`

export const TabList = styled.ul`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    ${({ theme }) => theme.tablet`
         &::-webkit-scrollbar{
            display: none;
        }
    `};
`

export const TabItem = styled.li`
    &.active{
        >a{
            color: var(--tabActiveColor);
            background-color: var(--tabActiveBg);
        }
    }

    >a{
        ${mixins.fc}
        ${mixins.font('nexonLv1Gothic', 'var(--tabText)')}
        padding: 0 21px;
        min-width: 110px;
        height: 50px;
        border-radius: 25px;
        font-size: ${({ theme }) => theme.fontSizes.f18};
        white-space: nowrap;
    }

    &.disabled > a{
        color: var(--disabledColor);
        ${mixins.disabled}
    }

    ${({ theme }) => theme.tablet`
        ${mixins.aic};
        >a{
            width: 90px;
            height: 40px;
            font-size: ${({ theme }) => theme.fontSizes.f14};
        }   
    `};
`

export const TabListSwipe = styled(Swiper)`
    display: flex;
    overflow: hidden;
    width: 100%;

    &.touchMoveActive{
        .swiper-wrapper{
            transition-duration: 300ms !important;
        }
    }

    .swiper-wrapper{
        display: flex;
        transition-duration: 0ms !important;
    }

    .swiper-slide{
        width: auto;
        height: auto;
        background: transparent;

        &::before{
            display: none;
        }

        &.active{
            >a{
                color: var(--tabActiveColor);
                background-color: var(--tabActiveBg);
            }
        }

        >a{
            ${mixins.fc}
            ${mixins.font('nexonLv1Gothic', 'var(--tabText)')}
            padding: 0 21px;
            min-width: 110px;
            height: 50px;
            border-radius: 25px;
            font-size: ${({ theme }) => theme.fontSizes.f18};
            white-space: nowrap;
        }

        &.disabled > a{
            color: var(--disabledColor);
            ${mixins.disabled}
        }

        ${({ theme }) => theme.tablet`
            ${mixins.aic};
            >a{
                width: 90px;
                height: 40px;
                font-size: ${({ theme }) => theme.fontSizes.f14};
            }   
        `};
    }
`