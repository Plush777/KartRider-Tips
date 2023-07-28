'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import SubTab from 'components/contents/common/SubTab';
import SubVisual from 'components/contents/common/SubVisual';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import FootSupport from 'components/article/FootSupport';
import FootNotice from 'components/article/FootNotice';
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';
import GripContents from "components/contents/GripContents";
import DriftContents from "components/contents/DriftContents";
import OptimizeContents from "components/contents/OptimizeContents";
import gripData from "locales/ko/tech/grip.json";
import driftData from "locales/ko/tech/drift.json";
import optimizeData from "locales/ko/tech/optimize.json";

export default function Tech({ params, searchParams }) {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));
    
    return(
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <SubTab params={params}/>

                {params.techName === 'grip' && <GripContents/>}
                {params.techName === 'drift' && <DriftContents driftData={driftData}/>}
                {params.techName === 'optimize' && <OptimizeContents optimizeData={optimizeData}/>}

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