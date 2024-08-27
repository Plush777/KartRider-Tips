'use client';

import * as DLay from 'style/layout/DefaultLayout.style';
import ArticleContents from 'components/article/ArticleContents';
import useTheme from 'hooks/useTheme';
import useFontSize from 'hooks/useFontSize';
import TopNavigation from 'components/sub/TopNavigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRecoilValue } from "recoil";
import { settingToggleAtom } from "recoil/common/settingToggleState";
import BtnTop from 'components/common/BtnTop';

export default function TypeLayout({ children, type }) {
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
                    <BtnTop /> 
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

    return (
        <DLay.Main>
            {typeCondition(type)}
        </DLay.Main>
    )
}