'use client';

import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/contents/common/SubVisual";
import PurposeContents from "../../components/contents/PurposeContents";
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';
import purposeData from 'locales/ko/etc/purpose.json'; 
import { useState } from "react";

export default function Purpose(){
    const [purposes] = useState(purposeData);
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return ( 
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <PurposeContents purposes={purposes} themeMode={themeMode}/>
                <FootSupport/>
                <FootNotice/>
                <Footer themeMode={themeMode}/>
            </Substyled.Main>
            <M768>
                <BottomNavigation/>
            </M768>
        </>
    );
}