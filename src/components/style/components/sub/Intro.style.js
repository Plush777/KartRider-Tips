import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Top = styled.div`
    padding-bottom: 35px;
    border-bottom: 2px solid ${({theme}) => theme.colors.c000};

    ${({ theme }) => theme.tablet`
        padding-bottom: 30px;
    `};
`

export const PreviewArea = styled.div`
    ${mixins.fc}
    width: ${(props) => props.wd};
    height: ${(props) => props.ht};
    border-radius: 4px;
    background-color: #D9D9D9;
    box-shadow: 0px 5px 5px ${({theme}) => theme.colors.rgbaBlack};

    ${({ theme }) => theme.laptop`
        ${mixins.whFull};    
    `};

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const PreviewImg = styled.img`
    border-radius: inherit;

    ${({ theme }) => theme.laptop`
        ${mixins.whFull};    
    `};
`

export const RowList = styled.dl`
    ${mixins.fcol};
    padding: 30px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.dede};
    row-gap: 20px;

    ${({ theme }) => theme.tablet`
        border-bottom: 0;
        padding: 0;
        padding-top: 20px;
        row-gap: 16px;
    `};
`

export const Row = styled.div`
    display: flex;
    column-gap: 85px;
`

export const RowTitle = styled.dt`
    min-width: 76px;
    font-size: ${({theme}) => theme.fontSizes.f20};
    ${mixins.font('nexonLv1Gothic','#000')};

    ${({ theme }) => theme.tablet`
       font-size: ${({theme}) => theme.fontSizes.f16};
    `};
`

export const RowDesc = styled(RowTitle)`
    word-break: keep-all;
`

export const Title = styled.h4`
    ${mixins.aic};
    ${mixins.font('nexonLv1Gothic', '#000')}
    font-size: 1.75rem;

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f24};
    `};
`

export const Desc = styled.p`
    margin-top: 10px;
    line-height: 27px;
    word-break: keep-all;
    ${mixins.font('nexonLv1Gothic', '#333')}
    font-size: 1.125rem;

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`