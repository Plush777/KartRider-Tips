'use client';

import React, { useEffect, useState } from 'react';
import MainBox from 'components/article/MainBox';
import FootSupport from 'components/article/FootSupport';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Visual from 'components/layout/Visual';
import FootNotice from 'components/article/FootNotice';

export default function Main({ videoIds }) {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    useEffect(() => {
        document.body.classList.remove('noScroll');   
    },[]);

    return(
        <>  
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <main id='main'>
                <Visual/>
                <MainBox videoIds={videoIds}/>
            </main>
            <FootSupport/>
            <FootNotice/>
            <Footer themeMode={themeMode}/>
        </>
    )
}