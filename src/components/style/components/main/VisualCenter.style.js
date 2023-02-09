import styled from "styled-components";
import mixins from '../../mixins';

export const VisualCenterWrap = styled.div`
    ${mixins.posCenter}
    ${mixins.fcc}
    text-align: center;
    height: 100%;
    z-index: 1010;
`

export const Vtitle = styled.h2`
    ${mixins.font('Recipekorea', '#fff')}
    font-size: ${({theme}) => theme.fontSizes.f48};
`

export const VlogoArea = styled.div`
    margin-top: 55px;

    >img{
        width: 301px;
        height: 108px;
    }
`

export const VDescArea = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
`

export const VDescBold = styled.strong`
    ${mixins.jcc}
    margin-bottom: 5px;
    font-size: ${({theme}) => theme.fontSizes.f18};
    color: #fff;
`

export const VDescRegular = styled.p`
    font-size: ${({theme}) => theme.fontSizes.f14};
    color: #fff;
`