import { css } from "styled-components";

const sizes = {
    small: 375,
    mobile: 500,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
}

const heights = {
    hLarge: 850
}

const sizeObj = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

const heightObj = Object.keys(heights).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (max-height: ${heights[label]}px) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

const media = {
    ...sizeObj,
    ...heightObj
}

export default media;