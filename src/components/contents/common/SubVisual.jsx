'use client';

import { useState,useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import * as SubVisualstyled from 'components/style/common/SubVisual.style';
import { useTranslation } from 'react-i18next';

const SubVisual = () => {

    const pathname = usePathname();
    const { t } = useTranslation();
    let [visualName,setVisualName] = useState('');
    let [visualTitle,setVisualTitle] = useState('');

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            setVisualTitle(t('category.group1.name'));
            setVisualName('mode');
        } else if(pathname.startsWith('/karts')){
            setVisualTitle(t('category.group2.name'));
            setVisualName('kartbody');
        } else if(pathname.startsWith('/character')){
            setVisualTitle(t('category.group3.name'));
            setVisualName('character');
        } else if(pathname.startsWith('/track')){
            setVisualTitle(t('category.group4.name'));
            setVisualName('track');
        } else if(pathname.startsWith('/purpose')){
            setVisualTitle(t('category.group7.name'));
            setVisualName('');
        } else if(pathname.startsWith('/credit')){
            setVisualTitle(t('category.group8.name'));
            setVisualName('');
        }  else if(pathname.startsWith('/inquiry')){
            setVisualTitle(t('category.group9.name'));
            setVisualName('');
        } 

        
    }, [pathname,t]);

    return ( 
        <SubVisualstyled.SubVisualWrap>
            <SubVisualstyled.SubViusalInner className={
            pathname.startsWith('/credit') || pathname.startsWith('/purpose') || pathname.startsWith('/inquiry') ? 'gray' : null} 
            visualName={visualName}>
                <SubVisualstyled.SubVisualTitleArea>
                    <SubVisualstyled.SubVisualTitle>{visualTitle}</SubVisualstyled.SubVisualTitle>
                </SubVisualstyled.SubVisualTitleArea>
            </SubVisualstyled.SubViusalInner>
        </SubVisualstyled.SubVisualWrap>
    );
}

export default SubVisual;