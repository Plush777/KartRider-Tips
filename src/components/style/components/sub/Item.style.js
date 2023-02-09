import styled from "styled-components";
import mixins from '../../mixins';

export const ItemImgBox = styled.div`
    position: relative;
    ${mixins.fc};
    width: 126px;
    height: 126px;
    border: 1px solid #eee;
    border-radius: 50%;
    z-index: 10;

    &::after{
        content: '';
        ${mixins.posCenter};
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #eee;
        z-index: 1;
    }
`

export const ItemImg = styled.img`
    position: relative;
    z-index: 10;
    ${mixins.fc};
    width:57px;
    height:57px;
    object-fit: none;
`

export const ItemBox = styled.div`
    ${mixins.fcol}
    row-gap: 10px;
`

export const ItemName = styled.strong` 
    font-size: ${({theme}) => theme.fontSizes.f18};
    ${mixins.font('nexonLv1Gothic','#333')};
`

export const ItemDesc = styled.p`
    font-size: ${({theme}) => theme.fontSizes.f14};
    ${mixins.font('nexonLv1Gothic','#888')};
    line-height: 19px;
`

export const ItemTip = styled.span`
    ${mixins.aic};
    font-size: ${({theme}) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic','#999')};

    &::before{
        content: '*';
        display: inline-block;
        margin-right: 3px;
        color: #FF0000;
    }
`