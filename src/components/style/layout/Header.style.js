import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const Headers = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 65px;
    padding: 0 16px;
    border-bottom: 1px solid #E2E8F0;
    background-color: ${({ theme }) => theme.colors.fff};

    ${({ theme }) => theme.tablet`
        height: 55px;
    `};
`

export const HeaderInner = styled.div`
    ${mixins.aic}
    ${mixins.inner}
    height: 100%;

    ${({ theme }) => theme.tablet`
        position: relative;
        justify-content: center;
    `};
`

export const Logo = styled.h1`
    img{
        width: 130px;
        height: 29px;

        ${({ theme }) => theme.tablet`
            width: 100%;
            margin: 0 auto;
        `};
    }
`

export const Gnb = styled.nav`
    ${mixins.aic}
    ${mixins.whFull}
    margin-left: 40px;
    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const GnbList = styled.ul`
    ${mixins.aic}
    column-gap: 30px; 
    width: 100%;
`

export const GnbItem = styled.li`
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.f14};
    color: ${(props) => props.className === 'default' ? '#000' : 'rgba(0, 0, 0, 0.6)'};

    &.disabled{
        >a{
            ${mixins.disabled}
        }
    }
`

export const ShortArea = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.f12};
    ${mixins.font('nexonLv1Gothic', '#666')}

    >a{
        display: block;
        min-width: 156px;
    }

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const OpenInNewArea = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
`

export const BtnOpenInNew = styled.button.attrs({ type: 'button' })`
    ${mixins.aic}
    width: 18px;
    height: 18px;
    background: url('/images/common/ico-open-in-new.svg') no-repeat center;
`