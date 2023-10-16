import { useEffect, useMemo } from "react";
import { throttle } from 'lodash';

export default function useWindowScroll() {
    const handleScroll = useMemo(() =>
        throttle(() => {
            const scrollTop = window.scrollY;
            // console.log(scrollTop);
            localStorage.setItem('windowScroll', scrollTop);
        }, 250), [window]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const scrollTop = localStorage.getItem('windowScroll');

        if (scrollTop) {
            window.scrollTo(0, parseInt(scrollTop, 10));
        }
    }, []);

    return {
        handleScroll
    }
}