'use client';

import React, { useEffect } from 'react';
import * as Footerstyled from 'components/style/layout/Footer.style';
import Link from 'next/link';
import { useSelector } from "react-redux";
import { M500 } from 'components/style/mobile/MediaQuery';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import etc from 'locales/ko/etc/etc.json';
import inquiryData from "locales/ko/etc/inquiry.json";
import footerData from "locales/ko/etc/footer.json";

const Footer = ({ themeMode }) => {

    let route = useSelector(state => state.commonRoute);
    const { t } = useTranslation();
    const pathname = usePathname();

    const routeSpread = route.footerRoute.map(item => item.link);

    return (  
        <Footerstyled.FooterWrap>
            <Footerstyled.FooterInner>
                <Footerstyled.LogoArea>
                    <Footerstyled.Logo src='/ico-kart-logo-grayscale.svg' width="86" height="24" alt={t(`copys.group1.alt`)}/>
                </Footerstyled.LogoArea>
                <Footerstyled.CopyRightArea>
                    <Footerstyled.Copy>{t(`copys.group1.txt`)}</Footerstyled.Copy>
                </Footerstyled.CopyRightArea>
                
                <Footerstyled.BottomArea>
                    <Footerstyled.BottomMenu> 
                        {Object.keys(footerData.data).map((item,index) => {

                            const itemId = footerData.data[item].id;

                            return(
                                itemId > 4 ? null : 
                                <Footerstyled.BottomItem as="li" key={index}>
                                    {itemId === 3 ? <a href="https://forms.gle/4i8vvDYz9VbLbJGN9" target="_blank" rel="noopener noreferrer">{t(`data.group${index+1}.name`)}</a>
                                    :
                                    <Link href={routeSpread[index]}>{t(`data.group${index+1}.name`)}</Link>
                                    }
                                </Footerstyled.BottomItem>
                            )
                        })}
                    </Footerstyled.BottomMenu>
                </Footerstyled.BottomArea>

                <M500>
                    <Footerstyled.BottomLogoArea>
                        <Footerstyled.BottomLogo src="/ico-footer-logo-grayscale.svg" alt={t(`copys.group1.alt`)}/>
                        <Footerstyled.BottomLogoTxt>{t(`copys.group1.txt`)}</Footerstyled.BottomLogoTxt>
                    </Footerstyled.BottomLogoArea>
                </M500>
            </Footerstyled.FooterInner>

            {pathname === '/' ? 
                    null :
                    <Footerstyled.Row>
                        <Footerstyled.Hits>
                            <a href="https://hits.sh/kartrider-tips.vercel.app/hits/">
                                <img alt="Hits" src="https://hits.sh/kartrider-tips.vercel.app/hits.svg?view=today-total&style=for-the-badge&label=today&color=309ED5&labelColor=222" width="181" height="26"/>
                                <span className="hidden">{t(`data.group6.name`)}</span>
                            </a>
                        </Footerstyled.Hits>

                        <div>
                            <Footerstyled.LinkList>
                                {Object.keys(inquiryData.listInquiry).map((item,index) => {

                                    const itemLink = inquiryData.listInquiry[item].link;

                                    return(
                                        <li className={themeMode === 'dark' ? 'dark' : ''} key={index}>
                                            <a href={itemLink} target="_blank" rel='noopener noreferrer'>
                                                <span className="hidden">{t(`data.group5.name`)}</span>
                                            </a>
                                        </li>
                                    )})
                                }
                            </Footerstyled.LinkList>
                        </div>
                    </Footerstyled.Row>
                }
        </Footerstyled.FooterWrap>
    );
}

export default Footer;