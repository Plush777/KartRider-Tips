'use client';

import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { themeModeAtom } from 'recoil/common/themeModeState';

export default function useTheme() {
    const [themeMode] = useRecoilState(themeModeAtom);

    useEffect(() => {
        document.documentElement.style.colorScheme = themeMode === 'light' ? 'light' : 'dark';
        document.body.dataset.theme = themeMode;
        localStorage.setItem('theme', themeMode);
    },[themeMode]);
}