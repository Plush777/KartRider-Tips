import { useLayoutEffect, useMemo, useState , useRef } from 'react';
import { throttle } from 'lodash';

const useStickyHeader = () => {
    const beforeScrollY = useRef(0);
    const [visible, setVisible] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false);

    const handleScroll = useMemo(() => 
        throttle(() => {
            const currentScrollY = window.scrollY;

            if(beforeScrollY.current < currentScrollY){
                setVisible(false);
                setMenuToggle(false);
            } else {
                setVisible(true);
            }

            beforeScrollY.current = currentScrollY;

            // console.log(beforeScrollY.current);
        }, 250),[beforeScrollY]);

    useLayoutEffect(() => {
        if(window.matchMedia('(max-width: 768px)').matches){
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
            
        } else {
            setVisible('');
        }
    },[handleScroll]);

    return { visible, menuToggle, setMenuToggle };
}

export default useStickyHeader;