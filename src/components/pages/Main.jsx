'use client';

import React, { useEffect , useState } from 'react';
import MainBox from 'components/article/MainBox';
import FootSupport from 'components/article/FootSupport';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Visual from 'components/layout/Visual';
import Started from 'components/contents/common/Started';
import { useDispatch , useSelector } from "react-redux";
import { setStartState } from 'redux/store/store';
import FootNotice from 'components/article/FootNotice';

export default function Main({ videoIds }) {
    let dispatch = useDispatch();
    let started = useSelector(state => state.startState);
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setStartState(false)); 
            return () => clearTimeout(timer);
        }, 3000);

        if(started){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('noScroll');
            window.scrollTo(0,0);
        }
    },[dispatch,started])

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