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
import ShortFullContents from "components/contents/ShortFullContents";
import RepeatContents from "components/contents/RepeatContents";
import DoubleDriftContents from "components/contents/DoubleDriftContents";
import CuttingDriftContents from "components/contents/CuttingDriftContents";
import ScrewContents from "components/contents/ScrewContents";
import NewCuttingContents from "components/contents/NewCuttingContents";
import LongDriftContents from "components/contents/LongDriftContents";
import SpinTurnContents from "components/contents/SpinTurnContents";

import gripData from "locales/ko/tech/grip.json";
import driftData from "locales/ko/tech/drift.json";
import optimizeData from "locales/ko/tech/optimize.json";
import shortFullData from "locales/ko/tech/shortfull.json";
import repeatData from "locales/ko/tech/repeat.json";
import doubleDriftData from "locales/ko/tech/double.json";
import cuttingDriftData from "locales/ko/tech/cutting.json";
import screwData from "locales/ko/tech/screw.json";
import newcuttingData from "locales/ko/tech/newcutting.json";
import longDriftData from "locales/ko/tech/long.json";
import spinturnData from "locales/ko/tech/spinturn.json";

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
                {params.techName === 'shortfull' && <ShortFullContents shortFullData={shortFullData}/>}
                {params.techName === 'repeat' && <RepeatContents repeatData={repeatData}/>}
                {params.techName === 'double' && <DoubleDriftContents doubleDriftData={doubleDriftData}/>}
                {params.techName === 'cutting' && <CuttingDriftContents cuttingDriftData={cuttingDriftData}/>}
                {params.techName === 'screw' && <ScrewContents screwData={screwData}/>}
                {params.techName === 'newcutting' && <NewCuttingContents newcuttingData={newcuttingData}/>}
                {params.techName === 'long' && <LongDriftContents longDriftData={longDriftData}/>}
                {params.techName === 'spinturn' && <SpinTurnContents spinturnData={spinturnData}/>}

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