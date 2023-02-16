import styled from "styled-components";
import mixins from 'components/style/mixins';

export const SubVisualWrap = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 50px;
`

export const SubViusalInner = styled.div`
    position: relative;
    height: 100%;
    background-image: ${props => `url('/images/bg/bg-sub-visual-${props.visualName}.webp')`};
    ${mixins.bgOption}
    background-position: center 65px;
    background-size: 100%;
    background-attachment: fixed;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        ${mixins.whFull}
        background-color: ${({theme}) => theme.colors.rgbaBlack};
        z-index: 0;
    }
`

export const SubVisualTitleArea = styled.div`
    ${mixins.posCenter}
`

export const SubVisualTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSizes.f62};
    color: #fff;
`