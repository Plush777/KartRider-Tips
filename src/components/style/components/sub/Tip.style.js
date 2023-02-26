import styled from "styled-components";
import mixins from 'components/style/mixins';

export const TipGroup = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: ${(props) => props.mt};
    row-gap: 10px;
    width: calc(100% - 40px);
`

export const TipWrap = styled.div`
    display: flex;
`

export const TipBox = styled.div`
    ${mixins.fcol}
    padding: 20px;
    background-color: #DEDDDD;
    border-radius: 2px;
`

export const TipTxt = styled.p`
    position: relative;
    padding-left: ${props => props.bullet && '10px'};
    font-size: ${({ theme }) => theme.fontSizes.f14};
    ${mixins.font('nexonLv1Gothic', '#111')};

    &::before{
        content: ${props => props.bullet && "'*'"};
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

export const ExTxt = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    font-size: ${({ theme }) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic', '#555')};

    >svg{
        margin-right: 5px;
    }
`

export const TextInner = styled.div`
    width: ${props => props.width};
    display: inline-block;
     ${({ theme }) => theme.tablet`
        
    `};
`