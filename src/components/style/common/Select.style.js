import styled from 'styled-components';
import mixins from 'components/style/mixins';
import { Link } from "react-router-dom";

export const SelectArea = styled.div`
    position: relative;
    margin-top: 16px;
    margin-bottom: 25px;
`

export const Select = styled.button.attrs({type: 'button'})`
    ${mixins.aic};
    justify-content: space-between;
    width: 100%;
    height: 36px;
    padding: 12px;
    border: 1px solid ${({theme}) => theme.colors.ddd};
    border-radius: 4px;
    background-color: #fff;
`

export const SelectTxt = styled.span`
    ${mixins.font('nexonLv1Gothic','#000')};
    font-size: ${({theme}) => theme.fontSizes.f14};
`

export const OptionList = styled.ul`
    display: ${props => props.show === false ? 'none' : 'block'};
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.ddd};
    border-radius: 4px;
    background-color: #fff;
    padding: 6px 12px;
    max-height: ${props => props.maxHeight};
`

export const OptionItem = styled.li`
    ${mixins.aic}
    height: 30px;
`

export const OptionTxt = styled(Link)`
    ${mixins.font('nexonLv1Gothic','#000')};
    font-size: ${({theme}) => theme.fontSizes.f14};
`