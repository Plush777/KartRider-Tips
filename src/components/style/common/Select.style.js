import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const SelectArea = styled.div`
    position: relative;
    margin-top: ${props => props.type01 && '16px'};
    margin-bottom: ${props => props.type01 && '25px'};
    width: ${props => props.type01 && '100%'};
`

export const Select = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    justify-content: space-between;
    width: ${props => props.type01 ? '100%' : '80px'};
    height: ${props => props.type01 ? '36px' : '28px'};
    padding: ${props => props.type01 ? '12px' : '5px 5px 5px 10px'};
    border: 1px solid ${props => props.type01 ? 'var(--mobileSelectStroke)' : '#333'};
    border-radius: 4px;
    background-color: var(--mobileSelectBg);

    svg{
        path{
            fill: var(--commonSvgFill);
        }
    }

    ${({ theme }) => theme.small`
        min-width: ${props => !props.type01 && '70px'};
        width: ${props => !props.type01 && 'auto'};
        padding: ${props => !props.type01 && '0 7px'};
    `};
`

export const SelectTxt = styled.span`
    font-family: 'nexonLv1Gothic';
    color: ${props => props.type01 ? 'var(--mobileSelectText)' : '#333'};
    font-size: ${props => props.type01 ? '0.875rem' : '0.75rem'};

    ${({ theme }) => theme.small`
         font-size: ${({ theme }) => theme.fontSizes.f11};
    `};
`

export const OptionList = styled.ul`
    display: ${props => props.show === false ? 'none' : 'block'};
    position: absolute;
    left: 0;
    top: ${props => props.top};
    width: 100%;
    border: 1px solid ${props => props.type01 ? 'var(--mobileSelectStroke)' : '#333'};
    border-radius: 4px;
    background-color: var(--mobileSelectBg);
    padding: 6px 12px;
    max-height: ${props => props.maxHeight};
    z-index: 1;
`

export const OptionItem = styled.li`
    ${mixins.aic}
    height: 30px;
    cursor: pointer;
    width: 100%;
`

export const OptionTxt = styled.span`
    display: ${props => props.type02 ? 'flex' : 'block'};
    align-items: ${props => props.type02 && 'center'};
    width: 100%;
    height: ${props => props.type02 && '100%'};
    font-family: 'nexonLv1Gothic';
    color: ${props => props.type01 ? 'var(--mobileSelectText)' : '#333'};
    font-size: ${props => props.type01 ? '0.875rem' : '0.75rem'};

    >a{
        width: 100%;
        display: block;
    }
`