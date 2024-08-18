import styled from "styled-components";

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const PlayerWrap = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    +.lottieText {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }

    &.ranking {
        ${({ theme }) => theme.tablet`
            ${props => props.state === 'loading' && `
                margin-top: -130px;

                +.lottieText {
                    margin-top: 100px;
                }
            `}
        `}

        ${({ theme }) => theme.mobile`
            width: 100%;
            height: auto;
            
            +.lottieText {
                margin-top: 25%;
            }
        `};
    }

    ${props => props.state === 'error' && `
        width: 287px;
        height: 287px;
        margin-top: -160px;

        +.lottieText {
            margin-top: 130px;
        }
    `}

    ${props => props.state === 'loading' && `
        width: 409px;
        height: 307px;
        margin-top: -180px;

        +.lottieText {
            margin-top: 40px;
            bottom: auto;
        }
    `}

    ${props => props.state === 'empty' && `
        height: 60%;
        margin-top: -100px;

        +.lottieText {
            margin-top: 170px;
            bottom: auto;
        }
    `}

    ${({ theme }) => theme.laptop`
        ${props => props.state === 'empty' && `
            height: 50%;
            margin-top: -140px;

            +.lottieText {
                bottom: 100px;
            }
        `}

        &:not(.ranking) {
            ${props => props.state === 'loading' && `
                width: auto;
                height: 100%;
                margin-top: -125px;

                +.lottieText {
                    bottom: 100px;
                }
            `}
        }
    `};

    ${({ theme }) => theme.tablet`
        ${props => props.state === 'empty' && `
            width: 146px;
            height: 166px;
            margin-top: -70px;

            +.lottieText {
               bottom: 25px;
            }
        `}


        &:not(.ranking) {
            ${props => props.state === 'loading' && `
                margin-top: -60px;
                width: 55%;
                height: auto;

                +.lottieText {
                bottom: 20px;
                }
            `}
        }

        ${props => props.state === 'error' && `
            width: 220px;
            height: 220px;
            margin-top: -70px;

            +.lottieText {
               margin-top: 150px;
            }
        `}
    `};

    ${({ theme }) => theme.mobile`
        &:not(.ranking) {
            ${props => props.state === 'loading' && `
                width: 80%;

                +.lottieText {
                    bottom: 30px;
                }
            `}
        }
    `};

    ${({ theme }) => theme.small`
        ${props => props.state === 'empty' && `
            width: 40%;
            height: auto;
        `}

        ${props => props.state === 'error' && `
            width: 70%;
            height: auto;
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