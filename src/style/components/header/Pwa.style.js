import styled from 'styled-components';

export const PWAButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    max-width: 95px;
    height: 34px;
    border-radius: 6px;
    font-size: .875rem;
    font-weight: 600;
    color: #fff;
    background-color: var(--active);

    ${({ theme }) => theme.tablet`
        max-width: none;
        width: 100%;
        height: 100%;
    `};
`