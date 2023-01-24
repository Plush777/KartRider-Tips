import React from 'react';
import * as Footerstyled from '../style/Footer.style';
import logoGray from '../svg/ico-kart-logo-grayscale.svg';

const Footer = () => {
    return (  
        <>
            <Footerstyled.FooterWrap>
                <Footerstyled.FooterInner>
                    <Footerstyled.LogoArea>
                        <img src={logoGray} alt="푸터 카트라이더 아카이브 로고"/>
                    </Footerstyled.LogoArea>
                    <Footerstyled.CopyRightArea>
                        <Footerstyled.Copy>2023 KARTRIDER ARCHIVE</Footerstyled.Copy>
                    </Footerstyled.CopyRightArea>
                </Footerstyled.FooterInner>
            </Footerstyled.FooterWrap>
        </>
    );
}

export default Footer;