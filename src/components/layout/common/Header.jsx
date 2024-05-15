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
import { utilRender, utilArray, utilLinks } from 'data/header';
import Pwa from 'components/pwa/pwa';

export default function Header ({ themeMode , setThemeMode }) {
    const ref = useRef();
    const { lockScroll } = useBodyScrollLock();
    const { visible, menuToggle, setMenuToggle } = useStickyHeader(ref);
    const [settingToggle, setSettingToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(undefined);

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
        if (window.matchMedia('(max-width: 768px)').matches) {
            setIsMobile('mobile');
        } else {
            setIsMobile('');
        }
    }, [isMobile]);

    useEffect(() => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            if (settingToggle == true) {
                document.getElementById('modalRoot').style.pointerEvents = 'all';
            } else if (settingToggle == false) {
                document.getElementById('modalRoot').style.pointerEvents = 'none';
            }
        }
    }, [settingToggle]);

    return(
        <H.Header className={`${visible}`} ref={ref}>
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

                <M768>
                    <Pwa type="icon"/>
                </M768>

                <Min768>
                    <U.UtilArea>
                        {utilArray.map((item,index) => {
                            const lastIndex = utilArray.length - 1;
                            const isLast = index === lastIndex;

                            return(
                                <U.UtilTextBox 
                                    key={index} 
                                    href={utilRender(utilLinks,index)} 
                                    rel={!isLast ? 'noopener noreferrer' : null} 
                                    target={!isLast ? '_blank' : null} 
                                    as={isLast && 'button'} 
                                    type={isLast ? 'button' : null}
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
                            />
                        }

                        <Pwa type="button"/>
                    </U.UtilArea>
                </Min768>

                <M768>
                    <H.mobileHeaderMenuWrap className={menuToggle && 'active'}>
                        <H.mobileHeaderMenuList>
                            {utilArray.map((item,index) => {
                                const lastIndex = utilArray.length - 1;
                                const isLast = index === lastIndex;

                                return(
                                    <H.mobileHeaderMenuItem key={index}>
                                        <H.mobileHeaderMenuLink 
                                        href={utilRender(utilLinks,index)} 
                                        as={isLast && 'button'} 
                                        rel={!isLast ? 'noopener noreferrer' : null} 
                                        target={!isLast ? '_blank' : null} 
                                        type={isLast ? 'button' : null}
                                        onClick={isLast ?
                                            () => {
                                                handleSettingButton();
                                                lockScroll();
                                            }

                                            : null
                                        }>
                                            {item}
                                            {!isLast && <SCopen width="20px" height="20px"/>}
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
                                    isMobile={isMobile}
                                />
                            </>
                            
                        }
                    </Portal>
                </M768>
            </H.HeaderInner>
        </H.Header>
    )
}