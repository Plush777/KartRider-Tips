'use client';

import * as BottomSheetstyled from 'components/style/mobile/BottomSheet.style';
import * as Substyled from 'components/style/common/Area.style'; 
import SCclose from 'svg/ico-close.svg';
import SCdictionary from 'svg/ico-dictionary.svg';
import SCskill from 'svg/ico-skill.svg';
import { useSelector , useDispatch } from 'react-redux';  
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useRef , useLayoutEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setOutside , setToggle } from 'redux/store/store'; 
import { useTranslation } from 'react-i18next';
import etc from 'locales/ko/etc/etc.json';

const BottomSheet = () => {

    const ref = useRef();
    const router = useRouter();
    const dispatch = useDispatch();
    const { openScroll } = useBodyScrollLock();
    let gnbData = useSelector(state => state.gnb.menus);
    let route = useSelector(state => state.commonRoute);
    const gnbDataFilter = Object.values(gnbData).filter(item => item.id >= 6);
    const { t } = useTranslation();
    let outsideData = useSelector(state => state.outside);
    let bottomSheetDisplay = useSelector(state => state.toggle);
    const language = useSelector(state => state.language);

    const handleBottomSheetClose = useCallback(() => {
        router.back();
        dispatch(setOutside(false));
        dispatch(setToggle({
            bottomSheet: null
        }));
    }, [dispatch,router]);

    useLayoutEffect(() => {
        if(outsideData === true && ref){ //outsideData가 true이면 dimmed와 함께 숨겨짐.
            handleBottomSheetClose();
        }
    },[outsideData,dispatch,handleBottomSheetClose])

    useOnClickOutside(ref,openScroll);

    return ( 
        <>
            <BottomSheetstyled.Wrap className={bottomSheetDisplay.bottomSheet}>
                <BottomSheetstyled.Head>
                    <BottomSheetstyled.HeadTitle>{t(`bottomSheet.txt1`)}</BottomSheetstyled.HeadTitle>
                    <BottomSheetstyled.BtnClose onClick={handleBottomSheetClose}>
                        <SCclose width="24px" height="24px" fill="#000"/>
                        <span className="hidden">{t(`bottomSheet.txt2`)}</span>
                    </BottomSheetstyled.BtnClose>
                </BottomSheetstyled.Head>

                <BottomSheetstyled.Body>
                    <BottomSheetstyled.List>
                            {gnbDataFilter.map((item,index) => {

                                const itemId = gnbDataFilter[index].id
                                // const itemName = gnbDataFilter[index].name
                                const routeLink = route.routeList.find(routeItem => routeItem.id === itemId).link;

                                return(
                                    <BottomSheetstyled.Item key={itemId} className="disabled">
                                        <BottomSheetstyled.ListLink href={routeLink} title={t(`menus.group${index+6}.name`)}>
                                            {
                                                itemId === 6 ? <Substyled.Ico zIndex="100" left="11px" top="23px"><SCdictionary width="20px" height="20px" fill="#666"/></Substyled.Ico>
                                                : itemId === 7 ? <Substyled.Ico zIndex="100" left="10px" top="24px"><SCskill width="18px" height="18px" fill="#666"/></Substyled.Ico>
                                                : null
                                            }
                                            {t(`menus.group${index+6}.name`)}
                                        </BottomSheetstyled.ListLink>
                                    </BottomSheetstyled.Item>
                                )
                            })}
                    </BottomSheetstyled.List>
                </BottomSheetstyled.Body>
            </BottomSheetstyled.Wrap>
           
            {outsideData === false && <Substyled.DimmedHidden className={bottomSheetDisplay.bottomSheet === 'active' ? 'active' : 'none'} ref={ref}/>}
        </>
    );
}

export default BottomSheet;