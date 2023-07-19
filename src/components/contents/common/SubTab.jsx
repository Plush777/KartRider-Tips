'use client';

import tabData from 'locales/ko/tab/tab.json';
import { useLayoutEffect, useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import * as SubTabstyled from 'components/style/common/Tab.style';
import SCmode from 'svg/ico-tab01.svg';
import SCkartbody from 'svg/ico-tab02.svg';
import SCcharacter from 'svg/ico-tab03.svg';
import SCtrack from 'svg/ico-tab04.svg';
import SCbgArrowRight from 'svg/ico-arrow-right.svg';
import { useTranslation } from 'react-i18next';
import { SwiperSlide } from 'swiper/react';
import routes from 'data/route.json';

const SubTab = () => {
    const tabDataObjs = {
        mode: {
            translationPrefix: 'mode.group'
        },
        character: {
            translationPrefix: 'character.group'
        },
        track: {
            translationPrefix: 'track.group'
        },
        numbers: {
            '1': {
                imgNum: '1',
                txtNum: '1',
                name: 'mode'
            },
            '2': {
                imgNum: '2',
                txtNum: null,
            },
            '3': {
                imgNum: '3',
                txtNum: '3',
                name: 'character'
            },
            '4': {
                imgNum: '4',
                txtNum: '4',
                name: 'track'
            },
        }
    };

    let [routeDisabled, setRouteDisabled] = useState('');
    let [pageActive, setPageActive] = useState({
        mode: null,
        character: null,
    });
    let [categoryName, setCategoryName] = useState({
        imgNum: '',
        txtNum: '',
        name: ''
    });
    let [categoryData, setCategoryData] = useState({
        data: '',
        route: ''
    });
    const currentPathname = usePathname();
    const { t } = useTranslation();

    const modes = {
        '/mode/speed': { mode: 0 },
        '/mode/item': { mode: 1 },
        '/mode/grandprix': { mode: 2 },
        '/mode/timeattack': { mode: 3 },
        '/mode/customgame': { mode: 4 },
        '/mode/license': { mode: 5 },
        '/mode/event': { mode: 6 },
    }

    const characters = {
        '/character/common': { character: 0 },
        '/character/rare': { character: 1 },
        '/character/advenced': { character: 2 },
        '/character/epic': { character: 3 },
        '/character/legend': { character: 4 },
    }

    const tracks = {
        '/track/village': { track: 0 },
        '/track/desert': { track: 1 },
        '/track/forest': { track: 2 },
        '/track/ice': { track: 3 },
        '/track/mine': { track: 4 },
        '/track/world': { track: 5 },
        '/track/factory': { track: 6 },
        '/track/wkc': { track: 7 },
        '/track/graveyard': { track: 8 },
        '/track/moonhill': { track: 9 },
    }

    const handlePageActive = (page) => {
        const pageActive = page || {};
        setPageActive(pageActive);
    }

    const handleCategoryName = (category) => {
        setCategoryName(category);
    }
    
    useLayoutEffect(() => {
        if(currentPathname.startsWith('/mode')){
            handlePageActive(modes[currentPathname]);
            handleCategoryName(tabDataObjs.numbers['1']);
            setCategoryData({data: tabData.mode, route: routes.tabRoute});
        } else if(currentPathname.startsWith('/karts')){
            handleCategoryName(tabDataObjs.numbers['2']);
        } else if(currentPathname.startsWith('/character')){
            handlePageActive(characters[currentPathname]);
            handleCategoryName(tabDataObjs.numbers['3']);
            setCategoryData({data: tabData.character, route: routes.characterRoute});
            setRouteDisabled('disabled');
        } else if(currentPathname.startsWith('/track')){
            handlePageActive(tracks[currentPathname]);
            handleCategoryName(tabDataObjs.numbers['4']);
            setCategoryData({data: tabData.track, route: routes.trackRoute});
        }
    },[currentPathname]);

    const swiperParams = {
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
        return imgNumbers[categoryName.imgNum];
    }

    const routeList = Object.values(categoryData.route).map((item, index) => {
        return item.link;
    });

    return ( 
        <SubTabstyled.TabWrap> 
            <SubTabstyled.TabWrapInner>
                <SubTabstyled.TabInfo>
                    {imgNumbersRender()}
                    <SubTabstyled.TabInfoTxt>{t(`info.group${categoryName.imgNum}.name`)}</SubTabstyled.TabInfoTxt>
                    <SCbgArrowRight width="22px" height="22px"/>
                </SubTabstyled.TabInfo>

                <SubTabstyled.TabListSwipe {...swiperParams} onSwiper={(swiper) => setSwiper(swiper)}>

                    {Object.keys(categoryData.data).map((item, index) => {
                        return(
                            <SwiperSlide 
                            key={index} 
                            onClick={() => handleChangeSlide(index)}
                            className={`${index > 0 && routeDisabled} ${pageActive[categoryName.name] === index ? 'active' : ''}`}>
                                
                                <Link href={routeList[index]}>
                                    {t(`${tabDataObjs[categoryName.name].translationPrefix}${index + 1}.name`)}
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </SubTabstyled.TabListSwipe>
            </SubTabstyled.TabWrapInner>
        </SubTabstyled.TabWrap>
    );
}

export default SubTab;