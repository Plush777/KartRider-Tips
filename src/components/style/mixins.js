import { css } from "styled-components";

export const aic = css`
    display: flex;
    align-items: center;
`

export const jcc = css`
    display: flex;
    justify-content: center;
`

export const fcol = css`
    display: flex;
    flex-direction: column;
`

export const fc = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const fcc = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const bgOption = css`
    background-repeat: no-repeat;
    background-position: center;
`

export const posCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const whFull = css`
    width: 100%;
    height: 100%;
`

export const font = (f,c) => css`
    font-family: ${f};
    color: ${c};
`

export const skeleton = css`
    @keyframes skeleton-loading {
        0% {opacity: .3;}
        100% {opacity: .8;}   
    }
    animation: ${props => props.loading ? 'skeleton-loading 1s linear infinite alternate' : 'none'};
`

const mixins = {
    aic,
    jcc,
    fcol,
    fc,
    fcc,
    bgOption,
    posCenter,
    whFull,
    font,
    skeleton
}

export default mixins;