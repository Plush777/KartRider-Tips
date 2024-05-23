import styled from "styled-components";

export const Container = styled.div`
    * {
        word-break: keep-all;
    }

    p {
        line-height: 1.5;
    }

    h2 , h3 , h4, h5 {
        color: var(--title);
    }

    h2 {
        margin-bottom: 40px;
        font-size: 2.625rem;
        font-weight: 600;

        ${({ theme }) => theme.laptopL`
            font-size: 2.25rem;
        `};

        ${({ theme }) => theme.laptop`
            font-size: 1.875rem;
        `};

        ${({ theme }) => theme.tablet`
            font-size: 1.5rem;
            margin-bottom: 30px;
        `};
    }

    h3 {
        font-size: 2rem;

        + h4 {
            margin-top: 40px;
        }
    }

    h4 {
        font-size: 1.5rem;

        +ul, +ol {
            margin-top: 15px;
        }

        + h5 {
            margin-top: 25px;
        }
    }

    h5 {
        font-size: 1.25rem;
        margin-bottom: 2px;
    }

    p {
        font-size: 1rem;
        color: var(--text1);
        
        ${({ theme }) => theme.tablet`
            font-size: 0.875rem;
        `};
    }

    li {
        color: var(--text1);

        +li {
            margin-top: 10px;
        }
    }

    ul {
        li {
            list-style: disc;
            margin-left: 20px;
            font-size: 1rem;
        }
    }

    ol {
        li {
            counter-increment: list-item; 
            font-size: 1rem;

            &::before{
                content: counter(list-item) ". ";
                color: var(--text1);
            }
        }
    }

    hr {
        margin: 60px 0;
        background-color: var(--stroke2);
        height: 1px;
        border: none;
    }

    .mdLink {
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .articleDates {
        display: flex;
        flex-direction: column;
        row-gap: 3px;
        margin-top: 60px;
        font-size: .875rem;
        font-style: italic;
        color: var(--disabled);
        border-top: 1px solid var(--stroke2);
        padding-top: 20px;
    }

    .articleDateText {
        margin-right: 5px;
    }

    ${({ theme }) => theme.tablet`
        li, p, span {
            line-height: 1.5;
        }

        br {
            +h3, +h4, +ol {
                margin-top: 30px;
            }
        }
    `};
`