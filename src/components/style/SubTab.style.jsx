import styled from "styled-components";

export const TabWrap = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
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
    border: 1px solid #ddd;
    background-color: #f2f2f2;
`

export const TabInfoTxt = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'nexonLv1Gothic';
    color: #626262;

    &::before{
        content: '';
        display: inline-flex;
        width: 22px;
        height: 22px;
        margin-right: 5px;
        background-image: ${props => `url('../images/common/ico-tab0${props.num}.svg')`};
        background-repeat: no-repeat;
        background-position: center;
    }

    &::after{
        content: '';
        display: inline-flex;
        width: 22px;
        height: 22px;
        margin-left: 10px;
        background: url('../images/common/ico-arrow-right.svg') no-repeat center;
    }
`

export const TabList = styled.ul`
    display: flex;
    margin-left: 20px;
`

export const TabItem = styled.li`
    >a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: 50px;
        border-radius: 25px;
        font-family: 'nexonLv1Gothic';
        font-size: 18px;
        color: #333;

        &.active{
            color: #fff;
            background-color: #333;
        }
    }
`