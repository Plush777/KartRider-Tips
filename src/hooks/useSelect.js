import { useState } from 'react';

export const useSelect = () => {

    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(
        {
            kart: '프로토',
            character: '배찌',
            lang: '한국어',
            channel: '리버스'
        }
    );

    const handleSelectClick = (key, e) => {
        setSelected(prev => {
            return {
                ...prev,
                [key]: e.target.textContent
            }
        });
        setToggle(false);
        localStorage.setItem(key, e.target.textContent);
    };

    const handleToggleSelect = () => {
        setToggle(!toggle);
    };

    return [selected, toggle, handleSelectClick, handleToggleSelect, setSelected];
}

export default useSelect;