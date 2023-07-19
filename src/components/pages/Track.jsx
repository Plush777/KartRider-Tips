'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import React from 'react';
import SubTab from 'components/contents/common/SubTab';
import SubVisual from 'components/contents/common/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';
import TrackContents from "components/contents/TrackContents";

export default function Track({ params, searchParams }) {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));
    
    return(
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <SubTab params={params}/>
                <TrackContents/>
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