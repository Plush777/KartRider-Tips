'use client';

import { useEffect, useState } from "react";
import { fontSizeArray } from "data/setting";

export default function useFontSize() {
    const [rootFontSize, setRootFontSize] = useState(window.localStorage.getItem('fontSize') || 'default');
    const root = document.getElementsByTagName('html')[0];

    useEffect(() => {
        setRootFontSize(rootFontSize);
        window.localStorage.setItem('fontSize', rootFontSize);
        root.classList.add(rootFontSize);

        fontSizeArray.forEach((item) => {
            if (item !== rootFontSize) {
                root.classList.remove(item);
            }
        });
       
    }, [rootFontSize]);

    return { rootFontSize, setRootFontSize };
}