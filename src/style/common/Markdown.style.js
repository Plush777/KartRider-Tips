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

        + p {
            margin-top: 10px;
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

    .articleDate {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        font-size: .875rem;
        font-style: italic;
        color: var(--disabled);
        border-top: 1px solid var(--stroke2);
        padding-top: 20px;

        +.articleDate {
            padding-top: 0;
            border-top: 0;
            margin-top: 5px;
        }
    }

    .articleDateText {
        margin-right: 5px;
    }

    .mdRatio {
        position: relative;
        width: 100%;
        margin-bottom: 40px;

        video, img, iframe {
            width: 100%;
            display: block;
            object-fit: cover;
        }
    }

    .mdTip {
        position: relative;
        width: 100%;
        border-radius: 8px;
        padding: 16px;
        margin-top: 10px;
        background-color: var(--background2);

        &::before {
            content: 'tip :';
            position: absolute;
            left: 16px;
            top: 16px;
            font-size: .875rem;
            font-weight: 600;
            color: var(--text1);
            text-transform: uppercase;
        }
    }

    .mdTipText {
        padding-left: 36px;
        font-size: .875rem;
        line-height: normal;
    }

    blockquote {
        margin-top: 10px;
        padding: 16px;
        border-left: 4px solid var(--active);
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        color: var(--text1);
        font-size: .875rem;
    }

    .mdRef {
        display: block;
        margin-top: 30px;
        color: var(--text1);
        font-size: .875rem;
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