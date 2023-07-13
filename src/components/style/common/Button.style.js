import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const BtnArea = styled.div`
    ${mixins.jcc};
    width: 100%;
    margin-top: 25px;
`

export const Btn = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    justify-content: center;
    height: ${props => props.height};
    padding: ${props => props.padding};
    border: ${props => props.border};
    border-radius: ${props => props.radius};
    background-color: ${props => props.background};
    color: ${props => props.color};
    font-family: 'nexonLv1Gothic';
    font-size: ${props => props.fontSize};

    &.white{
        ${({ theme }) => theme.laptop`
            height: 50px;
            font-size: ${({ theme }) => theme.fontSizes.f18};
        `}

        ${({ theme }) => theme.tablet`
            height: 44px;
            font-size: ${({ theme }) => theme.fontSizes.f16};
        `}

        ${({ theme }) => theme.small`
            max-width: 87px; 
            height: 38px;
            font-size: ${({ theme }) => theme.fontSizes.f14};
        `}
    }
`

export const White = styled.span`
    ${mixins.aic};
    justify-content: center;
    min-width: 200px;
    height: 67px;
    border-radius: ${props => props.radius ? '33px' : '6px'};
    ${mixins.font('Pretendard', '#333')}
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #fff;

    @keyframes xMove {
        0%{
            transform: translateX(0px);
        }
        100%{
            transform: translateX(5px);
        }
    }

    &::after{
        content: '';
        width: 32px;
        height: 18px;
        margin-left: 5px;
        transition: .5s ease-in-out;
        background: url('/images/common/ico-button-arrow-right.svg') no-repeat center;
        animation: xMove .5s ease-in-out infinite alternate;
    }

    @media (max-width: 1200px){
        min-width: 130px;
        height: 48px;
        font-size: 1.125rem;

        &::after{
            background-size: 24px;
            margin-left: 0;
        }
    }
`

export const BtnSetting = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    justify-content: center;
    min-width: 54px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid var(--settingButtonStroke);
    font-size: ${({ theme }) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic', 'var(--settingButtonText)')};
    background-color: var(--settingButtonBg);

    &.active,&.fixed{
        border-color: var(--settingButtonActiveStroke);
        color: var(--settingButtonActiveText);
        background-color: var(--settingButtonActiveBg);
    }
`