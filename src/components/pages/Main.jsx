'use client';

import React, { useEffect , useState } from 'react';
import MainBox from 'components/article/MainBox';
import FootSupport from 'components/article/FootSupport';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Visual from 'components/layout/Visual';
import Started from 'components/contents/common/Started';
import FootNotice from 'components/article/FootNotice';

export default function Main({ videoIds }) {
    const [started, setStarted] = useState(true);
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    useEffect(() => {
        let timer = setTimeout(() => {
            setStarted(false);
            return () => clearTimeout(timer);
        }, 3000);

        if(started){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('noScroll');
            window.scrollTo(0,0);
        }
    },[started])

    return(
        <>  
            {
                started && <Started themeMode={themeMode}/> 
            }
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