import styled from 'styled-components';

export const FooterWrap = styled.footer`
    width: 100%;
    height: 100px;
    background: #fafafa;
`

export const FooterInner = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 30px 15px;
`

export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    &::after{
        content: '';
        display: inline-flex;
        width: 1px;
        height: 29px;
        margin: 0 10px;
        background-color: #ccc;
    }
`

export const CopyRightArea = styled.div`
    font-size: 12px;
    font-family: 'nexonLv1Gothic';
    color: #a1a1a1;
`

export const Copy = styled.p`
    display: flex;
    align-items: center;
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
`