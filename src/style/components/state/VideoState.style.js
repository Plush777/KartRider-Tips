import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;

export const PlayerWrap = styled.div`
    height: auto;
    margin: 0 auto;

    ${props => props.state === 'error' && `
        width: 350px;
    `}

    ${props => props.state === 'empty' && `
        width: 200px;
    `}

    ${({ theme }) => theme.laptop`
        ${props => props.state === 'empty' && `
            width: 200px;
        `}
    `};

    ${({ theme }) => theme.tablet`
        ${props => props.state === 'empty' && `
            width: 150px;
        `}

         ${props => props.state === 'error' && `
            width: 250px;
        `}
    `};

    ${({ theme }) => theme.small`
        ${props => props.state === 'empty' && `
            width: 44.2%;
        `}

         ${props => props.state === 'error' && `
            width: 85%;
        `}
    `};
`

export const Text = styled.p`
    font-size: 1rem;
    color: var(--text1);
    text-align: center;

    ${({ theme }) => theme.tablet`
        font-size: .875rem;
    `};
`;