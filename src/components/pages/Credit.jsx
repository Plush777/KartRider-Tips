'use client';

import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/contents/common/SubVisual";
import SourceContents from "../../components/contents/SourceContents";
import BottomNavigation from "components/mobile/BottomNavigation";
import { useSelector } from "react-redux";
import { M768 } from 'components/style/mobile/MediaQuery';
import * as Substyled from 'components/style/common/Area.style';
import sourceData from 'locales/ko/etc/source.json';
import { useState } from "react";

export default function Credit(){
    const [sources] = useState(sourceData);
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return ( 
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <SourceContents sources={sources}/>
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