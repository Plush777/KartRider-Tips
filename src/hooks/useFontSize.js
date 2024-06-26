'use client';

import { useEffect } from "react";
import { fontSizeArray } from "data/setting";
import { useRecoilState } from "recoil";
import { rootFontSizeAtom } from "recoil/common/rootFontSizeState";

export default function useFontSize() {
    const [rootFontSize, setRootFontSize] = useRecoilState(rootFontSizeAtom);
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
}