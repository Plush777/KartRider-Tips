import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRouterScroll } from 'redux/store/store';

export const useSelect = () => {

    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const [selected,setSelected] = useState(
        {
            kart: '프로토',
            character: '배찌',
            lang: '한국어'
        }
    );

    const handleSelectClick = (key, e) => {
        setSelected(prev => {
            return {
            ...prev,
                [key]: e.target.textContent
            }
        });
        dispatch(setRouterScroll(false));
        setToggle(false);
    };

    const handleToggleSelect = () => {
        setToggle(!toggle);
    };

    return [selected, toggle, handleSelectClick, handleToggleSelect, setSelected];
}

export default useSelect;