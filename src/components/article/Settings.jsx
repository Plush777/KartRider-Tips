import * as Headerstyled from "components/style/layout/Header.style";
import * as Buttonstyled from "components/style/common/Button.style"; 
import { useEffect, useLayoutEffect, useState } from "react";
import useFontSize from "hooks/useFontSize";
import SCclose from 'svg/ico-close.svg';
import { M768 } from "components/style/mobile/MediaQuery";
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import useClickOutside from "hooks/useClickOutside";
import { fontSizeArray, themeArray, fontSizeObject, themeObject } from 'data/setting';

const Settings = ({ themeMode , setThemeMode, setSettingToggle, isMobile }) => {
    const { getFontSize , handleSelectFontSize } = useFontSize();
    const [activeIndex, setActiveIndex] = useState({
        fontSize: null,
        theme: null,
    });
    const root = document.getElementsByTagName('html')[0];
    const { openScroll } = useBodyScrollLock();

    const settingClose = () => {
        setSettingToggle(false);

        if (window.matchMedia('(max-width: 768px)').matches) {
            openScroll();
        }
    }

    const ref = useClickOutside(settingClose);

    const handleActive = (listKey, index) => {
        setActiveIndex((prevIndexes) => ({
            ...prevIndexes,
            [listKey]: prevIndexes[listKey] === index ? null : index,
        }));
    }

    const handleFontSize = (index) => {
        const sizeArray = ['small', 'default', 'large']; 

        sizeArray.forEach((size, i) => {
            if (i === index) {
                root.classList.add(size);
            } else {
                root.classList.remove(size);
            }
        });
    }

    const handleTheme = (index) => {
        const themes = ['light', 'dark'];
        setThemeMode(themes[index] || 'light');
    }

    const activeCondition = (object, getData, index) => {
        const map = object;
        return map[getData] === index ? 'fixed' : null;
    }
    
    useEffect(() => {
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode);
    },[themeMode]);

    useLayoutEffect(() => {
        if(!window.localStorage.getItem('theme')){
            setThemeMode('light');
        }

        function getThemeMode() {
            const theme = window.localStorage.getItem('theme')
            return theme ? theme : 'dark'
        }
        document.body.dataset.theme = getThemeMode()
    },[themeMode]);

    return(
        <Headerstyled.DimmedWrap className={isMobile}>
            <Headerstyled.SettingWrap ref={ref}>
                <Headerstyled.SettingList>
                    <Headerstyled.SettingItem>
                        <Headerstyled.SettingTitle>글자 크기 설정</Headerstyled.SettingTitle>
                        <M768>
                            <button type="button" className="btnClose" onClick={() => {
                                settingClose()
                                openScroll()
                            }}>
                                <SCclose width="22px" height="22px" fill="#000"/>   
                            </button>
                        </M768>
                        
                        <Headerstyled.SettingButtonList>
                            {fontSizeArray.map((item,index) => {
                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={() => {
                                        handleSelectFontSize(index)
                                        handleFontSize(index)
                                        handleActive('fontSize',index)
                                    }} className={activeCondition(fontSizeObject, getFontSize, index)}>{item}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Headerstyled.SettingButtonList>
                    </Headerstyled.SettingItem>

                    <Headerstyled.SettingItem>
                        <Headerstyled.SettingTitle>테마 설정</Headerstyled.SettingTitle>
                        
                        <Headerstyled.SettingButtonList>
                            {themeArray.map((item,index) => {
                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={() => {
                                        handleTheme(index)
                                        handleActive('theme',index)
                                    }} className={activeCondition(themeObject, themeMode, index)}>{item}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Headerstyled.SettingButtonList>
                    </Headerstyled.SettingItem>
                </Headerstyled.SettingList>
                
            </Headerstyled.SettingWrap>
        </Headerstyled.DimmedWrap>
    )
}

export default Settings;