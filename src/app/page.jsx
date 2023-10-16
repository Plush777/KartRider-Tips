'use client';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import * as Landingstyled from 'components/style/components/landing/landing.style';
import * as Buttonstyled from 'components/style/common/Button.style';
import { useTranslation } from 'react-i18next';
import landingData from 'locales/ko/landing/contents.json';
import React, { Fragment, useEffect , useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import landingArrays from 'values/landingArray';
import { useSectionInteraction , useItemInteraction , useEndInteraction } from 'values/interactionHook';
import { useState } from 'react';

export default function Page() {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme'));
    const { t } = useTranslation();
    const landingDataDepth1 = landingData.landing.depth1;
    const [userBoxImages, sectionImages, sectionRoutes, sectionImageWidth, sectionImageHeight] = landingArrays;
    const sectionInteraction = useSectionInteraction();
    const endInteraction = useEndInteraction();
    const { section2TitleRef, section2TitleInView, section2BoxRef, section2BoxInView, section3TitleRef,section3TitleInView } = sectionInteraction;
    const { endRef, endInView, endRef02, endInView02} = endInteraction;

    useEffect(() => {
        document.body.classList.add('noScroll');   
    },[]);

    useEffect(() => {
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode);
    },[themeMode]);

    useLayoutEffect(() => {
        if(!window.localStorage.getItem('theme')){
            setThemeMode('light');
        }

        function getThemeMode() {
            const theme = window.localStorage.getItem('theme')
            return theme ? theme : 'dark'
        }
        document.body.dataset.theme = getThemeMode()
    },[themeMode]);

    return (
        <>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>

            <Landingstyled.Wrap>
                <Landingstyled.Section className='type01'>
                    <Landingstyled.TitleArea>
                        <Landingstyled.Title>
                            <Landingstyled.TitleTxt as="span">{t(`landing.depth1.group0.title`)}</Landingstyled.TitleTxt>
                            <Landingstyled.TitleTxtArea>
                                {Object.keys(landingDataDepth1.group1).map((item,index) => {
                                    return(
                                        <Fragment key={index}>
                                            <Landingstyled.TitleTxt as="span" dot>{t(`landing.depth1.group1.title${index+1}`)}</Landingstyled.TitleTxt>
                                        </Fragment>
                                    )
                                })}
                            </Landingstyled.TitleTxtArea>
                            <Landingstyled.ButtonArea>
                                <Link href={`/main`}>
                                    <Buttonstyled.White>{t(`landing.depth1.etc.btn`)}</Buttonstyled.White>
                                </Link>
                            </Landingstyled.ButtonArea>
                        </Landingstyled.Title>
                    </Landingstyled.TitleArea>

                    <Landingstyled.Obj obj1>
                        <Image src="/images/ai/ai-dao.webp" alt="" width="444" height="411"/>
                    </Landingstyled.Obj>

                    <Landingstyled.Obj obj2>
                        <Image src="/images/ai/ai-marid.webp" alt="" width="459" height="546"/>
                    </Landingstyled.Obj>

                    <Landingstyled.Obj obj3>
                        <Image src="/images/ai/ai-diz.webp" alt="" width="360" height="384"/>
                    </Landingstyled.Obj>
                </Landingstyled.Section>

                <Landingstyled.Section className='type02'>
                    <Landingstyled.TitleArea type02>
                        <Landingstyled.Title type02 className="col">
                            <Landingstyled.Transition type01 ref={section2TitleRef}
                            className={section2TitleInView && 'on'}>
                                {Object.keys(landingDataDepth1.group2).map((item,index) => {
                                    return(
                                        <Landingstyled.Title02 key={index}>{t(`landing.depth1.group2.title${index+1}`)}</Landingstyled.Title02>
                                    )
                                })}
                            </Landingstyled.Transition>
                        </Landingstyled.Title>
                    </Landingstyled.TitleArea>

                    <Landingstyled.UserBoxWrapper>
                        <Landingstyled.Transition ref={section2BoxRef} className={section2BoxInView && 'on'}>
                            <Landingstyled.UserBoxList>
                                {Object.keys(landingDataDepth1.group3).map((item,index) => {
                                    return(
                                        <Landingstyled.UserBoxItem key={index}>
                                            <Image key={index} src={userBoxImages[index]} alt="" width="218" height="218" />
                                            <Landingstyled.UserBoxTitle>{t(`landing.depth1.group3.txt${index+1}`)}</Landingstyled.UserBoxTitle>
                                            <Landingstyled.UserBoxName>{t(`landing.depth1.group4.name${index+1}`)}</Landingstyled.UserBoxName>
                                        </Landingstyled.UserBoxItem>
                                    )
                                })}
                            </Landingstyled.UserBoxList>
                        </Landingstyled.Transition>
                    </Landingstyled.UserBoxWrapper>
                </Landingstyled.Section>    

                <Landingstyled.Section className='type03'>
                    <Landingstyled.TitleArea type02 >
                        <Landingstyled.Transition ref={section3TitleRef} className={section3TitleInView && 'on'}>
                            {Object.keys(landingDataDepth1.group5).map((item,index) => {
                                return(
                                    <Fragment key={index}>
                                        <Landingstyled.Title type02>
                                            {t(`landing.depth1.group5.title`)}
                                        </Landingstyled.Title>
                                    </Fragment>
                                )
                            })}
                        </Landingstyled.Transition>
                    </Landingstyled.TitleArea>

                    <Landingstyled.ContentsWrap>
                        <Landingstyled.ContentsList>
                            {Object.keys(landingDataDepth1.group6).map((item,index) => {

                                const itemInteraction = useItemInteraction();
                                const { itemRef, itemInView, itemRef02, itemInView02, itemRef03, itemInView03, itemRef04, itemInView04 } = itemInteraction;

                                return(
                                    <Landingstyled.ContentsItem key={index}>
                                        <Landingstyled.Transition ref={itemRef} className={itemInView ? 'on' : ''}>
                                            <Image src={sectionImages[index]} alt="" width={sectionImageWidth[index]} 
                                            height={sectionImageHeight[index]}/>
                                        </Landingstyled.Transition>

                                        <Landingstyled.ContentsTxtBox>
                                            <Landingstyled.Transition ref={itemRef02} className={itemInView02 ? 'on' : ''}>
                                                <Landingstyled.ContentsTitle>{t(`landing.depth1.group6.title${index+1}`)}</Landingstyled.ContentsTitle>
                                            </Landingstyled.Transition>
                                            
                                            <Landingstyled.Transition ref={itemRef03} className={itemInView03 ? 'on' : ''}>
                                                <Landingstyled.ContentsDescription>{t(`landing.depth1.group7.desc${index+1}`)}</Landingstyled.ContentsDescription>
                                            </Landingstyled.Transition>
                                            
                                            <Landingstyled.Transition ref={itemRef04} className={itemInView04 ? 'on' : ''}>
                                                <Landingstyled.ButtonArea>
                                                    <Link href={sectionRoutes[index]}>
                                                        <Buttonstyled.White radius="true">{t(`landing.depth1.etc.btn`)}</Buttonstyled.White>
                                                    </Link>
                                                </Landingstyled.ButtonArea>
                                            </Landingstyled.Transition>
                                        </Landingstyled.ContentsTxtBox>
                                    </Landingstyled.ContentsItem>
                                )
                            })}
                        </Landingstyled.ContentsList>
                    </Landingstyled.ContentsWrap>

                    <Landingstyled.EndArea>
                        <Landingstyled.Transition ref={endRef} className={endInView && 'on'}>
                            <Landingstyled.EndTxt>{t(`landing.depth1.group8.title`)}</Landingstyled.EndTxt>
                        </Landingstyled.Transition>
                        
                        <Landingstyled.Transition ref={endRef02} className={endInView02 && 'on'}>
                            <Landingstyled.EndDesc>{t(`landing.depth1.group8.desc`)}</Landingstyled.EndDesc>
                            <Landingstyled.EndDesc>{t(`landing.depth1.group8.desc2`)}</Landingstyled.EndDesc>
                        </Landingstyled.Transition>
                    </Landingstyled.EndArea>
                </Landingstyled.Section>
            </Landingstyled.Wrap>

            <Footer themeMode={themeMode}/>
        </>
    )
}