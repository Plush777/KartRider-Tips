import { useEffect } from 'react';

const RouteScrollDisabled = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export default RouteScrollDisabled;