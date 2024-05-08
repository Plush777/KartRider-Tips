import styled from "styled-components";

export const Container = styled.div`
    * {
        word-break: break-all;
    }

    h2 , h3 , h4 {
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
        `};
    }

    h3 {
        font-size: 1.375rem;
        margin-bottom: 5px;
    }

    h4 {
        font-size: 1.125rem;

        +ul {
            margin-top: 10px;
        }
    }

    p {
        font-size: .875rem;
        color: var(--text1);
        
        ${({ theme }) => theme.tablet`
            font-size: 0.875rem;
        `};
    }

    li {
        color: var(--text1);

        +li {
            margin-top: 5px;
        }
    }

    ul {
        li {
            list-style: disc;
            margin-left: 20px;
            font-size: .875rem;
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
`