import * as Headerstyled from "components/style/layout/Header.style";
import * as Buttonstyled from "components/style/common/Button.style"; 
import { useTranslation } from 'react-i18next';
import settingData from 'locales/ko/etc/etc';
import langData from 'data/languageList';
import useLanguageSelect from 'hooks/useLanguageSelect';
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from 'react-redux';
import useFontSize from "hooks/useFontSize";
import SCclose from 'svg/ico-close.svg';
import { M768 } from "components/style/mobile/MediaQuery";
import useBodyScrollLock from 'hooks/useBodyScrollLock';

const Settings = ({ display , themeMode , setThemeMode , setDisplay }) => {

    const { t } = useTranslation();
    const { handleSelectClick, handleSelectLang } = useLanguageSelect();
    const { getFontSize , handleSelectFontSize } = useFontSize();
    const [activeIndex, setActiveIndex] = useState({
        lang: null,
        fontSize: null,
        theme: null,
    });
    const language = useSelector(state => state.language);
    const root = document.getElementsByTagName('html')[0];
    const { openScroll } = useBodyScrollLock();

    const handleActive = (listKey, index) => {
        setActiveIndex((prevIndexes) => ({
            ...prevIndexes,
            [listKey]: prevIndexes[listKey] === index ? null : index,
        }));
    }

    const handleFontSize = (index) => {
        if(index === 0 && 'small'){
            root.classList.add('small');
            root.classList.remove('large','default');
        } else if(index === 1 && 'default'){
            root.classList.add('default');
            root.classList.remove('large','small');
        } 
        else if(index === 2 && 'large'){
            root.classList.add('large');
            root.classList.remove('small','default');
        } 
    }

    const handleTheme = (index) => {
        if(index === 0){
            setThemeMode('light');
        } else if(index === 1){
            setThemeMode('dark');
        }
    }

    const handleMobileSettingClose = () => {
        setDisplay(false);
        openScroll();
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
        <>
            <Headerstyled.SettingWrap className={display && 'active'}>
                <Headerstyled.SettingList>
                    <Headerstyled.SettingItem>
                        <Headerstyled.SettingTitle>{t(`settingTitles.group1.txt1`)}</Headerstyled.SettingTitle>
                        <M768>
                            <button type="button" className="btnClose" onClick={handleMobileSettingClose}>
                                <SCclose width="22px" height="22px" fill="#000"/>   
                            </button>
                        </M768>
                        
                        <Headerstyled.SettingButtonList>
                            {langData.lang.map((item,index) => {
                                const fixActive = 
                                language === 'ko' && index === 0 ? 'fixed' :
                                language === 'en' && index === 1 ? 'fixed' :
                                language === 'ja' && index === 2 ? 'fixed' : 
                                language === 'zh' && index === 3 ? 'fixed' : 
                                null;

                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={(e) => {
                                        handleSelectClick('lang', e)
                                        handleSelectLang(index)
                                        handleActive('lang',index)
                                    }} className={`${fixActive}`}>{item.name}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Headerstyled.SettingButtonList>
                    </Headerstyled.SettingItem>

                    <Headerstyled.SettingItem>
                        <Headerstyled.SettingTitle>{t(`settingTitles.group1.txt2`)}</Headerstyled.SettingTitle>
                        
                        <Headerstyled.SettingButtonList>
                            {Object.values(settingData.settingButtons.group1).map((item,index) => {
                                const fixActive = 
                                getFontSize === 'small' && index === 0 ? 'fixed' : 
                                getFontSize === 'default' && index === 1 ? 'fixed' : 
                                getFontSize === 'large' && index === 2 ? 'fixed' : 
                                null;

                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={() => {
                                        handleSelectFontSize(index)
                                        handleFontSize(index)
                                        handleActive('fontSize',index)
                                    }} className={`${fixActive}`}>{item}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Headerstyled.SettingButtonList>
                    </Headerstyled.SettingItem>

                    <Headerstyled.SettingItem>
                        <Headerstyled.SettingTitle>{t(`settingTitles.group1.txt3`)}</Headerstyled.SettingTitle>
                        
                        <Headerstyled.SettingButtonList>
                            {Object.values(settingData.settingButtons.group2).map((item,index) => {
                                const fixActive = 
                                themeMode === 'light' && index === 0 ? 'fixed' : 
                                themeMode === 'dark' && index === 1 ? 'fixed' : 
                                null;

                                return(
                                    <Buttonstyled.BtnSetting key={index} onClick={() => {
                                        handleTheme(index)
                                        handleActive('theme',index)
                                    }} className={`${fixActive}`} >{item}</Buttonstyled.BtnSetting>
                                )
                            })}
                        </Headerstyled.SettingButtonList>
                    </Headerstyled.SettingItem>
                </Headerstyled.SettingList>
                
            </Headerstyled.SettingWrap>
        </>
    )
}

export default Settings;