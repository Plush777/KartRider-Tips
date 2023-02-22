import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const BtnMType = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    height: 44px;
    padding: 0 16px;
    border-radius: 4px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    font-family: 'nexonLv1Gothic';
    font-size: ${({ theme }) => theme.fontSizes.f16};
`