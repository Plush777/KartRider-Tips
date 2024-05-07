'use client';

import React, { useState } from 'react';
import Intro from 'components/common/Intro';
import styled from "styled-components";
import DefaultLayout from 'components/layout/DefaultLayout';
import VideoList from 'components/article/VideoList';

const Container = styled.div`
   transition: .3s ease-in-out;
   transition-delay: .5s;
   opacity: 0;

    &.active{
        opacity: 1;
    }
`

export default function Main() {
    const [intro, setIntro] = useState(false);
    const isSession = sessionStorage.getItem('intro');

    return(
        <>
            {!intro && !isSession ? 
                <Intro setIntro={setIntro}/> 
                : 
                <Container className={!isSession ? null : 'active'}>
                    <DefaultLayout type="main">
                        <VideoList/>
                    </DefaultLayout>
                </Container>
            }
        </>
    )
}