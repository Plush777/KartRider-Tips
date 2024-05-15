import * as Headerstyled from "style/layout/Header.style";
import * as Buttonstyled from "style/common/Button.style"; 
import * as Set from "style/components/header/Setting.style"; 
import { useState } from "react";
import useFontSize from "hooks/useFontSize";
import SCclose from 'svg/ico-close.svg';
import { M768 } from "components/config/MediaQuery";
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import useClickOutside from "hooks/useClickOutside";
import { fontSizeArray, themeArray, fontSizeObject, themeObject } from 'data/setting';

export default function Settings({ themeMode , setThemeMode, setSettingToggle, isMobile }) {
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

    return(
        <Headerstyled.DimmedWrap className={isMobile}>
            <Set.SettingWrap ref={ref}>
                <Set.SettingList>
                    <Set.SettingItem>
                        <Set.SettingTitle>글자 크기 설정</Set.SettingTitle>
                        <M768>
                            <button type="button" className="btnClose" onClick={() => {
                                settingClose()
                                openScroll()
                            }}>
                                <SCclose width="22px" height="22px" fill="#000"/>   
                            </button>
                        </M768>
                        
                        <Set.SettingButtonList>
                            {fontSizeArray.map((item,index) => {
                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={() => {
                                        handleSelectFontSize(index)
                                        handleFontSize(index)
                                        handleActive('fontSize',index)
                                    }} className={activeCondition(fontSizeObject, getFontSize, index)}>{item}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Set.SettingButtonList>
                    </Set.SettingItem>

                    <Set.SettingItem>
                        <Set.SettingTitle>테마 설정</Set.SettingTitle>
                        
                        <Set.SettingButtonList>
                            {themeArray.map((item,index) => {
                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={() => {
                                        handleTheme(index)
                                        handleActive('theme',index)
                                    }} className={activeCondition(themeObject, themeMode, index)}>{item}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Set.SettingButtonList>
                    </Set.SettingItem>
                </Set.SettingList>
            </Set.SettingWrap>
        </Headerstyled.DimmedWrap>
    )
}