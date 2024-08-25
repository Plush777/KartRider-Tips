import styled, { css } from "styled-components";

export const MainInner = styled.article`
    position: relative;

    ${props => props.name === 'ranking' && css`
        min-height: var(--main-scroll-height);
    `}

    ${props => props.name === 'news' && css`
        min-height: var(--mainHeightNews);
    `}

    ${props => props.name === 'chzzk' || props.name === 'recent' && css`
        min-height: var(--mainHeightDefault);
    `}

    ${props => props.name === 'recommend' && css`
        min-height: var(--mainHeightWide);
    `}

    ${props => props.name === 'season' && css`
        height: 100%;
        display: flex;
        flex-direction: column;
    `}

    ${({ theme }) => theme.tablet`
        min-height: auto;

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