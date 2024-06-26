import Link from 'next/link';
import * as H from "style/layout/Header.style";
import SChamburger from 'svg/ico-hamburger.svg';
import { M768, Min768 } from 'components/config/MediaQuery';
import Settings from 'components/setting/Settings';
import HeaderMenuWrap from 'components/sub/HeaderMenuWrap';
import HeaderRight from 'components/sub/HeaderRight';
import Portal from 'components/config/Portal';
import Image from 'next/image';
import Gnb from 'components/layout/common/Gnb';
import useStickyHeader from 'hooks/useStickyHeader';
import { useRecoilState, useRecoilValue } from "recoil";
import { settingToggleAtom } from "recoil/common/settingToggleState";
import { themeModeAtom } from "recoil/common/themeModeState";

export default function HeaderInner() {
    const themeMode = useRecoilValue(themeModeAtom);
    const [settingToggleState, setSettingToggleState] = useRecoilState(settingToggleAtom);
    const { menuToggle, setMenuToggle } = useStickyHeader();

    const handleHeaderMenu = () => {
        setMenuToggle(prev => !prev);
    } 

    const handleSettingButton = () => {
        setSettingToggleState(prev => !prev);
    }
    
    return (
        <H.HeaderInner>
            <M768>
                <H.BtnHambuger onClick={() => handleHeaderMenu()}>
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
                <HeaderRight handleSettingButton={handleSettingButton}>
                    { settingToggleState && <Settings/> }
                </HeaderRight>
            </Min768>

            <M768>
                <HeaderMenuWrap menuToggle={menuToggle} handleSettingButton={handleSettingButton}/>

                <Portal>
                    {
                        settingToggleState &&
                        <>
                            <div aria-hidden="true" id="modalDimmed"></div>
                            <Settings />
                        </>
                        
                    }
                </Portal>
            </M768>
        </H.HeaderInner>
    )
}