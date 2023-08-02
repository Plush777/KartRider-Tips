'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as MainBoxstyled from 'components/style/components/main/MainBox.style';
import box from 'locales/ko/main/box';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import VideoList from 'components/article/VideoList';

const MainBox = () => {

    let [boxData] = useState(box);
    let route = useSelector(state => state.commonRoute); 

    const routeFilter = route.routeList.map((item,index) => item.link).filter((item,index) => index !== 2);
    const { t } = useTranslation();

    const handleClick = () => {
        localStorage.setItem('tabActiveIndex', 0);
    }

    return (  
        <MainBoxstyled.ContentWrap>
            <MainBoxstyled.MainBoxWrap>
                <MainBoxstyled.MainBoxList>
                    {Object.keys(boxData.box).map((item, index) => {
                        return (
                            <MainBoxstyled.MainBoxItems key={index}>
                                <Link href={routeFilter[index]} onClick={handleClick}>
                                    <MainBoxstyled.MainBoxInner>
                                        <MainBoxstyled.TxtBox>
                                            <MainBoxstyled.Title>{t(`box.group${index+1}.title`)}</MainBoxstyled.Title>
                                            <MainBoxstyled.Desc>{t(`box.group${index+1}.desc`)}</MainBoxstyled.Desc>
                                        </MainBoxstyled.TxtBox> 
                                    </MainBoxstyled.MainBoxInner>
                                </Link>
                            </MainBoxstyled.MainBoxItems>
                        )
                    })}
                </MainBoxstyled.MainBoxList>

                <VideoList />
            </MainBoxstyled.MainBoxWrap>    
        </MainBoxstyled.ContentWrap>
    );
}

export default MainBox;