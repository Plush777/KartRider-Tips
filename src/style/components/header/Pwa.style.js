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

    &.transparent {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        padding: 0;
        width: 22px;
        height: 22px;
        background-color: transparent;
    }
`