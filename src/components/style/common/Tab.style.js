import styled from "styled-components";
import mixins from 'components/style/mixins';

export const TabWrap = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${({theme}) => theme.colors.fff};

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
    min-width: 125px;
    height: 50px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid ${({theme}) => theme.colors.ddd};
    background-color: #f2f2f2;

    >svg{
        overflow: visible;
        width: 20px;
    }

    ${({ theme }) => theme.tablet`
        min-width: 90px;
        height: 40px;
        padding: 0 16px;
        justify-content: center;

        >svg{
            width: 18px;
            height: 18px;
        }
    `};

    ${({ theme }) => theme.mobile`
        display: none;
    `};
`

export const TabInfoTxt = styled.span`
    ${mixins.fc}
    width: 100%;
    ${mixins.font('nexonLv1Gothic','#626262')}
    position: relative;
    font-size: ${({theme}) => theme.fontSizes.f14};
    margin-left: 5px;

    &::after{
        content: '';
        display: inline-flex;
        width: 22px;
        height: 22px;
        margin-left: 10px;
        background: url('/images/common/ico-arrow-right.svg') no-repeat center;
    }

    ${({ theme }) => theme.tablet`
        width: auto;
        font-size: ${({theme}) => theme.fontSizes.f12};
        margin-left: 3px;

        &::after{
            width: 18px;
            height: 18px;
            background-size: 18px;
        }
    `};
`

export const TabList = styled.ul`
    display: flex;
    ${({ theme }) => theme.tablet`
        overflow-x: auto;
        overflow-y: hidden;

        &::-webkit-scrollbar{
            display: none;
        }
    `};
`

export const TabItem = styled.li`
    >a{
        ${mixins.fc}
        ${mixins.font('nexonLv1Gothic','#333')}
        width: 110px;
        height: 50px;
        border-radius: 25px;
        font-size: ${({theme}) => theme.fontSizes.f18};

        &.active,&[class*="Active"]{
            color: #fff;
            background-color: ${({theme}) => theme.colors.c333};
        }

        &.advanced,&.rare,&.epic,&.legend{
            ${mixins.disabled}
            color: rgba(0,0,0,0.6);
        }
    }

    ${({ theme }) => theme.tablet`
        ${mixins.aic};
        >a{
            width: 90px;
            height: 40px;
            font-size: ${({theme}) => theme.fontSizes.f14};
        }   
    `};
`