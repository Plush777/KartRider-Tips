import styled from "styled-components";

export const Title = styled.h2`
    position: relative;
    display: flex;
    align-items: center;
    color: var(--title);
    font-size: 2rem;
    margin-bottom: ${(props) => props.marginBottom};

    ${({ theme }) => theme.laptop`
        font-size: 1.75rem;

        &::before{
            width: 32px;
            height: 32px;
            background-size: 32px;
        }
    `};

    ${({ theme }) => theme.tablet`
        font-size: 1.375rem;

        &::before{
            width: 26px;
            height: 26px;
            background-size: 26px;
        }
    `};

    ${({ theme }) => theme.mobile`
        flex-direction: column;
    `};
`

export const TitleBox = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

export const HeadTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--title);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    max-height: 87px;

    ${({ theme }) => theme.laptop`
        font-size: 1.375rem;
    `};

    ${({ theme }) => theme.tablet`
        font-size: 1.125rem;
    `};

    ${({ theme }) => theme.small`
        font-size: 1rem;
    `};
`