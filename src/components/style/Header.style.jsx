import styled from 'styled-components';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    width: 1300px;
    height: 100%;
    margin: 0 auto;
`

export const Logo = styled.h1`
    
`

export const Gnb = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 40px;
`

export const GnbList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 30px; 
    width: 100%;
`

export const GnbItem = styled.li`
    position: relative;
    font-size: 14px;
    font-family: 'Noto Sans';
    color: #000;
`

export const ShortArea = styled.div`
    display: flex;
    width: 100%;
    font-size: 12px;
    font-family: 'Noto Sans';
    color: #6C7A89;
`

export const ShortLink = styled.a`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`