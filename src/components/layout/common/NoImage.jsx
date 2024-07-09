import Image from "next/image";
import styled from "styled-components";

const NoImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: var(--background1);
    transition: background-color .3s ease-in-out;
`

const NoImageText = styled.p`
    font-size: .875rem;
    color: var(--text1);
`

export default function NoImage() {
    return (
        <NoImage className="noImage">
            <Image width={130} height={29} src={'/ico-kart-logo-white.svg'} alt="No Image" />
            <NoImageText>이미지 준비중이에요</NoImageText>
        </NoImage>
    )
}