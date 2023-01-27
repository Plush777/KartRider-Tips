import styled from "styled-components";

export const ContentWrap = styled.main`
    position: relative;
`

export const MainBoxWrap = styled.div`
    padding: 105px 0;
    width: 1300px;
    margin: 0 auto;
`

export const MainBoxList = styled.ul`
    display: flex;
    align-items: center;
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
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    transition: .3s ease-in-out;

    &.mode{background-image: url('../images/bg/bg-box-01.png');}
    &.cartBody{background-image: url('../images/bg/bg-box-02.png');}
    &.character{background-image: url('../images/bg/bg-box-03.png');}
    &.track{background-image: url('../images/bg/bg-box-04.png');}
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 12px;
        background-color: rgba(0, 0, 0, 0.3);
    }

    >a{
        display: flex; 
        flex-direction: column;
        height: 100%;
    }

    &:hover{
        transform: translateY(-5px);
    }
`

export const MainBoxInner = styled.div`
    padding: 40px;
    height: inherit;
`

export const TxtBox = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    height: 100%;
    flex-direction: column;
`

export const Title = styled.h3`
    font-size: 30px;
    color: #fff;
    margin-bottom: 12px;
`

export const Desc = styled.p`
    font-size: 18px;
    color: #fff;
`