import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const VisualWrap = styled.div`
    width: 100%;
    height: 600px;

    ${({ theme }) => theme.tablet`
       height: 380px;
    `}
`
export const StyledSwiper = styled(Swiper)`
    position: relative;
    height: 100%;
`
export const ImgStyle = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;

    ${({ theme }) => theme.tablet`
       height: 380px;
    `}
`