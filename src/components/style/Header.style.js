import styled from 'styled-components';
import mixins from './mixins';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #E2E8F0;
    background-color: ${({theme}) => theme.colors.fff};
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
    color: ${(props) => props.className === 'default' ? '#000' : '#CED4DA'};

    &.disabled{
        pointer-events: none;
        user-select: none;
    }
`

export const ShortArea = styled.div`
    white-space: nowrap;
    font-size: ${({theme}) => theme.fontSizes.d12};
    ${mixins.font('nexonLv1Gothic','#6C7A89')}
`