import { useState } from 'react';

const useSelect = () => {
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(
        {
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
    };

    const handleToggleSelect = () => {
        setToggle(!toggle);
    };

    return [toggle, setToggle, handleSelectClick, handleToggleSelect, setSelected];
}

export default useSelect;