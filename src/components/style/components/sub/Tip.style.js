import styled from "styled-components";
import mixins from '../../mixins';

export const TipGroup = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: ${(props) => props.mt};
    row-gap: 10px;
`

export const TipWrap = styled.div`
    display: flex;
`

export const TipBox = styled.div`
    padding: 20px;
    background-color: #DEDDDD;
    border-radius: 2px;
`

export const TipTxt = styled.p`
    position: relative;
    padding-left: 10px;
    ${({theme}) => theme.fontSizes.f14};
    ${mixins.font('nexonLv1Gothic','#111')};

    &::before{
        content: '*';
        position: absolute;
        top: -1px;
        left: 0;
        color: ${(props) => props.red && '#FF0000'};
    }
`

export const ExArea = styled.div`
    display: inline-flex;
    margin-top: ${(props) => props.mt};
`

export const ExTxt = styled.button.attrs({type: 'button'})`
    ${mixins.aic};
    ${({theme}) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic','#555')};

    &::before{
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 5px;
        background: ${(props) => props.video && 'url(/images/common/ico-video.svg) no-repeat center'};
    }
`