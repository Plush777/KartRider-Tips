import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const SelectArea = styled.div`
    position: relative;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    width: ${props => props.width};

    ${props => props.type === 'pc' && `
        ${SelectTxt} ~ svg{
            width: 24px !important;
            height: 24px !important;
        }
    `}

    ${({ theme }) => theme.mobile`
        width: 100%;
        margin-top: 15px;
    `};
`

export const Select = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    justify-content: space-between;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
    border: 1px solid ${props => props.border};
    border-radius: ${props => props.radius};
    background-color: var(--mobileSelectBg);

    svg{
        path{
            fill: var(--commonSvgFill);
        }
    }

    ${({ theme }) => theme.mobile`
        width: 100%;
    `};

    ${({ theme }) => theme.small`
        padding: ${props => props.padding && '0 7px'};
    `};
`

export const SelectTxt = styled.span`
    font-family: 'nexonLv1Gothic';
    color: ${props => props.color};
    font-size: ${props => props.fontSize};

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
    border: 1px solid ${props => props.border};
    border-radius: ${props => props.radius};
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
    ${mixins.aic};
    width: 100%;
    height: 100%;
    font-family: 'nexonLv1Gothic';
    color: ${props => props.color};
    font-size: ${props => props.fontSize};

    >a{
        width: 100%;
        display: block;
    }
`