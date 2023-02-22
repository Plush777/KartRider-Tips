import styled from "styled-components";
import mixins from 'components/style/mixins';
import { NavLink } from "react-router-dom";

export const BottomNavWrap = styled.aside`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    border-top: #ececec;
    background-color: ${({ theme }) => theme.colors.fff};
    z-index: 1000;
`

export const MenuList = styled.ul`
    ${mixins.aic};
`

export const MenuLink = styled(NavLink)`
    display: flex;
    align-items: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.f12};
    font-family: 'nexonLv1Gothic';
    color: ${(props) => props.className === 'default' ? '#000' : 'rgba(0, 0, 0, 0.6)'};
    background: ${props => `url(/images/common/ico-tab0${props.num}.svg)`} no-repeat center 2px;
`

export const MenuItem = styled.li`
    ${mixins.jcc};
    flex: 1;
    height: 55px;
    padding: 6px 0;

    &.disabled{
        ${MenuLink}{
            ${mixins.disabled}; 
        }
    }
`