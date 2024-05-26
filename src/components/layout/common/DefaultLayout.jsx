'use client';

import Footer from 'components/layout/common/Footer';
import Header from 'components/layout/common/Header';
import ArticleContents from 'components/article/ArticleContents';
import * as DLay from 'style/layout/DefaultLayout.style';
import useTheme from 'hooks/useTheme';
import useFontSize from 'hooks/useFontSize';
import TopNavigation from 'components/sub/TopNavigation';
import { usePathname } from 'next/navigation';

export default function DefaultLayout ({ children, type }) {
    const { themeMode, setThemeMode } = useTheme();
    const { rootFontSize,  setRootFontSize } = useFontSize();

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
                    <ArticleContents type={pathname.startsWith('/docs') && 'hasNavigation'} themeMode={themeMode}>
                        {children}
                    </ArticleContents>
                </>
            )
        }

        return null;
    }

    return(
        <>
            <Header 
                themeMode={themeMode} 
                setThemeMode={setThemeMode}
                rootFontSize={rootFontSize}
                setRootFontSize={setRootFontSize}
            />
          
            <DLay.Main>{typeCondition(type)}</DLay.Main>
            <Footer themeMode={themeMode}/>
        </>
    )
}