import styled from "styled-components";

export const Wrap = styled.div`
    position: fixed;
    top: 65px;
    left: 0;
    z-index: 990;
    width: 100%;
    border-bottom: 1px solid var(--stroke2);
    background-color: var(--background2);

    ${({ theme }) => theme.tablet`
        top: 55px;
    `};
`

export const Inner = styled.div`
    position: relative;
    max-width: 1300px;
    padding: 0 5px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 10;
`

export const SidebarOpenButton = styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;

    svg {
        margin-top: -1px;
        
        path {
            fill: var(--text1);
        }
    }
`