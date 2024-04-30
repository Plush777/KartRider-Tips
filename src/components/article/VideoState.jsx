import styled from "styled-components";

const Center = styled.div`
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

const PlayerWrap = styled.div`
    ${props => props.state === 'error' && `
        width: 287px;
        height: 287px;
        margin: 0 auto;
        transform: translateY(-80px);

        + ${Text} {
            margin-top: -80px;
        }
    `}

    ${props => props.state === 'loading' && `
        width: 409px;
        height: 307px;
        margin: 0 auto;
        transform: translateY(-90px);

        + ${Text} {
            margin-top: -120px;
        }

        &.item3{
            margin-bottom: auto;
        }
    `}

    ${props => props.state === 'empty' && `
        height: 60%;

        @media (max-width: 1200px) {
            height: 55%;
        }
    `}

    ${({ theme }) => theme.laptop`
        ${props => props.state === 'empty' && `
            height: 50%;
        `}

        ${props => props.state === 'loading' && `
            width: auto;
            height: 75%;
            transform: translateY(-40px);

            + ${Text} {
                margin-top: -60px;
                margin-bottom: auto;
            }
        `}
    `};

    ${({ theme }) => theme.tablet`
        ${props => props.state === 'empty' && `
            height: 70%;
        `}

        ${props => props.state === 'loading' && `
            height: 115%;
            transform: translateY(-55px);

            + ${Text} {
                margin-top: -85px;
            }
        `}

        ${props => props.state === 'error' && `
            width: auto;
            height: 100%;
            transform: translateY(-10px);

            + ${Text} {
                margin-top: -10px;
            }
        `}
    `};

    ${({ theme }) => theme.mobile`
        ${props => props.state === 'loading' && `
            height: 100%;
            transform: translateY(-25px);

            + ${Text} {
                margin-top: -50px;
            }
        `}
    `};

    ${({ theme }) => theme.small`
        ${props => props.state === 'empty' && `
            height: 50%;
        `}

        ${props => props.state === 'loading' && `
            height: 95%;
            transform: translateY(-35px);

            + ${Text} {
                margin-top: -55px;
            }
        `}
    `};
`

const Text = styled.p`
    margin-top: 20px;
    font-size: 1rem;
    color: var(--text1);
    text-align: center;

    ${({ theme }) => theme.tablet`
        font-size: .875rem;
    `};
`;

const VideoState = ({ type, emptyText, styleClassName }) => {
    const handleTextCondition = (type) => {
        if (type === 'error') return '데이터를 불러오는데 실패했어요.';
        if (type === 'loading') return '데이터를 불러오는 중이에요...';

        return null;
    }

    const handlePlayerCondition = (type) => {
        if (type === 'error') return 'https://lottie.host/b711b73c-6d8a-4350-a9ae-f2a91792b2e7/SK0CFLnN0m.lottie';
        if (type === 'loading') return 'https://lottie.host/ff36d141-083e-4c29-a56d-4bef4c9d1e84/CBgcAGpUAE.lottie';
        if (type === 'empty') return 'https://lottie.host/83fe92f4-1109-405b-8cc6-637ac5ee4bb1/XqhmKxPBYf.lottie';

        return null;
    }

    return(
        <Center>
            <PlayerWrap state={type} className={styleClassName}>
                <dotlottie-player
                    src={handlePlayerCondition(type)}
                    autoplay
                    loop
                />
            </PlayerWrap>
            <Text>{emptyText ? emptyText : handleTextCondition(type)}</Text>
        </Center>
    )
}

export default VideoState;