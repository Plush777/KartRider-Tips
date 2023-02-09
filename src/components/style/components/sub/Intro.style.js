import styled from "styled-components";
import mixins from '../../mixins';

export const Top = styled.div`
    padding-bottom: 35px;
    border-bottom: 2px solid ${({theme}) => theme.colors.c000};
`

export const Bottom = styled.div`
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.dede};
`

export const PreviewArea = styled.div`
    ${mixins.fc}
    height: 305px;
    border-radius: 4px;
    background-color: #D9D9D9;
    box-shadow: 0px 5px 5px ${({theme}) => theme.colors.rgbaBlack};
    ${mixins.skeleton};
`

export const PreviewImg = styled.img`
    ${mixins.whFull}
    border-radius: inherit;
`

export const Row = styled.div`
    ${mixins.fcol}
`

export const RowDesc = styled.span`
    display: block;
    min-width: ${(props) => props.mwd ? '158px' : 'auto'};
    min-height: 46px;
    font-size: ${({theme}) => theme.fontSizes.f20};
    margin-top: ${(props) => props.mt};
    ${mixins.font('nexonLv1Gothic','#000')};
`