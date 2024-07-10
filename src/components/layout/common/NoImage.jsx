import Image from "next/image";
import styled from "styled-components";

const NoImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 46px 0px;
    border-radius: 4px;
    background-color: var(--background1);
    transition: background-color .3s ease-in-out;

    img {
        filter: grayscale(1);
    }
`

const NoImageText = styled.p`
    font-size: .875rem;
    opacity: .8;
`

export default function NoImage() {
    return (
        <NoImageDiv className="noImageDiv">
            <Image width={86} height={80} src={'/images/emote/kris_emote.png'} alt="No Image" />
            <NoImageText className="noImageText">이미지 준비중이에요</NoImageText>
        </NoImageDiv>
    )
}