import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    padding-bottom: 20px;
    min-height: calc(100vh - 206px);
    background-color: var(--main-background);
    transition: background .3s ease-in-out;

    ${({ theme }) => theme.tablet`
        min-height: calc(100vh - 206px);
    `}
`

export const Inner = styled.div`
    position: relative;
    max-width: 1300px;
    margin: 0 auto;
    padding: 80px 16px;

    ${({ theme }) => theme.laptopL`
        padding: 36px 16px;

        &.hasNavigation {
            padding: 66px 16px;
        }
    `};
`