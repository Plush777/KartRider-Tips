import React from 'react';
import styled from 'styled-components';
import logoGray from '../svg/ico-kart-logo-grayscale.svg';

const FooterWrap = styled.footer`
    width: 100%;
    height: 100px;
    background: #fafafa;
`

const FooterInner = styled.footer`
    width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 30px 15px;
`

const LogoArea = styled.div`
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

const CopyRightArea = styled.div`
    font-size: 12px;
    font-family: 'nexonLv1Gothic';
    color: #a1a1a1;
`

const Copy = styled.p`
    display: flex;
    align-items: center;
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
`

const Footer = () => {
    return (  
        <>
            <FooterWrap>
                <FooterInner>
                    <LogoArea>
                        <img src={logoGray} alt="푸터 카트라이더 아카이브 로고"/>
                    </LogoArea>
                    <CopyRightArea>
                        <Copy>2023 KARTRIDER ARCHIVE</Copy>
                    </CopyRightArea>
                </FooterInner>
            </FooterWrap>
        </>
    );
}

export default Footer;