import styled from 'styled-components';

export const Gnb = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 40px;
    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const GnbList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 30px; 
    width: 100%;

    ${({ theme }) => theme.laptop`
        column-gap: 20px;
        max-width: 44.516vw;
        overflow-x: auto;
    `};

    @media (max-width: 850px){
        max-width: 40vw;
    }
`