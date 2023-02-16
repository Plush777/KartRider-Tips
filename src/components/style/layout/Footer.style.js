import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const FooterWrap = styled.footer`
    width: 100%;
    height: 100px;
    background: #fafafa;
`

export const FooterInner = styled.div`
    ${mixins.inner}
    ${mixins.aic}
    padding: 30px 15px;
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
`

export const Copy = styled.p`
    ${mixins.aic}
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
`