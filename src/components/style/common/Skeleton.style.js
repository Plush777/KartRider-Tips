import styled from "styled-components";
import mixins from 'components/style/mixins';

export const FlexRowWrap = styled.div`
    display: flex;
    column-gap: ${props => props.cg};
    width: 100%;

    ${({ theme }) => theme.tablet`
        ${mixins.fcol};
        column-gap: 0;
        row-gap: 15px;
        margin-top: 10px;
    `};

    ${({ theme }) => theme.mobile`
        row-gap: 5px;
    `};
`

export const Wrap = styled.div`
    position: relative;
    ${mixins.fc};
    ${mixins.whFull};
    max-width: ${props => props.mwd};
    padding-top: ${props => props.pt};
    height: ${props => props.ht};
    border-radius: 4px;
    background-color: var(--skeletonBg);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    @keyframes skeleton-loading {
        0% {opacity: .3;}
        100% {opacity: 1;}   
    }
    animation: skeleton-loading 1s linear infinite alternate;

    &.type02{
        width: 57px;
        height: 57px;

        ${({ theme }) => theme.laptop`
            width: 50px;
            height: 50px;
        `};

        ${({ theme }) => theme.tablet`
            padding-top: 0;
        `};

        ${({ theme }) => theme.mobile`
            width: 38px;
            height: 38px;
        `};
    }

    &.absolute{
        ${mixins.posCenter}
        border-radius: 50%;
        z-index: 10;
        box-shadow: none;
    }

    &.type03{
        width: 32px;
        height: 32px;
        left: 10px;
        background: #ccc;

        ${({ theme }) => theme.tablet`
            padding-top: 0;
        `};
    }

    &.default{
        transform: none;
        top: initial;
    }

    ${({ theme }) => theme.tablet`
        padding-top: 56.333%
    `};
`

export const Img = styled.img`
    position: absolute;
    top: 0;
    width: 30% !important;
    height: 100% !important;
    border-radius: inherit;
`