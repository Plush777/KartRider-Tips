import { useRef , useEffect, useMemo } from "react";
import { throttle } from 'lodash';

export default function useScrollPosition() {
    const divRef = useRef(null);

    const handleScroll = useMemo(() => 
        throttle(() => {
            const scrollTop = divRef.current.scrollTop;
            // console.log('세로 스크롤 위치:', scrollTop);
            localStorage.setItem('scrollTop', scrollTop);
        },250),[divRef]);

        useEffect(() => {
            const scrollTop = localStorage.getItem('scrollTop');
            if (scrollTop) {
                divRef.current.scrollTop = scrollTop;
            }
        },[]);

    return {
        divRef,
        handleScroll
    }
};