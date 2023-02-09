import styled from "styled-components";
import mixins from '../mixins';

export const TabWrap = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${({theme}) => theme.colors.fff};
`

export const TabWrapInner = styled.div`
    display: flex;
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 0;
`

export const TabInfo = styled.div`
    min-width: 125px;
    height: 50px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid ${({theme}) => theme.colors.ddd};
    background-color: #f2f2f2;
`

export const TabInfoTxt = styled.span`
    ${mixins.fc}
    ${mixins.whFull}
    ${mixins.font('nexonLv1Gothic','#626262')}
    position: relative;
    font-size: ${({theme}) => theme.fontSizes.f14};

    &::before{
        content: '';
        display: inline-flex;
        width: 22px;
        height: 22px;
        margin-right: 5px;
        background-image: ${props => `url('/images/common/ico-tab0${props.num}.svg')`};
        ${mixins.bgOption}
    }

    &::after{
        content: '';
        display: inline-flex;
        width: 22px;
        height: 22px;
        margin-left: 10px;
        background: url('/images/common/ico-arrow-right.svg') no-repeat center;
    }
`

export const TabList = styled.ul`
    display: flex;
    margin-left: 20px;
`

export const TabItem = styled.li`
    >a{
        ${mixins.fc}
        ${mixins.font('nexonLv1Gothic','#333')}
        width: 110px;
        height: 50px;
        border-radius: 25px;
        font-size: ${({theme}) => theme.fontSizes.f18};

        &.disabled{
            user-select: none;
            pointer-events: none;
            color: #CED4DA;
        }

        &.active{
            color: #fff;
            background-color: ${({theme}) => theme.colors.c333};
        }
    }
`