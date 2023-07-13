import styled from "styled-components";
import mixins from 'components/style/mixins';

export const VisualCenterWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${mixins.inner}
    height: 100%;
    text-align: left;
    z-index: 1010;
    padding-top: 65px;

    ${({ theme }) => theme.laptopL`
        padding: 65px 100px 0 100px;
    `}

    ${({ theme }) => theme.tablet`
        padding: 55px 16px 0 16px;
    `}
`

export const VtxtArea = styled.div`
    ${mixins.fcol};
    row-gap: 40px;

    ${({ theme }) => theme.laptop`
        row-gap: 30px;
    `}

    ${({ theme }) => theme.tablet`
       row-gap: 20px;
    `}

    ${({ theme }) => theme.small`
       row-gap: 10px;
    `}

    a{
        max-width: 110px;

        &:lang(ja){
            max-width: 120px;
        }
    }
`

export const Vtitle = styled.h2`
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.f44};
    font-weight: bold;
    word-break: keep-all;

    ${({ theme }) => theme.laptopL`
       font-size: 2.5rem;
    `}

    ${({ theme }) => theme.laptop`
       font-size: ${({ theme }) => theme.fontSizes.f36};
    `}

    ${({ theme }) => theme.tablet`
       font-size: 1.5rem;
    `}

    ${({ theme }) => theme.mobile`
       font-size: ${({ theme }) => theme.fontSizes.f20};
    `}
`

export const Vdesc = styled.p`
    font-weight: 400;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.f24};
    word-break: keep-all;

    ${({ theme }) => theme.laptop`
       font-size: ${({ theme }) => theme.fontSizes.f20};
    `}

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f16};
       padding-bottom: 10px;
    `}

    ${({ theme }) => theme.small`
       font-size: ${({ theme }) => theme.fontSizes.f14};
    `}
`

export const VlogoArea = styled.div`
    margin-top: 55px;

    >img{
        width: 301px;
        height: 108px;
    }
`