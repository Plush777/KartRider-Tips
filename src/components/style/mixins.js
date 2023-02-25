import { css } from "styled-components";

export const aic = css`
    display: flex;
    align-items: center;
`

export const aifs = css`
    display: flex;
    align-items: flex-start;
`

export const jcfe = css`
    display: flex;
    justify-content: flex-end;
`

export const jcc = css`
    display: flex;
    justify-content: center;
`

export const jcsb = css`
    display: flex;
    justify-content: space-between;
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

export const inner = css`
    max-width: 1300px;
    margin: 0 auto;
`

export const resWidth = css`
    width: 100%;
    max-width: calc(100vw - 32px);
`

export const font = (f,c) => css`
    font-family: ${f};
    color: ${c};
`

export const disabled = css`
    pointer-events: none;
    user-select: none;
`

const mixins = {
    aic,
    aifs,
    jcfe,
    jcc,
    jcsb,
    fcol,
    fc,
    fcc,
    bgOption,
    posCenter,
    whFull,
    inner,
    resWidth,
    font,
    disabled
}

export default mixins;