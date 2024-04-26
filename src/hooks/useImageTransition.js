import { useState, useEffect } from 'react';

const useImageTransition = (loading, delay) => {
    let [isShow, setIsShow] = useState('');

    useEffect(() => {
        if (!loading) {
            let loadTimer = setTimeout(() => setIsShow('active'), delay);
            return () => clearTimeout(loadTimer);
        }
    }, [loading]);

    return { isShow };
}

export default useImageTransition;