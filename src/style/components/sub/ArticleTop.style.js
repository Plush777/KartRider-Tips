import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin-bottom: 40px;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 3px solid var(--text1);

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    svg {
        path {
            fill: var(--text1);
        }
    }
`