import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const TitleArea = styled.div`
    margin-bottom: 10px;
`

export const Title = styled.h2`
    ${mixins.font('nexonLv1Gothic', '#000')};
    font-size: ${({ theme }) => theme.fontSizes.f18};
`

export const Inner = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 375px;
    max-width: calc(100vw - 32px);
    padding: 24px 14px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    background-color: var(--alertBg);
    border-radius: 4px;
    z-index: 1030;
`

export const Wrap = styled.div`
    &::after{
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1010;
        ${mixins.whFull};
        background-color: var(--dimmed);
    }

    &.type02{
        opacity: 0;
        visibility: hidden;
        position: fixed;
        right: 10px;
        top: 80px;
        transition: .3s ease-in-out;

        ${Inner}{
            position: static;
            transform: none;
            width: auto;
            box-shadow: none;
            padding: 16px 20px;
            background-color: rgba(0,0,0,0.6);
        }

        ${TitleArea}{
            margin-bottom: 0;
            
            ${Title}{
                ${mixins.font('nexonLv1Gothic', '#fff')};
                font-size: ${({ theme }) => theme.fontSizes.f16};
            }
        }

        &.active{
            opacity: 1;
            visibility: visible;
        }

        &::after{display: none;}
    }
`

export const Paragraph = styled.p`
    &+&{margin-top: 8px;}
    ${mixins.font('nexonLv1Gothic', 'var(--alertText)')};
    font-size: ${({ theme }) => theme.fontSizes.f16};
    word-break: break-all;
`

export const BtnArea = styled.div`
    ${mixins.aic};
    justify-content: flex-end;
    column-gap: 8px;
    margin-top: 20px;
`