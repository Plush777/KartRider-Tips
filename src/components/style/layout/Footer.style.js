import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const FooterWrap = styled.footer`
    width: 100%;
    height: 100px;
    background: #fafafa;

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const FooterInner = styled.div`
    ${mixins.inner}
    ${mixins.aic}
    padding: 30px 16px;
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
    >img{
        width: 86px;
    }
`

export const CopyRightArea = styled.div`
    font-size: ${({theme}) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic','#666')}
    flex: 1;
`

export const BottomMenu = styled.ul`
    ${mixins.aic};
    column-gap: 15px;
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
`;

export const Copy = styled.p`
    ${mixins.aic}
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
`