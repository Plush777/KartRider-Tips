'use client';

import tabData from 'locales/ko/tab/tab.json';
import { useLayoutEffect, useState , useCallback, useRef, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import * as SubTabstyled from 'components/style/common/Tab.style';
import { useDispatch , useSelector } from "react-redux";
import { setCategoryName, setPageActive } from 'redux/store/store';
import SCmode from 'svg/ico-tab01.svg';
import SCkartbody from 'svg/ico-tab02.svg';
import SCcharacter from 'svg/ico-tab03.svg';
import SCtrack from 'svg/ico-tab04.svg';
import SCbgArrowRight from 'svg/ico-arrow-right.svg';
import { useTranslation } from 'react-i18next';
import { SwiperSlide } from 'swiper/react';

const SubTab = () => {
    let dispatch = useDispatch();
    let category = useSelector(state => state.categoryName);
    let route = useSelector(state => state.commonRoute);
    let pageActiveState = useSelector(state => state.pageActive);
    let [routePage, setRoutePage] = useState([]);
    let [routeDisabled, setRouteDisabled] = useState('');
    const currentPathname = usePathname();
    const { t } = useTranslation();

    const tabRoute = useCallback(() => {
        return route.tabRoute.map(item => item.link);
    }, [route.tabRoute]);
      
    const characterRoute = useCallback(() => {
        return route.characterRoute.map(item => item.link);
    }, [route.characterRoute]);

    const modeRoutes = ['speed','item','grandprix','timeattack','customgame','license','event'];
    const characterRoutes = ['common','rare','advenced','epic','legend',]

    useLayoutEffect(() => {
        if(currentPathname.startsWith('/mode/speed')){
            dispatch(setPageActive({mode: 0}));
        } else if(currentPathname.startsWith('/mode/item')){
            dispatch(setPageActive({mode: 1}));
        } else if(currentPathname.startsWith('/mode/grandprix')){
            dispatch(setPageActive({mode: 2}));
        } else if(currentPathname.startsWith('/mode/timeattack')){
            dispatch(setPageActive({mode: 3}));
        } else if(currentPathname.startsWith('/mode/customgame')){
            dispatch(setPageActive({mode: 4}));
        } else if(currentPathname.startsWith('/mode/license')){
            dispatch(setPageActive({mode: 5}));
        } else if(currentPathname.startsWith('/mode/event')){
            dispatch(setPageActive({mode: 6}));
        }
    },[currentPathname,dispatch]);

    useLayoutEffect(() => {
        if(currentPathname.startsWith('/character/common')){
            dispatch(setPageActive({character: 0}));
        } else if(currentPathname.startsWith('/character/rare')){
            dispatch(setPageActive({character: 1}));
        } else if(currentPathname.startsWith('/character/advenced')){
            dispatch(setPageActive({character: 2}));
        } else if(currentPathname.startsWith('/character/epic')){
            dispatch(setPageActive({character: 3}));
        } else if(currentPathname.startsWith('/character/legend')){
            dispatch(setPageActive({character: 4}));
        }
    },[currentPathname,dispatch]);

    useLayoutEffect(() => {
        if(currentPathname.startsWith('/mode')){
            dispatch(setCategoryName(
                {
                    imgNum: '1',
                    txtNum: '1',
                    tabDataState: 'mode'
                }
            ));
            setRoutePage(tabRoute);
        } else if(currentPathname.startsWith('/karts')){
            dispatch(setCategoryName(
                {
                    imgNum: '2',
                    txtNum: null,
                    tabDataState: null
                }
            ));
            setRoutePage([]);
        } else if(currentPathname.startsWith('/character')){
            dispatch(setCategoryName(
                {
                    imgNum: '3',
                    txtNum: '3',
                    tabDataState: 'character'
                }
            ));
            setRoutePage(characterRoute);
            setRouteDisabled('disabled');
        }
    },[currentPathname,dispatch,tabRoute,characterRoute]);

    const params = {
        watchOverflow: true,
        slidesPerView: "auto",
        freeMode: true
    }

    const [swiper, setSwiper] = useState();
    const getTabActiveIndex = localStorage.getItem('tabActiveIndex');

    const handleChangeSlide = (index) => {
        localStorage.setItem('tabActiveIndex', index);
    }

    useEffect(() => {
        if(swiper){
            swiper.slideTo(getTabActiveIndex);
        }
    }, [swiper]);

    const imgNumbers = {
        1: <SCmode fill="#818181"/>,
        2: <SCkartbody fill="#818181"/>,
        3: <SCcharacter fill="#818181"/>,
        4: <SCtrack fill="#818181"/>
    }

    const imgNumbersRender = () => {
        return imgNumbers[category.imgNum];
    }

    return ( 
        <SubTabstyled.TabWrap> 
            <SubTabstyled.TabWrapInner>
                <SubTabstyled.TabInfo>
                    {imgNumbersRender()}
                    <SubTabstyled.TabInfoTxt>{t(`info.group${category.imgNum}.name`)}</SubTabstyled.TabInfoTxt>
                    <SCbgArrowRight width="22px" height="22px"/>
                </SubTabstyled.TabInfo>

                <SubTabstyled.TabListSwipe {...params} onSwiper={(swiper) => setSwiper(swiper)}>
                    {category.tabDataState === 'mode' &&
                        Object.keys(tabData.mode).map((item, index) => {
                            return (
                                <SwiperSlide key={index} onClick={() => handleChangeSlide(index)} className={pageActiveState.mode === index ? 'active' : null}>
                                    <Link href={`/mode/[modeName]`} as={`/mode/${modeRoutes[index]}`}>{t(`mode.group${index+1}.name`)}</Link>
                                </SwiperSlide>
                        )})
                    }

                    {category.tabDataState === 'character' &&
                        Object.keys(tabData.character).map((item, index) => {
                            return (
                                <SwiperSlide onClick={() => handleChangeSlide(index)} className={`${index > 0 && routeDisabled} ${pageActiveState.character === index ? 'active' : null}`} key={index}>
                                    <Link href={`/character/[characterName]`} as={`/character/${characterRoutes[index]}`}>{t(`character.group${index+1}.name`)}</Link>
                                </SwiperSlide>
                        )})
                    }
                </SubTabstyled.TabListSwipe>
            </SubTabstyled.TabWrapInner>
        </SubTabstyled.TabWrap>
    );
}

export default SubTab;