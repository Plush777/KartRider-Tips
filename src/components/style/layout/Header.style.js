import styled from 'styled-components';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 65px;
    padding: 0 16px;
    border-bottom: 1px solid var(--stroke1);
    background-color: var(--background1);
    transition: background .3s ease-in-out;

    @media (max-width: 1200px){
        padding: 0 30px;
    }

    ${({ theme }) => theme.laptop`
        padding: 0 16px;
    `};

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
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;

    ${({ theme }) => theme.tablet`
        position: relative;
        justify-content: center;
        column-gap: 10px;
    `};
`

export const Logo = styled.h1`
    margin-right: auto;

    img{
        ${({ theme }) => theme.laptop`
            width: 100px;
        `};

        ${({ theme }) => theme.tablet`
            width: 100%;
            margin: 0 auto;
        `};
    }

    @media (max-width: 768px){
        margin-right: 0;
        
        &.mr{
            margin: 0 auto;
        }
    }
`

export const Gnb = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 40px;
    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const GnbList = styled.ul`
    display: flex;
    align-items: center;
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

export const Tooltip = styled.span`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    transition: .3s ease-in-out;
    opacity: 0;
    visibility: hidden;
    cursor: default;
`

export const TooltipItem = styled.span`
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 32px;
    padding: 0 10px;
    border-radius: 16px;
    color: var(--text1);
    background-color: var(--background1);
    font-size: .75rem;
`

export const UtilArea = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
    position: relative;

    svg{
        path{
            fill: var(--title);
        }
    }
`

export const UtilTextBox = styled.a`
    position: relative;

    @media (hover: hover) {
        &:hover{
            ${Tooltip}{
                opacity: 1;
                visibility: visible;
            }
        }
    }
`

export const SettingWrap = styled.div`
    width: 100%;
    padding: 20px;
    border: 1px solid var(--stroke2);
    border-radius: 16px;
    box-shadow: 0 0 0 1px var(--stroke1);
    background-color: var(--background1);
    transition: .3s ease-in-out;

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
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const SettingItem = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    ${({ theme }) => theme.tablet`
        position: relative;

        .btnClose{
            position: absolute;
            top: -5px;
            right: 0;

            svg{
                fill: var(--background3);
            }
        }
    `};
`

export const SettingTitle = styled.p`
    color: var(--text1);
    font-size: 1rem;
`

export const SettingButtonList = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;

    ${({ theme }) => theme.tablet`
        flex-wrap: wrap;
        row-gap: 5px;
    `};
`

export const mobileHeaderMenuWrap = styled.nav`
    position: absolute;
    left: -10px;
    top: 54px;
    width: 100vw;
    background-color: var(--background1);
    transition: max-height .3s ease-in-out;
    max-height: 0;
    overflow: hidden;

    &.active{
        max-height: 193px;
    }
`

export const mobileHeaderMenuList = styled.ul`
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
`

export const mobileHeaderMenuItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
`

export const mobileHeaderMenuLink = styled.a`
    display: flex;
    align-items: center;
    column-gap: 7.5px;
    width: 100%;
    height: 100%;
    color: var(--text1);
    font-size: 1rem;

    svg{margin-top: -2.5px;
        path{
            fill: var(--background3);
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
            stroke: var(--background3);
        }
    }
`

export const DimmedWrap = styled.div`
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;

    &.mobile{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100vw;
        height: 100vh;
        z-index: 10010;
    }
`