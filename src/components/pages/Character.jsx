'use client';

import SubTab from "components/contents/common/SubTab";
import SubVisual from "components/contents/common/SubVisual";
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import FootSupport from 'components/article/FootSupport';
import CharacterCommonContents from "components/contents/CharacterCommonContents";
import FootNotice from "components/article/FootNotice";
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';
import characterCommonContentsData from 'locales/ko/character/common/contents.json';
import { useState } from "react";

export default function Character({ params }) {
    const [characterCommon] = useState(characterCommonContentsData);
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return ( 
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <SubTab/>
                {params.characterName === 'common' && <CharacterCommonContents characterCommon={characterCommon}/>}
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