import styled from 'styled-components';

export const Wrap = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    column-gap: 5px;
    left: ${props => props.left};
    top: ${props => props.top};
    transform: ${props => props.transform};
    padding: 4px 6px;
    border-radius: 4px;
    white-space: nowrap;
    background-color: var(--blue-background);

    &::before {
        content: '';
        position: absolute;
        top: ${props => props.arrowTop};
        left: ${props => props.arrowLeft};
        transform: ${props => props.arrowTransform};
        width: 0;
        height: 0;
    }

    &.arrowUp::before {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--blue-background);
    }

    &.arrowDown::before {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid var(--blue-background);
    }

    &.arrowLeft::before {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid var(--blue-background);
    }

    &.arrowRight::before {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid var(--blue-background);
    }
`

export const Button = styled.button`
    display: flex;
    position: relative;
    top: -1px;
`;

export const Text = styled.p`
    font-size: .75rem;
    color: #fff;
`