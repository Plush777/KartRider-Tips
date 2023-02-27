import React from 'react';
import * as Footerstyled from 'components/style/layout/Footer.style';
import logoGray from 'components/svg/files/ico-kart-logo-grayscale.svg';
import footLogoGray from 'components/svg/files/ico-footer-logo-grayscale.svg';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { M500 } from 'components/style/mobile/MediaQuery';

const Footer = () => {

    let footerData = useSelector(state => state.footer);

    const copy = {
        txt: '2023 KARTRIDER TIPS',
        alt: '푸터 카트라이더 팁스 로고'
    }

    return (  
        <Footerstyled.FooterWrap>
            <Footerstyled.FooterInner>
                <Footerstyled.LogoArea>
                    <Footerstyled.Logo src={logoGray} alt={copy.alt}/>
                </Footerstyled.LogoArea>
                <Footerstyled.CopyRightArea>
                    <Footerstyled.Copy>{copy.txt}</Footerstyled.Copy>
                </Footerstyled.CopyRightArea>
                
                <Footerstyled.BottomArea>
                    <Footerstyled.BottomMenu>
                        {footerData.map((item,index) => {
                            return(
                                <Footerstyled.BottomItem as="li" key={index}>
                                    <Link to={item.link}>{item.name}</Link>
                                </Footerstyled.BottomItem>
                            )
                        })}
                    </Footerstyled.BottomMenu>
                </Footerstyled.BottomArea>

                <M500>
                    <Footerstyled.BottomLogoArea>
                        <Footerstyled.BottomLogo src={footLogoGray} alt={copy.alt}/>
                        <Footerstyled.BottomLogoTxt>{copy.txt}</Footerstyled.BottomLogoTxt>
                    </Footerstyled.BottomLogoArea>
                </M500>
            </Footerstyled.FooterInner>
        </Footerstyled.FooterWrap>
    );
}

export default Footer;