'use client';

import ReactDOM from "react-dom";

export default function PreloadResources() {
    ReactDOM.preload('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css',{
        as: 'style',
    });

    return null;
}