import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 65px;
    padding: 0 16px;
    border-bottom: 1px solid var(--infoStroke);
    background-color: var(--headerBg);
    transition: background .3s ease-in-out;

    &.abs{
        position: absolute;
    }

    ${({ theme }) => theme.tablet`
        height: 55px;
        top: -65px;
        transition: .25s top ease-in-out;
        padding: 0 10px;

        &.true{
            top: 0;
        }
    `};
`

export const HeaderInner = styled.div`
    ${mixins.aic}
    ${mixins.inner}
    height: 100%;

    ${({ theme }) => theme.tablet`
        position: relative;
        justify-content: center;
        column-gap: 10px;
    `};
`

export const Logo = styled.h1`
    img{
        width: 130px !important;
        height: 29px !important;

        ${({ theme }) => theme.tablet`
            width: 100%;
            margin: 0 auto;
        `};
    }

    &.mr{
        margin-right: auto;
    }

    @media (max-width: 768px){
        &.mr{
            margin: 0 auto;
        }
    }
`

export const Gnb = styled.nav`
    ${mixins.aic}
    ${mixins.whFull}
    margin-left: 40px;
    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const GnbList = styled.ul`
    ${mixins.aic}
    column-gap: 30px; 
    width: 100%;

    ${({ theme }) => theme.laptop`
        column-gap: 20px;
        max-width: 44.516vw;
        overflow-x: auto;
    `};

    @media (max-width: 850px){
        max-width: 40vw;
    }
`

export const GnbItem = styled.li`
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.f14};

    &.disabled{
        >a{
            color: var(--disabledColor);
            ${mixins.disabled}
        }
    }

    &.active{
        >a{
            color: var(--activeColor); 
            font-weight: bold;

            &::before{
                width: 100%;
            }
        }
    }

    &.more{
        display: none;
    }

    @media (hover: hover){
        &:hover:not(.disabled){
            >a{
                color: var(--activeColor); 
                text-shadow: 0 0 .01px var(--activeColor), 0 0 .01px var(--activeColor)C, 0 0 .01px var(--activeColor);

                &::before{
                    width: 100%;
                }
            }
        }
    }

    >a{
        position: relative;
        transition: .3s ease-in-out;
        transition-property: color;
        color: var(--gnbText);
        font-family: 'NexonMaplestory';

        &::before{
            content: ''; 
            position: absolute; 
            left: 0;
            bottom: -1px;
            width: 0;
            height: 1px; 
            transition: .3s width ease-in-out;
            background-color: var(--activeColor);
        }
    }

    ${({ theme }) => theme.tablet`
        &.more{
            display: flex;
        }
    `};
`

export const ShortArea = styled.div`
    margin-left: 30px;
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic', '#666')};

    >a{
        display: block;
        white-space: nowrap;
    }

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const OpenInNewArea = styled.div`
    
`

export const BtnOpenInNew = styled.button.attrs({ type: 'button' })`
    ${mixins.aic}
    width: 18px;
    height: 18px;
    background: url('/images/common/ico-open-in-new.svg') no-repeat center;
`

export const Tooltip = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: .3s ease-in-out;
    opacity: 0;
    visibility: hidden;
`

export const TooltipItem = styled.span`
    ${mixins.aic};
    white-space: nowrap;
    height: 32px;
    padding: 0 10px;
    border-radius: 16px;
    background-color: var(--utilTooltipBg);
    ${mixins.font('nexonLv1Gothic', 'var(--utilTooltipText)')};
    font-size: ${({ theme }) => theme.fontSizes.f12};
`

export const UtilArea = styled.div`
    ${mixins.aic};
    column-gap: 15px;
    position: relative;

    a{
        position: relative;

        &:hover{
            ${Tooltip}{
                opacity: 1;
                visibility: visible;
            }
        }
    }

    svg{
        path{
            fill: var(--title);
        }
    }
`

export const SettingWrap = styled.div`
    display: none;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 0 0 1px var(--settingStorke);
    background-color: var(--settingBg);
    transition: .3s ease-in-out;

    &.active{
        display: block;
    }

    ${({ theme }) => theme.tablet`
        position: fixed;
        width: 100%;
        max-width: calc(100vw - 20px);
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10000;
    `};
`

export const SettingList = styled.ul`
    ${mixins.fcol};
    row-gap: 20px;
`

export const SettingItem = styled.li`
    ${mixins.fcol};
    row-gap: 8px;

    ${({ theme }) => theme.tablet`
        position: relative;

        .btnClose{
            position: absolute;
            top: -5px;
            right: 0;

            svg{
                fill: var(--commonSvgFill);
            }
        }
    `};
`

export const SettingTitle = styled.p`
    ${mixins.font('nexonLv1Gothic', 'var(--settingTitle)')};
    font-size: ${({ theme }) => theme.fontSizes.f16};
`

export const SettingButtonList = styled.div`
    ${mixins.aic};
    column-gap: 5px;

    ${({ theme }) => theme.tablet`
        flex-wrap: wrap;
        row-gap: 5px;
    `};
`

export const mobileHeaderMenuWrap = styled.div`
    position: absolute;
    left: -10px;
    top: 54px;
    width: 100vw;
    background-color: var(--settingBg);
    transition: max-height .3s ease-in-out;
    max-height: 0;
    overflow: hidden;

    &.active{
        max-height: 193px;
    }
`

export const mobileHeaderMenuList = styled.ul`
    padding: 14px 20px;
    ${mixins.fcol};
`

export const mobileHeaderMenuItem = styled.li`
    ${mixins.aic};
    width: 100%;
    height: 55px;
`

export const mobileHeaderMenuLink = styled.a`
    ${mixins.aic};
    column-gap: 7.5px;
    height: 100%;
    ${mixins.font('nexonLv1Gothic', 'var(--settingTitle)')};
    font-size: ${({ theme }) => theme.fontSizes.f16};

    svg{
        path{
            fill: var(--commonSvgFill);
        }
    }
`

export const BtnHambuger = styled.button.attrs({ type: 'button' })`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;

    svg{
        path{
            stroke: var(--commonSvgFill);
        }
    }
`