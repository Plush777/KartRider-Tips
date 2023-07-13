import { useLayoutEffect, useState } from "react";

const useFontSize = () => {

    const root = document.getElementsByTagName('html')[0];
    const [rootFontSize, setRootFontSize] = useState('default');
    const getFontSize = localStorage.getItem('fontSize');

    const handleSelectFontSize = index => {
        let fontSize;

        if (index === 0) {
            fontSize = 'small';
        } else if (index === 1) {
            fontSize = 'default';
        } else if (index === 2) {
            fontSize = 'large';
        }

        setRootFontSize(fontSize);
        localStorage.setItem('fontSize', fontSize);
    }

    useLayoutEffect(() => {
        if (!getFontSize) {
            setRootFontSize('default');
            localStorage.setItem('fontSize', 'default');
        } else if (getFontSize) {
            setRootFontSize(getFontSize);
            localStorage.setItem('fontSize', getFontSize);
            root.classList.add(getFontSize);
        }
    }, [rootFontSize, getFontSize]);

    return { getFontSize, handleSelectFontSize };
}

export default useFontSize;