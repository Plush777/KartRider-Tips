export const fontSizeArray = ['small', 'default', 'large'];
export const themeArray = ['light','dark'];
export const fontSizeObject = { 'small': 0, 'default': 1, 'large': 2 }
export const themeObject = { 'light': 0, 'dark': 1 }

export const activeCondition = (object, getData, index) => {
    const map = object;
    return map[getData] === index ? 'fixed' : null;
}

export const renderText = (data,item) => {
    if (data === fontSizeArray) {
        if (item === 'small') return '작게';
        if (item === 'default') return '보통';
        if (item === 'large') return '크게';

        return null;
    }

    if (data === themeArray) {
        if (item === 'light') return '라이트';
        if (item === 'dark')  return '다크';

        return null;
    }
}