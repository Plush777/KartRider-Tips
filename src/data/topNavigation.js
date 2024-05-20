export const changeLink = (link, pageName) => {
    if (pageName === 'learn') {
        const mapping = link.map((item) => {
            if (item === 'learn') return '배우기';
        });

        return mapping;
    }
}