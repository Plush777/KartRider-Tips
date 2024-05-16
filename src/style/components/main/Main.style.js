import styled, { css } from "styled-components";

export const MainInner = styled.article`
    position: relative;
    min-height: ${props => props.minHeight};
    height: ${props => props.height};

    ${(props) => props.borderBottom && css`
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--text1);
        }
    `}

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

    +[data-section-name="recentYoutube"]{
        margin-top: calc(var(--section-gap) / 2 + 20px);
    }

    ${({ theme }) => theme.laptop`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2 - 20px);
        }
    `};

    ${({ theme }) => theme.tablet`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2 + 20px);
        }
    `};

    ${({ theme }) => theme.mobile`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2 + 30px);
        }
    `};

    ${({ theme }) => theme.small`
        +[data-section-name="recentYoutube"]{
            margin-top: calc(var(--section-gap) / 2);
        }
    `};
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