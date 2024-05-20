import styled from "styled-components";

export const Wrap = styled.aside`
    position: fixed;
    top: 0;
    left: -600px;
    visibility: hidden;
    width: 600px;
    height: 100%;
    border-right: 1px solid var(--stroke2);
    background-color: var(--background2);
    z-index: 1020;
    overflow-y: auto;

    &.transition {
        transition: .3s ease-in-out;
        transition-property: left, visibility;
    }

    &.active {
        left: 0;
        visibility: visible;
    }
`

export const Inner = styled.div`
    position: relative;
    padding: 22px;
    height: 100%;
`

export const List = styled.ol`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-left: 30px;
    padding-bottom: 20px;
`

export const Item = styled.li`
    color: var(--text1);
    font-size: .875rem;

    a:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
    }
`

export const Group = styled.div`
    &+& {
        margin-top: 60px;
    }
`

export const SectionText = styled.strong`
    display: block;
    margin-bottom: 20px;
    color: var(--text1);
    font-size: 1.375rem;
`

export const DetailsWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    &+& {
        border-top: 1px solid var(--stroke2);
    }
`

export const Details = styled.details`
    width: 100%;
    height: 50px;

    ~ svg {
        position: absolute;
        top: 7px;
        left: -11px;
        transform: rotate(-180deg);
        z-index: -1;
    }

    &[open] {
        height: auto;

        summary {
            min-height: 50px;
        }

        ~ svg {
            top: 6px;
            transform: rotate(0);
        }
    }
`

export const Summary = styled.summary`
    display: flex;
    align-items: center;
    height: 100%;
    color: var(--text1);
    font-size: 1.125rem;
    cursor: pointer;
    padding-left: 30px;
`

export const BtnArea = styled.div`
    position: sticky;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    top: 22px;
    right: 22px;
`

export const CloseButton = styled.button`
    svg {
        fill: var(--text1);
    }
`

export const Dimmed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dimmed);
    z-index: 1010;
    opacity: 0;
    visibility: hidden;

    &.transition {
        transition: .3s ease-in-out;
        transition-property: opacity, visibility;
    }

    &.active {
        opacity: 1;
        visibility: visible;
    }
`