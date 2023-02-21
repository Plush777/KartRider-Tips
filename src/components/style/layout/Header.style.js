import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #E2E8F0;
    background-color: ${({theme}) => theme.colors.fff};

    ${({ theme }) => theme.laptop `
        background-color: red;
    `};
`

export const HeaderInner = styled.div`
    ${mixins.aic}
    ${mixins.inner}
    height: 100%;
`

export const Logo = styled.h1`
    img{
        width: 130px;
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
    font-size: ${({theme}) => theme.fontSizes.f14};
    color: ${(props) => props.className === 'default' ? '#000' : 'rgba(0, 0, 0, 0.6)'};

    &.disabled{
        >a{
            ${mixins.disabled}
        }
    }
`

export const ShortArea = styled.div`
    white-space: nowrap;
    font-size: ${({theme}) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic','#666')}
`