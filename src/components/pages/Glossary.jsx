'use client';

import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/contents/common/SubVisual";
import BottomNavigation from "components/mobile/BottomNavigation";
import { M768 } from 'components/style/mobile/MediaQuery';
import * as Substyled from 'components/style/common/Area.style';
import { useState } from "react";
import GlossaryContents from "components/contents/GlossaryContents";

export default function Glossary(){
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return ( 
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <GlossaryContents/>
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