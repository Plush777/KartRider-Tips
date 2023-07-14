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

const SubTab = () => {
    let [routeDisabled, setRouteDisabled] = useState('');
    let [pageActive, setPageActive] = useState({
        mode: null,
        character: null,
    });
    let [categoryName, setCategoryName] = useState({
        imgNum: '',
        txtNum: '',
        tabDataState: [],
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

    const categoryNames = {
        '1': {
            imgNum: '1',
            txtNum: '1',
            tabDataState: 'mode'
        },
        '2': {
            imgNum: '2',
            txtNum: null,
            tabDataState: null
        },
        '3': {
            imgNum: '3',
            txtNum: '3',
            tabDataState: 'character'
        }
    }

    const tabDataObjs = {
        mode: {
            routes: ['speed','item','grandprix','timeattack','customgame','license','event'],
            activePage: pageActive.mode,
            routePrefix: 'mode',
            translationPrefix: 'mode.group',
        },
        character: {
            routes: ['common','rare','advenced','epic','legend'],
            activePage: pageActive.character,
            routePrefix: 'character',
            translationPrefix: 'character.group',
        },
    };
    
    const activeTabData = tabDataObjs[categoryName.tabDataState];

    const handlePageActive = (page) => {
        const pageActive = page || {};
        setPageActive(pageActive);
    }
    
    const handleCategoryName = (category) => {
        const categoryName = category || {};
        setCategoryName(categoryName);
    }

    useLayoutEffect(() => {
        if(currentPathname.startsWith('/mode')){
            handlePageActive(modes[currentPathname]);
            handleCategoryName(categoryNames['1']);
        } else if(currentPathname.startsWith('/karts')){
            handleCategoryName(categoryNames['2']);
        } else if(currentPathname.startsWith('/character')){
            handlePageActive(characters[currentPathname]);
            handleCategoryName(categoryNames['3']);
            setRouteDisabled('disabled');
        }
    },[currentPathname]);

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
        return imgNumbers[categoryName.imgNum];
    }

    return ( 
        <SubTabstyled.TabWrap> 
            <SubTabstyled.TabWrapInner>
                <SubTabstyled.TabInfo>
                    {imgNumbersRender()}
                    <SubTabstyled.TabInfoTxt>{t(`info.group${categoryName.imgNum}.name`)}</SubTabstyled.TabInfoTxt>
                    <SCbgArrowRight width="22px" height="22px"/>
                </SubTabstyled.TabInfo>

                <SubTabstyled.TabListSwipe {...params} onSwiper={(swiper) => setSwiper(swiper)}>

                    {Object.keys(tabData[categoryName.tabDataState]).map((item, index) => {
                        return(
                            <SwiperSlide 
                            key={index} 
                            onClick={() => handleChangeSlide(index)}
                            className={`${index > 0 && routeDisabled} ${activeTabData.activePage === index ? 'active' : ''}`}>
                                
                                <Link href={`/${activeTabData.routePrefix}/[${activeTabData.routePrefix}Name]`}>
                                    {t(`${activeTabData.translationPrefix}${index + 1}.name`)}
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