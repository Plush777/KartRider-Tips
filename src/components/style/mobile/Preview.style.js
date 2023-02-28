import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Wrap = styled.div`
    ${mixins.jcc};
    border-radius: 4px;
`

export const Img = styled.img`
    border-radius: inherit;
    ${mixins.resWidth}
    box-shadow: 0px 5px 5px ${({theme}) => theme.colors.rgbaBlack};
`