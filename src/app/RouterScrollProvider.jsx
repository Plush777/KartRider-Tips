'use client';

import RouteScroll from "utils/RouteScroll";
import { useDispatch , useSelector } from "react-redux";
import { setRouterScroll } from 'redux/store/store';
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouterScrollProvider(){

    const pathname = usePathname();
    const dispatch = useDispatch();
    let routerScroll = useSelector(state => state.routerScroll);

    useEffect(() => {  
		if(pathname.startsWith === '/main'){ 
			dispatch(setRouterScroll(true));
		} else {
            dispatch(setRouterScroll(false));
        }
	},[pathname,dispatch]);

    return(
        <>
            {routerScroll && <RouteScroll/>}
        </>
    )
}