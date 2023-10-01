import styled from "styled-components";

/* https://loading.io/css/ */

const Wrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;
`

const Ring = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`

const Item = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--title);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--title) transparent transparent transparent;

    &:nth-child(1){ 
        animation-delay: -0.45s;
    }

    &:nth-child(2){
        animation-delay: -0.3s;
    }

    &:nth-child(3){
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default function LoadingSpinner() {
    return (
        <Wrap>
            <Ring>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </Ring>
        </Wrap>
    )
}