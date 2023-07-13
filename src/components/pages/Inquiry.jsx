'use client';

import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/contents/common/SubVisual";
import InquiryContents from "components/contents/InquiryContents";
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';
import { useState } from "react";

export default function Inquiry(){
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return(
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <InquiryContents themeMode={themeMode}/>
                <FootSupport/>
                <FootNotice/>
                <Footer themeMode={themeMode}/>
            </Substyled.Main>
            <M768>
                <BottomNavigation/>
            </M768>
        </>
    )
}