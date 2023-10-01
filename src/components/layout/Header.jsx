'use client';

import Link from 'next/link';
import * as Headerstyled from "components/style/layout/Header.style";
import * as Substyled from 'components/style/common/Area.style';
import Gnb from './Gnb';
import { M768, Min768 } from 'components/style/mobile/MediaQuery';
import { useEffect, useMemo, useState , useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from "next/navigation";
import SCchat from 'svg/ico-chat.svg';
import SCopen from 'svg/ico-open.svg';
import SCsetting from 'svg/ico-setting.svg';
import SChamburger from 'svg/ico-hamburger.svg';
import Settings from 'components/article/Settings';
import Portal from 'components/layout/Portal';
import useBodyScrollLock from 'hooks/useBodyScrollLock'; 
import etc from 'locales/ko/etc/etc'
import useStickyHeader from 'hooks/useStickyHeader';
import useRssYoutube from 'hooks/useRssYoutube';

const Header = ({ themeMode , setThemeMode }) => {
    const [settingToggle, setSettingToggle] = useState(false);
    const ref = useRef();
    const { t } = useTranslation();
    const pathname = usePathname();
    const { lockScroll } = useBodyScrollLock();
    const { visible, menuToggle, setMenuToggle } = useStickyHeader(ref);
    const { getChannel } = useRssYoutube();

    const handleHeaderMenu = () => {
        setMenuToggle(prev => !prev);
    }

    const handleSettingButton = () => {
        setSettingToggle(prev => !prev);
    }

    const utilLinks = {
        0: 'https://open.kakao.com/o/gwT6q4bc',
        1: 'https://kartdrift.nexon.com/kartdrift/ko/main',
        2: '#none'
    }

    const utilSvgs = {
        0: <SCchat width="26px" height="26px"/>,
        1: <SCopen width="26px" height="26px"/>,
        2: <SCsetting onClick={handleSettingButton} width="26px" height="26px"/>
    }

    const utilLinksRender = (index) => {
        return utilLinks[index];
    }

    const utilSvgsRender = (index) => {
        return utilSvgs[index];
    }

    return(
        <Headerstyled.Headers className={`${visible} ${pathname === '/' && 'abs'}`} ref={ref}>
            <Headerstyled.HeaderInner>
                <M768>
                    <Headerstyled.BtnHambuger onClick={handleHeaderMenu}>
                        <SChamburger width="24px" height="24px" fill="#000"/>
                    </Headerstyled.BtnHambuger>
                </M768>

                <Headerstyled.Logo className={pathname === '/' && 'mr'}>
                    <Link href={`/main/${getChannel}`} title={t(`header.group1.title`)}>
                        {themeMode === 'light' ?
                            <img src="/ico-kart-logo-black-beta.svg" alt={t(`header.group1.title`)}/>
                            :
                            <img src="/ico-kart-logo-white-beta.svg" alt={t(`header.group1.title`)}/>
                        }
                        
                    </Link>
                </Headerstyled.Logo>
                {pathname === '/' ? '' : <Gnb/>} 

                <Min768>
                    <Headerstyled.UtilArea>
                        {Object.values(etc.util.group1).map((item,index) => {

                            const isRender = index >= 0 && index <= 1; // 0,1

                            return(
                                <a href={utilLinksRender(index)} key={index} rel='noopener noreferrer' 
                                target={isRender ? '_blank' : ''}>
                                    {utilSvgsRender(index)}
                                    <span className="hidden">{t(`util.group1.txt${index+1}`)}</span>
                                    <Headerstyled.Tooltip>
                                        <Headerstyled.TooltipItem>{t(`util.group1.txt${index+1}`)}</Headerstyled.TooltipItem>
                                    </Headerstyled.Tooltip>
                                </a>
                            )
                        })}
                        <Settings themeMode={themeMode} setThemeMode={setThemeMode} display={settingToggle} />
                    </Headerstyled.UtilArea>
                </Min768>

                <M768>
                    <Headerstyled.mobileHeaderMenuWrap className={menuToggle && 'active'}>
                        <Headerstyled.mobileHeaderMenuList>
                            {Object.values(etc.util.group1).map((item,index) => {

                                const isRender = index >= 0 && index <= 1;

                                return(
                                    <Headerstyled.mobileHeaderMenuItem key={index}>
                                        <Headerstyled.mobileHeaderMenuLink href={utilLinksRender(index)} 
                                        rel='noopener noreferrer' target={isRender ? '_blank' : ''}>
                                            {isRender && 
                                                <>
                                                    {item}
                                                    <SCopen width="20px" height="20px"/>
                                                </>
                                            }
                                            {index === 2 && <span onClick={() => {
                                                handleSettingButton();
                                                lockScroll();
                                            }}>{t(`util.group1.txt${index+1}`)}</span>}
                                        </Headerstyled.mobileHeaderMenuLink>
                                    </Headerstyled.mobileHeaderMenuItem>
                                )
                            })}
                        </Headerstyled.mobileHeaderMenuList>
                    </Headerstyled.mobileHeaderMenuWrap>
                    
                    <Portal>
                        <Settings themeMode={themeMode} setThemeMode={setThemeMode} display={settingToggle} setDisplay={setSettingToggle}/>
                        <Substyled.DimmedHidden className={settingToggle ? 'active' : 'none'}/>
                    </Portal>
                </M768>
            </Headerstyled.HeaderInner>
        </Headerstyled.Headers>
    )
}

export default Header;