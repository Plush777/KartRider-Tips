import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const FooterWrap = styled.footer`
    width: 100%;
    background: var(--footerBg);
    transition: background .3s ease-in-out;

    ${({ theme }) => theme.tablet`
        height: auto;
    `};
`

export const FooterInner = styled.div`
    ${mixins.inner}
    ${mixins.aic}
    padding: 30px 16px;

    ${({ theme }) => theme.tablet`
        padding: 25px 16px;
    `};

    ${({ theme }) => theme.mobile`
        flex-direction: column;
        padding: 20px 16px 14px 16px;
    `};
`

export const LogoArea = styled.div`
    ${mixins.aic}
    &::after{
        content: '';
        display: inline-flex;
        width: 1px;
        height: 29px;
        margin: 0 10px;
        background-color: #ccc;
    }

    ${({ theme }) => theme.mobile`
        display: none;

        &::after{
            display: none;
        }
    `};
`

export const Logo = styled.img`
    width: 86px !important;
    height: 24px !important;
`

export const CopyRightArea = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic', 'var(--footerText)')}
    flex: 1;

    ${({ theme }) => theme.tablet`
        margin-right: 10px;
        font-size: ${({ theme }) => theme.fontSizes.f11};
    `};

    ${({ theme }) => theme.mobile`
        display: none;
        margin-top: 10px;
    `};
`

export const BottomArea = styled.div`
    
`

export const BottomMenu = styled.ul`
    ${mixins.aic};
    column-gap: 15px;

    ${({ theme }) => theme.mobile`
        column-gap: 30px;
    `};
`

export const BottomItem = styled(CopyRightArea)`
    white-space: nowrap;
    >a{
        @media (hover: hover) {
            &:hover{
                text-decoration: underline;
                text-underline-offset: 2px;
            }
        }
    }

    ${({ theme }) => theme.mobile`
        display: block;
        margin-top: 0;
    `};
`;

export const Copy = styled.p`
    ${mixins.aic}
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
    ${({ theme }) => theme.tablet`
        align-items: flex-start;
    `};
`

export const BottomLogoArea = styled.div`
    ${mixins.aic}
    margin-top: 15px;
`
export const BottomLogo = styled.img`
    width: 24px !important;
    height: 24px !important;
    margin-right: 7px;
`

export const BottomLogoTxt = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic', 'var(--footerText)')}
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
`

export const Row = styled.div`
    ${mixins.inner};
    ${mixins.aic};
    justify-content: flex-end;
    column-gap: 30px;
    padding-bottom: 16px;
    padding-right: 16px;

    ${({ theme }) => theme.mobile`
        justify-content: center;
        width: 100%;
        column-gap: 20px;
    `};
`

export const Hits = styled.div`
    height: 26px;

    >a{
        display: inline-flex;
        ${({ theme }) => theme.mobile`
            justify-content: center;
            img{
                height: 24px;
            }
        `};
        pointer-events: none;
        user-select: none;
    }

    img{
        width: 181px !important;
        height: 26px !important;
    }

    ${({ theme }) => theme.mobile`
        height: 24px;
    `};
`

export const LinkList = styled.ul`
    ${mixins.aic};
    column-gap: 10px;
    position: relative;

    li{
        width: 26px;
        height: 26px;

        a{
            &::before{
                content: '';
                display: inline-block;
                width: 26px;
                height: 26px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 26px;
            }
        }

        &:first-of-type a::before{
            background-image: url('/images/common/ico-naver.png');
        }
        &:nth-of-type(2) a::before{
            background-image: url('/images/common/ico-github.svg');
        }
        &:last-of-type a::before{
            background-image: url('/images/common/ico-instagram.png');
        }

        &.dark{
            &:nth-of-type(2) a::before{
                background-image: url('/images/common/ico-github-w.svg');
            }
        }

        ${({ theme }) => theme.mobile`
            &::before{
                width: 24px;
                height: 24px;
                background-size: 24px;
            }
        `};
    }

    a{
        display: block;
        width: inherit;
        height: inherit;
    }
`