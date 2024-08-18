import { useLayoutEffect, useMemo, useState, useRef } from 'react';
import { throttle } from 'lodash';

export default function useStickyHeader() {
    const beforeScrollY = useRef(0);
    const [visible, setVisible] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleScroll = useMemo(() =>
        throttle(() => {
            const currentScrollY = window.scrollY;

            if (beforeScrollY.current < currentScrollY) {
                setVisible(false);
                setMenuToggle(false);
            } else {
                setVisible(true);
            }

            beforeScrollY.current = currentScrollY;
        }, 250),
    []);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        setVisible(true);
    };

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useLayoutEffect(() => {
        if (isMobile) {
            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setVisible('');
        }
    }, [isMobile, handleScroll]);

    return { visible, menuToggle, setMenuToggle };
}
