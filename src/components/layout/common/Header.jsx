'use client';

import Link from 'next/link';
import * as H from "style/layout/Header.style";
import * as U from "style/components/header/Util.style"; 
import * as T from "style/components/header/Tooltip.style"; 
import { M768, Min768 } from 'components/config/MediaQuery';
import { useRef, useState, useEffect } from 'react';
import SCchat from 'svg/ico-chat.svg';
import SCopen from 'svg/ico-open.svg';
import SCsetting from 'svg/ico-setting.svg';
import SChamburger from 'svg/ico-hamburger.svg';
import useBodyScrollLock from 'hooks/useBodyScrollLock'; 
import useStickyHeader from 'hooks/useStickyHeader';
import Settings from 'components/setting/Settings';
import Portal from 'components/config/Portal';
import Image from 'next/image';
import { utilRender, utilArray, utilLinks, mobileHeaderMenuTagCondition } from 'data/header';
import Pwa from 'components/pwa/Pwa';
import Gnb from 'components/layout/common/Gnb';

export default function Header ({ themeMode , setThemeMode, rootFontSize, setRootFontSize }) {
    const ref = useRef();
    const { lockScroll } = useBodyScrollLock();
    const { visible, menuToggle, setMenuToggle } = useStickyHeader(ref);
    const [settingToggle, setSettingToggle] = useState(false);
    const [windowMobileWidth, setWindowMobileWidth] = useState(window.innerWidth <= 768);

    const handleHeaderMenu = () => {
        setMenuToggle(prev => !prev);
    } 

    const handleSettingButton = () => {
        setSettingToggle(prev => !prev);
    }

    const utilIcons = {
        0: <SCchat width="26px" height="26px"/>,
        1: <SCopen width="26px" height="26px"/>,
        2: <SCsetting onClick={handleSettingButton} width="26px" height="26px"/>
    }

    useEffect(() => {
        if (windowMobileWidth) {
            if (settingToggle == true) {
                document.getElementById('modalRoot').style.pointerEvents = 'all';
            } else if (settingToggle == false) {
                document.getElementById('modalRoot').style.pointerEvents = 'none';
            }
        }
    }, [settingToggle]);

    return(
        <H.Header className={visible ? 'active' : null} ref={ref}>
            <H.HeaderInner>
                <M768>
                    <H.BtnHambuger onClick={handleHeaderMenu}>
                        <SChamburger width="24px" height="24px" fill="#000"/>
                    </H.BtnHambuger>
                </M768>

                <H.Logo>
                    <Link href="/" title="카트라이더 팁스 로고">
                        <Image src={themeMode === 'light' ? '/ico-kart-logo-black.svg' : '/ico-kart-logo-white.svg'} 
                        width={130} height={29} priority alt="카트라이더 팁스 로고"/>
                    </Link>
                </H.Logo>

                <Min768>
                    <Gnb />

                    <H.Right>
                        <U.UtilArea>
                            {utilArray.filter(item => item !== '앱 설치하기').map((item,index) => {
                                const isItem = item === '설정';

                                return(
                                    <U.UtilTextBox 
                                        key={index} 
                                        href={utilRender(utilLinks,index)} 
                                        rel={!isItem ? 'noopener noreferrer' : null} 
                                        target={!isItem ? '_blank' : null} 
                                        as={isItem && 'button'} 
                                        type={isItem ? 'button' : null}
                                    >

                                        {utilRender(utilIcons,index)}

                                        <T.Tooltip>
                                            <T.TooltipItem>{item}</T.TooltipItem>
                                        </T.Tooltip>
                                    </U.UtilTextBox>
                                )
                            })}

                            {
                                settingToggle &&
                                <Settings
                                    themeMode={themeMode} 
                                    setThemeMode={setThemeMode} 
                                    setSettingToggle={setSettingToggle}
                                    rootFontSize={rootFontSize}
                                    setRootFontSize={setRootFontSize}
                                />
                            }
                        </U.UtilArea>
                        <Pwa />
                    </H.Right>
                </Min768>

                <M768>
                    <H.mobileHeaderMenuWrap className={menuToggle && 'active'}>
                        <H.mobileHeaderMenuList>
                            {utilArray.map((item,index) => {
                                const linkIndex = index === 0 || index === 1;

                                return(
                                    <H.mobileHeaderMenuItem key={index}>
                                        <H.mobileHeaderMenuLink 
                                            href={utilRender(utilLinks,index)} 
                                            as={mobileHeaderMenuTagCondition(linkIndex,item)} 
                                            rel={linkIndex ? 'noopener noreferrer' : null} 
                                            target={linkIndex ? '_blank' : null} 
                                            type={!linkIndex && item !== '앱 설치하기' ? 'button' : null}
                                            onClick={index === 2 ?
                                            () => {
                                                handleSettingButton();
                                                lockScroll();
                                            }

                                            : null
                                        }>
                                            {item === '앱 설치하기' ? <Pwa /> : item}
                                            {linkIndex && <SCopen width="20px" height="20px"/>}
                                        </H.mobileHeaderMenuLink>
                                    </H.mobileHeaderMenuItem>
                                )
                            })}
                        </H.mobileHeaderMenuList>
                        
                    </H.mobileHeaderMenuWrap>

                    <Portal>
                        {
                            settingToggle &&
                            <>
                                <div aria-hidden="true" id="modalDimmed"></div>
                                <Settings
                                    themeMode={themeMode} 
                                    setThemeMode={setThemeMode} 
                                    setSettingToggle={setSettingToggle}
                                    rootFontSize={rootFontSize}
                                    setRootFontSize={setRootFontSize}
                                />
                            </>
                            
                        }
                    </Portal>
                </M768>
            </H.HeaderInner>
        </H.Header>
    )
}