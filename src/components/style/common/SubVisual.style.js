import styled from "styled-components";
import mixins from 'components/style/mixins';

export const SubVisualWrap = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 65px;

    ${({ theme }) => theme.tablet`
        height: 200px;
        margin-top: 55px;
    `};
`

export const SubViusalInner = styled.div`
    position: relative;
    height: 100%;
    background-image: ${props => `url('/images/bg/bg-sub-visual-${props.visualName}.webp')`};
    ${mixins.bgOption}
    background-position: center 65px;
    background-size: 1920px 250px;
    background-attachment: fixed;
    padding: 0 16px;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        ${mixins.whFull}
        background-color: ${({theme}) => theme.colors.rgbaBlack};
        z-index: 0;
    }

    &.gray{
        background-image: none;
        background-color: #444;
        background-size: auto;

        &::before{display: none;}
    }

    ${({ theme }) => theme.tablet`
        background-position: center 55px;
        background-size: 1920px 200px;
    `};
`

export const SubVisualTitleArea = styled.div`
    ${mixins.posCenter}
`

export const SubVisualTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSizes.f62};
    font-weight: 600;
    color: #fff;

    ${({ theme }) => theme.tablet`
        font-size: ${({theme}) => theme.fontSizes.f42};
    `};
`