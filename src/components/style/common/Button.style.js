import styled from 'styled-components';

export const BtnArea = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    column-gap: ${props => props.cg};
    visibility: hidden;

    ${props => props.outline && `
        svg{
            fill: currentColor;
        }

        &::before, &::after{
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: calc(100% / 2 - 62px);
            height: 1px;
            z-index: -1;
            background-color: var(--mobileSelectStroke);
        }

        &::before{
            left: 0;
        }

        &::after{
            right: 0;
        }
    `}
`

export const BtnWrap = styled.div`
    position: relative;
    height: 40px;
    margin-top: 30px;
    z-index: 10;

    &.active{
        ${BtnArea}{
            visibility: visible;
        }
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    min-width: ${(props) => props.minWidth};
    height: 40px;
    border-radius: 6px;
    border: 1px solid var(--mobileSelectStroke);
    font-size: .875rem;
    color: var(--mobileSelectText);
    background-color: var(--mobileSelectBg);

    ${props => props.hasIcon && `
        svg{
            margin-left: 5px;
        }
    `}
`

export const BtnSetting = styled.button.attrs({ type: 'button' })`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 54px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid var(--settingButtonStroke);
    font-size: .75rem;
    color: var(--settingButtonText);
    background-color: var(--settingButtonBg);

    &.active, &.fixed{
        border-color: var(--settingButtonActiveStroke);
        color: var(--settingButtonActiveText);
        background-color: var(--settingButtonActiveBg);
    }
`

export const BtnArrowDown = styled.button.attrs({ type: 'button' })`
    position: absolute;
    left: 50%;
    /* 14px은 스크롤 넓이 */
    transform: translateX(calc(-50% - 14px));
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    height: 32px;
    border-radius: 100px;
    background-color: var(--activeColor);
    font-weight: 600;
    min-width: 80px;

    svg{
        path{stroke: #fff;}
    }
`;

export const BtnArrowDownText = styled.span`
    color: #fff;
    font-size: .875rem;
`