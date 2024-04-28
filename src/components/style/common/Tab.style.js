import styled from 'styled-components';

export const TabWrap = styled.div`
    margin-bottom: ${(props) => props.marginBottom};
`;

export const TabList = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 25px;
`;

export const TabItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TabDiv = styled.div`
    font-size: 1.5rem;
    color: var(--disabled);

    &.active{
        font-weight: 600;
        color: var(--text1);
    }
`