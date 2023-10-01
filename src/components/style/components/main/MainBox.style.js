import styled from "styled-components";
import mixins from 'components/style/mixins';

export const ContentWrap = styled.div`
    position: relative;
    background-color: var(--bgColor);
    transition: background .3s ease-in-out;
`

export const MainBoxWrap = styled.div`
    padding: 105px 16px;
    ${mixins.inner}

    ${({ theme }) => theme.laptop`
        padding: 40px 16px;
    `}
`