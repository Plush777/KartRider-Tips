'use client';

import Footer from 'components/layout/common/Footer';
import Header from 'components/layout/common/Header';
import PostContents from 'components/post/PostContents';
import * as DLay from 'style/layout/DefaultLayout.style';
import { useState, useEffect } from 'react';

export default function DefaultLayout ({ children, type }) {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));

    function getThemeMode() {
        const theme = window.localStorage.getItem('theme')
        return theme ? theme : 'light'
    }

    useEffect(() => {
        if(!window.localStorage.getItem('theme')){
            setThemeMode('light');
        }
        
        document.body.dataset.theme = getThemeMode()
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode);
    },[themeMode]);

    const typeCondition = (type) => {
        if (type === 'main') {
            return (
                <DLay.ContentWrap>
                    <DLay.ContentInner>
                        {children}
                    </DLay.ContentInner>    
                </DLay.ContentWrap>
            )
        } 
        
        if (type === 'sub') {
            return (
                <PostContents themeMode={themeMode}>
                    {children}
                </PostContents>
            )
        }

        return null;
    }

    return(
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <DLay.Main>{typeCondition(type)}</DLay.Main>
            <Footer themeMode={themeMode}/>
        </>
    )
}