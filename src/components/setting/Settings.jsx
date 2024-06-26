import * as H from "style/layout/Header.style";
import * as B from "style/common/Button.style"; 
import * as Set from "style/components/header/Setting.style"; 
import SCclose from 'svg/ico-close.svg';
import { M768 } from "components/config/MediaQuery";
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import useClickOutside from "hooks/useClickOutside";
import { fontSizeArray, themeArray, fontSizeObject, themeObject, activeCondition, renderText } from 'data/setting';
import { useSetRecoilState, useRecoilState } from "recoil";
import { settingToggleAtom } from "recoil/common/settingToggleState";
import { rootFontSizeAtom } from 'recoil/common/rootFontSizeState';
import { themeModeAtom } from "recoil/common/themeModeState";

export default function Settings() {
    const setSettingToggleState = useSetRecoilState(settingToggleAtom);
    const [themeMode, setThemeMode] = useRecoilState(themeModeAtom);
    const [rootFontSize, setRootFontSize] = useRecoilState(rootFontSizeAtom);
    const { openScroll } = useBodyScrollLock();

    const settingClose = () => {
        setSettingToggleState(false);

        if (window.matchMedia('(max-width: 768px)').matches) {
            openScroll();
        }
    }

    const ref = useClickOutside(settingClose);

    const handleTheme = (index) => {
        setThemeMode(themeArray[index] || 'light');
    }

    const handleFontSize = (index) => {
        setRootFontSize(fontSizeArray[index] || 'default');
    }

    return(
        <H.DimmedWrap>
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
                                    <B.BtnSetting 
                                        key={index} 
                                        onClick={() => {handleFontSize(index)}} 
                                        className={activeCondition(fontSizeObject, rootFontSize, index)}>
                                        {renderText(fontSizeArray, item)}
                                    </B.BtnSetting>
                                )
                            })}
                        </Set.SettingButtonList>
                    </Set.SettingItem>

                    <Set.SettingItem>
                        <Set.SettingTitle>테마 설정</Set.SettingTitle>
                        
                        <Set.SettingButtonList>
                            {themeArray.map((item,index) => {
                                return(
                                    <B.BtnSetting 
                                    key={index} 
                                    onClick={() => {handleTheme(index)}} 
                                    className={activeCondition(themeObject, themeMode, index)}>
                                        {renderText(themeArray, item)}
                                    </B.BtnSetting>
                                )
                            })}
                        </Set.SettingButtonList>
                    </Set.SettingItem>
                </Set.SettingList>
            </Set.SettingWrap>
        </H.DimmedWrap>
    )
}