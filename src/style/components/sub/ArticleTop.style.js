import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    svg {
        path {
            fill: var(--text1);
        }
    }
`