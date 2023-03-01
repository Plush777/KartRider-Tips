import styled from "styled-components";
import mixins from 'components/style/mixins';

export const VisualCenterWrap = styled.div`
    ${mixins.posCenter}
    ${mixins.fcc}
    text-align: center;
    height: 100%;
    z-index: 1010;

    ${({ theme }) => theme.mobile`
        width: 100%;
        max-width: calc(85vw - 32px);
    `}

    ${({ theme }) => theme.small`
        max-width: calc(93.2vw - 32px);
    `}
`

export const Vtitle = styled.h2`
    ${mixins.font('Recipekorea', '#fff')}
    font-size: ${({ theme }) => theme.fontSizes.f48};
    word-break: keep-all;

    ${({ theme }) => theme.laptopL`
       font-size: 2.75rem;
    `}

    ${({ theme }) => theme.laptopL`
       font-size: 2.5rem;
    `}

    ${({ theme }) => theme.tablet`
       font-size: 1.75rem;
    `}

    ${({ theme }) => theme.mobile`
       font-size: ${({ theme }) => theme.fontSizes.f20};
    `}
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
    font-size: ${({ theme }) => theme.fontSizes.f18};
    color: #fff;
    word-break: keep-all;

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f16};
    `}
`

export const VDescRegular = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.f14};
    color: #fff;
    word-break: keep-all;

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f12};
    `}
`