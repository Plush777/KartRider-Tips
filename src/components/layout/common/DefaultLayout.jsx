'use client';

import Footer from 'components/layout/common/Footer';
import Header from 'components/layout/common/Header';
import ArticleContents from 'components/article/ArticleContents';
import * as DLay from 'style/layout/DefaultLayout.style';
import useTheme from 'hooks/useTheme';
import useFontSize from 'hooks/useFontSize';
import TopNavigation from 'components/sub/TopNavigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRecoilValue } from "recoil";
import { settingToggleAtom } from "recoil/common/settingToggleState";

export default function DefaultLayout ({ children, type }) {
    const [windowMobileWidth] = useState(window.innerWidth <= 768);
    const settingToggleState = useRecoilValue(settingToggleAtom);

    useTheme();
    useFontSize();

    useEffect(() => {
        if (windowMobileWidth) {
            if (settingToggleState) {
                document.getElementById('modalRoot').style.pointerEvents = 'all';
            } else if (!settingToggleState) {
                document.getElementById('modalRoot').style.pointerEvents = 'none';
            }
        }
    }, [settingToggleState]);

    const pathname = usePathname();

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
                <>
                    {pathname.startsWith('/docs') && <TopNavigation />} 
                    <ArticleContents type={pathname.startsWith('/docs') && 'hasNavigation'}>
                        {children}
                    </ArticleContents>
                </>
            )
        }

        return null;
    }

    return(
        <>
            <Header />
            <DLay.Main>{typeCondition(type)}</DLay.Main>
            <Footer/>
        </>
    )
}