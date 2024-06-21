'use client';

import { useState, useEffect } from 'react';

export default function useTheme() {
    const [themeMode, setThemeMode] = useState(window.localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.style.colorScheme = themeMode === 'light' ? 'light' : 'dark';
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode);
    },[themeMode]);

    return { themeMode, setThemeMode };
}