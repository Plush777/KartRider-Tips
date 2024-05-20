'use client';

import Footer from 'components/layout/common/Footer';
import Header from 'components/layout/common/Header';
import PostContents from 'components/post/PostContents';
import * as DLay from 'style/layout/DefaultLayout.style';
import useTheme from 'hooks/useTheme';
import useFontSize from 'hooks/useFontSize';
import TopNavigation from 'components/sub/TopNavigation';

export default function DefaultLayout ({ children, type }) {
    const { themeMode, setThemeMode } = useTheme();
    const { rootFontSize,  setRootFontSize } = useFontSize();

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
                    <TopNavigation />
                    <PostContents themeMode={themeMode}>
                        {children}
                    </PostContents>
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