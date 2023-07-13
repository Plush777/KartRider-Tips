'use client';

import * as Headerstyled from "components/style/layout/Header.style";
import { useSelector , useDispatch } from 'react-redux';
import Link from 'next/link';
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { setGnbActive } from "redux/store/store";
import { useTranslation } from 'react-i18next';

const Gnb = () => {

    let gnbData = useSelector(state => state.gnb);  
    let gnbActiveState = useSelector(state => state.gnbActive);
    let route = useSelector(state => state.commonRoute);
    const dispatch = useDispatch();

    const handleClick = (e,index) => {
        dispatch(setGnbActive(index));
        localStorage.setItem('tabActiveIndex', 0);
    }

    const routeFilter = route.routeList.map((item,index) => item.link).filter(item => item.id !== 3);

    const pathname = usePathname();

    const { t } = useTranslation();

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            dispatch(setGnbActive(0));
        } else if(pathname.startsWith('/karts')){
            dispatch(setGnbActive(1));
        } else if(pathname.startsWith('/character')){
            dispatch(setGnbActive(3));
        } else if (pathname.startsWith('/track')){
            dispatch(setGnbActive(4));
        } else if(pathname.startsWith('/')){
            dispatch(setGnbActive(null));
        }
    },[pathname,dispatch])

    return ( 
        <Headerstyled.Gnb id="gnb">
            <Headerstyled.GnbList className="miniX">
                {Object.keys(gnbData.menus).map((item,index) => {

                    const itemId = gnbData.menus[item].id;

                    return(
                        itemId !== 3 && (<Headerstyled.GnbItem className={`${gnbActiveState === index ? 'active' : ''}${itemId > 4 ? 'disabled' : ''}`} 
                        key={index} onClick={e => handleClick(e, index)}>
                            <Link href={routeFilter[index]} title={t(`menus.group${index+1}.name`)}>{t(`menus.group${index+1}.name`)}</Link>
                        </Headerstyled.GnbItem>)
                    )
                })}
            </Headerstyled.GnbList>
        </Headerstyled.Gnb>
     );
}

export default Gnb;