'use client';

import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import PurposeContents from "../../components/contents/PurposeContents";
import * as Substyled from 'components/style/common/Area.style';
import { Suspense, useState } from "react";

export default function Purpose(){
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return ( 
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main>
                <Suspense fallback={null}>
                    <PurposeContents themeMode={themeMode}/>
                </Suspense>
            </Substyled.Main>
            <Footer themeMode={themeMode}/>
        </>
    );
}