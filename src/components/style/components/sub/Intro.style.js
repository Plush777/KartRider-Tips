import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Top = styled.div`
    padding-bottom: 35px;
    border-bottom: 2px solid ${({theme}) => theme.colors.c000};
`

export const PreviewArea = styled.div`
    ${mixins.fc}
    width: ${(props) => props.wd};
    height: ${(props) => props.ht};
    border-radius: 4px;
    background-color: #D9D9D9;
    box-shadow: 0px 5px 5px ${({theme}) => theme.colors.rgbaBlack};
`

export const PreviewImg = styled.img`
    border-radius: inherit;
`

export const RowList = styled.dl`
    ${mixins.fcol};
    padding: 30px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.dede};
    row-gap: 20px;
`

export const Row = styled.div`
    display: flex;
    column-gap: 85px;
`

export const RowTitle = styled.dt`
    min-width: 76px;
    font-size: ${({theme}) => theme.fontSizes.f20};
    ${mixins.font('nexonLv1Gothic','#000')};
`

export const RowDesc = styled(RowTitle)`

`