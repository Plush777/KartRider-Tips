import styled from 'styled-components';
import mixins from './mixins';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.fff};
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`

export const HeaderInner = styled.div`
    ${mixins.aic}
    width: 1300px;
    height: 100%;
    margin: 0 auto;
`

export const Logo = styled.h1`
    img{
        width: 86px;
        height: 32px;
    }
`

export const Gnb = styled.nav`
    ${mixins.aic}
    ${mixins.whFull}
    margin-left: 40px;
`

export const GnbList = styled.ul`
    ${mixins.aic}
    column-gap: 30px; 
    width: 100%;
`

export const GnbItem = styled.li`
    position: relative;
    font-size: ${({theme}) => theme.fontSizes.d14};
    color: #000;
`

export const ShortArea = styled.div`
    white-space: nowrap;
    font-size: ${({theme}) => theme.fontSizes.d12};
    ${mixins.font('nexonLv1Gothic','#6C7A89')}
`