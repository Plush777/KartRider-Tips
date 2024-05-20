import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 16px;
    margin-top: 60px;
    
    ${({ theme }) => theme.tablet`
        margin-bottom: 20px;
    `};
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;

    input {
        margin-right: 10px;
    }

    ${({ theme }) => theme.tablet`
        height: 40px;
    `};
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1rem;

    &::placeholder{
        font-size: .875rem;
    }
`

export const Result = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    width: 100%;
    height: 170px;
    background-color: var(--background5);

    ${({ theme }) => theme.tablet`
        height: 170px;
    `};
`

export const ResultBox = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-top: -2px;
    }

    ${({ theme }) => theme.mobile`
        img {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 4px;
            left: 4px;
            margin-top: 0;
        }
    `};
`

export const ResultText = styled.p`
    text-align: center;
    word-break: keep-all;
    font-size: 1.125rem;
    color: var(--text1);
`