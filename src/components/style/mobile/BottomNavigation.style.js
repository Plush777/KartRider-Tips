import styled from "styled-components";
import mixins from 'components/style/mixins';

export const BottomNavWrap = styled.aside`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    border-top: 1px solid var(--infoStroke);
    background-color: var(--bottomNavigationBg);
    z-index: 1000;
`

export const MenuList = styled.ul`
    ${mixins.aic};
`

export const MenuLink = styled.a`
    ${mixins.fcc};
    row-gap: 2px;
    font-size: ${({ theme }) => theme.fontSizes.f12};
    font-family: 'NexonMaplestory';

    svg{
        path[d*="M14 2c6"]{
            fill: var(--commonSvgFill);
        }
    }
`

export const MenuItem = styled.li`
    ${mixins.jcc};
    flex: 1;
    height: 55px;
    padding: 6px 0;
    color: var(--title);

    svg{
        fill: var(--commonSvgFill);
    }

    &.disabled{
        color: var(--disabledColor);
        ${mixins.disabled}; 
        
        svg{
            fill: var(--disabledColor);
        }
    }

    &.active{
        a{
            color: var(--activeColor); 
            font-weight: bold;
        }
        
        svg{
            fill: var(--activeColor);
        }
    }

    ${({ theme }) => theme.mobile`
        >svg{
            width: 22px;
            height: 22px;
        }
    `};

    ${({ theme }) => theme.small`
        font-size: ${({ theme }) => theme.fontSizes.f11};
        >svg{
            width: 20px;
            height: 20px;
        }
    `};
`