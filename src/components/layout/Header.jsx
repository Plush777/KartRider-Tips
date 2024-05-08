'use client';

import Link from 'next/link';
import * as Headerstyled from "components/style/layout/Header.style";
import { M768, Min768 } from 'components/style/mobile/MediaQuery';
import { useRef, useState, useEffect } from 'react';
import SCchat from 'svg/ico-chat.svg';
import SCopen from 'svg/ico-open.svg';
import SCsetting from 'svg/ico-setting.svg';
import SChamburger from 'svg/ico-hamburger.svg';
import useBodyScrollLock from 'hooks/useBodyScrollLock'; 
import useStickyHeader from 'hooks/useStickyHeader';
import Settings from 'components/article/Settings';
import useClickOutside from "hooks/useClickOutside";
import Portal from 'components/layout/Portal';
import Image from 'next/image';
import { utilRender, utilArray, utilLinks } from 'data/header';

const Header = ({ themeMode , setThemeMode }) => {
    const ref = useRef();
    const outSideRef = useClickOutside(() => setMenuToggle(false));
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

    return(
        <Headerstyled.Headers className={`${visible}`} ref={ref}>
            <Headerstyled.HeaderInner>
                <M768>
                    <Headerstyled.BtnHambuger onClick={handleHeaderMenu}>
                        <SChamburger width="24px" height="24px" fill="#000"/>
                    </Headerstyled.BtnHambuger>
                </M768>

                <Headerstyled.Logo>
                    <Link href="/" title="카트라이더 팁스 로고">
                        <Image src={themeMode === 'light' ? '/ico-kart-logo-black.svg' : '/ico-kart-logo-white.svg'} 
                        width={130} height={29} priority alt="카트라이더 팁스 로고"/>
                    </Link>
                </Headerstyled.Logo>

                <Min768>
                    <Headerstyled.UtilArea>
                        {utilArray.map((item,index) => {
                            const lastIndex = utilArray.length - 1;
                            const isLast = index === lastIndex;

                            return(
                                <Headerstyled.UtilTextBox 
                                    key={index} 
                                    href={utilRender(utilLinks,index)} 
                                    rel={!isLast ? 'noopener noreferrer' : null} 
                                    target={!isLast ? '_blank' : null} 
                                    as={isLast && 'button'} 
                                    type={isLast ? 'button' : null}
                                >

                                    {utilRender(utilIcons,index)}

                                    <Headerstyled.Tooltip>
                                        <Headerstyled.TooltipItem>{item}</Headerstyled.TooltipItem>
                                    </Headerstyled.Tooltip>
                                </Headerstyled.UtilTextBox>
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
                    </Headerstyled.UtilArea>
                </Min768>

                <M768>
                    <Headerstyled.mobileHeaderMenuWrap ref={outSideRef} className={menuToggle && 'active'}>
                        <Headerstyled.mobileHeaderMenuList>
                            {utilArray.map((item,index) => {
                                const lastIndex = utilArray.length - 1;
                                const isLast = index === lastIndex;

                                return(
                                    <Headerstyled.mobileHeaderMenuItem key={index}>
                                        <Headerstyled.mobileHeaderMenuLink 
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
                                        </Headerstyled.mobileHeaderMenuLink>
                                    </Headerstyled.mobileHeaderMenuItem>
                                )
                            })}
                        </Headerstyled.mobileHeaderMenuList>
                        
                    </Headerstyled.mobileHeaderMenuWrap>

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
            </Headerstyled.HeaderInner>
        </Headerstyled.Headers>
    )
}

export default Header;