'use client';

import React, { useState } from 'react';
import MainBox from 'components/article/MainBox';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Intro from 'components/common/Intro';
import styled from "styled-components";
import * as Substyled from 'components/style/common/Area.style';

const Container = styled.div`
   transition: .3s ease-in-out;
   transition-delay: .5s;
   opacity: 0;

    &.active{
        opacity: 1;
    }
`

export default function Main({ videoIds }) {
    const [intro, setIntro] = useState(false);
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));
    const isSession = sessionStorage.getItem('intro');

    return(
        <>
            {!intro && !isSession ? 
                <Intro setIntro={setIntro}/> 
                : 
                <Container className={!isSession ? null : 'active'}>
                    <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
                    <Substyled.Main>
                        <MainBox themeMode={themeMode} videoIds={videoIds}/>
                    </Substyled.Main>
                    <Footer themeMode={themeMode}/>
                </Container>
            }
        </>
    )
}