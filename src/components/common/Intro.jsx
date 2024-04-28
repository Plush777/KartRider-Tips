import styled from "styled-components";

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: var(--main-background);
    z-index: 9999;
`

const Contents = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 100%;
    padding: 0 16px;
    animation: fadeIn 1.5s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #fff;
    }
`

const Video = styled.video`
    width: 100vw;
    height: 100vh;
`

const Intro = () => {
    return (
        <Wrap>
            <Contents>
                <Video autoPlay muted>
                    <source src="/intro.mp4" type="video/mp4" />
                </Video>
            </Contents>
        </Wrap>
    )
}


export default Intro;