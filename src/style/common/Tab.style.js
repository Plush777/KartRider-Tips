import styled, { css } from 'styled-components';

export const TabList = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 10px;

    ${({ theme }) => theme.laptop`
        column-gap: 15px;
    `};
`;

export const TabItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    &.disabled{
        button {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

export const TabDiv = styled.div`
    color: var(--disabled);

    &.active{
        font-weight: 600;
        color: var(--text1);
    }
`

export const TabWrap = styled.div`
    margin-bottom: ${props => props.marginBottom};
    padding-bottom: 15px;

    ${props => props.styleProps === 'ency' && css`
        border-bottom: 2px solid var(--stroke2);
        width: 100%;

        ${TabDiv} {
            font-size: 1.25rem;

            ${({ theme }) => theme.laptop`
                font-size: 1.125rem;
            `};

            ${({ theme }) => theme.mobile`
                font-size: 1rem;
            `};
        }
    `}

    ${props => props.styleProps === 'main' && css`
        border-bottom: 2px solid var(--text1);
        
        ${TabDiv} {
            font-size: 1.5rem;

            ${({ theme }) => theme.laptop`
                font-size: 1.25rem;
            `};

            ${({ theme }) => theme.mobile`
                font-size: 1.125rem;
            `};
        }
    `}
`;
