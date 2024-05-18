export const changeLink = (pathArray, pageName) => {
    if (pageName === 'learn') {
        const mapping = pathArray.map((item) => {
            if (item === 'learn') return '배우기';
        });

        return mapping;
    }
}