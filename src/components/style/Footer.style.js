import styled from 'styled-components';
import mixins from './mixins';

export const FooterWrap = styled.footer`
    width: 100%;
    height: 100px;
    background: #fafafa;
`

export const FooterInner = styled.div`
    width: 1300px;
    margin: 0 auto;
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
`

export const CopyRightArea = styled.div`
    font-size: ${({theme}) => theme.fontSizes.d12};
    ${mixins.font('nexonLv1Gothic','#a1a1a1')}
`

export const Copy = styled.p`
    ${mixins.aic}
    &::before{
        content: 'ⓒ';
        margin-right: 3px;
    }
`