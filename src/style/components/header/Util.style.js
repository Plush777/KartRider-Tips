import styled from 'styled-components';
import { Tooltip } from './Tooltip.style';

export const UtilArea = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
    position: relative;

    svg{
        path{
            fill: var(--title);
        }
    }
`

export const UtilTextBox = styled.a`
    position: relative;

    @media (hover: hover) {
        &:hover{
            ${Tooltip}{
                opacity: 1;
                visibility: visible;
            }
        }
    }
`