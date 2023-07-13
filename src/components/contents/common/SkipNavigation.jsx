'use client';

import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const AccNav = styled.div`
    position:absolute; 
    top:0; 
    left:0; 
    z-index: 990; 
    width:100px; 
    height:30px;

    a{
        display:block; 
        position:absolute; 
        left:0; 
        top:0; 
        overflow:hidden; 
        width:1px; 
        height:1px; 
        margin-left:-1px; 
        margin-bottom:-1px; 
        text-align:center; 
        color:#fff; 
        white-space:nowrap;

        &:focus,&:hover,&:active{
            z-index:1000; 
            width:100%; 
            height:auto; 
            padding:5px 0;
            background:#444;
            font-size: 0.875rem;
            color:#fff;
            font-weight:700;
        }
    }
`

const SkipNavigation = () => {

    const { t } = useTranslation();

    return ( 
        <AccNav>
            <Link href="#main">{t(`skip.group1.txt`)}</Link>
            <Link href="#gnb">{t(`skip.group2.txt`)}</Link>
        </AccNav>
    );
}

export default SkipNavigation;