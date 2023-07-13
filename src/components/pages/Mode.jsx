'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import React from 'react';
import SubTab from 'components/contents/common/SubTab';
import SubVisual from 'components/contents/common/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import SpeedContents from 'components/contents/SpeedContents';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';
import ItemContents from "components/contents/ItemContents";
import GrandPrizeContents from "components/contents/GrandPrizeContents";
import TimeAttackContents from "components/contents/TimeAttackContents";
import CustomGameContents from "components/contents/CustomGameContents";
import LicenseContents from "components/contents/LicenseContents";
import EventModeContents from "components/contents/EventModeContents";
import itemContentsData from 'locales/ko/mode/itemMode/contents';
import grandPrizeData from 'locales/ko/mode/rankMode/contents';
import licenseData from 'locales/ko/mode/singleMode/license/contents';
import eventData from 'locales/ko/mode/eventMode/contents';

/* params.modeName : 현재 경로 출력 */

export default function Mode({ params, searchParams }) {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));
    
    return(
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <SubTab params={params}/>
                
                {params.modeName === 'speed' && <SpeedContents/>}
                {params.modeName === 'item' && <ItemContents itemContentsData={itemContentsData}/>}
                {params.modeName === 'grandprix' && <GrandPrizeContents grandPrizeData={grandPrizeData}/>}
                {params.modeName === 'timeattack' && <TimeAttackContents/>}
                {params.modeName === 'customgame' && <CustomGameContents/>}
                {params.modeName === 'license' && <LicenseContents licenseData={licenseData}/>}
                {params.modeName === 'event' && <EventModeContents eventData={eventData}/>}

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