import styled from 'styled-components';

export const TabWrap = styled.div`
    margin-bottom: ${(props) => props.marginBottom};
`;

export const TabList = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 25px;

    ${({ theme }) => theme.laptop`
        column-gap: 15px;
    `};

    ${({ theme }) => theme.mobile`
        column-gap: 10px;
    `};
`;

export const TabItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TabDiv = styled.div`
    font-size: 1.5rem;
    color: var(--disabled);

    ${({ theme }) => theme.laptop`
        font-size: 1.25rem;
    `};

    ${({ theme }) => theme.mobile`
        font-size: 1.125rem;
    `};

    &.active{
        font-weight: 600;
        color: var(--text1);
    }
`