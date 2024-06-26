'use client';

import React, { useState } from 'react';
import Intro from 'components/intro/Intro';
import DefaultLayout from 'components/layout/common/DefaultLayout';
import MainLayout from 'components/layout/main/MainLayout';
import * as M from 'style/components/main/Main.style';

export default function Main() {
    const [intro, setIntro] = useState(false);
    const isSession = sessionStorage.getItem('intro');

    return(
        <>
            {!intro && !isSession ? 
                <Intro setIntro={setIntro}/> 
                : 
                <M.Container className={!isSession ? null : 'active'}>
                    <DefaultLayout type="main">
                        <MainLayout/>
                    </DefaultLayout>
                </M.Container>
            }
        </>
    )
}