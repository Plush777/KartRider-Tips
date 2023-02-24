import React from 'react';
import * as Footerstyled from 'components/style/layout/Footer.style';
import logoGray from 'components/svg/files/ico-kart-logo-grayscale.svg';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Footer = () => {

    let footerData = useSelector(state => state.footer);

    return (  
        <Footerstyled.FooterWrap>
            <Footerstyled.FooterInner>
                <Footerstyled.LogoArea>
                    <img src={logoGray} alt="푸터 카트라이더 팁스 로고"/>
                </Footerstyled.LogoArea>
                <Footerstyled.CopyRightArea>
                    <Footerstyled.Copy>2023 KARTRIDER TIPS</Footerstyled.Copy>
                </Footerstyled.CopyRightArea>
                
                <div className='bottomArea'>
                    <Footerstyled.BottomMenu>
                        {footerData.map((item,index) => {
                            return(
                                <Footerstyled.BottomItem as="li" key={index}>
                                    <Link to={item.link}>{item.name}</Link>
                                </Footerstyled.BottomItem>
                            )
                        })}
                    </Footerstyled.BottomMenu>
                </div>
            </Footerstyled.FooterInner>
        </Footerstyled.FooterWrap>
    );
}

export default Footer;