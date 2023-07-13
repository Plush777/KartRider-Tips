'use client';

import { useState,useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import * as SubVisualstyled from 'components/style/common/SubVisual.style';
import { useDispatch , useSelector } from "react-redux";
import { setSubVisualTitle } from "redux/store/store";
import { useTranslation } from 'react-i18next';

const SubVisual = () => {

    const pathname = usePathname();
    const { t } = useTranslation();
    let [visualName,setVisualName] = useState('');
    let dispatch = useDispatch();
    let subVisualData = useSelector(state => state.subVisualTitle.value);

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            dispatch(setSubVisualTitle({title:t('category.group1.name')}));
            setVisualName('mode');
        } else if(pathname.startsWith('/karts')){
            dispatch(setSubVisualTitle({title:t('category.group2.name')}));
            setVisualName('kartbody');
        } else if(pathname.startsWith('/character')){
            dispatch(setSubVisualTitle({title:t('category.group3.name')}));
            setVisualName('character');
        } else if(pathname.startsWith('/track')){
            dispatch(setSubVisualTitle({title:t('category.group4.name')}));
            setVisualName('track');
        } else if(pathname.startsWith('/purpose')){
            dispatch(setSubVisualTitle({title:t('category.group7.name')}));
            setVisualName('');
        } else if(pathname.startsWith('/credit')){
            dispatch(setSubVisualTitle({title:t('category.group8.name')}));
            setVisualName('');
        }  else if(pathname.startsWith('/inquiry')){
            dispatch(setSubVisualTitle({title:t('category.group9.name')}));
            setVisualName('');
        } 

        
    }, [pathname,dispatch,t]);

    return ( 
        <SubVisualstyled.SubVisualWrap>
            <SubVisualstyled.SubViusalInner className={
            pathname.startsWith('/credit') || pathname.startsWith('/purpose') || pathname.startsWith('/inquiry') ? 'gray' : null} 
            visualName={visualName}>
                <SubVisualstyled.SubVisualTitleArea>
                    <SubVisualstyled.SubVisualTitle>{subVisualData.title}</SubVisualstyled.SubVisualTitle>
                </SubVisualstyled.SubVisualTitleArea>
            </SubVisualstyled.SubViusalInner>
        </SubVisualstyled.SubVisualWrap>
    );
}

export default SubVisual;