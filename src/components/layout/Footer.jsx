import React from 'react';
import * as Footerstyled from 'components/style/layout/Footer.style';
import logoGray from 'components/svg/ico-kart-logo-grayscale.svg';

const Footer = () => {
    return (  
        <>
            <Footerstyled.FooterWrap>
                <Footerstyled.FooterInner>
                    <Footerstyled.LogoArea>
                        <img src={logoGray} alt="푸터 카트라이더 팁스 로고"/>
                    </Footerstyled.LogoArea>
                    <Footerstyled.CopyRightArea>
                        <Footerstyled.Copy>2023 KARTRIDER TIPS</Footerstyled.Copy>
                    </Footerstyled.CopyRightArea>
                </Footerstyled.FooterInner>
            </Footerstyled.FooterWrap>
        </>
    );
}

export default Footer;