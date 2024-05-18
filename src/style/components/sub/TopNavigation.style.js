import styled from "styled-components";

export const Wrap = styled.nav`
    position: fixed;
    top: 65px;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 36px;
    border-bottom: 1px solid var(--stroke2);
    background-color: var(--background2);
`

export const Inner = styled.div`
    position: relative;
    max-width: 1300px;
    padding: 0 5px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 10;
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 1px solid var(--stroke2);
    padding-left: 10px;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: var(--text1);
    margin-top: 3px;

    &:not(:last-of-type)::after {
        content: ">";
        position: relative;
        top: -1px;
        margin: 0 6px;
        font-size: .8125rem;
        color: inherit;
        font-family: 'Noto Sans KR', sans-serif;
    }

    &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
    }
`

export const SidebarOpenButton = styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;

    svg {
        path {
            fill: var(--text1);
        }
    }
`