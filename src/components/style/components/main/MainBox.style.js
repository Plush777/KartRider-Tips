import styled from "styled-components";

export const ContentWrap = styled.div`
    position: relative;
    background-color: var(--main-background);
    transition: background .3s ease-in-out;
`

export const MainBoxWrap = styled.div`
    padding: 80px 16px 105px 16px;
    max-width: 1300px;
    margin: 0 auto;

    ${({ theme }) => theme.laptop`
        padding: 50px 16px;
    `}
`