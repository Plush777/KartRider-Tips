/* https://usehooks.com/useOnClickOutside/ */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOutside } from 'redux/store/store';

export const useOnClickOutside = (ref, handler) => {

    const dispatch = useDispatch();
    let outsideData = useSelector(state => state.outside);

    useEffect(() => {
        const listener = e => {
            if (!ref.current || ref.current.contains(e.target)) {
                dispatch(setOutside(true))
                return;
            }

            handler(e);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchend', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchend', listener);
        };
    }, [ref, handler, dispatch, outsideData]);
}

export default useOnClickOutside;
