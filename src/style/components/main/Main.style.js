import styled, { css } from "styled-components";

export const MainInner = styled.article`
    position: relative;
    min-height: ${props => props.minHeight};
    height: ${props => props.height};

    ${props => props.name === 'season' && css`
        height: 100%;
        display: flex;
        flex-direction: column;
    `}

    ${({ theme }) => theme.tablet`
        ${props => props.name === 'ranking' && css` 
            height: 475px;
        `}

        ${props => props.name === 'season' && css`
            height: 170px;
        `}
    `};
`

export const MainComponentBox = styled.section`
    &+&{
        margin-top: var(--section-gap);
    }
`

export const ContainerBox = styled.article`
    position: relative;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify};

    ${({ theme }) => theme.tablet`
        flex: none;
        width: 100%;
    `};
`

export const Container = styled.div`
   transition: .3s ease-in-out;
   transition-delay: .5s;
   opacity: 0;

    &.active{
        opacity: 1;
    }
`