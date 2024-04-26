'use client';

import React, { Suspense, useState } from 'react';
import MainBox from 'components/article/MainBox';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import * as Substyled from 'components/style/common/Area.style';

export default function Main({ videoIds }) {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    return(
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Substyled.Main id='main'>
                <Suspense fallback={null}>
                    <MainBox themeMode={themeMode} videoIds={videoIds}/>
                </Suspense>
            </Substyled.Main>
            <Footer themeMode={themeMode}/>
        </>
    )
}