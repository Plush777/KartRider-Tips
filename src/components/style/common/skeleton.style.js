import styled from "styled-components";
import mixins from '../mixins';

export const Wrap = styled.div`
    ${mixins.fc}
    ${mixins.whFull}
    border-radius: 4px;
    background-color: #D9D9D9;
    box-shadow: 0px 5px 5px ${({theme}) => theme.colors.rgbaBlack};
    @keyframes skeleton-loading {
        0% {opacity: .3;}
        100% {opacity: .8;}   
    }
    animation: skeleton-loading 1s linear infinite alternate;
`

export const Img = styled.img`
    width: 30%;
    border-radius: inherit;
`