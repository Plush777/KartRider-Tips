import { useEffect, useMemo } from "react";
import { throttle } from 'lodash';

const documentScroll = () => {
    const handleDocumentScroll = useMemo(() =>
        throttle(() => {
            const scrollTop = window.scrollY;
            // console.log(scrollTop);
            sessionStorage.setItem('scroll', scrollTop);
        }, 250), [window]);

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScroll);

        return () => window.removeEventListener('scroll', handleDocumentScroll);
    }, []);

    useEffect(() => {
        const scrollTop = sessionStorage.getItem('scroll');

        if (scrollTop) {
            window.scrollTo(0, parseInt(scrollTop, 10));
        }
    }, []);

    return {
        handleDocumentScroll
    }
}

export default documentScroll;