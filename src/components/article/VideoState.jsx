import styled from "styled-components";

const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const PlayerWrap = styled.div`
    ${props => props.state === 'error' && `
        width: 287px;
        height: 287px;
        margin-bottom: 15%;
    `}

    ${props => props.state === 'loading' && `
        width: 409px;
        height: 307px;
        
        p {
            margin-top: -42px;
        }

        &.item3{
            margin-bottom: auto;
        }
    `}

    ${props => props.state === 'empty' && `
        height: 60%;
    `}
`

const Text = styled.p`
    margin-top: 20px;
    font-size: 1rem;
    color: var(--text);
    text-align: center;

    ${({ theme }) => theme.mobile`
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
                <Text>{emptyText ? emptyText : handleTextCondition(type)}</Text>
            </PlayerWrap>
        </Center>
    )
}

export default VideoState;